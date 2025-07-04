const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {listingSchema, reviewSchema} = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");

const listingController = require("../controllers/listings.js");

router.route("/")
.get(wrapAsync(listingController.index))
.post(validateListing, isLoggedIn, wrapAsync (listingController.createListing));

//new route
router.get("/new", isLoggedIn, listingController.renderNewForm);


router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn, isOwner, validateListing,  wrapAsync(listingController.updateListing))
.delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));



//edit route
router.get("/:id/edit",isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));


module.exports = router;
