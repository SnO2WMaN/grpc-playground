import {Injectable, OnModuleInit, Inject} from '@nestjs/common';
import {ClientGrpc} from '@nestjs/microservices';

import {UsersServiceClient, USERS_SERVICE_NAME} from '~/proto/user';

@Injectable()
export class UsersService implements OnModuleInit {
  private serviceClient!: UsersServiceClient;

  constructor(
    @Inject('SAMPLE_PACKAGE')
    private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.serviceClient =
      this.client.getService<UsersServiceClient>(USERS_SERVICE_NAME);
  }

  getUser(id: number) {
    return this.serviceClient.findOne({id});
  }
}
