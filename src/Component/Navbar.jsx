import { useEffect, useState } from "react";
import { useGlobal } from '../context/Global';


export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const useglobal = useGlobal()
  // Apply theme to <html> when theme changes
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  // Toggle function
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };


  // function for diff sections
      const article = () => {
        useglobal.setcheck4(false)
        useglobal.setcheck3(false)
        useglobal.setcheck2(false)
        useglobal.setcheck1(false)
        useglobal.setcheck5(false)
        useglobal.setcheck6(false)
        useglobal.setcheck7(!useglobal.check7)
        useglobal.setcheck8(false)
        useglobal.setcheck9(false)


    }
    const signin = () => {
        useglobal.setcheck4(!useglobal.check4)
        useglobal.setcheck3(false)
        useglobal.setcheck2(false)
        useglobal.setcheck1(false)
        useglobal.setcheck5(false)
        useglobal.setcheck6(false)
        useglobal.setcheck7(false)
        useglobal.setcheck8(false)
        useglobal.setcheck9(false)


    }
    const signup = () => {
        useglobal.setcheck4(false)
        useglobal.setcheck3(!useglobal.check3)
        useglobal.setcheck2(false)
        useglobal.setcheck1(false)
        useglobal.setcheck5(false)
        useglobal.setcheck6(false)
        useglobal.setcheck7(false)
        useglobal.setcheck8(false)
        useglobal.setcheck9(false)

    }
    const userspace = () => {
        useglobal.setcheck4(false)
        useglobal.setcheck3(false)
        useglobal.setcheck2(false)
        useglobal.setcheck1(false)
        useglobal.setcheck5(!useglobal.check5)
        useglobal.setcheck6(false)
        useglobal.setcheck7(false)
        useglobal.setcheck8(false)
        useglobal.setcheck9(false)

    }
    const setprofile = () => {
        useglobal.setcheck4(false)
        useglobal.setcheck3(false)
        useglobal.setcheck2(!useglobal.check2)
        useglobal.setcheck1(false)
        useglobal.setcheck5(false)
        useglobal.setcheck6(false)
        useglobal.setcheck7(false)
        useglobal.setcheck8(false)
        useglobal.setcheck9(false)

    }
    const profile = () => {
        useglobal.setcheck4(false)
        useglobal.setcheck3(false)
        useglobal.setcheck2(false)
        useglobal.setcheck1(!useglobal.check1)
        useglobal.setcheck5(false)
        useglobal.setcheck6(false)
        useglobal.setcheck7(false)
        useglobal.setcheck8(false)
        useglobal.setcheck9(false)

    }
    const home = () => {
        useglobal.setcheck4(false)
        useglobal.setcheck3(false)
        useglobal.setcheck2(false)
        useglobal.setcheck1(false)
        useglobal.setcheck5(false)
        useglobal.setcheck6(false)
        useglobal.setcheck7(false)
        useglobal.setcheck8(false)
        useglobal.setcheck9(false)

    }

  return (
    <div className="navbar bg-base-100 shadow-lg px-6">
      {/* Navbar Start */}
      <div className="flex-1">
        <button  onClick={() => { home() }} className="btn btn-ghost normal-case text-xl text-primary">
          Doctorbuddy
        </button>
      </div>

      {/* Mobile Menu (hamburger) */}
      <div className="lg:hidden">
        <details className="dropdown dropdown-end">
          <summary className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </summary>
          <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52 z-[1]">
            <li><button  onClick={() => { home() }}>🏠Home</button></li>
            <li><button onClick={() => { userspace() }}>👤Userspace</button></li>
            <li><button onClick={() => { article() }}>📄Article</button></li>
            <li>
              <details>
                <summary>📂 Profile</summary>
                <ul className="p-2 bg-base-100">
                  <li><button onClick={() => { signin() }}>Sign In</button></li>
                  <li><button onClick={() => { signup() }}>Sign Up</button></li>
                  <li><button onClick={() => { profile() }}>See Profile</button></li>
                  {/* <li><button onClick={() => { setprofile() }}>Edit Profile</button></li> */}
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </div>

      {/* Navbar Center (desktop menu) */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            <li><button  onClick={() => { home() }}>🏠Home</button></li>
            <li><button onClick={() => { userspace() }}>👤Userspace</button></li>
            <li><button onClick={() => { article() }}>📄Article</button></li>
          <li>
            <details>
              <summary>📂 Profile</summary>
              <ul className="bg-base-200 rounded-t-none p-2">
                <li><button onClick={() => { signin() }}>Sign In</button></li>
                <li><button onClick={() => { signup() }}>Sign Up</button></li>
                <li><button onClick={() => { profile() }}>See Profile</button></li>
                {/* <li><button onClick={() => { setprofile() }}>Edit Profile</button></li> */}
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="flex items-center gap-4">
        {/* Cylindrical Dark/Light Toggle */}
        <label className="flex cursor-pointer items-center">
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={theme === "dark"}
            onChange={toggleTheme}
          />
          <span className="ml-2 text-sm">
            {theme === "light" ? "Light" : "Dark"}
          </span>
        </label>
      </div>
    </div>
  );
}
