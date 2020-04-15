module.exports = {

getAll: (req, res) => {
    db = req.app.get('db')
    console.log('get server')
    db.get_all().then(houses => {
        res.status(200).json(houses)
    }).catch(err => console.log(err))
},

postHouse: (req, res) => {
    db = req.app.get('db')
    const {name, address, city, state, zip, img, mortgage, rent} = req.body;
    console.log('post server', name, address, city, state, zip, img, mortgage, rent)
    db.add_house([name, address, city, state, zip, img, mortgage, rent]).then(house => {
        res.status(200).json(house).catch(err => console.log(err))
    })

},

editHouse: (req, res) => {
    db = req.app.get('db')
    const {name, address, city, state, zip, img, mortgage, rent} = req.body;
    const {id} = req.params;
    console.log('edit server', name, address, city, state, zip, img, mortgage, rent, id)
    db.edit_house([name, address, city, state, zip, img, mortgage, rent, id]).then( house => {
        res.status(200).json(house).catch(err => console.log(err))
    })
},

deleteHouse: (req, res) => {
    db = req.app.get('db')
    const {id} = req.params;
    console.log('delete server')
    db.delete_house(id).then(house => {
        res.status(200).json(house).catch(err => console.log(err))
    })

},

}