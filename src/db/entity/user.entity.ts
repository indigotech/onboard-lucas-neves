import {
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  BaseEntity,
  Connection,
} from "typeorm";

@Entity("user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  birthDate: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

export async function createUser(database: Connection) {
  const user = new User();
  user.name = "Bleh";
  user.email = "bleh@bleh2.com";
  user.password = "bleh@bleh2.com";

  const newUser = await database.manager.save(user);
  console.log("New User has been saved. Name: ", newUser.name);
}
