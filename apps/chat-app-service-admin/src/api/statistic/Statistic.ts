import { Group } from "../group/Group";
import { User } from "../user/User";

export type Statistic = {
  createdAt: Date;
  group?: Group | null;
  id: string;
  totalMessages: number | null;
  updatedAt: Date;
  user?: User | null;
};
