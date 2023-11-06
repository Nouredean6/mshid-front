import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/Navbar";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { FaSignInAlt } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import AuthWrapper from "../features/auth/forms/AuthWrapper";
import Login from "../components/login/login";

const Signin = () => {
  return (
    <>
      <Navbar />
      <AuthWrapper>
        <Container
          component="main"
          maxWidth="sm"
          sx={{
            border: "2px solid #e4e5e7",
            borderRadius: "20px",
            py: 2,
            mx: 2,
            position: "relative",
            background: "transparent",
            border: "2px solid rgba(255,255,255,0.6)",
            backdropFilter: "blur(5px)",
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
                <Typography variant="h2">Log In</Typography>
              </Box>
            </Grid>
            <Login />
            {/* Add the "Forgot Password" link to navigate to the forgot password page */}
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Link to="/forgot-password" component={RouterLink} color="primary">
                  Forgot Password?
                </Link>
              </Box>
            </Grid>
            <Divider sx={{ flexGrow: 1, mb: 1, mt: 1 }} orientation="horizontal" />
            <Grid item xs={12}>
              <Box
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">
                  Don't have an account?
                  <Link
                    variant="h6"
                    component={RouterLink}
                    to="/register"
                    sx={{ textDecoration: "none" }}
                  >
                    Sign Up Here
                  </Link>
                </Typography>
              </Box>
            </Grid>
            <Divider sx={{ flexGrow: 1, mb: 1, mt: 1 }} orientation="horizontal" />
          </Grid>
        </Container>
      </AuthWrapper>
      <Footer />
    </>
  );
};

export default Signin;
