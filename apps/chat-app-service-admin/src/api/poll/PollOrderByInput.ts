import { SortOrder } from "../../util/SortOrder";

export type PollOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  groupId?: SortOrder;
  id?: SortOrder;
  options?: SortOrder;
  question?: SortOrder;
  updatedAt?: SortOrder;
};
