import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getUser } from '../../redux/features/auth/authService';
import { SET_USER } from '../../redux/features/auth/authSlice';
import { useDispatch } from 'react-redux';
import "./userbooking.css";
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const UserBooking = () => {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [userId, setUserId] = useState('');
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  

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
        const response = await fetch(`https://murshid-pfe.onrender.com/api/v1/bookings`);
  
        if (response.ok) {
          const jsonData = await response.json();
          const bookings = jsonData.data.bookings;
  
          if (bookings.length === 0) {
            // Handle the case when there's no data (empty response)
            // (No need to set isLoading here, because it's set outside)
          } else {
            // Set the data when there is data
            setData(bookings);
          }
        } else {
          console.error('Request failed with status:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setIsLoading(false); // Set isLoading to false in all cases (whether if, else, or catch blocks are executed).
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f0f0f0">
  <div className="table">
          {isLoading && (
            <div className='table'>
            <table>
            <thead>
              <tr>
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
    </tr>
    <tr>
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
    </tr>
    <tr>
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
    </tr>
    
</tbody>
          </table>
          </div>
          )}
          {!isLoading && data.length === 0 ?<p>-- No booking found...</p>:
           (
            <table>
              <thead>
                <tr>
                  <th>{isLoading ? <Skeleton/> : 'Index'}</th>
                  <th>{isLoading ? <Skeleton/> : 'Tour Name'}</th>
                  <th>{isLoading ? <Skeleton/> : 'Price'}</th>
                  <th>{isLoading ? <Skeleton/> : 'Booked at'}</th>
                </tr>
              </thead>
              <tbody>
  {data.map((d, index) => {
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
