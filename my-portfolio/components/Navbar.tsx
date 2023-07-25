"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  
  
  return <header>
    <div>
        <div>
            <div>
                <h2>Ahmet Ali SARIHAN</h2>
            </div>
        </div>
        <div>
            {}
        </div>
    </div>

  </header>;



};

export default Navbar;
