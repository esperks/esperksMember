import { Box, Typography } from "@mui/material";

export default function CircularTableLoader() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      my={4}
      width="100%"
    >
      {/* Fancy loader */}
      <Box
        sx={{
          width: "50px",
          height: "50px",
          border: "4px solid #e0e0e0", // Light gray border
          borderTop: "4px solid #4CAF50", // Light green for the rotating part
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      ></Box>

      {/* Loading text */}
      <Typography fontSize={14} color={"#757575"} mt={2}>
        Please wait, Records are fetching...
      </Typography>

      {/* Keyframe animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </Box>
  );
}
