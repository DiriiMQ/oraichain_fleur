import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { SkinService } from "./skin.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('skin')
export class SkinController {
    constructor(private skinService: SkinService) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    upload(@UploadedFile() file: Express.Multer.File) {
        return this.skinService.upload(file);
    }
}