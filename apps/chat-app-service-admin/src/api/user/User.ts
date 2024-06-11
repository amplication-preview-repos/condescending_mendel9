import { Group } from "../group/Group";
import { Message } from "../message/Message";
import { JsonValue } from "type-fest";
import { Statistic } from "../statistic/Statistic";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  groups?: Array<Group>;
  id: string;
  lastName: string | null;
  messages?: Array<Message>;
  role?: "Option1" | null;
  roles: JsonValue;
  statistics?: Array<Statistic>;
  updatedAt: Date;
  username: string;
};
