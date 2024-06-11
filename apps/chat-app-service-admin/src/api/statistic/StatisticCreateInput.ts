import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StatisticCreateInput = {
  group?: GroupWhereUniqueInput | null;
  totalMessages?: number | null;
  user?: UserWhereUniqueInput | null;
};
