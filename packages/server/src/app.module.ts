import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../ormconfig';
import { NewsletterModule } from './newsletter/newsletter.module';
import { RecipientModule } from './recipient/recipient.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    NewsletterModule,
    RecipientModule,
  ],
})
export class AppModule {}
