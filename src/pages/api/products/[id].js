import { dbConnect  } from "@/server/configs/db"
import {
    update,
    remove,
    read
} from "@/server/controllers/products"

dbConnect();

export default (req, res) => {
    if (req.method === 'GET') {
        read(req, res)
    } else if (req.method === 'PUT') {
        update(req, res)
    } else if (req.method === 'DELETE') {
        remove(req, res)
    } else {
        req.status(400).send('Bad Request')
    }
}