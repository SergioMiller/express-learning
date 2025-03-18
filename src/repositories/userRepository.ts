import {PrismaClient} from "@prisma/client";
import {UserCreateDto, UserUpdateDto} from "../dto/user";
import {UserModel} from "../models/UserModel";
import {plainToInstance} from "class-transformer";

class UserRepository extends PrismaClient {
    async getAll(): Promise<UserModel[]> {
        const collection = await this.user.findMany();

        return collection.map((user) => plainToInstance(UserModel, user, {excludeExtraneousValues: true}));
    }

    async create(data: UserCreateDto): Promise<UserModel> {
        const user = await this.user.create({
            data: data,
        });

        return plainToInstance(UserModel, user, {excludeExtraneousValues: true})
    }

    async get(id: number): Promise<UserModel> {
        const user = await this.user.findFirst({
            where: {
                id: id,
            },
        })

        return plainToInstance(UserModel, user, {excludeExtraneousValues: true})
    }

    async update(id: number, data: UserUpdateDto): Promise<UserModel> {
        const user = await this.user.update({
            where: {
                id: id,
            },
            data: data,
        })

        return plainToInstance(UserModel, user, {excludeExtraneousValues: true})
    }

    async delete(id: number): Promise<void> {
        await this.user.delete({
            where: {
                id: id,
            },
        })
    }
}

export default new UserRepository()