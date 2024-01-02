const express = require("express");
const path = require("path");
const multer = require("multer");

const heroPageController = require("../controller/sectionHeroImageMappingController");
const navbarController = require("../controller/navbarController");
const footerController = require("../controller/footerController");
const featureController = require("../controller/featureController");
const downloadPlatformController = require("../controller/downloadPlatformController");

const siteMenuController = require("../controller/siteMenuController");
const licenseInfoController = require("../controller/licenseInfoController");
const socialMediaController = require("../controller/socialMediaController");
const emailSubscriptionController = require("../controller/emailSubscriptionController");
const downloadMetatraderController = require("../controller/downloadMetatraderController");
const sectionContentController = require("../controller/sectionContentController");
const promotionController = require("../controller/promotionController");

const sectionContentMappingViewController = require("../controller/sectionContentMappingViewController");
const groupMenuMappingViewController = require("../controller/groupMenuMappingViewController");

const utilsController = require("../controller/utilsController");

const routeController = require("../controller/routeController");

const router = express.Router();

const storage = multer.diskStorage({
	// destination: "./uploads",
	destination: "./public/assets/img/temp/",
	filename: function (req, file, cb) {
		const fileName = Date.now() + path.extname(file.originalname);
		cb(null, fileName);
	},
});

const upload = multer({ storage });

// router.get("/", (req, res) => {});

router.get("/route/:page/:subPage?/:id?", routeController.get);

router.get("/api/downloadMetatrader", downloadMetatraderController.fetchAll);

router.post("/api/add/subscribeEmail", emailSubscriptionController.subscribe);

router.get("/api/sectionContent", sectionContentController.fetchAll);

router.get("/api/uuid/:number?", utilsController.generateUUID);

router.post("/api/upload", upload.single("image"), utilsController.uploadFile);
router.get("/api/image/:id", utilsController.downloadFile);

//
router.get(
	"/api/sectionContentMapping/:sectionName?",
	sectionContentMappingViewController.fetchAll
);

router.get("/api/groupMenuMapping/:groupMenuName?", groupMenuMappingViewController.fetchAll);

router.get("/api/testRender", routeController.post);

// PAGES

// router.get("/api/promotionOverview/:id?", promotionController.fetchViewByFilter);
router.get("/api/promotionOverview/:startIndex", promotionController.fetchAll);
router.get("/api/promotionOverview/detail/:contentId", promotionController.fetchById);
//

// COMPONENTS
router.get("/api/siteMenu", siteMenuController.fetchAll);
router.get("/api/licenseInfo", licenseInfoController.fetchAll);
router.get("/api/socialMedia", socialMediaController.fetchAll);

// SECTION
router.get("/api/components/navbar", navbarController.fetchAll);
router.get("/api/components/heroPage/:sectionName", heroPageController.fetchAll);
router.get("/api/components/feature/:targetPage", featureController.fetchAll);
router.get("/api/components/downloadPlatform", downloadPlatformController.fetchAll);
router.get("/api/components/footer", footerController.fetchAll);

module.exports = router;
