import {Field, ID, ObjectType} from '@nestjs/graphql';

@ObjectType('User')
export class UserEntity {
  @Field((type) => ID)
  id!: number;

  @Field(() => String)
  name!: string;
}
