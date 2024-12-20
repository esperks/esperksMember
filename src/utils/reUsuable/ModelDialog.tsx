import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Stack } from "@mui/system";
// import Wallet from "../../assets/Wallet.svg";
import { Typography } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ModalDialog(props: any) {
  const propsValue = props && props;

  return (
    <React.Fragment>
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={propsValue.open}
        PaperProps={{
          sx: {
            backgroundColor: propsValue.BgColor, // Change background color here
            color: propsValue.TextColor,
            borderRadius: "8px",
          },
        }}
      >
        {/* <IconButton
          aria-label="close"
          onClick={() => propsValue.setapKnowMoreOpen(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton> */}
        <DialogTitle sx={{ p: 2 }} id="customized-dialog-title">
          <Stack direction="row" spacing={0.5}>
            <Typography color={propsValue.TextColor}>
              {propsValue.modelTitle}
            </Typography>
            {/* <img src={Wallet} height={20} width={30} alt="" /> */}
          </Stack>
        </DialogTitle>
        <DialogContent>
          <Typography color={propsValue.TextColor}>
            {propsValue.modelSubtitle}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            size="small"
            sx={{ px: 2, mx: 2, my: 1 }}
            style={{
              textTransform: "none",
              color: propsValue.TextColor,
              borderRadius: "8px",
              fontSize: "11px",
              border: `1px solid ${propsValue.TextColor}`,
              fontWeight: "700",
            }}
            onClick={() => propsValue.setapKnowMoreOpen(false)}
          >
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
