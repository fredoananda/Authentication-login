import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("conected", () => {
      console.log("Conectado ao MongoDB");
    });

    connection.on("error", (err) => {
      console.log("mongoDB connection error" + err);
      process.exit();
    });
  } catch (error) {
    console.log("something goes wrong!");
    console.log(error);
  }
}
