import { BaseEntity } from 'src/common/base.entity';
import { BoardEntity } from 'src/modules/boards/entities/board.entity';
import { SpaceEntity } from 'src/modules/spaces/entities/space.entity';
import { TaskEntity } from 'src/modules/tasks/entities/task.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@Entity({
    name: 'colunms',
})
export class ColunmEntity extends BaseEntity {
    @Column()
    name: string;

    @OneToMany(() => TaskEntity, (task) => task.column)
    tasks: TaskEntity[];

    @ManyToOne(() => BoardEntity)
    @JoinColumn({
        name: 'board_id',
    })
    board: BoardEntity;
}
