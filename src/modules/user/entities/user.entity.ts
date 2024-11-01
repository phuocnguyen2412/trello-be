import { AuthEntity } from 'src/modules/auth/entities/auth.entity';
import { BaseEntity } from 'src/common/base.entity';

import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
    name: 'users',
})
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 255,
        nullable: false,
    })
    fullname: string;

    @Column({
        unique: true,
        type: 'varchar',
        length: 255,
    })
    email: string;
}
