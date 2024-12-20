// @mui
import { Stack, Button, Typography, Box } from "@mui/material";
// hooks
import { useAuthContext } from "../../../auth/useAuthContext";
// locales
import { useLocales } from "../../../locales";
import { versionFormatedDate } from "src/utils/validations/Date";
const { version, lastUpdated } = require("../../../../package.json");

// ----------------------------------------------------------------------

export default function NavDocs() {
  const { user } = useAuthContext();

  const { translate } = useLocales();

  return (
    <Stack
      spacing={1}
      sx={{
        px: 5,
        pb: 5,
        mt: 10,
        width: 1,
        display: "block",
        textAlign: "center",
      }}
    >
      <Box component="img" src="/assets/illustrations/illustration_docs.svg" />

      {/* <Button variant="contained">{translate("docs.documentation")}</Button> */}
      <Button variant="contained">Version : {version}</Button>
      <div>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", whiteSpace: "pre-line" }}
        >
          {versionFormatedDate(lastUpdated)}
        </Typography>
      </div>
    </Stack>
  );
}
