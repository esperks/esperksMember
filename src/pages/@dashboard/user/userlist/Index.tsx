import { Helmet } from "react-helmet-async";
// @mui
import { Box, Container, Stack } from "@mui/material";
// routes
import { PATH_DASHBOARD } from "../../../../routes/paths";
// components
import { useSettingsContext } from "../../../../components/settings";
import CustomBreadcrumbs from "../../../../components/custom-breadcrumbs";
import Main from "./Main";
// sections

// ----------------------------------------------------------------------

export default function UserListPage() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> Users | Esperks</title>
      </Helmet>
      <Box px={2}>
        <CustomBreadcrumbs
          heading="Client Details"
          links={[
            {
              name: "Dashboard",
              href: PATH_DASHBOARD.root,
            },
            {
              name: "User",
            },
            { name: "list" },
          ]}
        />
        <Main />
      </Box>
    </>
  );
}
