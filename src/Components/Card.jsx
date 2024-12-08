/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Card = ({ props, press }) => {
  return (
    <>
      <div className="col mb-5">
        <div className="card h-100 pt-1 px-1">
          <div
            className={`${
              props.TopSale === false ? "d-none" : ""
            } badge bg-danger text-white position-absolute top-0 end-0 saleBadge`}
          >
            Top Sale
          </div>
          <img
            className="card-img-top"
            src={`${props.cardImg}`}
            alt="Product-Img"
            width="198"
            height="198"
          />
          <div className="card-body p-3">
            <div className="text-center">
              <h3 className="fw-bolder">{props.productName}</h3>
              <p>{props.description}</p>
              <div className="ratings mb-2">
                {(() => {
                  const stars = [];
                  for (let starIndex = 0; starIndex < 5; starIndex++) {
                    stars.push(
                      <i
                        className={`${
                          starIndex < props.starRating
                            ? "fa fa-star text-warning"
                            : "fa fa-star-o text-warning"
                        }`}
                      ></i>
                    );
                  }
                  return stars;
                })()}
              </div>
              <h4>
                $
                {props.offer === undefined
                  ? props.mrp
                  : (props.mrp - props.mrp * (props.offer / 100)).toFixed(2)}
              </h4>
              <p
                className={`priceDecrease ${
                  props.offer === undefined ? "d-none" : ""
                }`}
              >
                <span style={{ color: "#6C758E" }}>M.R.P: </span>
                <s style={{ color: "#6C758E" }}>${props.mrp}</s>{" "}
                <span style={{ color: "red" }}>
                  (<b>{props.offer}% off</b>)
                </span>
              </p>
            </div>
          </div>
          <div className="card-footer pb-4 border-top-0 bg-transparent">
            <div className="text-center">
              <a
                className={`btn text-white btn-outline-dark mt-auto py-2 px-3 ${
                  props.btnTxt == "Add to Cart" ? "btn-dark" : "btn-danger"
                }`}
                href="#"
                type="button"
                onClick={() => press(props)}
              >
                {props.btnTxt}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
