import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix(
    configService.get('app.apiPrefix'),
    {
      exclude: ['/'],
    },
  );

  await app.listen(configService.get('app.port'));
  console.log(`app listening on port ${configService.get('app.port')}`);

}
bootstrap();
