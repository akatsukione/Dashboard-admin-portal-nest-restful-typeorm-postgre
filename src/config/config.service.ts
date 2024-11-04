import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import * as dotenv from 'dotenv';
import { Employee } from 'src/employees/entities/employee.entity';
dotenv.config();

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, false));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('Mode', false);
    return mode != 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      url: this.getValue('POSTGRES_URL'),

      entities: [Employee],

      synchronize: true,
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'POSTGRES_URL',
]);

export { configService };
