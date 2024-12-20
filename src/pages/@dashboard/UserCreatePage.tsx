import { Helmet } from "react-helmet-async";
// @mui
import { Container, Typography } from "@mui/material";
// routes
import { PATH_AUTH, PATH_DASHBOARD } from "../../routes/paths";
// components
import { useSettingsContext } from "../../components/settings";
import CustomBreadcrumbs from "../../components/custom-breadcrumbs";
// sections
import UserNewEditForm from "../../pages/@dashboard/user/UserNewEditForm";
// import Typography from "src/theme/overrides/Typography";

// ----------------------------------------------------------------------

export default function UserCreatePage() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> User: Create a new user | Esperks</title>
      </Helmet>

      <Container
        maxWidth={themeStretch ? false : "lg"}
        sx={{
          // bgcolor: "background.paper",
          // boxShadow: 3,
          borderRadius: 2,
          padding: { xs: 2 }, // Responsive padding
          mt: 3,
        }}
      >
        {/* <Typography variant="h4">Registration </Typography> */}
        <UserNewEditForm
        // sx={{
        //   bgcolor: "grey.50",
        //   p: { xs: 2, md: 3 },
        //   borderRadius: 2,
        //   boxShadow: 2,
        //   maxWidth: { xs: "100%", md: "70%" }, // Full width on phones
        //   margin: "auto", // Center the form
        // }}
        />
      </Container>
    </>
  );
}
