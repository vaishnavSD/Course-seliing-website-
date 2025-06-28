import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function DynamicNavbar() {
  const [navItems, setNavItems] = useState([]);
  const [newNav, setNewNav] = useState("");

  const addNavItem = () => {
    if (newNav.trim() && !navItems.includes(newNav)) {
      setNavItems([...navItems, newNav]);
      setNewNav("");
    }
  };

  const removeNavItem = (item) => {
    setNavItems(navItems.filter((nav) => nav !== item));
  };

  return (
    <nav className="bg-gray-100 p-4 text-black w-64 h-screen flex flex-col overflow-y-auto">
      <ul className="flex flex-col gap-2 overflow-y-auto flex-1">
        {navItems.map((item) => (
          <li key={item} className="bg-gray-300 px-3 py-2 rounded-lg flex justify-between items-center">
            <Link to={"/admin/Details"} className="m-auto hover:underline">
              {item}
            </Link>
            {/* <button onClick={() => removeNavItem(item)} className="text-red-400">X</button> */}
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-2 mt-4">
        <input
          type="text"
          value={newNav}
          onChange={(e) => setNewNav(e.target.value)}
          className="p-2 rounded-lg text-black border border-gray-400"
          placeholder="Add Section"
        />
        <button 
          onClick={addNavItem} 
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>
      </div>
    </nav>
  );
}