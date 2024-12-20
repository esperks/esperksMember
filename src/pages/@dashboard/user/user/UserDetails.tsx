import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Stack } from "@mui/system";
import {
  Box,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { CloseIcon } from "src/theme/overrides/CustomIcons";
import { splitDateConversion } from "src/utils/validations/Date";
import useCopyToClipboard from "src/utils/helper/useCopyToClipboard";
import { Icon } from "@iconify/react";
import CopyToClipboardToolkit from "src/utils/helper/copyToClipToolkit";

// Model For Specific User Details
const UserDetails = (props: any) => {
  const user: any = props.viewUser;
  const isValidUrl = (url: string) => {
    try {
      new URL(url); // Attempts to create a URL object, which will throw an error if invalid
      return true;
    } catch (e) {
      return false;
    }
  };
  const { copy } = useCopyToClipboard();
  const onCopy = (text: string) => {
    if (text) {
      // SuccessMsg("Copied Successfully!");
      copy(text);
    }
  };

  return (
    <Dialog
      open={props.open}
      PaperProps={{
        sx: {
          borderRadius: "8px",
          maxWidth: "90vw", // Responsive width for different screen sizes
          maxHeight: "90vh", // Ensure it doesn't overflow
          overflowY: "auto", // Allow scrolling inside the dialog
        },
      }}
      onClose={props.closeUserDetails} // Proper close on background click as well
    >
      <IconButton
        aria-label="close"
        onClick={props.closeUserDetails}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogTitle sx={{ mx: 4 }} id="customized-dialog-title">
        <Stack direction="row" spacing={0.5}>
          <Typography fontWeight={700}>Client Information -</Typography>
        </Stack>
      </DialogTitle>
      <DialogContent sx={{ mx: 4, overflow: "hidden" }}>
        {props.getUser ? (
          <Box display={"flex"} justifyContent={"center"} py={15}>
            <CircularProgress
              color="inherit"
              sx={{ color: "grey" }}
              size={30}
            />
          </Box>
        ) : (
          <Box borderRadius={"16px"} maxWidth="100%">
            <Box
              boxShadow={
                "0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20)"
              }
              borderRadius={"16px"}
              mx={2}
            >
              {user && Object.keys(user).length === 0 ? (
                <Box display={"flex"} justifyContent={"center"} py={15}>
                  <CircularProgress
                    color="inherit"
                    sx={{ color: "grey" }}
                    size={30}
                  />
                </Box>
              ) : (
                <Box>
                  <Stack
                    p={2}
                    px={3}
                    spacing={4}
                    direction={"row"}
                    flexWrap="wrap" // Ensure content wraps for smaller screens
                    justifyContent="space-between"
                  >
                    <Stack minWidth={200} maxWidth="100%">
                      <Typography
                        fontSize={13}
                        color={"Grey"}
                        fontFamily={"Public Sans"}
                        fontWeight={700}
                      >
                        Client Details
                      </Typography>
                      <Typography
                        fontSize={13}
                        color={"#303981"}
                        fontFamily={"Public Sans"}
                        fontWeight={700}
                      >
                        {user.name || "N/A"}
                      </Typography>
                      <Typography
                        fontSize={12}
                        color={"#212B36"}
                        fontFamily={"Public Sans"}
                        fontWeight={500}
                      >
                        GST: {user.gstNumber || "N/A"}
                        <CopyToClipboardToolkit
                          text={user.gstNumber || "N/A"}
                        />
                      </Typography>
                      <Typography
                        fontSize={11}
                        color={"#212B36"}
                        fontFamily={"Public Sans"}
                      >
                        {user.state || "N/A"}
                      </Typography>
                    </Stack>
                    <Stack minWidth={200} maxWidth="100%">
                      <Typography
                        fontSize={13}
                        color={"Grey"}
                        fontFamily={"Public Sans"}
                        fontWeight={700}
                      >
                        Contact
                      </Typography>
                      <Typography
                        fontSize={12}
                        color={"#212B36"}
                        fontFamily={"Public Sans"}
                        fontWeight={500}
                      >
                        Code: {user.code || "N/A"}
                        <CopyToClipboardToolkit text={user.code || "N/A"} />
                      </Typography>
                      <Typography
                        fontSize={12}
                        color={"#212B36"}
                        fontFamily={"Public Sans"}
                        fontWeight={500}
                      >
                        Mobile: {user.mobile || "N/A"}
                        <CopyToClipboardToolkit text={user.mobile || "N/A"} />
                      </Typography>
                      <Typography
                        fontSize={11}
                        color={"#212B36"}
                        fontFamily={"Public Sans"}
                      >
                        Email: {user.email || "N/A"}
                      </Typography>
                    </Stack>
                    <Stack minWidth={200} maxWidth="100%">
                      <Typography
                        fontSize={13}
                        color={"Grey"}
                        fontFamily={"Public Sans"}
                        fontWeight={700}
                      >
                        Signing Info
                      </Typography>
                      {/* Check if signingInfo exists and render */}
                      {user.signingInfo ? (
                        <>
                          <Typography
                            fontSize={12}
                            color={"#212B36"}
                            fontFamily={"Public Sans"}
                            fontWeight={600}
                          >
                            {user.signingInfo.companyName || "N/A"}
                          </Typography>
                          <Typography
                            fontSize={11}
                            color={"#212B36"}
                            fontFamily={"Public Sans"}
                          >
                            AP: {user.signingInfo.authorizedPerson || "N/A"}
                          </Typography>
                          <Typography
                            fontSize={11}
                            color={"#212B36"}
                            fontFamily={"Public Sans"}
                          >
                            Role: {user.signingInfo.designation || "N/A"}
                          </Typography>
                        </>
                      ) : (
                        <Typography
                          fontSize={12}
                          color={"#212B36"}
                          fontFamily={"Public Sans"}
                        >
                          Signing Information not available
                        </Typography>
                      )}
                    </Stack>
                  </Stack>

                  <Stack padding={3} spacing={2}>
                    <Stack>
                      <Typography
                        fontSize={13}
                        color={"Grey"}
                        mb={2}
                        fontFamily={"Public Sans"}
                        fontWeight={700}
                      >
                        General Signing Info
                      </Typography>
                      <Typography
                        fontSize={12}
                        color={"#212B36"}
                        fontFamily={"Public Sans"}
                        fontWeight={500}
                      >
                        Fee Charge: {user.aggreementAmount || "N/A"}
                      </Typography>
                      <Typography
                        fontSize={11}
                        color={"#212B36"}
                        fontFamily={"Public Sans"}
                      >
                        Balance:{" "}
                        {user.wallet?.balance
                          ? parseFloat(user.wallet.balance).toFixed(2)
                          : "N/A"}
                      </Typography>
                      <Typography
                        fontSize={11}
                        color={"#212B36"}
                        fontFamily={"Public Sans"}
                      >
                        Date:{" "}
                        {user.signingInfo?.createdAt
                          ? splitDateConversion(user.signingInfo.createdAt)
                          : "N/A"}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        fontSize={13}
                        color={"#303981"}
                        fontFamily={"Public Sans"}
                        fontWeight={500}
                      >
                        Android Redirect Uri:
                      </Typography>
                      <Typography
                        fontSize={12}
                        color={"#212B36"}
                        fontFamily={"Public Sans"}
                        fontWeight={500}
                      >
                        {user.androidRedirectUri || "N/A"}
                        <CopyToClipboardToolkit
                          text={user.androidRedirectUri || "N/A"}
                        />
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        fontSize={13}
                        color={"#303981"}
                        fontFamily={"Public Sans"}
                        fontWeight={500}
                      >
                        IOS Redirect Uri:
                      </Typography>
                      <Typography
                        fontSize={12}
                        color={"#212B36"}
                        fontFamily={"Public Sans"}
                        fontWeight={500}
                      >
                        {user.iosRedirectUri || "N/A"}
                        <CopyToClipboardToolkit
                          text={user.iosRedirectUri || "N/A"}
                        />
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        fontSize={13}
                        color={"#303981"}
                        fontFamily={"Public Sans"}
                        fontWeight={500}
                      >
                        Web Redirect Uri:
                      </Typography>
                      <Typography
                        fontSize={12}
                        color={"#212B36"}
                        fontFamily={"Public Sans"}
                        fontWeight={500}
                      >
                        {user.webRedirectUri || "N/A"}
                        <CopyToClipboardToolkit
                          text={user.webRedirectUri || "N/A"}
                        />
                      </Typography>
                    </Stack>

                    <Stack>
                      <Typography
                        fontSize={13}
                        color={"#303981"}
                        fontFamily={"Public Sans"}
                        fontWeight={500}
                      >
                        Call Back Url:
                      </Typography>
                      <Typography
                        fontSize={12}
                        color={"#212B36"}
                        fontFamily={"Public Sans"}
                        fontWeight={500}
                      >
                        {user.callbackUrl || "N/A"}
                        <CopyToClipboardToolkit
                          text={user.callbackUrl || "N/A"}
                        />
                      </Typography>
                    </Stack>
                    <Stack>
                      <Stack direction={"row"} spacing={3}>
                        <Stack>
                          <Typography
                            fontSize={13}
                            color={"#303981"}
                            fontFamily={"Public Sans"}
                            fontWeight={500}
                          >
                            Signature
                          </Typography>
                          {/* Check if signature exists and render */}
                          {user.signingInfo &&
                          user.signingInfo.signature &&
                          isValidUrl(user.signingInfo.signature) ? (
                            <img
                              src={user.signingInfo.signature}
                              height={60}
                              width={120}
                              alt="Signature"
                            />
                          ) : (
                            <Typography
                              fontSize={12}
                              color={"red"}
                              fontFamily={"Public Sans"}
                            >
                              {user.signingInfo?.signature
                                ? "Invalid Signature"
                                : "Signature not available"}
                            </Typography>
                          )}
                        </Stack>
                        <Stack>
                          <Typography
                            fontSize={13}
                            color={"#303981"}
                            fontFamily={"Public Sans"}
                            fontWeight={500}
                          >
                            Stamp
                          </Typography>
                          {/* Check if signature exists and render */}
                          {user.signingInfo &&
                          user.signingInfo.stamp &&
                          isValidUrl(user.signingInfo.stamp) ? (
                            <img
                              src={
                                user &&
                                user.signingInfo &&
                                user.signingInfo.stamp
                              }
                              height={60}
                              width={120}
                              alt=""
                            />
                          ) : (
                            <Typography
                              fontSize={12}
                              color={"red"}
                              fontFamily={"Public Sans"}
                            >
                              {user.signingInfo?.stamp
                                ? "Invalid Stamp"
                                : "Stamp not available"}
                            </Typography>
                          )}
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              )}
            </Box>
          </Box>
        )}
      </DialogContent>
      <DialogActions sx={{ padding: "16px 24px" }}>
        <Button
          onClick={props.closeUserDetails}
          color="primary"
          variant="contained"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserDetails;
