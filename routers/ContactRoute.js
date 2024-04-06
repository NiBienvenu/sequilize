const contactControler = require("../controllers/contactControler");

const router = require("express").Router();

router.post("/addContact", contactControler.addContact);
router.post("/addMessage", contactControler.AddMessage);
router.get("/allContact", contactControler.getAllContact);
router.get("/allDetailContact", contactControler.getAllDetailContact);
router.get("/allProvinces", contactControler.getAllProvince);
router.get("/:email", contactControler.getSingleContact);
router.get("/allrecherche/:recher", contactControler.getAllRecherche);
router.put("/:id", contactControler.updateContact);
router.delete("/:id", contactControler.deleteContact);

//les adresses
router.get("/allColline/:id", contactControler.getAllColline);
router.get("/allZone/:id", contactControler.getAllZone);
router.get("/allCommune/:id", contactControler.getAllCommune);


module.exports = router;