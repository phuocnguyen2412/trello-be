import { UserEntity } from 'src/modules/user/entities/user.entity';
import {
    Column,
    CreateDateColumn,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({ type: 'boolean', default: false })
    isDeleted: boolean;

    @ManyToOne(() => UserEntity, { eager: true, onDelete: 'NO ACTION' })
    @JoinColumn()
    createdBy: UserEntity;
}
