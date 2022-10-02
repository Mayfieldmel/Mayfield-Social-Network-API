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

// PUT(add) reaction at /api/thoughts/thoughtId/reactions
router
    .route("/:thoughtId/reactions")
    .put(addReaction)

// DELETE reaction at /api/thoughts/thoughtId/reactions/reactionId
router
    .route("/:thoughtId/reactions/:reactionId")
    .delete(removeReaction)

module.exports = router;