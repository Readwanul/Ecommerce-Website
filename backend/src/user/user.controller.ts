import { Controller, Post, UploadedFile, UseInterceptors,Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('user')
export class UserController {
    constructor(private readonly userservice: UserService) {}

    @Post("upload")
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File,
    @Body('name') name: string
     ) {
        await this.userservice.uploadPhoto(file,name); 
        return { message: "File uploaded successfully" };
    }

    @Get("all")
    async view(){
        return await this.userservice.view();
    }
}
