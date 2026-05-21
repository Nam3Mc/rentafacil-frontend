import recommendations from "@/data/recommendations.json";

import { Recommendation } from "@/types/recommendation.types";

export const recommendationMock = {

  async getAll():
    Promise<Recommendation[]> {

    return recommendations;
  },

};