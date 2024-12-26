import React, { useState } from "react";
import { Container, Heading, Pages, Items, Subheading } from "./style";
import {
  MdOutlineSpaceDashboard,
  MdFavoriteBorder,
  MdForwardToInbox,
  MdFormatListBulleted,
  MdOutlineShoppingCart,
  MdOutlinePriceCheck,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { TbShoppingBag, TbFileInvoice } from "react-icons/tb";
import { CiCalendar, CiViewTable, CiSettings } from "react-icons/ci";
import { RiTodoLine, RiTeamLine } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { FaUsersViewfinder } from "react-icons/fa6";

const Sidebar = ({ isCollapsed }) => {
  //a box shadow for the list items when the are selcted
  //   const [selectedItem, setSelectedItem] = useState("");

  //   const handleClick = (itemName) => {
  //     setSelectedItem(itemName);
  //   };

  return (
    <Container isCollapsed={isCollapsed}>
      <Heading isCollapsed={isCollapsed}>
        <span className="dash">Dash</span>
        <span className="stack">Stack</span>
      </Heading>
      <Items isCollapsed={isCollapsed}>
        <ul>
          <li
          // onClick={() => handleClick("Dashboard")}
          // className={selectedItem === "Dashboard" ? "selected" : ""}
          >
            <MdOutlineSpaceDashboard 
              style={{ marginRight: "8px", verticalAlign: "middle" }}
            />
            <span className="text">Dashboard</span>
          </li>
          <li
          // onClick={() => handleClick("Products")}
          // className={selectedItem === "Products" ? "selected" : ""}
          >
            <TbShoppingBag
              style={{ marginRight: "8px", verticalAlign: "middle" }}
            />
            <span className="text">Products</span>{" "}
          </li>
          <li
          // onClick={() => handleClick("Favourites")}
          // className={selectedItem === "Favourites" ? "selected" : ""}
          >
            <MdFavoriteBorder
              style={{ marginRight: "8px", verticalAlign: "middle" }}
            />
            <span className="text">Favourites</span>
          </li>
          <li
          // onClick={() => handleClick("Inbox")}
          // className={selectedItem === "Inbox" ? "selected" : ""}
          >
            <MdForwardToInbox
              style={{ marginRight: "8px", verticalAlign: "middle" }}
            />
            <span className="text">Inbox</span>
          </li>
          <li
          // onClick={() => handleClick("Order Lists")}
          // className={selectedItem === "Order Lists" ? "selected" : ""}
          >
            <MdFormatListBulleted
              style={{ marginRight: "8px", verticalAlign: "middle" }}
            />
            <span className="text">Order Lists</span>
          </li>
          <li
          // onClick={() => handleClick("Product Stock")}
          // className={selectedItem === "Product Stock" ? "selected" : ""}
          >
            <MdOutlineShoppingCart
              style={{ marginRight: "8px", verticalAlign: "middle" }}
            />
            <span className="text">Product Stock</span>
          </li>
          <Pages>
            <Subheading>
              <h6>PAGES</h6>
            </Subheading>
            <li
            //   onClick={() => handleClick("Pricing")}
            //   className={selectedItem === "Pricing" ? "selected" : ""}
            >
              <MdOutlinePriceCheck
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              <span className="text">Pricing</span>
            </li>
            <li
            //   onClick={() => handleClick("Calendar")}
            //   className={selectedItem === "Calendar" ? "selected" : ""}
            >
              <CiCalendar
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              <span className="text">Calendar</span>
            </li>
            <li
            //   onClick={() => handleClick("To-Do")}
            //   className={selectedItem === "To-Do" ? "selected" : ""}
            >
              <RiTodoLine
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              <span className="text">To-Do</span>
            </li>
            <li
            //   onClick={() => handleClick("Contact")}
            //   className={selectedItem === "Contact" ? "selected" : ""}
            >
              <IoIosContact
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              <span className="text">Contact</span>
            </li>
            <li
            //   onClick={() => handleClick("Invoice")}
            //   className={selectedItem === "Invoice" ? "selected" : ""}
            >
              <TbFileInvoice
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              <span className="text">Invoice</span>
            </li>
            <li
            //   onClick={() => handleClick("UI Elements")}
            //   className={selectedItem === "UI Elements" ? "selected" : ""}
            >
              <FaUsersViewfinder
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              <span className="text">UI Elements</span>
            </li>
            <li
            //   onClick={() => handleClick("Team")}
            //   className={selectedItem === "Team" ? "selected" : ""}
            >
              <RiTeamLine
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              <span className="text">Team</span>
            </li>
            <li
            //   onClick={() => handleClick("Table")}
            //   className={selectedItem === "Table" ? "selected" : ""}
            >
              <CiViewTable
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              <span className="text">Table</span>
            </li>
          </Pages>
          <li
          // onClick={() => handleClick("Settings")}
          // className={selectedItem === "Settings" ? "selected" : ""}
          >
            <MdOutlineSettings
              style={{ marginRight: "8px", verticalAlign: "middle" }}
            />
            <span className="text">Settings</span>
          </li>
          <li
          // onClick={() => handleClick("Logout")}
          // className={selectedItem === "Logout" ? "selected" : ""}
          >
            <MdOutlineLogout
              style={{ marginRight: "8px", verticalAlign: "middle" }}
            />
            <span className="text">Logout</span>
          </li>
        </ul>
      </Items>
    </Container>
  );
};

export default Sidebar;
