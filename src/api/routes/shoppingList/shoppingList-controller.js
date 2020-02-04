


exports.root = (req, res, next) => {
    res.status(200).json({
        message: 'Food route GET for all shoppingList'
    });
}

exports.addList = (req, res, next) => {
    const list= req.body;
    res.status(201).json({
        message: 'Food route POST to shoppingList',
        created: list
    });
}

exports.getList = (req, res, next) => {
    const id = req.params.listId;
    if (id === '123') {
        res.status(200).json({
            message: 'Correst id given, heres the shoppingList',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'ShoppingList not found'
        })
    }
}

exports.updateList = (req, res, next) => {
    res.status(200).json({
        message: 'Updated shoppingList',
        id: req.params.listId
    })
}

exports.deleteList = (req, res, next) => {
    res.status(200).json({
        message: 'Deleted shoppingList',
        id: req.params.listId
    })
}