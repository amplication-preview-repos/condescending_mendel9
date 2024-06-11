import { PollUpdateManyWithoutGroupsInput } from "./PollUpdateManyWithoutGroupsInput";
import { StatisticUpdateManyWithoutGroupsInput } from "./StatisticUpdateManyWithoutGroupsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GroupUpdateInput = {
  description?: string | null;
  name?: string | null;
  polls?: PollUpdateManyWithoutGroupsInput;
  statistics?: StatisticUpdateManyWithoutGroupsInput;
  user?: UserWhereUniqueInput | null;
};
