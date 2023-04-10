import React from "react";

const Modal = ({ show, items,onClose}) => {
  if (!show) {
    return null;
  }
  let thumbnail =
    items.volumeInfo.imageLinks && items.volumeInfo.imageLinks.smallThumbnail;
  let amount = items.saleInfo.listPrice && items.saleInfo.listPrice.amount;
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
          <div className="inner-box">
            <img src={thumbnail} />
            <div className="info">
              <h1>{items.volumeInfo.title}</h1>
              <h3> {items.volumeInfo.authors}</h3>
              <h4>
                {" "}
                {items.volumeInfo.publisher}{" "}
                <span>items.volumeInfo.publishedDate</span>
              </h4>
              <a href={items.volumeInfo.previewLink}>
                <button>More</button>
              </a>
            </div>
          </div>
          <div className="description">{items.volumeInfo.description}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
