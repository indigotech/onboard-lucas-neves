import { User } from "@db/entity";

export async function createUser(data: User): Promise<User> {
  const newUser = User.create(data);
  await newUser.save();
  console.log("New User has been saved. Id: ", newUser.id);
  return newUser;
}
