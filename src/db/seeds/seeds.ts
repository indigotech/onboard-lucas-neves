import { Service } from "typedi";
import { UserSeed } from "./user.seed";

@Service()
export class Seeds {
  constructor(private readonly userSeed: UserSeed) {}

  public async run() {
    await this.userSeed.seed();
  }
}
