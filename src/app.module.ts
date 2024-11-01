import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
