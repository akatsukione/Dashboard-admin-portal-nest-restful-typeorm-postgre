import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Not } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

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
  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    // Hash the password before saving
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createEmployeeDto.password, salt);
    const createdAt = new Date();
    // Create new employee with hashed password
    const employee = this.employeeRepository.create({
      ...createEmployeeDto,
      password: hashedPassword,
      createdAt,
    });

    return this.employeeRepository.save(employee);
  }

  //update employee
  async update(
    id: number,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    // Handle password update if needed
    if (updateEmployeeDto.password) {
      const salt = await bcrypt.genSalt();
      updateEmployeeDto.password = await bcrypt.hash(
        updateEmployeeDto.password,
        salt,
      );
    }
    const updatedAt = new Date();
    await this.employeeRepository.update(id, {
      ...updateEmployeeDto,
      updatedAt,
    });
    return this.employeeRepository.findOne({ where: { id } });
  }

  //delete employee
  async delete(id: number): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
