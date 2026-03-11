import express from "express";
import mongoose from "mongoose";

import userRoutes from "./routes/userRoutes.js";
import roleRoutes from "./routes/roleRoutes.js";

const app = express();

app.use(express.json());

mongoose.connect("mongodb://root:root@localhost:27017/cmp126-day5?authSource=admin");

app.use("/users", userRoutes);
app.use("/roles", roleRoutes);

app.listen(3000, () => {
    console.log("Server running");
});