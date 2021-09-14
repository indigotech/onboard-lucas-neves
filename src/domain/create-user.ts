import { User } from "@db/entity";
import * as bcrypt from "bcrypt";

export async function createUser(data: User): Promise<User> {
  const password = await bcrypt.hash(data.password, 12);
  const newUser = User.create({ ...data, password });
  await newUser.save();
  console.log("New User has been saved. Id: ", newUser.id);
  return newUser;
}
