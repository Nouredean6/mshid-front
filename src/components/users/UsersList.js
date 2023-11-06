import React, { useEffect, useState } from "react";
// import { SpinnerImg } from "../../loader/Loader";
import "./usersList.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import Search from "../Search/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  FILTER_USERS,
  selectFilteredUsers,
} from "../../redux/features/users/userFilterSlice";
import ReactPaginate from "react-paginate";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import {
  deleteUser,
  getUsers,
} from "../../redux/features/users/usersSlice";
import { Link } from "react-router-dom";

const UsersList = ({ users, isLoading }) => {
  const [search, setSearch] = useState("");
  const filteredUsers = useSelector(selectFilteredUsers);

  const dispatch = useDispatch();

  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };

  const delUser = async (id) => {
    console.log(id);
    await dispatch(deleteUser(id));
    await dispatch(getUsers());
  };

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Delete User",
      message: "Are you sure you want to delete this user.",
      buttons: [
        {
          label: "Delete",
          onClick: () => delUser(id),
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

    setCurrentItems(filteredUsers.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredUsers.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredUsers]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredUsers.length;
    setItemOffset(newOffset);
  };
  //   End Pagination

  useEffect(() => {
    dispatch(FILTER_USERS({ users, search }));
  }, [users, search, dispatch]);

  return (
    <div className="user-list">
      <hr />
      <div className="table">
        <div className="--flex-between --flex-dir-column">
          <span>
            <h3>Users In DB</h3>
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
          {users.length === 0 ? (
            <p>-- No users found...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Index</th>
                  <th>firstName</th>
                  <th>lastName</th>
                  <th>email</th>
                  <th>isAdmin</th>
                </tr>
              </thead>
              <tbody>
  {currentItems.map((user, index) => {
    const { _id, firstName, lastName,email, isAdmin } = user;
    const stylesObj= {display: 'none'}
    return (
      <tr key={_id}>
        <td>{index + 1}</td>
        <td>{shortenText(firstName, 16)}</td>
        <td>{shortenText(lastName, 16)}</td>
        <td>{shortenText(email, 16)}</td>
        <td>{String(isAdmin)}</td>
        {/* <td>
          <img className="user-image" src={image.filePath} alt="User" />
        </td> */}
        {isAdmin ?'':<td className="icons">
          {/* <span>
            <Link to={`/edit-user/${_id}`}>
              <FaEdit size={20} color={"green"} />
            </Link>
          </span> */}
          <span>
            <FaTrashAlt
              size={20}
              color={"red"}
              onClick={() => confirmDelete(_id)}
            />
          </span>
        </td>}
        
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

export default UsersList;
