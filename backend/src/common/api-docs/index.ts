import { INestApplication } from '@nestjs/common';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import {
    SWAGGER_API_DESCRIPTION,
    SWAGGER_API_NAME,
    SWAGGER_API_PATH,
    SWAGGER_API_VERSION,
} from './constants';

export const swaggerSetup = (app: INestApplication): void => {
    const config = new DocumentBuilder()
        .setTitle(SWAGGER_API_NAME)
        .setDescription(SWAGGER_API_DESCRIPTION)
        .setVersion(SWAGGER_API_VERSION)
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup(SWAGGER_API_PATH, app, document);
};