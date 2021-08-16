import {Module} from '@nestjs/common';
import {ConfigModule, ConfigType} from '@nestjs/config';
import {GraphQLModule} from '@nestjs/graphql';

import {GraphQLConfig} from './graphql/graphql.config';
import {UsersModule} from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      imports: [ConfigModule.forFeature(GraphQLConfig)],
      inject: [GraphQLConfig.KEY],
      useFactory: (config: ConfigType<typeof GraphQLConfig>) => ({
        playground: config.playground,
        debug: config.debug,
        introspection: config.introspection,
        sortSchema: config.sortSchema,
        autoSchemaFile: config.autoSchemaFile,
      }),
    }),
    UsersModule,
  ],
})
export class AppModule {}
