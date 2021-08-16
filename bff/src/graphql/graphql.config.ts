import {registerAs} from '@nestjs/config';

export const GraphQLConfig = registerAs('graphql', () => ({
  playground:
    process.env.GRAPHQL_PLAYGROUND === 'enable' ||
    process.env.NODE_ENV !== 'production',
  debug:
    process.env.GRAPHQL_DEBUG === 'enable' ||
    process.env.NODE_ENV !== 'production',
  sortSchema: true,
  introspection: true,
  autoSchemaFile: true,
}));
