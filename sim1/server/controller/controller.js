var items = [
                {id: 'A1', name: 'Baseball', price: 15}
            ]


module.exports = {

    getOne: (req, res) => {
        // const {id} = req.body


        res.status(200).send(items)
    }
}