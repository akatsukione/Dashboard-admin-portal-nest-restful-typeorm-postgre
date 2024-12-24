import { IsDate } from 'class-validator';
import { BaseEmployeeDto } from './base-employee.dto';

export class UpdateEmployeeDto extends BaseEmployeeDto {
  @IsDate()
  updatedAt: Date;
}
