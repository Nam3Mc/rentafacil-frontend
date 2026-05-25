import usersData from "@/data/users.json";

import { User } from "@/types/user.types";

const users = usersData as User[];

export const userMock = {
  async getAll(): Promise<User[]> {
    return users;
  },

  async getById(id: string): Promise<User | undefined> {
    return users.find((user) => user.id === id);
  },
};