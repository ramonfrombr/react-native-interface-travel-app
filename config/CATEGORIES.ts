import {TOURS, ITour} from "./TOURS";

interface ICategories {
  id: number;
  title: string;
  tours: ITour[]
}

export const CATEGORIES = [
  {
    id: 1,
    title: "Sights",
    tours: [...TOURS, ...TOURS],
  },
  {
    id: 2,
    title: "Tours",
    tours: [...TOURS, ...TOURS, ...TOURS],
  },
  {
    id: 3,
    title: "Adventures",
    tours: [...TOURS, ...TOURS, ...TOURS, ...TOURS],
  },
];
