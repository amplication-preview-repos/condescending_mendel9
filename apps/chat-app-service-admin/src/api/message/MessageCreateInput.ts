import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageCreateInput = {
  content?: string | null;
  mediaType?: "Option1" | null;
  status?: "Option1" | null;
  timestamp?: Date | null;
  user?: UserWhereUniqueInput | null;
};
