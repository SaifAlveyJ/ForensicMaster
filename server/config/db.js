const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://Sraj:Sraj@cluster0.tykmzrf.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
