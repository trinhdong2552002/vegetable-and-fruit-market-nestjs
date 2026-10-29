import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    const { email, password, name, role } = createUserDto;

    const isEmailExist = await this.userRepository.findOne({
      where: { email },
    });
    if (isEmailExist) {
      throw new BadRequestException('This email address is already in use!');
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = this.userRepository.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    return await this.userRepository.save(newUser);
  }
}
