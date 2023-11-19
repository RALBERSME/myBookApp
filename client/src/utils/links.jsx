import React from "react";
import { IoBarChartSharp } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { FaBook } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { FaLightbulb } from "react-icons/fa";
const links = [
  { text: "add book", path: ".", icon: <FaBook /> },
  { text: "all books", path: "all-books", icon: <ImBooks /> },
  { text: "ideas", path: "ideas", icon: <FaLightbulb /> },
  { text: "stats", path: "stats", icon: <IoBarChartSharp /> },
  { text: "profile", path: "profile", icon: <BsPersonCircle /> },
  { text: "admin", path: "admin", icon: <GrUserAdmin /> },
];

export default links;
