import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserRole } from '../enum/user-role.enum';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // Not allowed two accounts with the same email address.
  @Column({ unique: true })
  email: string;

  // Automatically hide passwords to prevent them from being leaked. when the frontend - postman requested.
  @Column({ select: false })
  password: string;

  @Column()
  name: string;

  // Not required during register or login
  @Column({ nullable: true })
  gender: string;

  @Column({ type: 'date', nullable: true })
  dob: Date;

  @Column({ nullable: true, default: 'https://placeholder.com/avatar.png' })
  avatarUrl: string;

  // Always create account default with role USER. Because the PostgreSQL didn't know where roles is come from it maybe set NULL it didn't know.
  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole;

  @Column({ default: true })
  isActive: true;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
