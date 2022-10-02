const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// GET all & POST at /api/thoughts
router
    .route("/")
    .get(getAllThoughts)
    .post(createThought)

// GET, PUT, & DELETE one at /api/thoughts/id
router
    .route("/:id")
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

// PUT(add) & DELETE reaction at /api/thoughts/thoughtId/reactions/reactionId
router
    .route("/:thoughtId/reactions/:reactionId")
    .put(addReaction)
    .delete(removeReaction)

module.exports = router;