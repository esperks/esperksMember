// @mui
import { Alert, Tooltip, Stack, Typography, Link, Box } from "@mui/material";
// hooks
import { useAuthContext } from "../../auth/useAuthContext";
// layouts
import LoginLayout from "../../layouts/login";
//
import AuthLoginForm from "./AuthLoginForm";
import AuthWithSocial from "./AuthWithSocial";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH_AUTH } from "src/routes/paths";
import { client } from "src/Api/apiList";

// ----------------------------------------------------------------------

export default function Login() {
  const { method } = useAuthContext();
  const navigate = useNavigate();
  const handleNavigate = () => {
    console.log(client.registration, "click event");
    navigate(`${client.registration}`); // Replace '/create-account' with the desired route
  };

  return (
    <LoginLayout>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4" textAlign={"center"}>
          Sign in to{" "}
          <Typography variant="h4" component={"span"} color={"primary.main"}>
            Esperks
          </Typography>
        </Typography>
      </Stack>

      <AuthLoginForm />
      <Stack spacing={3} sx={{ position: "relative", my: 2 }}>
        <Typography variant="h6" textAlign="left">
          New user?{" "}
          <Typography
            onClick={handleNavigate}
            variant="h6"
            component="span"
            sx={{
              color: "green",
              display: "inline-block",
              marginLeft: "8px", // Add spacing between the question mark and text
              cursor: "pointer", // Mouse pointer style
              "&:hover": {
                textDecoration: "underline", // Optional: Add underline on hover
              },
            }}
          >
            Create an account
          </Typography>
        </Typography>
      </Stack>
    </LoginLayout>
  );
}
