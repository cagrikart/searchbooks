import React, { useState } from "react";
import "./style.css";
import Card from "./Card";
import axios from "axios";
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
          console.log(res.data)
        })
        .catch((err) => console.error(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A room without books is like <br /> a body without a soul{" "}
          </h1>
        </div>
        <div className="row2">
          <h2>Find your book</h2>
          <div className="search">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onKeyPress={searchBook}
              placeholder="Enter Your Book Name"
            />
            <button></button>
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
