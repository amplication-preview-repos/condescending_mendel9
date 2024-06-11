import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StatisticUpdateInput = {
  group?: GroupWhereUniqueInput | null;
  totalMessages?: number | null;
  user?: UserWhereUniqueInput | null;
};
