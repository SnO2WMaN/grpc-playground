import {Module} from '@nestjs/common';
import {ConfigModule, ConfigType} from '@nestjs/config';
import {ClientsModule, Transport} from '@nestjs/microservices';

import {UsersConfig} from './users.config';
import {UsersResolver} from './users.resolver';
import {UsersService} from './users.service';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'SAMPLE_PACKAGE',
        imports: [ConfigModule.forFeature(UsersConfig)],
        inject: [UsersConfig.KEY],
        useFactory: async (config: ConfigType<typeof UsersConfig>) => ({
          transport: Transport.GRPC,
          options: config.clients.user.options,
        }),
      },
    ]),
  ],
  providers: [UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
