import { createServer } from "http";
import { Server } from "socket.io";
import initKnex from "knex";
import configuration from "./knexfile.js";
import express from 'express';
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import cors from "cors";
import multer from "multer";
import vinylRoutes from "./routes/vinylRecords.js";
import showsRoutes from "./routes/shows.js";
import messagesRoute from "./routes/messages.js";
import userRoutes from "./routes/users.js";
import postsRouter from "./routes/posts.js";
import commentsRoute from "./routes/comments.js";
import friendsRoutes from "./routes/friends.js";
import homepageVinylsRouter from "./routes/homepageVinylsRouter.js";
import followersRoutes from "./routes/userFollowers.js";
dotenv.config();

const upload = multer({ dest: "assets/"});
const knex = initKnex(configuration);
const app = express()
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  }
});

const PORT = 3306;

/*
* Middleware
*/
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/homepage-vinyls", homepageVinylsRouter);
app.use("/users", userRoutes);
app.use("/vinyls", vinylRoutes);
app.use("/shows", showsRoutes);
app.use("/messages", messagesRoute(io));
app.use("/posts", postsRouter);
app.use("/posts/", commentsRoute);
app.use("/friends", friendsRoutes);
app.use(followersRoutes);
app.use('/assets', express.static('assets'));


/*
* Socket.IO setup
*/

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("send_message", (message) => {
    console.log("New message received:", message);

    io.emit("receive_message", message);
  });

   socket.on("typing", ({ senderId, receiverId }) => {
    console.log(`User ${senderId} is typing to ${receiverId}`);
    
    io.emit("typing", { senderId, receiverId });
  });

  socket.on("stopTyping", ({ senderId, receiverId }) => {
    console.log(`User ${senderId} stopped typing to ${receiverId}`);

    io.emit("stopTyping", { senderId, receiverId });
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});


/*
* images
*/

app.get("./assets/:image", (req, res) => {

    const imageName =req.params.imageName;
    const readStream = createReadStream(`assets/${imageName}`);
    readStream.pipe(res);
});

app.post("./posts/assets", upload.single("image", (req, res) => {
    const imageName = req.file.filename;
    const content = req.body.content;

    console.log(content,imageName);
    return res.send({ content, imageName});
}))

/*
* Home Route
*/

app.get("/", (req, res) => {
    res.send("Welcome to Vinilo Capstone!")
})

/*
* User Route
*/

app.get("/user", verifyToken, async (req, res) => {
    try {
        const user = await knex("Users").where({ userId: req.userId }).first();
        if (!user) return res.status(404).json({ message: "User not found" });

        const { hashedPassword, ...userData } = user;
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user data", error });
    }
});

/*
* User/Posts Route
*/

app.get("/users/posts", verifyToken, async (req, res) => {
    try {
        const posts = await knex("Posts").where({ userId: req.userId });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Error fetching posts", error });
    }
});


/*
* Login Route
*/

app.post("/login", async (req, res) => {
    const { email, password } = req.body; 
    
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }
  
    try {
      console.log("Login Attempt:", { email, password });
  
      const user = await knex("Users").where({ email }).first();
      if (!user) {
        console.log("User not found for email:", email); 
        return res.status(404).json({ message: "User not found" });
      }
  
      const isMatch = await bcrypt.compare(password, user.hashedPassword);
      if (!isMatch) {
        console.log("Password mismatch for email:", email); 
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      console.log("Generated Token:", token); 
  
      const { hashedPassword, ...userData } = user; 
      res.status(200).json({
        success: true,
        message: "Login successful",
        token,
        user: userData,
      });
    } catch (error) {
      console.error("Error in /login endpoint:", error); 
      res.status(500).json({ message: "Error logging in", error });
    }
  });
  


  function verifyToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    console.log("Authorization Header:", authHeader);
    if (!authHeader) return res.status(403).json({ message: "No token provided" });

    const token = authHeader.split(" ")[1];
    if (!token) return res.status(403).json({ message: "Malformed token" });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(500).json({ message: "Failed to authenticate token" });
        req.userId = decoded.userId; 
        next();
    });
}

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});