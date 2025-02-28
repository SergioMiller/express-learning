class UserController {
    index(req, res) {
        res.send('user list')
    }

    create(req, res) {
        res.send('user create')
    }

    get(req, res) {
        res.send('user get')
    }

    update(req, res) {
        res.send('user update')
    }

    delete(req, res) {
        res.send('user delete')
    }
}

export default new UserController()