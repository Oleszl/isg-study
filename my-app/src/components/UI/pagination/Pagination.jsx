import React from "react";
import { getPagesArray } from "../../../utils/pages";
import MyButton from "../button/MyButton";

const Pagination = ({ totalPages, changePage }) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => (
        <MyButton onClick={() => changePage(p)}>{p}</MyButton>
      ))}
    </div>
  );
};

export default Pagination;
