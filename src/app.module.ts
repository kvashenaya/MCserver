import { Module, NestModule, MiddlewareConsumer, RequestMethod  } from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import { DeadsModule } from './deads/dead.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/post.module';
import { ItemsModule } from './items/item.module';
import entities from './typeorm';

import { IpLimiterMiddleware } from './middleware/iprestrainer';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    PostsModule,
    DeadsModule,
    ItemsModule,
  ],
  controllers: [],
  providers: [],
}) 
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(IpLimiterMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}