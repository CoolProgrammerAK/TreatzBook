const express = require("express");
const validation = require("../utils/validation");
const { validate, Joi } = require("express-validation");


// Controllers
const authController = require("../controllers/auth");
const doctorController = require("../controllers/doctor");
const bookingController = require("../controllers/booking");

const router = express.Router();

router.get("/check", (req, res) => {
  return res.json({ message: "API is working" });
});

router.get(
  "/auth",
  authController.authenticateMiddleware,
  authController.getLoginDetails
);

// auth
router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/getDoctors", doctorController.getDoctors);

router.post("/getDoctorsSorted", doctorController.getDoctorsSorted);

router.get("/getDoctor/:id", doctorController.getDoctor);

router.get(
  "/getDoctorByUserid/:id",
  authController.authenticateMiddleware,
  doctorController.getDoctorByUserid
);

router.get("/getBooking/:id", bookingController.getBooking);

router.get(
  "/getBookings",
  authController.authenticateMiddleware,
  bookingController.getBookings
);

router.post(
  "/bookSlot",
  authController.authenticateMiddleware,
  bookingController.bookSlot
);

router.post(
  "/cancelBooking",
  authController.authenticateMiddleware,
  bookingController.cancelBooking
);

module.exports = router;
