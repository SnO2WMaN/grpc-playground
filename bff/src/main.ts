import {NestFactory} from '@nestjs/core';

import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(
    // eslint-disable-next-line no-process-env
    process.env.PORT || 4000,
  );
}

bootstrap();
