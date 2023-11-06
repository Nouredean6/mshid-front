import { FaTh, FaRegChartBar, FaCommentAlt, FaBook, FaAddressBook, FaHome } from "react-icons/fa";
import { BiAlarm, BiBook, BiImageAdd } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/auth/authSlice";

/*export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;*/

function Menu() {
  const user = useSelector(selectUser);
 /* const navigate = useNavigate();
  const dispatch = useDispatch();*/
  const { isAdmin } = user;

 /* const handleLogout = async () => {
      await axios.get(`${BACKEND_URL}/api/v1/auth/logout`);
      dispatch(SET_LOGIN(false));
      dispatch(SET_USER(null));
      navigate("/login")
  };*/



  let menu = [

    {
      title:"Home",
      icon:<FaHome/>,
      path:"/"
    },
    {
      title: "Dashboard",
      icon: <FaTh />,
      path: "/dashboard",
    },
    {
      title: "User Bookings",
      icon: <BiBook />,
      path: "/booking",
    },
    {
      title: "Add Tour",
      icon: <BiImageAdd />,
      path: "/add-tour",
    },
    {
      title: "Account",
      icon: <FaRegChartBar />,
      childrens: [
        {
          title: "Profile",
          path: "/profile",
        },
        {
          title: "Edit Profile",
          path: "/edit-profile",
        },
      ],
    },
    {
      title: "Your Bookings",
      icon: <BiAlarm />,
      path: "/userbooking",
    },

    
  ];

  if (!isAdmin) {
    menu = menu.filter(item => item.title !== "Dashboard" && item.title !== "Add Tour" && item.title !== "User Bookings");
  }
  else{
    menu = menu.filter(item => item.title !=="Your Bookings");
  };
  return menu;
}

export default Menu;