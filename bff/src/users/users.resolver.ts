import {Args, ID, Query, Resolver} from '@nestjs/graphql';

import {UserEntity} from './users.entities';
import {UsersService} from './users.service';

@Resolver(() => UserEntity)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => UserEntity, {name: 'user'})
  getUser(
    @Args('id', {type: () => ID})
    id: number,
  ) {
    return this.usersService.getUser(id);
  }
}
