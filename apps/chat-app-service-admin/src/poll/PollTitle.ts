import { Poll as TPoll } from "../api/poll/Poll";

export const POLL_TITLE_FIELD = "createdBy";

export const PollTitle = (record: TPoll): string => {
  return record.createdBy?.toString() || String(record.id);
};
