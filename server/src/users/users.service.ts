import { Injectable } from "@nestjs/common";
import { User } from "../types/user";

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 1,
      username: "blue",
      password: "1234!@#$",
      userInfo: {
        name: "blueStragglr",
      },
    },
    {
      userId: 2,
      username: "white",
      password: "1234!@#$",
      userInfo: {
        name: "whiteDwarf",
      },
    },
    {
      userId: 3,
      username: "red",
      password: "1234!@#$",
      userInfo: {
        name: "redGiant",
      },
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
