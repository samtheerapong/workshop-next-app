import { dbConnect  } from "@/server/configs/db"
import {
    create,
    list,
} from "@/server/controllers/products"

dbConnect();

export default (req, res) => {
    if (req.method === 'GET') {
        list(req, res)
    } else if (req.method === 'POST') {
        create(req, res)
    } else {
        req.status(400).send('Bad Request')
    }
}