import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Newsletter } from './newsletter.entity';

@Injectable()
export class NewsletterService {
  constructor(
    @InjectRepository(Newsletter)
    private newsletterRepository: Repository<Newsletter>,
  ) {}

  async sendNewsletter(newsletterId: string): Promise<void> {
    const newsletter = await this.newsletterRepository.findOne({
      where: { id: newsletterId },
    });

    if (!newsletter) {
      console.log('Newsletter does not exist');
      throw new NotFoundException('Newsletter not found');
    }
  }
}
