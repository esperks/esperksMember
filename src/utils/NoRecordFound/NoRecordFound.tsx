import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { NoRecordFoundSVG } from "src/assets/icons";
import { m } from "framer-motion";

const NoRecordFound = (props: any) => {
  const text1 = props ? props.text1 : "";
  const text2 = props ? props.text2 : "";
  return (
    <Box
      gap={"40px"}
      display={"flex"}
      justifyContent={"center"}
      sx={{
        backgroundColor: "white",
        borderBottom: "none",
      }}
      height={"auto"}
    >
      <Stack display={"flex"} justifyContent={"center"} textAlign={"center"}>
        <NoRecordFoundSVG
          sx={{
            maxHeight: 120,
            my: { xs: 2, sm: 5 },
          }}
        />
        <Typography
          fontFamily={"Public Sans"}
          fontSize={20}
          sx={{ mt: 4 }}
          fontWeight={700}
          fontStyle={"normal"}
          color={"#161C24"}
        >
          No {text1} Records Found
        </Typography>
        <Typography
          fontFamily={"Public Sans"}
          fontSize={"12px"}
          fontStyle={"normal"}
          lineHeight={"18px"}
          color={"#454F5B"}
          fontWeight={400}
          sx={{ my: 6, mt: 1 }}
        >
          Please add new {text2} for see details
        </Typography>
      </Stack>
    </Box>
  );
};

export default NoRecordFound;
