import Product from "@/server/models/products";

export const create = async (req, res) => {
    try {
        const newproduct = await new Product(req.body).save();



        console.log(newproduct)
        res.send(newproduct)
    } catch {
        console.log(err)
        res.status(400).send('Create failed')
    }
}

export const list = async (req, res) => {
    try {
        console.log('Crontroller List')
        res.send('Crontroller List')
    } catch {
        console.log(err)
        res.status(400).send('List failed')
    }
}

export const read = async (req, res) => {
    try {
        console.log('Crontroller Read')
        res.send('Crontroller Read')
    } catch {
        console.log(err)
        res.status(400).send('Read failed')
    }
}

export const update = async (req, res) => {
    try {
        console.log('Crontroller Update')
        res.send('Crontroller Update')
    } catch {
        console.log(err)
        res.status(400).send('Update failed')
    }
}

export const remove = async (req, res) => {
    try {
        console.log('Crontroller Remove')
        res.send('Crontroller Remove')
    } catch {
        console.log(err)
        res.status(400).send('Remove failed')
    }
}