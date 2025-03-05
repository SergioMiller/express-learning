import {PrismaClient} from "@prisma/client";

class UserRepository extends PrismaClient {
    getAll() {
        return this.user.findMany()
    }

    create(data) {
        return this.user.create({
            data: data,
        })
    }

    get(id) {
        return this.user.findFirst({
            where: {
                id: id,
            },
        })
    }

    update(id, data) {
        return this.user.update({
            where: {
                id: id,
            },
            data: data,
        })
    }

    delete(id) {
        return this.user.delete({
            where: {
                id: id,
            },
        })
    }
}

export default new UserRepository()