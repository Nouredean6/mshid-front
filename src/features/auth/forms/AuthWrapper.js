import { Box } from "@mui/material";

const AuthWrapper = ({ children }) => {
	return (
		<Box
			sx={{
				display: 'flex',
    			justifyContent: 'center',
    			alignItems: 'center',
    			minHeight: '115vh',
    			width: '100%',
    			background: 'url("https://images.unsplash.com/photo-1677246353413-e4488ec16253?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80") no-repeat',
    			backgroundPosition: 'center',
    			backgroundSize: 'cover',
			}}
		>
			{children}
		</Box>
	);
};

export default AuthWrapper;
