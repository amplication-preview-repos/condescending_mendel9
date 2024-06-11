import { GroupUpdateManyWithoutUsersInput } from "./GroupUpdateManyWithoutUsersInput";
import { MessageUpdateManyWithoutUsersInput } from "./MessageUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StatisticUpdateManyWithoutUsersInput } from "./StatisticUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  groups?: GroupUpdateManyWithoutUsersInput;
  lastName?: string | null;
  messages?: MessageUpdateManyWithoutUsersInput;
  password?: string;
  role?: "Option1" | null;
  roles?: InputJsonValue;
  statistics?: StatisticUpdateManyWithoutUsersInput;
  username?: string;
};
