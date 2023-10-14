import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Rest API Test server for Nest JS + Prisma + postGreSQL';
  }
}
