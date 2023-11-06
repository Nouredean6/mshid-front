import React, { useEffect, useState } from "react";
// import { SpinnerImg } from "../../loader/Loader";
import "./tourList.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import Search from "../../Search/Search";
import { useDispatch, useSelector } from "react-redux";
import DOMPurify from 'dompurify';
import {
  FILTER_TOURS,
  selectFilteredTours,
} from "../../../redux/features/tour/filterSlice";
import ReactPaginate from "react-paginate";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
  deleteTour,
  getTours,
} from "../../../redux/features/tour/tourSlice";
import { Link } from "react-router-dom";


const TourList = ({ tours, isLoading }) => {
  const [search, setSearch] = useState("");
  const filteredTours = useSelector(selectFilteredTours);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

  const delTour = async (id) => {
    await dispatch(deleteTour(id));
    await dispatch(getTours());
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Delete Tour",
      message: "Are you sure you want to delete this tour.",
      buttons: [
        {
          label: "Delete",
          onClick: () => delTour(id),
        },
        {
          label: "Cancel",
          // onClick: () => alert('Click No')
        },
      ],
    });
  };

  //   Begin Pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(filteredTours.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredTours.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredTours]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredTours.length;
    setItemOffset(newOffset);
  };
  //   End Pagination

  useEffect(() => {
    dispatch(FILTER_TOURS({ tours, search }));
  }, [tours, search, dispatch]);

  return (
    <div className="tour-list">
      <hr />
      <div className="table">
        <div className="--flex-between --flex-dir-column">
          <span>
            <h3>Tours In DB</h3>
          </span>
          <span>
            <Search
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </span>
        </div>

        {/* {isLoading && <SpinnerImg />} */}

        <div className="table">
          {tours.length === 0 ? (
            <p>-- No tour found, please add a tour...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
  {currentItems.map((tour, index) => {
    const { _id, name, price,image, description } = tour;
    return (
      <tr key={_id}>
        <td>{index + 1}</td>
        <td>{shortenText(name, 16)}</td>
        <td>{"$" + price}</td>
        <td>
          <img className="tour-image" src={image.filePath} alt="Tour" />
        </td>
        <td>{DOMPurify.sanitize(shortenText(description, 255), {FORBID_TAGS: ['p', 'span']})}</td>
        <td className="icons">
          <span>
            {/* <Link to={`/tour-details/${_id}`}>
              <AiOutlineEye size={25} color={"purple"} />
            </Link> */}
            <Link to={`/details/${_id}`}>
              <AiOutlineEye size={25} color={"purple"} />
            </Link>
       
          </span>
          <span>
            <Link to={`/edit-tour/${_id}`}>
              <FaEdit size={20} color={"green"} />
            </Link>
          </span>
          <span>
            <FaTrashAlt
              size={20}
              color={"red"}
              onClick={() => confirmDelete(_id)}
            />
          </span>
        </td>
      </tr>
    );
  })}
</tbody>

            </table>
          )}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="Prev"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="activePage"
        />
      </div>
    </div>
  );
};

export default TourList;
