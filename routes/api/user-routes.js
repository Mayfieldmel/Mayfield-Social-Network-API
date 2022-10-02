const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// GET all & POST at /api/users
router
    .route("/")
    .get(getAllUsers)
    .post(createUser)

// GET, PUT, & DELETE one at /api/users/id
router
    .route("/:id")
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

// PUT(add) & DELETE friend at /api/users/userId/friends/friendId
router
    .route("/:userId/friends/:friendId")
    .put(addFriend)
    .delete(removeFriend)

module.exports = router;