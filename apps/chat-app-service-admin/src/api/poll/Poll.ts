import { Group } from "../group/Group";
import { JsonValue } from "type-fest";

export type Poll = {
  createdAt: Date;
  createdBy: string | null;
  group?: Group | null;
  id: string;
  options: JsonValue;
  question: string | null;
  updatedAt: Date;
};
