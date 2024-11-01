import { CommentEntity } from 'src/comments/entities/comment.entity';
import { BaseEntity } from 'src/common/base.entity';
import { ColunmEntity } from 'src/modules/colunms/entities/colunm.entity';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
} from 'typeorm';

@Entity({
    name: 'tasks',
})
export class TaskEntity extends BaseEntity {
    @Column()
    title: string;

    @Column()
    description: string;

    @ManyToOne(() => ColunmEntity, { onDelete: 'NO ACTION' })
    @JoinColumn({
        name: 'columnId',
    })
    column: ColunmEntity;

    @OneToMany(() => CommentEntity, (comment) => comment.task, {
        onDelete: 'NO ACTION',
    })
    comments: CommentEntity[];
}
