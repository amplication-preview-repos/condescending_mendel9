import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StatisticWhereInput = {
  group?: GroupWhereUniqueInput;
  id?: StringFilter;
  totalMessages?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
