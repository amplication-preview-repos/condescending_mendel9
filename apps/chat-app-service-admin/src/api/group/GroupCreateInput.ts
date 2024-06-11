import { PollCreateNestedManyWithoutGroupsInput } from "./PollCreateNestedManyWithoutGroupsInput";
import { StatisticCreateNestedManyWithoutGroupsInput } from "./StatisticCreateNestedManyWithoutGroupsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GroupCreateInput = {
  description?: string | null;
  name?: string | null;
  polls?: PollCreateNestedManyWithoutGroupsInput;
  statistics?: StatisticCreateNestedManyWithoutGroupsInput;
  user?: UserWhereUniqueInput | null;
};
