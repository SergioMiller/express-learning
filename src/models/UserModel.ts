import {Expose} from "class-transformer";

export class UserModel {
    @Expose()
    id: number
    @Expose()
    name: string
    @Expose()
    email: string
    @Expose()
    createdAt: string
}
