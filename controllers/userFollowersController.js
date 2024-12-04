import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export const getFollowersAndFollowing = async (userId) => {
  try {
    const followersCount = await knex("UserFollowers")
      .where("followedId", userId)
      .count("followerId as count");

    const followingCount = await knex("UserFollowers")
      .where("followerId", userId)
      .count("followedId as count");

    return {
      followers: followersCount[0].count,
      following: followingCount[0].count,
    };
  } catch (error) {
    throw new Error("Error fetching followers and following counts");
  }
};
