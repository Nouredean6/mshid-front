import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getUser } from '../../redux/features/auth/authService';
import { SET_USER } from '../../redux/features/auth/authSlice';
import { useDispatch } from 'react-redux';
import "./booking.css";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Booking = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [userId, setUserId] = useState('');
  const dispatch = useDispatch();

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'Tour', headerName: 'Tour Name', width: 200 },
    { field: 'price', headerName: 'Price', width: 150 },
    { field: 'tourDescription', headerName: 'Description', width: 550 },
    // Add more columns as needed
  ];

  useEffect(() => {
    let isMounted = true;

    async function getUserData() {
      try {
        const userData = await getUser();
        setUserId(userData._id);
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
        // const response = await fetch(`/api/v1/bookings/${userId}`);
        const response = await fetch(`https://murshid-pfe.onrender.com/api/v1/bookings`);

        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData.data.bookings);
          setIsLoading(false);
        }else{
          setIsLoading(false);

        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [userId]);

  return (
  <div className="table">
          {isLoading && (
            <SkeletonTheme baseColor="#c0c0c0" highlightColor="#d0d0d0">
                <div className="table">
                        <table>
                        <thead>
                          <tr>
                            <th><Skeleton/></th>
                            <th><Skeleton/></th>
                            <th><Skeleton/></th>
                            <th><Skeleton/></th>
                            <th><Skeleton/></th>
                            <th><Skeleton/></th>
                          </tr>
                        </thead>
                        <tbody>
              <tr>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
              </tr>
              <tr>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
              </tr>
              <tr>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
              </tr>
              <tr>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
              </tr>
              <tr>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
                <td><Skeleton/></td>
              </tr>
          </tbody>
                      </table>
                      </div>
                      </SkeletonTheme>            
          ) }
          {!isLoading && data.length === 0 ? (
            <p>-- No booking found...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>{isLoading ? <Skeleton/> : 'Index'}</th>
                  <th>{isLoading ? <Skeleton/> : 'UserName'}</th>
                  <th>{isLoading ? <Skeleton/> : 'Tour Name'}</th>
                  <th>{isLoading ? <Skeleton/> : 'Price'}</th>
                  <th>{isLoading ? <Skeleton/> : 'Booked at'}</th>
                  <th>{isLoading ? <Skeleton/> : 'Paid'}</th>
                </tr>
              </thead>
              <tbody>
              {data.map((d, index) => {
  const _id = d._id;
  const firstName = d.userId?.firstName;
  const name = d.tourId?.name;
  const priceTour = d.priceTour;
  const createdAt = d.createdAt;
  const paid = d.paid;

  const bookedAt = new Date(createdAt).toLocaleDateString();
  const bookedAtTime = new Date(createdAt).toLocaleTimeString();

  return (
    <tr key={_id}>
      <td>{index + 1}</td>
      <td>{firstName}</td>
      <td>{name}</td>
      <td>{"$" + priceTour}</td>
      <td>{bookedAt + " At " + bookedAtTime}</td>
      <td>{String(paid)}</td>
    </tr>
  );
})}

</tbody>
            </table>
          )}
        </div>
);
};

export default Booking;
