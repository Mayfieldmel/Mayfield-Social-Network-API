const { User, Thought } = require("../models");

const thoughtController = {
  // get all thoughts
  getAllThoughts(req, res) {
    Thought.find({})
        // populate?
        .select('-__v')
        .sort({ createdAt: -1 })
        .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // add thought
  addThought({ params, body }, res) {
    Thought.create
  },
};
