import { Injectable } from '@nestjs/common';
import { User } from './user.entity'; // Correct entity name
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) 
        private readonly userRepo: Repository<User> 
    ) {}

    async uploadPhoto(file: Express.Multer.File, name: string) {
        const photo = this.userRepo.create({
            name: name,
            filename: file.originalname,
            mimetype: file.mimetype,
            photo: file.buffer, // Change 'data' to 'photo' to match entity
        });

        await this.userRepo.save(photo);
        return { message: "File uploaded" };
    }

    async view(){
        return await this.userRepo.find();
    }
}
