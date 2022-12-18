import React from "react";
// import './PaginatioForMovie.css';
import './Pagination.css';

function Pagination(props) {

    return (
    <div className="pagination">
      <div
        onClick={() =>
          props.setglobalPageNumberHandler(props.globalPageNumber - 1)
        }
        className="pagination_btn"
      >
        Prev
      </div>
      <div className="page-no">{props.globalPageNumber}</div>
      <div
        onClick={() =>
          props.setglobalPageNumberHandler(props.globalPageNumber + 1)
        }
        className="pagination_btn"
      >
        Next
      </div>
    </div>
  ); 
}
export default Pagination;
