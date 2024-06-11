import { User } from "../user/User";

export type Message = {
  content: string | null;
  createdAt: Date;
  id: string;
  mediaType?: "Option1" | null;
  status?: "Option1" | null;
  timestamp: Date | null;
  updatedAt: Date;
  user?: User | null;
};
