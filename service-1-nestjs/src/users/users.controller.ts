import {Controller} from '@nestjs/common';
import {RpcException} from '@nestjs/microservices';

import {
  User,
  UserById,
  UsersServiceController,
  UsersServiceControllerMethods,
} from '~/proto/user';

@UsersServiceControllerMethods()
@Controller('user')
export class UsersController implements UsersServiceController {
  private readonly items: User[] = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Doe'},
  ];

  findOne(request: UserById): User {
    const user = this.items.find(({id}) => id === request.id);
    if (!user) throw new RpcException('user not found');
    return user;
  }
}
