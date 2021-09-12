//import { Connection } from "typeorm";
import { User } from "../db/entity";

export async function createUser(data: User) {
  const newUser = User.create(data);
  //const newUser = await database.manager.save(user);
  await newUser.save();
  console.log("New User has been saved. Id: ", newUser.id);
  return newUser;
}
