import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Channel } from "./Channel";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  age: number;

  @OneToOne(() => Channel, (channel) => channel.user)
  channel: Channel;
}
