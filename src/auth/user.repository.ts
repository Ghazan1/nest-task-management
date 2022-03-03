import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { AuthCredtentialDTO } from './dto/user.dto';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async createUser(authDTO: AuthCredtentialDTO): Promise<void> {
    const { username, password } = authDTO;

    const user = this.create({ username, password });
    await this.save(user);
  }
}
