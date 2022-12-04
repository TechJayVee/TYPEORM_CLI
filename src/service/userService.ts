import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

class UserService {
  async register(
    firstName: string,
    email: string,
    lastName: string,
    age: number
  ) {
    const userRepo = AppDataSource.getRepository(User);
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    return userRepo.save(user);
  }
}

export default new UserService();
