import { GroupCreateNestedManyWithoutUsersInput } from "./GroupCreateNestedManyWithoutUsersInput";
import { MessageCreateNestedManyWithoutUsersInput } from "./MessageCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StatisticCreateNestedManyWithoutUsersInput } from "./StatisticCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  groups?: GroupCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  messages?: MessageCreateNestedManyWithoutUsersInput;
  password: string;
  role?: "Option1" | null;
  roles: InputJsonValue;
  statistics?: StatisticCreateNestedManyWithoutUsersInput;
  username: string;
};
