import { v2 as cloudinary } from "cloudinary";
import { Details } from "../models/details.model.js";


export const adddetails = async(req ,res)=>{
    const adminId = req.adminId;
      const { title, description, link } = req.body;
      console.log(title, description, link);
    
      try {
        if (!title) {
          return res.status(400).json({ errors: "title required" });
        }
        // const { video } = req.files;
        // if (!req.files || Object.keys(req.files).length === 0) {
        //   return res.status(400).json({ errors: "No file uploaded" });
        // }
    
        // const allowedFormat = ["video/mp4"];
        // if (!allowedFormat.includes(video.mimetype)) {
        //   return res
        //     .status(400)
        //     .json({ errors: "Invalid file format. " });
        // }
    
        // claudinary code
        // const cloud_response = await cloudinary.uploader.upload(video.tempFilePath);
        // if (!cloud_response || cloud_response.error) {
        //   return res
        //     .status(400)
        //     .json({ errors: "Error uploading file to cloudinary" });
        // }
    
        const detailsData = {
          title, 
          description,
          link,
        //   video: {
        //     public_id: cloud_response.public_id,
        //     url: cloud_response.url,
        //   },
          creatorId: adminId,
        };
        const details = await Details.create(detailsData);
        res.json({
          message: "Details added successfully",
          details,
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error in Details adding." });
      }
};

export const getdetails = async (req, res) => {
  try {
    const detailss = await Details.find({});
    res.status(201).json({ detailss });
  } catch (error) {
    res.status(500).json({ errors: "Error in getting courses" });
    console.log("error to get courses", error);
  }
};

export const detail = async (req, res) => {
    const { detailId } = req.params;
    try {
      const detail = await Details.findById(detailId);
    //   if (!mongoose.Types.ObjectId.isValid(detailId)) {
    //     return res.status(400).json({ error: "Invalid detail ID format" });
    //   }
      if (!detail) {
        return res.status(404).json({ error: "Details not found" });
      }
      res.status(200).json({ detail });
    } catch (error) {
      res.status(500).json({ errors: "Error in getting details" });
      console.log("Error in course details", error);
    }
  };