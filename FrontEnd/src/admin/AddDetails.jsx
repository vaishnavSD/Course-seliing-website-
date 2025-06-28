import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../utils/utils";

function AddDetails() {
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [video, setVideo] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("description", description);
            formData.append("price", price);
            if (video) formData.append("video", video);

            const response = await axios.post(`${BACKEND_URL}/add-course`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            });

            toast.success(response.data.message);
            navigate("/admin/courses");
        } catch (error) {
            console.log("Error adding details", error);
            toast.error(error.response?.data?.message || "Error adding course details");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <form 
                className="space-y-6 p-6 border border-gray-300 rounded-lg shadow-md bg-white w-full max-w-lg"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-semibold text-center">Add Course Details</h2>

                <div className="space-y-2">
                    <label className="block text-lg">Description</label>
                    <input
                        type="text"
                        placeholder="Enter your course description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none"
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-lg">Lecture link</label>
                    <input
                        type="text"
                        placeholder="Enter your course price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none"
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-lg">Video</label>
                    <input
                        type="file"
                        onChange={(e) => setVideo(e.target.files[0])}
                        className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200"
                >
                    Add Details
                </button>
            </form>
        </div>
    );
}

export default AddDetails;
