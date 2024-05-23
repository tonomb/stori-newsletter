import { Controller, Post, Body, Param } from '@nestjs/common';
import { RecipientService } from './recipient.service';

@Controller('recipient')
export class RecipientController {
  constructor(private readonly recipientService: RecipientService) {}

  @Post()
  async add(@Body() body: any) {
    const emails = Array.isArray(body) ? body : [body];
    await this.recipientService.addRecipients(emails);
    return { message: 'Recipients added successfully' };
  }

  @Post('unsubscribe/:id')
  async unsubscribe(@Param('id') id: string) {
    await this.recipientService.unsubscribe(id);
    return { message: 'Recipient unsubscribed successfully' };
  }
}
