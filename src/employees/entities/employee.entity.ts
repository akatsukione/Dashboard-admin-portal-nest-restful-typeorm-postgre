import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
// import * as bcrypt from 'bcrypt';

// Pre-hashed value of "qwe123!@#" with salt round 10
const DEFAULT_HASHED_PASSWORD =
  '$2b$10$9yKGkfzEZLmxU3Dy9CWqR.xjeHD/Ij9p5LasC3WuBm0RGdEfIHovi';

@Entity()
export class Employee {
  // Define the primary key
  @PrimaryGeneratedColumn('increment')
  id: number;

  // Define the name column
  @Column()
  name: string;

  // Define the email column
  @Column()
  email: string;

  // Define the location column
  @Column()
  location: string;

  @Column({
    // The select is false means that the password will not be returned in the response
    // the true means that the password will be returned in the response
    select: true,
    default: DEFAULT_HASHED_PASSWORD,
  })
  password: string;

  // @BeforeInsert()
  // async hashPassword() {
  //   if (this.password !== DEFAULT_HASHED_PASSWORD) {
  //     const salt = await bcrypt.genSalt();
  //     this.password = await bcrypt.hash(this.password, salt);
  //   }
  // }

  // async validatePassword(password: string): Promise<boolean> {
  //   return bcrypt.compare(password, this.password);
  // }
}
