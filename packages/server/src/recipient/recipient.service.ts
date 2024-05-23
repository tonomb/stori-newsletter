import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipient } from './recipient.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RecipientService {
  constructor(
    @InjectRepository(Recipient)
    private recipientRepository: Repository<Recipient>,
  ) {}

  async addRecipients(emails: string[]) {
    for (const email of emails) {
      const recipient = new Recipient();
      recipient.email = email;
      recipient.unsubscribeToken = uuidv4();
      await this.recipientRepository.save(recipient);
    }
  }

  async unsubscribe(id: string) {
    const recipient = await this.recipientRepository.findOne({ where: { id } });
    if (recipient) {
      recipient.subscribed = false;
      await this.recipientRepository.save(recipient);
    }
  }
}
