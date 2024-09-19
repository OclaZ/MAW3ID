"use server";

import { Query } from "node-appwrite";
import { ID } from "node-appwrite";
import { parseStringify } from "../utils";
import { users } from "../appwrite.config";

export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );
    return parseStringify({ newUser });
  } catch (error: any) {
    if (error && error?.code === 409) {
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);

      // Add null check before accessing users array
      return existingUser.users?.[0] ?? null;
    }
    console.error("An error occurred while creating a new user:", error);
  }
};

export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);
    return parseStringify({ user });
  } catch (error) {
    console.log(error);
  }
};
