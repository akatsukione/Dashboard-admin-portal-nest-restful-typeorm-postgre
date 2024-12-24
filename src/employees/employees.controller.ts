import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

//this means the route is "employees"
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  //get all emplyees
  @Get()
  async findAll(): Promise<Employee[]> {
    //find all employees
    return this.employeesService.findAll();
  }

  //get employee by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Employee> {
    //find employee by id
    const employee = await this.employeesService.findOne(id);

    //if employee does not exist, throw an error
    if (!employee) {
      throw new NotFoundException('Employee does not exist');
    } else {
      return employee;
    }
  }

  //create employee
  @Post()
  async create(@Body() employee: CreateEmployeeDto): Promise<Employee> {
    return this.employeesService.create(employee);
  }

  // update employee
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() employee: UpdateEmployeeDto,
  ): Promise<any> {
    return this.employeesService.update(id, employee);
  }

  //delete employee
  @Delete(':id')
  async delete(@Param(':id') id: number): Promise<any> {
    //handle error if user does not exist
    const employee = await this.employeesService.findOne(id);
    //if employee does not exist, throw an error
    if (!employee) {
      throw new NotFoundException('Employee dose not exist!');
    }
    //if employee exists, delete it
    return this.employeesService.delete(id);
  }
}
