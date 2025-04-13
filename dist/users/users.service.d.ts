import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: any): Promise<User>;
    findOne(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    update(id: string, updateUserDto: any): Promise<User | null>;
}
