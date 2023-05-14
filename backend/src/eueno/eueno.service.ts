import { Injectable } from "@nestjs/common";
const Eueno = require('@eueno/lib-node');
const fs = require('fs');

@Injectable()
export class EuenoService {
    constructor() {}

    download(path: string) {
        
    }

    async upload() {
      const eueno = new Eueno({
        endpoint: 'https://v2-developers.eueno.io',
      });
      const file = await fs.readFileSync('/home/dirii/nestjs-api-tutorial/prisma/migrations/20230512191445_fleur/migration.sql');

      const data = await eueno.upload(
        file,
        {
          projectKey: '748897d952605587212b5002baf90765c14435375a00ad8a21143c172646f8ed',
          key: {
            walletPublicKey: '0403c1b75ad5e36e16956733b4a77b4c36bc85eb384bd698eef390e54bd7d66ac4536c1241497acc9953f52042c28a3402304686ed394becd23128f4d2040aa9cf',
            fileEncryptionKey: 'oN74zgEtc8GdVAaqwQVaIACvJhPvJYK-O1Ua7cW8rOk'
          },
        },
        {
          projectId: 283,
          filename: 'db.sql',
          contentLength: 999999,
          contentType: 'text',
          method: 'ENCRYPT',
          keepPath: false,
        },
      );

      console.log("Uploaded db to Eueno!");
    } 
}