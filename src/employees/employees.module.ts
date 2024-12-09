import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { CheckDuplicateEmailMiddleware } from './middleware/check-duplicate-email.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckDuplicateEmailMiddleware)
      .forRoutes(
        { path: 'employees', method: RequestMethod.POST },
        { path: 'employees/:id', method: RequestMethod.PUT },
        { path: 'employees/:id', method: RequestMethod.PATCH },
      );
  }
}
