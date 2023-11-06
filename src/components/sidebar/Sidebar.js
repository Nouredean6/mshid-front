// Sidebar.js
import SidebarItem from "./SidebarItem";
import { useNavigate } from "react-router-dom";
import Menu from "../../data/sidebar";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiProductHuntLine } from "react-icons/ri";
import LogoutButton from "../../components/logout/LogoutButton";
import "./Sidebar.css";
import { FaArrowRight } from "react-icons/fa";
import MurshidLogo from "../../assets/logo.png"; // Import your logo image

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  // Modify the menu to include the "Home" item
  const menu = [
    {
      title: "Home",
      icon: <RiProductHuntLine size={35} style={{ cursor: "pointer" }} />,
      path: "/",
    },
    ...Menu(),
    {
      title: "Log Out",
      icon: <FaArrowRight size={35} style={{ cursor: "pointer" }} />,
      onClick: () => {},
      className: "styled-button",
    },
  ];

  return (
    <div className="layout">
      <div className="sidebar" style={{ width: isOpen ? "230px" : "60px" }}>
        <div className="top_section">
          <div className="logo" style={{ display: isOpen ? "block" : "none" }}>
            <img src={MurshidLogo} alt="Murshid Logo" className="logo-image" />
          </div>

          <div className="bars" style={{ marginLeft: isOpen ? "100px" : "0px" }}>
            <HiMenuAlt3 onClick={toggle} />
          </div>
        </div>
        {menu.slice(1).map((item, index) => {
          if (item.title === "Log Out") {
            return (
              <div
                key={index}
                className="styled-button"
                style={{
                  padding: "0.75em 1em",
                  display: "block",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transition: "background-color 0.15s",
                  backgroundcolor: "#caae88",
                  // Add more styles as needed
                }}
              >
                <LogoutButton />
              </div>
            );
          } else {
            return <SidebarItem item={item} isOpen={isOpen} key={index} />;
          }
        })}
      </div>

      <main
        style={{
          paddingLeft: isOpen ? "230px" : "60px",
          transition: "all .5s",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
