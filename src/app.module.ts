import { Module } from '@nestjs/common';

import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthEntity } from './modules/auth/entities/auth.entity';
import { UserEntity } from './modules/user/entities/user.entity';

import { SpacesModule } from './modules/spaces/spaces.module';
import { BoardsModule } from './modules/boards/boards.module';
import { TagsModule } from './modules/tags/tags.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { ColunmsModule } from './modules/colunms/colunms.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CommentsModule } from './comments/comments.module';

import typeorm from './config/database.config';
@Module({
    imports: [
        AuthModule,
        UserModule,
        ConfigModule.forRoot({
            isGlobal: true,
            load: [typeorm],
        }),
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) =>
                configService.get('typeorm'),
        }),
        SpacesModule,
        BoardsModule,
        TagsModule,
        TasksModule,
        ColunmsModule,
        CommentsModule,
    ],
})
export class AppModule {}
