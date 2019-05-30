module.exports ={
    create: (req,res,next) => {
        const db = req.app.get('db')
        const {name, description, price, image_url} =req.body
        db.create_product([name, description, price, image_url])
            .then(response => {
                console.log(response)
                res.status(200).send(response)
            })
            .catch(error => {
                res.status(500).send({errorMessage: "Don't Panic!"})
                console.log(error)
            });
    },
   
    getOne: (req,res,next) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.read_product(id)
            .then(product =>{
                console.log(product)
                res.status(200).send(product)
            })
            .catch(error => {
                res.status(500).send({errorMessage: "Don't Panic!"})
                console.log(error)
            });
    },
   
    getAll: (req,res,next) => {
        const db = req.app.get('db')
        db.read_products()
            .then(products => {
                console.log(products)
                res.status(200).send(products)
            })
            .catch(error => {
                res.status(500).send({errorMessage: "Don't Panic!"})
                console.log(error)
            });
    },
   
    update: (req,res,next) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {desc} = req.query
        db.update_product(id, desc)
            .then(() => res.sendStatus(200))
            .catch(error => {
                res.status(500).send({errorMessage: "Don't Panic!"})
                console.log(error)
            });
    },
   
    del: (req,res,next) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_product(id)
            .then(() => res.sendStatus(200))
            .catch(error => {
                res.status(500).send({errorMessage: "Don't Panic!"})
                console.log(error)
            });
    }
}