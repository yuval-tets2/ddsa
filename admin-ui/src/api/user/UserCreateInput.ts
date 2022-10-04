import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  newfield?: Array<"Vxcvxc" | "Vcxv">;
  password: string;
  roles: InputJsonValue;
  username: string;
};
