import React from "react";

const Row = ({ img, col, col2, icon, link, info, amount }) => {
  return (
    <>
      <div className="row mt-4 bg2 mx-2 rounded pt-2 pb-1 shadow">
        <div className={`${col2 ? `${col2}` : "col-3 col-lg-2 col-md-2"}`}>
          <img
            src={img}
            className="img-fluid contact-badge"
            width={"45px"}
            alt=""
          />
        </div>
        {col === 5 ? (
          <>
            <div className="col-5 line-height-low g-0">
              <p className="lh-1">{link}</p>
              <p className="small text-secondary">{info}</p>
            </div>
            <div className="col-4 small">
              <p className={`${amount > 100 ? "text-info" : "text-danger"}`}>
                {amount} ETB
              </p>
            </div>
          </>
        ) : (
          <div className={`${col} line-height-low small text-start g-0`}>
            <p className="lh-1">
              {link}
              {icon && <span className={`${icon} text-info small ms-2`}></span>}
            </p>

            <p className="small text-secondary">{info}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Row;
