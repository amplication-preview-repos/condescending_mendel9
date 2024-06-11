import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  mediaType?: "Option1";
  status?: "Option1";
  timestamp?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
