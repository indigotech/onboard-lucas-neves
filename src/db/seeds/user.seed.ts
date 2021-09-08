import { User } from "../entity/user.entity";
import * as Faker from "faker";
import { Service } from "typedi";
import { Repository } from "typeorm";
import { InjectRepository } from "typeorm-typedi-extensions";

@Service()
export class UserSeed {
  constructor(
    @InjectRepository(User)
    private readonly dbOrmRepository: Repository<User>
  ) {}

  async seed() {
    const users: User[] = [];

    for (let i = 0; i < 10; i++) {
      const fakeUser = new User();
      fakeUser.name = Faker.name.findName();
      fakeUser.email = Faker.internet.email();

      users.push(fakeUser);
    }

    await this.dbOrmRepository.save(users);
  }
}
