import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type PollCreateInput = {
  createdBy?: string | null;
  group?: GroupWhereUniqueInput | null;
  options?: InputJsonValue;
  question?: string | null;
};
