import { Poll } from "../poll/Poll";
import { Statistic } from "../statistic/Statistic";
import { User } from "../user/User";

export type Group = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  polls?: Array<Poll>;
  statistics?: Array<Statistic>;
  updatedAt: Date;
  user?: User | null;
};
