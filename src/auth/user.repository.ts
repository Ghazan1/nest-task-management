import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { AuthCredtentialDTO } from './dto/user.dto';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async createUser(authDTO: AuthCredtentialDTO): Promise<void> {
    const { username, password } = authDTO;
    try {
      const user = this.create({ username, password });
      await this.save(user);
    } catch (error) {
      if (error.code === 23505) {
        console.log('Username Already Exist');
      }
      console.log(error.message());
    }
  }
}
