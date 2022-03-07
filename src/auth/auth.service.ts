import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthCredtentialDTO } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { emitKeypressEvents } from 'readline';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private _userRepository: UserRepository,
  ) {}

  async signUp(createAuthDto: AuthCredtentialDTO): Promise<void> {
    return this._userRepository.createUser(createAuthDto);
  }

  async signIn(createAuthDto: AuthCredtentialDTO): Promise<string> {
    const { username, password } = createAuthDto;

    const user = await this._userRepository.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      return 'success';
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }

  // findAll() {
  //   return `This action returns all auth`;
  // }
  //
  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }
  //
  // update(id: number) {
  //   return `This action updates a #${id} auth`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
