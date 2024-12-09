import { Injectable, NestMiddleware, ConflictException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../entities/employee.entity';

@Injectable()
export class CheckDuplicateEmailMiddleware implements NestMiddleware {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const email = req.body.email;

    if (!email) {
      return next();
    }

    let query = {
      where: { email },
    };

    // If it's an update operation (PUT/PATCH), exclude the current employee
    if (req.params.id) {
      query = {
        where: {
          email,
        },
      };
    }

    const existingEmployee = await this.employeeRepository.findOne(query);

    if (existingEmployee) {
      throw new ConflictException('Email already exists');
    }

    next();
  }
}
