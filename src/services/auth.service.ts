import { authMock } from "@/services/mocks/auth.mock";

export const authService = {

  async login(
    email: string,
    password: string,
  ) {

    return authMock.login(
      email,
      password,
    );
  },

  async register(data: {
    firstName: string;

    lastName: string;

    email: string;

    password: string;
  }) {

    return authMock.register(
      data
    );
  },

};