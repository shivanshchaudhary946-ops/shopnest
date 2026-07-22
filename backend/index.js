import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("ShopNest Backend Running 🚀");
});
app.get("/about", (req, res) => {
    res.send("About Page");
});
app.get("/contact", (req, res) => {
    res.send("Contact Page");
});
app.get("/products", (req, res) => {
    res.json([
        { id: 1, name: "iphone 16", price: 80000 },
        { id: 2, name: "Smansung s25", price: 70000 },
    ]);
});

app.get("/login", (req, res) => {
    res.send("Login Page");
});
app.post("/login", (req, res) => {
    res.send("login successful");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});