import users from "@/data/users.json";

import { User } from "@/types/user.types";

interface RegisterData {
  firstName: string;

  lastName: string;

  email: string;

  password: string;
}

export const authMock = {

  async login(
    email: string,
    password: string,
  ): Promise<User | null> {

    const user =
      users.find(
        (user) =>
          user.email === email &&
          user.password === password
      );

    return user || null;
  },

  async register(
    data: RegisterData,
  ): Promise<User> {

    const newUser: User = {

      id:
        `user_${Date.now()}`,

      firstName:
        data.firstName,

      lastName:
        data.lastName,

      email:
        data.email,

      password:
        data.password,

      role: "owner",

      isVerified: false,

      avatarUrl:
        "https://i.pravatar.cc/300",

      createdAt:
        new Date().toISOString(),

      updatedAt:
        new Date().toISOString(),
    };

    return newUser;
  },

};