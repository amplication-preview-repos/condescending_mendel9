import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PollListRelationFilter } from "../poll/PollListRelationFilter";
import { StatisticListRelationFilter } from "../statistic/StatisticListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GroupWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  polls?: PollListRelationFilter;
  statistics?: StatisticListRelationFilter;
  user?: UserWhereUniqueInput;
};
