import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  Matches,
} from 'class-validator';
import { Match } from '../../common/decorators/match.decorator';
export class BaseEmployeeDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the employee',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name?: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'The email of the employee',
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'New York',
    description: 'The location of the employee',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({
    example: 'strongPassword123',
    description: 'Password for the employee account (will be hashed)',
    required: true,
    minLength: 6,
  })
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @Match('password', { message: 'Passwords do not match' })
  confirmPassword?: string;
}
