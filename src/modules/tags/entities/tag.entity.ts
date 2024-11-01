import { BaseEntity } from "src/common/base.entity";
import { BoardEntity } from "src/modules/boards/entities/board.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";

@Entity({
    name: "tasks"
})
export class TagEntity extends BaseEntity{
    @Column()
    name: string;

    @ManyToOne(() => BoardEntity)
    @JoinColumn()
    board: BoardEntity;

}
