import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // Inject the AppService
  constructor(private readonly appService: AppService) {}

  // Define the root route
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
