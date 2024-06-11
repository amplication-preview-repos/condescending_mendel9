import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PollWhereInput = {
  createdBy?: StringNullableFilter;
  group?: GroupWhereUniqueInput;
  id?: StringFilter;
  options?: JsonFilter;
  question?: StringNullableFilter;
};
