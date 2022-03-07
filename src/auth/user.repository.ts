import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { AuthCredtentialDTO } from './dto/user.dto';
import * as bcrypt from 'bcrypt';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async createUser(authDTO: AuthCredtentialDTO): Promise<void> {
    const { username, password } = authDTO;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      const user = this.create({ username, password: hashedPassword });
      await this.save(user);
    } catch (error) {
      if (error.code === 23505) {
        console.log('Username Already Exist');
      }
      console.log(error.message());
    }
  }
}
