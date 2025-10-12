const express = require("express");
const requireAuth = require("../middlewares/auth_mid").authenticateUser;
const {
  getAllActions,
  getActionById,
  getActionsByCategory,
} = require("../controllers/actions_controller");

const router = express.Router();

router.get("/", requireAuth, getAllActions);
router.get("/categories/:category", requireAuth, getActionsByCategory);
router.get("/:id", requireAuth, getActionById);

module.exports = router;
