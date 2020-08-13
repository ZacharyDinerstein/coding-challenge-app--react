const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  answers: [{
    answer: {
      type: String,
      required: true
    },
    example: {
      type: String,
    }
  },

  ],
  links: [
    {
      type: String,
    }

  ],
  categories: [
    {
      type: String,
      default: 'javascript',
      required: true
    }

  ],
  company: {
    type: String,
  },
  tags: [
    {
      type: String,
    },
  ],
  cardContentsStringified: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('card', CardSchema);
