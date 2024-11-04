import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
