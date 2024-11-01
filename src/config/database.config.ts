import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigFactory, registerAs } from '@nestjs/config';
import { AuthEntity } from 'src/modules/auth/entities/auth.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { SpaceEntity } from 'src/modules/spaces/entities/space.entity';
import { BoardEntity } from 'src/modules/boards/entities/board.entity';
import { TagEntity } from 'src/modules/tags/entities/tag.entity';
import { TaskEntity } from 'src/modules/tasks/entities/task.entity';
import { ColunmEntity } from 'src/modules/colunms/entities/colunm.entity';
import { CommentEntity } from 'src/comments/entities/comment.entity';

const config = {
    type: 'mysql',
    host: 'localhost',
    port: 3309,
    username: 'root',
    password: 'nguyen123',
    database: 'trello',
    entities: [
        AuthEntity,
        UserEntity,
        SpaceEntity,
        BoardEntity,
        TagEntity,
        TaskEntity,
        ColunmEntity,
        CommentEntity,
    ],
    migrations: ['src/migrations/*.ts'],
    synchronize: true,
    logging: true,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
