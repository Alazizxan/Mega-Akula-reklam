import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB ulanish
mongoose
  .connect(process.env.MONGO_URI, { dbName: "lotteryDB" })
  .then(() => console.log("✅ MongoDB ulandi"))
  .catch((err) => console.error("❌ Mongo ulanish xatosi:", err));

// Schema va Model
const UserSchema = new mongoose.Schema({
  name: String,
  phone: String,
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema);

// API route
app.post("/api/save", async (req, res) => {
  try {
    const { name, phone } = req.body;
    if (!name || !phone) return res.status(400).json({ error: "Majburiy maydonlar" });

    const newUser = new User({ name, phone });
    await newUser.save();

    res.json({ success: true, message: "Ma'lumot saqlandi ✅" });
  } catch (err) {
    res.status(500).json({ error: "Server xatosi" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server ${PORT} portda ishlamoqda`));
