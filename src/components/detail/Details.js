import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Details.css'
import ReactPaginate from "react-paginate";

const Details = () => {
  const [data, setData] = useState([]);
  const { tourId } = useParams();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/v1/bookings/users/${tourId}`);

        if (response.ok) {
          const jsonData = await response.json();

          setData(jsonData.data.bookings);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [tourId]);
  
  return (
    <>
    {/* <div>
      {data.map((d) => {
        const { userId, _id, createdAt } = d;
        const { firstName, email, lastName } = userId;
        return (
          <ul key={_id}>
            <h6>{lastName}</h6>
            <li>{firstName}</li>
            <span>{email}</span>
            <span style={{ color: 'red', fontSize: '30px' }}>{createdAt}</span>
          </ul>
        );
      })}
    </div> */}

    <div className="table">
      <div className="--flex-between --flex-dir-column">
        <span>
          <h3>Users who Booked this tour</h3>
        </span>
       
      </div>

      <div className="table">
        
        {data.length === 0 ? (
          <p>-- No Users booked this tour...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Index</th>
                <th>User</th>
                <th>Email</th>
                <th>Booked At</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, index) => {
                const { userId, _id, createdAt } = d;
                const { firstName, email, lastName } = userId;
                const bookedAt = new Date(createdAt).toLocaleDateString();
                const bookedAtTime = new Date(createdAt).toLocaleTimeString();
                return (
                  <tr key={_id}>
                    <td>{index + 1}</td>
                    <td>{firstName + " " + lastName}</td>
                    <td>{email}</td>
                    <td>{bookedAt + " At " + bookedAtTime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          
        )}
      </div>
    
    </div>
  
  </>
);

};


export default Details;
