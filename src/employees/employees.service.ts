import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeDto } from './dto/create-employee';
import { UpdateEmployeeDto } from './dto/update-employee';

// Adding @Injectable() to tell Nestjs that this is a service
@Injectable()
export class EmployeesService {
  constructor(
    //Adding @InjectRepository(Employee) to tell NestJS that we want to inject the repository of the Employee entity
    // Repository<Employee> tells NestJS that we want to inject the repository of the Employee entity
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  //find all employees
  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  //find employee by id
  async findOne(id: number): Promise<Employee> {
    return this.employeeRepository.findOne({ where: { id } });
  }

  //create employee
  async create(employee: CreateEmployeeDto): Promise<Employee> {
    return this.employeeRepository.save(employee);
  }

  //update employee
  async update(id: number, employee: UpdateEmployeeDto): Promise<Employee> {
    await this.employeeRepository.update(id, employee);
    return this.employeeRepository.findOne({ where: { id } });
  }

  //delete employee
  async delete(id: number): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
