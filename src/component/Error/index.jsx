import React from "react";
import { BiSolidError } from "react-icons/bi";
import "./error.scss";
import { BsEmojiFrown } from "react-icons/bs";
const Error = ({ error }) => {
  return (
    <div className="error">
      <BiSolidError size={180} color="red" />
      <h1>
        Oppss! Ne yazık ki bir hata oluştu. Sayfa görüntülenemiyor{" "}
        <BsEmojiFrown />
      </h1>
      <p>{error}</p>
    </div>
  );
};

export default Error;
