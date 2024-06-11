import { SortOrder } from "../../util/SortOrder";

export type StatisticOrderByInput = {
  createdAt?: SortOrder;
  groupId?: SortOrder;
  id?: SortOrder;
  totalMessages?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
