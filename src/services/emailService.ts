import axios from 'axios';
import { EmailRule } from '../types/email';
import { subDays } from 'date-fns';

export class EmailService {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  async findEmailsToDelete(rule: EmailRule): Promise<string[]> {
    const date = subDays(new Date(), rule.olderThan);
    const query = `before:${date.toISOString()}`;
    
    try {
      // This is a simplified example. In a real app, you'd need to implement
      // proper Gmail API authentication and queries
      const response = await axios.get('https://gmail.googleapis.com/gmail/v1/users/me/messages', {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
        params: {
          q: query,
        },
      });
      
      return response.data.messages.map((msg: any) => msg.id);
    } catch (error) {
      console.error('Error finding emails:', error);
      return [];
    }
  }

  async deleteEmails(ids: string[]): Promise<void> {
    try {
      await Promise.all(
        ids.map(id =>
          axios.delete(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${id}`, {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          })
        )
      );
    } catch (error) {
      console.error('Error deleting emails:', error);
    }
  }
}