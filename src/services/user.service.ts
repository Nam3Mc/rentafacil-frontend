import { userMock } from "@/services/mocks/user.mock";

export const userService = {
  async getAll() {
    return userMock.getAll();
  },

  async getById(id: string) {
    return userMock.getById(id);
  },
};