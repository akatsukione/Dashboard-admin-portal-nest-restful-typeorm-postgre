import { IsDate } from 'class-validator';
import { BaseEmployeeDto } from './base-employee.dto';

export class CreateEmployeeDto extends BaseEmployeeDto {
  @IsDate()
  createdAt: Date;
}
