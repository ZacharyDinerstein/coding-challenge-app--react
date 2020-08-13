const Card = require('../models/Card');

exports.getAll = async (req, res) => {
    try {
        const cards = await Card.find().sort({ date: 'descending' });
        res.json(cards);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
}

exports.getCardById = async (req, res) => {
    const cardId = req.params.cardId
    try {
        const card = await Card.findById(cardId)
        res.json(card);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
}

exports.addCard = async (req, res) => {
    const card = new Card(req.body);
    try {
        await card.save();
        res.json({ card });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
}

exports.updateCard = async (req, res) => {
    const filter = { _id: req.params.cardId };
    const data = { ...req.body };
    try {
        const card = await Card.findOneAndUpdate(filter, data);

        return res.json({ card });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
}

exports.deleteCard = async (req, res) => {
    const filter = { _id: req.params.cardId };

    try {
        const card = await Card.findByIdAndDelete(filter);
        return card ?
            res.json({ card }) :
            res.status(301).json({ msg: 'No card was found' });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
}