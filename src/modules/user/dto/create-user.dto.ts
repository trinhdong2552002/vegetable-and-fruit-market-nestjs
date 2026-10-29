// import { IsNotEmpty, IsString } from 'class-validator';

import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { UserRole } from '../enum/user-role.enum';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name cannot be empty.' })
  @IsString()
  name: string;

  @IsNotEmpty({ message: 'Email cannot be empty.' })
  @IsString({ message: 'The email must be a string of characters.' })
  @IsEmail(
    {},
    {
      message: 'The email is not in the correct format.',
    },
  )
  email: string;

  @IsNotEmpty({ message: 'The password cannot be empty.' })
  @IsString({ message: 'The password must be a string of characters.' })
  @MinLength(6, { message: 'The password must have at least 6 characters.' })
  password: string;

  @IsEnum(UserRole, { message: 'Role không hợp lệ' })
  @IsOptional()
  role?: UserRole;
}
