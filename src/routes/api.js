const express = require("express");
const path = require("path");

const footerController = require("../controller/footerController");
const siteMenuController = require("../controller/siteMenuController");
const licenseInfoController = require("../controller/licenseInfoController");
const socialMediaController = require("../controller/socialMediaController");
const emailSubscriptionController = require("../controller/emailSubscriptionController");
const downloadMetatraderController = require("../controller/downloadMetatraderController");
const sectionContentController = require("../controller/sectionContentController");

const uuidController = require("../controller/uuidController");

const router = express.Router();

// router.get("/", (req, res) => {});

router.get("/api/footer", footerController.fetchAll);
router.get("/api/siteMenu", siteMenuController.fetchAll);
router.get("/api/licenseInfo", licenseInfoController.fetchAll);
router.get("/api/socialMedia", socialMediaController.fetchAll);
router.get("/api/downloadMetatrader", downloadMetatraderController.fetchAll);

router.post("/api/add/subscribeEmail", emailSubscriptionController.subscribe);

router.get("/api/sectionContent", sectionContentController.fetchAll);

router.get("/api/uuid", uuidController.get);

module.exports = router;
