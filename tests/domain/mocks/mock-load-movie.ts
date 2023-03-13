import { LoadMovie } from "@/domain/usecases";

import faker from "faker";

export const mockLoadMovie = (): LoadMovie.Result => ({
  docs: [
    {
      _id: faker.random.uuid(),
      name: faker.name.findName(),
      academyAwardNominations: faker.random.number(),
      academyAwardWins: faker.random.number(),
      boxOfficeRevenueInMillions: faker.random.number(),
      budgetInMillions: faker.random.number(),
      rottenTomatoesScore: faker.random.number(),
      runtimeInMinutes: faker.random.number(),
    }
  ],
  total: 1,
  limit: 1000,
  offset: 0,
  page: 1,
  pages: 1,
});
