import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getUser } from '../../redux/features/auth/authService';
import { SET_USER } from '../../redux/features/auth/authSlice';
import { useDispatch } from 'react-redux';
import "./userbooking.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const UserBooking = () => {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [userId, setUserId] = useState('');
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  

  useEffect(() => {
    let isMounted = true;

    async function getUserData() {
      try {
        setIsLoading(true);
        const userData = await getUser();
        setUserId(userData._id);
        setIsLoading(false);

        if (isMounted) {
          dispatch(SET_USER(userData));
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    }

    getUserData();

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/v1/bookings/user/${userId}`);
        // const response = await fetch(`/api/v1/bookings`);
        
        if (response.ok) {
          const jsonData = await response.json();

          setData(jsonData.data.bookings);
          setIsLoading(false)

        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f0f0f0">
  <div className="table">
          {data.length === 0 ?<p>-- No booking found...</p>:
           (
            <table>
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Tour Name</th>
                  <th>Price</th>
                  <th>Booked at</th>
                </tr>
              </thead>
              <tbody>
  {data.map((d, index) => {
    // const { _id, tourId, priceTour, createdAt } = d;
    // const {name} =tourId;
    const _id = d._id;
  const name = d.tourId?.name;
  const priceTour = d.priceTour;
  const createdAt = d.createdAt;


    const bookedAt = new Date(createdAt).toLocaleDateString();
    const bookedAtTime = new Date(createdAt).toLocaleTimeString();
    return (
      <tr key={_id}>
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>{"$" + priceTour}</td>
        <td>{bookedAt + " At " + bookedAtTime}</td>
        {/* <td>
          <img className="tour-image" src={image.filePath} alt="Tour" />
        </td> */}
        
        <td className="icons">
          {/* <span>
            <Link to={`/tour-details/${_id}`}>
              <AiOutlineEye size={25} color={"purple"} />
            </Link>
          </span> */}
          {/* <span>
            <Link to={`/edit-tour/${_id}`}>
              <FaEdit size={20} color={"green"} />
            </Link>
          </span> */}
          {/* <span>
            <FaTrashAlt
              size={20}
              color={"red"}
              onClick={() => confirmDelete(_id)}
            />
          </span> */}
        </td>
      </tr>
    );
  })}
</tbody>
            </table>
          )}
        </div>
        </SkeletonTheme>
);
};

export default UserBooking;
