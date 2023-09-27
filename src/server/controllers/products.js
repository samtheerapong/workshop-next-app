import Product from "@/server/models/products";

// สร้าง
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

// ดึงทั้งหมด
export const list = async (req, res) => {
    try {
        const listData = await Product.find({}).exec()
        console.log(listData)
        res.send(listData)
    } catch {
        console.log(err)
        res.status(400).send('List failed')
    }
}

// ดึงตามค่า id
export const read = async (req, res) => {
    try {
        const readData = await Product.findOne({ _id: req.query.id }).exec()
        console.log(readData)
        res.send(readData)
    } catch {
        console.log(err)
        res.status(400).send('Read failed')
    }
}

//แก้ไข ตาม id
export const update = async (req, res) => {
    try {
        const id = req.query.id
        const updated = await Product.findByIdAndUpdate({ _id: id }, req.body, { new: true }).exec()
        console.log(updated)
        res.send(updated)
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