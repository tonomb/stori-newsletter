import { Module } from '@nestjs/common';
import { NewsletterService } from './newsletter.service';
import { NewsletterController } from './newsletter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Newsletter } from './newsletter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Newsletter])],
  providers: [NewsletterService],
  controllers: [NewsletterController],
  exports: [TypeOrmModule],
})
export class NewsletterModule {}
