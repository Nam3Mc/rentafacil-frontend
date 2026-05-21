import { recommendationMock } from "@/services/mocks/recommendation.mock";

export const recommendationService = {

  async getAll() {
    return recommendationMock.getAll();
  },

};