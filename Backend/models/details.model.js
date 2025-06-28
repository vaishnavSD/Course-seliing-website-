import mongoose from "mongoose";

const detailsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    
  },
  link: {
    type: String,
    
  },
  // video: {
  //   public_id: {
  //     type: String,
      
  //   },
  //   url: {
  //     type: String,
      
  //   },
  // },
  // creatorId: {
  //   type: mongoose.Types.ObjectId,
  //   ref: "User",
  // },
});

export const Details = mongoose.model("details", detailsSchema);