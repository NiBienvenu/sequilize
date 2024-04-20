const userControler = require("../controllers/usercontroller");

const router = require("express").Router();

router.post("/addUser", userControler.addUser);
router.get("/allUser", userControler.getAllUser);
router.get('/login',userControler.login)
router.get("/:user", userControler.getSingleUser);
router.put("/:id", userControler.updateUser);
router.delete("/:id", userControler.deleteUser);

module.exports = router;