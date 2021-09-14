import { User } from "@db/entity";

const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export async function emailValidation(value: string): Promise<boolean> {
  if (!emailRegexp.test(value)) {
    return true;
  }

  const user = await User.findOne({ email: value });
  return user !== undefined;
}
