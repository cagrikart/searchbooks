import React, { useState } from "react";
import "./style.css";
import Card from "./Card";
import axios from "axios";
import { red } from "@mui/material/colors";
const Home = () => {
  const [search, setSearch] = useState("");
  const [bookDatas,setBookData] = useState([])
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyCg-uzWMws07dI7Hs-XvBMJ7VDWo0XOp3M"+
            '&maxresults=40'
            
        )
        .then((res) => {
          setBookData(res.data.items)
          console.log("Results "+res.data)
        })
        .catch((err) => console.error(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
        </div>
        <div className="row2">
          <h1>Find Your Book</h1>
          <div className="search">
            <input 
            style={{backgroundColor:"#D2B48C",color:"#757575",fontSize:"25px"}}
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onKeyPress={searchBook}
              placeholder="Enter Your Book Name"
            />
          </div>
        </div>
        <div className="container">
        
         {
         
          <Card books={bookDatas} />
         }
        </div>
      </div>
    </>
  );
};

export default Home;
