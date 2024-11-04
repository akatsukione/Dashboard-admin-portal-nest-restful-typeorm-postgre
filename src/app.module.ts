import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
@Module({
  // Import the EmployeesModule
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    EmployeesModule,
  ],
  // Define the controllers
  controllers: [AppController],
  // Define the providers
  providers: [AppService],
})
export class AppModule {}
