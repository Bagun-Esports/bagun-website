const express = require('express')
const router = express.Router()
const Person = require('../../src/models/person')

router.get('/', (req, res, next) => {
    Person.getAll().then((rows) => {
        res.render('division', { title: 'All', players: rows })
    })
})

router.get('/:game', (req, res, next) => {
    if (req.params.game === 'all') {
        res.redirect('/divisions')
        return
    }
    Person.getByGame(req.params.game).then((rows) => {
        console.log(rows)
        res.render('division', { title: req.params.game, players: rows })
    })
})

module.exports = router
