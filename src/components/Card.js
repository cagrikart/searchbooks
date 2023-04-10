import React, { useState } from "react";
import "./style.css";
import Modal from "./Modal";

const Card = ({ books }) => {
  console.log(books);
  const [show, setShow] = useState(false);
  const [bookItem, setBookItem] = useState();
  return (
    <>
      {books.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail !== undefined && amount !== undefined) {
          return (
            <>
              <div
                className="card"
                onClick={() => {
                  setShow(true);
                  setBookItem(item);
                }}
              >
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="amount">${amount}</p>
                </div>
              </div>
              <Modal
                show={show}
                items={bookItem}
                onClose={() => setShow(false)}
              />
            </>
          );
        }
     
      })}
    </>
  );
};

export default Card;
