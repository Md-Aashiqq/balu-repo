import mongoose from "mongoose";
export default () => {
  mongoose
    .connect(
      `mongodb+srv://admin-ashick:${process.env.MONGO_PASSWORD}@cluster0.vce2n.mongodb.net/amazon?retryWrites=true&w=majority`
    )
    .then(() => console.log("Sucess"))
    .catch((e) => console.log(e));
};
