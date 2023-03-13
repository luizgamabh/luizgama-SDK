import { LoadQuotes } from "@/domain/usecases";

import faker from "faker";

export const mockLoadQuotes = (): LoadQuotes.Result => ({
  docs: [
    {
      _id: faker.random.uuid(),
      id: faker.random.word(),
      character: faker.name.findName(),
      dialog: faker.name.findName(),
      movie: faker.music.genre(),
    },
    {
      _id: faker.random.uuid(),
      id: faker.random.word(),
      character: faker.name.findName(),
      dialog: faker.name.findName(),
      movie: faker.music.genre(),
    },
    {
      _id: faker.random.uuid(),
      id: faker.random.word(),
      character: faker.name.findName(),
      dialog: faker.name.findName(),
      movie: faker.music.genre(),
    },
  ],
  total: 2,
  limit: 1000,
  offset: 0,
  page: 1,
  pages: 1,
});
