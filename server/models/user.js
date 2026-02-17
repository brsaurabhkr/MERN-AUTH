import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {type: String},
    email: {type: String},
})

let UserModel 
if (mongoose.models.User) {
  UserModel = mongoose.models.User ;
} else {
  UserModel = mongoose.model("User", UserSchema);
}
export default UserModel;