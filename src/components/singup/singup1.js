import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
// import {
// 	strengthColor,
// 	strengthIndicator,
// } from "../../../utils/password-strength";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	Grid,
	IconButton,
	InputAdornment,
	InputLabel,
	Link,
	OutlinedInput,
	Stack,
	Typography,
} from "@mui/material";
// import AuthButtonAnimation from "../../../animations/authButtonAnimations"
import { Formik } from "formik";
// import Spinner from "../../../components/Spinner";
// import { BACKEND_URL } from "../../../utils/react-backend-url";
import axios from 'axios';
// import { registerUser } from "../../../redux/features/auth/authService";
// import { SET_LOGIN, SET_NAME } from "../../../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { strengthColor, strengthIndicator } from "../../utils/password-strength";
import { registerUser } from "../../redux/features/auth/authService";
import { SET_LOGIN } from "../../redux/features/auth/authSlice";
import AuthButtonAnimation from "../../animations/authButtonAnimations";
import Spinner from "../Spinner";
import "./singup.css"

const Singupp = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [level, setLevel] = useState();
  const [isLoading, setIsLoading] = useState(false);

	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const handleShowHidePassword = () => {
		setShowPassword(!showPassword);
	};

	const handleShowHideConfirmPassword = () => {
		setShowConfirmPassword(!showConfirmPassword);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const changePassword = (value) => {
		const temp = strengthIndicator(value);
		setLevel(strengthColor(temp));
	};

	useEffect(() => {
		changePassword("");
	}, []);

	return (
		<>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					password: "",
					passwordConfirm: "",
					submit: null,
				}}
				validationSchema={Yup.object().shape({
					firstName: Yup.string()
						.max(255)
						.required("First Name is required"),
					lastName: Yup.string()
						.max(255)
						.required("Last Name is required"),
					email: Yup.string()
						.email("Must be a valid email")
						.max(255)
						.required("Email is required"),
					password: Yup.string()
						.max(255)
						.required("Password is required"),
					passwordConfirm: Yup.string()
						.oneOf([Yup.ref("password")], "Passwords Must Match")
						.required("Please confirm your password"),
				})}
				onSubmit={async (values, {setSubmitting }) => {
					try {
						const data = await registerUser(values);
						console.log(data);
						if(data === 201){
						await dispatch(SET_LOGIN(true));
						navigate("/");
						}
						// await dispatch(SET_NAME(data.firstName));
						setIsLoading(false);
					  } catch (error) {
						setIsLoading(false);
					  }
					}
				}
			>
				{({
					errors,
					handleBlur,
					handleChange,
					handleSubmit,
					isSubmitting,
					touched,
					values,
				}) => (
					<form noValidate autoComplete="off" onSubmit={handleSubmit}>
						{isLoading ? (
							<Spinner />
						) : (
							<Grid container spacing={3}>
								{/* FirstName */}
								<Grid item xs={12} md={6}>
									<Stack spacing={1}>
										<InputLabel htmlFor="firstName-signup">
											First Name*
										</InputLabel>
										<OutlinedInput
											id="firstName-signup"
											type="firstName"
											value={values.firstName}
											name="firstName"
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="John"
											fullWidth
											error={Boolean(
												touched.firstName &&
													errors.firstName
											)}
										/>
										{touched.firstName &&
											errors.firstName && (
												<FormHelperText
													error
													id="helper-text-firstName-signup"
												>
													{errors.firstName}
												</FormHelperText>
											)}
									</Stack>
								</Grid>
								{/* LastName */}
								<Grid item xs={12} md={6}>
									<Stack spacing={1}>
										<InputLabel htmlFor="lastName-signup">
											Last Name*
										</InputLabel>
										<OutlinedInput
											id="lastName-signup"
											type="lastName"
											value={values.lastName}
											name="lastName"
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="Doe"
											fullWidth
											error={Boolean(
												touched.lastName &&
													errors.lastName
											)}
										/>
										{touched.lastName &&
											errors.lastName && (
												<FormHelperText
													error
													id="helper-text-lastName-signup"
												>
													{errors.lastName}
												</FormHelperText>
											)}
									</Stack>
								</Grid>
								{/* Email */}
								<Grid item xs={12} md={6}>
									<Stack spacing={1}>
										<InputLabel htmlFor="email-signup">
											Email Address*
										</InputLabel>
										<OutlinedInput
											id="email-signup"
											value={values.email}
											name="email"
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="email@example.com"
											inputProps={{}}
											fullWidth
											error={Boolean(
												touched.email && errors.email
											)}
										/>
										{touched.email && errors.email && (
											<FormHelperText
												error
												id="helper-text-email-signup"
											>
												{errors.email}
											</FormHelperText>
										)}
									</Stack>
								</Grid>
								{/* password */}
								<Grid item xs={12}>
									<Stack spacing={1}>
										<InputLabel htmlFor="password-signup">
											Password
										</InputLabel>
										<OutlinedInput
											fullWidth
											error={Boolean(
												touched.password &&
													errors.password
											)}
											id="password-signup"
											type={
												showPassword
													? "text"
													: "password"
											}
											value={values.password}
											name="password"
											onBlur={handleBlur}
											onChange={(e) => {
												handleChange(e);
												changePassword(e.target.value);
											}}
											endAdornment={
												<InputAdornment position="end">
													<IconButton
														aria-label="toggle password visiblity"
														onClick={
															handleShowHidePassword
														}
														onMouseDown={
															handleMouseDownPassword
														}
														edge="end"
														size="large"
													>
														{showPassword ? (
															<Visibility />
														) : (
															<VisibilityOff />
														)}
													</IconButton>
												</InputAdornment>
											}
											placeholder="******"
											inputProps={{}}
										/>
										{touched.password &&
											errors.password && (
												<FormHelperText
													error
													id="helper-text-password-signup"
												>
													{errors.password}
												</FormHelperText>
											)}
									</Stack>
									{/* password strength indicator */}
									<FormControl fullWidth sx={{ mt: 2 }}>
										<Grid
											container
											spacing={2}
											alignItems="center"
										>
											<Grid item>
												<Box
													sx={{
														bgcolor: level?.color,
														width: 350,
														height: 8,
														borderRadius: "7px",
													}}
												/>
											</Grid>
											<Grid item>
												<Typography
													variant="subtitle1"
													fontSize="0.75rem"
													color="white"
												>
													{level?.label}
												</Typography>
											</Grid>
										</Grid>
									</FormControl>
								</Grid>
								{/* password Confirm */}
								<Grid item xs={12}>
									<Stack spacing={1}>
										<InputLabel htmlFor="passwordConfirm-signup">
											Confirm Password
										</InputLabel>
										<OutlinedInput
											fullWidth
											error={Boolean(
												touched.passwordConfirm &&
													errors.passwordConfirm
											)}
											id="passwordConfirm-signup"
											type={
												showConfirmPassword
													? "text"
													: "password"
											}
											value={values.passwordConfirm}
											name="passwordConfirm"
											onBlur={handleBlur}
											onChange={(e) => {
												handleChange(e);
											}}
											endAdornment={
												<InputAdornment position="end">
													<IconButton
														aria-label="toggle passwordConfirm visiblity"
														onClick={
															handleShowHideConfirmPassword
														}
														onMouseDown={
															handleMouseDownPassword
														}
														edge="end"
														size="large"
													>
														{showConfirmPassword ? (
															<Visibility />
														) : (
															<VisibilityOff />
														)}
													</IconButton>
												</InputAdornment>
											}
											placeholder="******"
											inputProps={{}}
										/>
										{touched.passwordConfirm &&
											errors.passwordConfirm && (
												<FormHelperText
													error
													id="helper-text-passwordConfirm-signup"
												>
													{errors.passwordConfirm}
												</FormHelperText>
											)}
									</Stack>
								</Grid>
								{/* display any submission errors */}
								{errors.submit && (
									<Grid item xs={12}>
										<FormHelperText error>
											{errors.submit}
										</FormHelperText>
									</Grid>
								)}
								{/* Create account button */}
								<Grid item xs={12}>
									<AuthButtonAnimation>
										<Button
											sx={{
												color: 'white',
												bgcolor: 'black',
												"&:hover":{
													bgcolor: 'black'
												}
											  }}
											disableElevation
											disabled={isSubmitting}
											fullWidth
											size="large"
											type="submit"
											variant="contained"
											
										>
											Create Account
										</Button>
									</AuthButtonAnimation>
								</Grid>
							</Grid>
						)}
					</form>
				)}
			</Formik>
		</>
	);
};

export default Singupp;