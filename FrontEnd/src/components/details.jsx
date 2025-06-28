<nav>
<ul>
  <li className="mb-4">
    <a href="/" className="flex items-center">
      <RiHome2Fill className="mr-2" /> Home
    </a>
  </li>
  <li className="mb-4">
    <a href="#" className="flex items-center text-blue-500">
      <FaDiscourse className="mr-2" /> Courses
    </a>
  </li>
  <li className="mb-4">
    <a href="/purchases" className="flex items-center">
      <FaDownload className="mr-2" /> Purchases
    </a>
  </li>
  {/* <li className="mb-4">
    <a href="#" className="flex items-center">
      <IoMdSettings className="mr-2" /> Settings
    </a>
  </li> */}
  <li>
    {isLoggedIn ? (
      <Link to={"/"}
        
        className="flex items-center"
        onClick={handleLogout}
      >
        <IoLogOut className="mr-2" /> Logout
      </Link>
    ) : (
      <Link to={"/login"} className="flex items-center">
        <IoLogIn className="mr-2" /> Login
      </Link>
    )}
  </li>
</ul>
</nav>