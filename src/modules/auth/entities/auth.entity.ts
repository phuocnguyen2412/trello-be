import { BaseEntity } from 'src/common/base.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({
    name: 'accounts',
})
export class AuthEntity extends BaseEntity {
    @Column()
    password: string;

    @Column()
    otp: string;

    @Column()
    otpExp: Date;

    @Column({
        type: 'integer',
        default: 5,
    })
    otpWrongCount: number;

    @Column({
        type: 'boolean',
        default: false,
    })
    isActive: boolean;

    @Column()
    lockExp: Date;
}
