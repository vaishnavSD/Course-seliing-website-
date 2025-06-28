import DynamicNavbar from "./DynamicNavbar";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../utils/utils";
import axios from "axios";

function Details() {
  // const [details, setdetails] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //   const navigate = useNavigate();
  
  //   const admin = JSON.parse(localStorage.getItem("admin"));
  // const token = admin.token;

  // if (!token) {
  //   toast.error("Please login to admin");
  //   navigate("/admin/login");
  // }
  // useEffect(() => {
  //   const fetchdetails = async () => {
  //     try {
  //       const response = await axios.get(`${BACKEND_URL}/details/details`, {
  //         withCredentials: true,
  //       });
  //       console.log(response.data.courses);
  //       setCourses(response.data.courses);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log("error in fetchdetails ", error);
  //     }
  //   };
  //   fetchdetails();
  // }, []);
  // if (loading) {
  //   return <p className="text-center text-gray-500">Loading...</p>;
  // }

  return (
    <div className="flex">
      <DynamicNavbar />


      <div className="flex-1 p-4">
      
        <div className="px-5 py-5 mx-2"><Link
          className="bg-orange-400 py-2 px-12 rounded-lg text-white hover:bg-orange-950 duration-300"
          to={"/admin/AddDetails"}
        >
          Add Content
        </Link>
        </div>
        <div className="px-5 py-5 mx-2">
          <button
          className="bg-orange-400 py-2 px-12 rounded-lg text-white hover:bg-orange-950 duration-300"
          to={""}
        >
          Delete
        </button>
        </div>
        <div>
          details 
          
        </div>
      </div>
    </div>
  );
}

export default Details;