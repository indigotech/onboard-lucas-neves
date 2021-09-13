import { User } from "@db/entity";

export async function emailValidation(value: string): Promise<boolean> {
  const user = await User.findOne({ email: value });
  const emailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  return user !== undefined || !emailRegexp.test(value);
}
