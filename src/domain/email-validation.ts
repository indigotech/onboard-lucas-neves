import { User } from "@db/entity";

export async function emailValidation(value: string): Promise<boolean> {
  const user = await User.findOne({ email: value });
  return user !== undefined;
}
