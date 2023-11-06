// import Navbar from "../component/navbar/Navbar";
// import Singup from "../component/singup/singup";
// import Footer from "../component/footer/footer";

import Footer from "../components/footer/footer";
import Singupp from "../components/singup/singup1";
import Navbar from "../components/navbar/Navbar";

import LockOpenIcon from "@mui/icons-material/LockOpen";
import {
	Box,
	Button,
	Container,
	Divider,
	Typography,
	Grid,
} from "@mui/material";
import { FaUserCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import AuthWrapper from "../features/auth/forms/AuthWrapper";
// import AuthWrapper from "../forms/AuthWrapper";
// import RegisterForm from "../forms/RegisterForm";
// import StyledDivider from "../../../components/StyledDivider";
// import GoogleLogin from "../../../components/GoogleLogin";


const RegisterPage = () => (
	<>
	<Navbar />
	<AuthWrapper>
		<Container
			component="main"
			maxWidth="sm"
			sx={{
				// border: "2px solid #e4e5e7",
				// borderRadius: "25px",
				mt: 0,
				position: 'relative',
    // marginTop: '100px',
    // width: '400px',
    // height: '600px',
    background: 'transparent',
    border: '2px solid rgba(255,255,255,0.6)',
    borderRadius: '20px',
    backdropFilter: 'blur(5px)',
	mx: 2,
	my:20
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
				
			}}
		>
			<Grid>
				<Grid item xs={12}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							marginBottom: "25px",
						
						}}
					>
						<Typography variant="h2">Sign Up</Typography>
					</Box>
					{/* <StyledDivider /> */}
				</Grid>
				{/* registration form */}
				<Singupp />

				{/* already have an account link */}
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						borderRadius: "5px",
						"&:hover": {
							bgcolor: "#fff",
						},
						mt: 2,
						mb: 2,
					}}
				>
					<Button
						startIcon={<LockOpenIcon />}
						endIcon={<LockOpenIcon />}
					>
						<Typography
							component={Link}
							to="/login"
							variant="h6"
							sx={{ textDecoration: "none" }}
							color="primary"
						>
							Already have an account?
						</Typography>
					</Button>
				</Box>
				{/* or sign up with google */}
				{/* <Grid item xs={12}>
					<Box sx={{ alignItems: "center", display: "flex" }}>
						<Divider
							sx={{ flexGrow: 1 }}
							orientation="horizontal"
						/>
						<Button
							variant="outlined"
							sx={{
								cursor: "unset",
								m: 1,
								py: 0.5,
								px: 7,
								borderColor: "grey !important",
								color: "grey !important",
								fontWeight: 500,
								borderRadius: "25px",
							}}
							disableRipple
							disabled
						>
							OR SIGN UP WITH GOOGLE
						</Button>
						<Divider
							sx={{ flexGrow: 1 }}
							orientation="horizontal"
						/>
					</Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					> */}
						{/* <GoogleLogin /> */}
					{/* </Box>
				</Grid> */}
			</Grid>
		</Container>
	</AuthWrapper>
	<Footer />
	</>
);

export default RegisterPage;
