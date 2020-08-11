const express = require('express')
const router = express.Router();
const { getAll, addCard, deleteCard, updateCard, getCardById } = require('../../controllers/cardHandler');


/**
 * @route   GET apiV1/cards/getAll
 * @desc    Get all cards
 * @access  public
 * */
router.get('/getAll', getAll);
/**
 * @route   GET apiV1/cards/:id
 * @desc    Get card by id 
 * @access  public
 * */
router.get('/:cardId', getCardById);

/**
 * @route   POST apiV1/cards
 * @desc    Add a new card
 * @access  public
 * */
router.post('/', addCard);

/**
 * @route   PATCH apiV1/cards/:cardId
 * @desc    update a card
 * @access  public
 * */
router.patch('/:cardId', updateCard);

/**
 * @route   DELETE apiV1/cards/:cardId
 * @desc    delete a card
 * @access  public
 * */
router.delete('/:cardId', deleteCard);


module.exports = router;