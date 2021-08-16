import * as path from 'path';

import {registerAs} from '@nestjs/config';

import {USER_PACKAGE_NAME} from '~/proto/user';

export const UsersConfig = registerAs('users', () => ({
  clients: {
    user: {
      options: {
        url: process.env.USER_SERVICE_URL!,
        package: USER_PACKAGE_NAME,
        protoPath: path.resolve(process.cwd(), 'src/proto/user.proto'),
      },
    },
  },
}));
