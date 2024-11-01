import { BaseEntity } from 'src/common/base.entity';
import { ColunmEntity } from 'src/modules/colunms/entities/colunm.entity';
import { SpaceEntity } from 'src/modules/spaces/entities/space.entity';
import { TagEntity } from 'src/modules/tags/entities/tag.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@Entity({
    name: 'boards',
})
export class BoardEntity extends BaseEntity {
    @Column()
    name: string;

    @ManyToOne(() => SpaceEntity)
    @JoinColumn()
    space: SpaceEntity;

    @OneToMany(() => TagEntity, (tag) => tag.board)
    tags: TagEntity[];

    @OneToMany(() => ColunmEntity, (colunm) => colunm.board)
    columns: ColunmEntity[];
}
