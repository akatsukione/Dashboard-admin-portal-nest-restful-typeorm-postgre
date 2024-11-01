import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

// Adding @Injectable() to tell Nestjs that this is a service
@Injectable()
export class EmployeesService {
  constructor(
    //Adding @InjectRepository(Employee) to tell NestJS that we want to inject the repository of the Employee entity
    // Repository<Employee> tells NestJS that we want to inject the repository of the Employee entity
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  async findOne(id: number): Promise<Employee> {
    return this.employeeRepository.findOne({ where: { id } });
  }

  async create(employee: Partial<Employee>): Promise<Employee> {
    const newEmployee = this.employeeRepository.create(employee);
    return this.employeeRepository.save(newEmployee);
  }

  async update(id: number, employee: Partial<Employee>): Promise<Employee> {
    await this.employeeRepository.update(id, employee);
    return this.employeeRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
