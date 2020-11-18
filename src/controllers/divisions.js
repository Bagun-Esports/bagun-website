const Person = require('../models/person')

exports.getAllPlayers = (req, res, next) => {
    Person.getAll().then((players) => {
        res.render('division', { title: 'All', players: players.rows })
    })
}

exports.getByGame = (req, res, next) => {
    if (req.params.game === 'all') {
        res.redirect('/divisions')
        return
    }
    Person.getByGame(req.params.game).then((players) => {
        res.render('division', { title: req.params.game, players: players.rows })
    })
}
