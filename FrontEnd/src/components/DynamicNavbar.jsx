import { useState } from "react";

export default function DynamicNavbar() {
  const [navItems, setNavItems] = useState(["Home", "Courses", "About", "Contact"]);
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
    <nav className="bg-blue-600 p-4 text-white flex flex-wrap items-center justify-between">
      <ul className="flex gap-4">
        {navItems.map((item) => (
          <li key={item} className="bg-blue-800 px-3 py-2 rounded-lg flex items-center gap-2">
            <span>{item}</span>
            <button onClick={() => removeNavItem(item)} className="text-red-400">X</button>
          </li>
        ))}
      </ul>
      <div className="flex gap-2 mt-4">
        <input
          type="text"
          value={newNav}
          onChange={(e) => setNewNav(e.target.value)}
          className="p-2 rounded-lg text-black"
          placeholder="Add Section"
        />
        <button onClick={addNavItem} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
          Add
        </button>
      </div>
    </nav>
  );
}
