import { BaseEntity } from 'src/common/base.entity';
import { TaskEntity } from 'src/modules/tasks/entities/task.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({
    name: 'comments',
})
export class CommentEntity extends BaseEntity {
    @ManyToOne(() => TaskEntity, { onDelete: 'CASCADE' })
    @JoinColumn()
    task: TaskEntity;

    @Column()
    content: string;
}
