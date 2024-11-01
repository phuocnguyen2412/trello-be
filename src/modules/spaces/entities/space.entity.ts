import { BaseEntity } from 'src/common/base.entity';
import { BoardEntity } from 'src/modules/boards/entities/board.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

export enum SpaceRole {
    'onwer',
    'admin',
    'collaborator',
}
@Entity({
    name: 'spaces',
})
export class SpaceEntity extends BaseEntity {
    @Column()
    name: string;

    @Column()
    role: string;

    @OneToMany(() => BoardEntity, (board) => board.space, {
        onDelete: 'CASCADE',
        eager: true,
    })
    boards: BoardEntity[];
}
