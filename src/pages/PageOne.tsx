import { Helmet } from "react-helmet-async";
// @mui
import { Container, Typography } from "@mui/material";
// components
import { useSettingsContext } from "../components/settings";

// ----------------------------------------------------------------------

export default function Main() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Helmet>
        <title> Dashboard | Esperks </title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : "xl"}>
        <Typography variant="h3" component="h1" paragraph>
          Main Dashboard
        </Typography>

        <Typography gutterBottom>Working ...</Typography>

        <Typography>Dashboard Content</Typography>
      </Container>
    </>
  );
}
