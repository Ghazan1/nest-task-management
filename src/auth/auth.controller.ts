import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredtentialDTO } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  create(@Body() createAuthDto: AuthCredtentialDTO) {
    return this.authService.signUp(createAuthDto);
  }
  @Post('/signin')
  signIn(@Body() createAuthDto: AuthCredtentialDTO) {
    return this.authService.signIn(createAuthDto);
  }
  // @Get()
  // findAll() {
  //   return this.authService.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  //   @Patch(':id')
  //   update(@Param('id') id: string, @Body()  {
  //
  //   }
  //
  //   @Delete(':id')
  //   remove(@Param('id') id: string) {
  //     return this.authService.remove(+id);
  //   }
  // }
}
