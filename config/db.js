import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://hamrochulo:ivPRHSQbAmriL1N2@cluster0.8ia1gsf.mongodb.net/humrochulo"
    )
    .then(() => console.log("DB Connected"));
};


