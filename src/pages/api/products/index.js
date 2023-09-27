import { dbConnect  } from "@/server/configs/db"
import {
    create,
    update,
    list,
    remove,
    read
} from "@/server/controllers/products"

dbConnect();

export default (req, res) => {
    // res.send('hello world')
    // console.log(req.method)

    if (req.method === 'GET') {
        list(req, res)
    } else if (req.method === 'POST') {
        create(req, res)
    } else if (req.method === 'PUT') {
        update(req, res)
    } else if (req.method === 'DELETE') {
        remove(req, res)
        // } else if (req.method === 'PATCH') {
        //     req.send('PATCH')
    } else {
        req.status(400).send('Bad Request')
    }
}