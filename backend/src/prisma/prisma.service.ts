import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL'),
        },
      },
    });
  }

  cleanDb() {
    return this.$transaction([
      this.bookmark.deleteMany(),
      this.user.deleteMany(),
    ]);
  }

  // async getDbFilePath(): Promise<string | null> {
  //   const options = await this.engine.getPrismaClientOptions();
  //   const dbUrl = options.datasources?.db?.url;
  //   if (!dbUrl) {
  //     return null;
  //   }
  //   const match = dbUrl.match(/(file:[\/\\]{2,})?([^\?]+)/);
  //   if (!match) {
  //     return null;
  //   }
  //   return match[2];
  // }
}
