import express from "express";
import { registerUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/test", registerUser);

router.post("/register", (req, res) => {
    res.send("Register route working");
});

export default router;