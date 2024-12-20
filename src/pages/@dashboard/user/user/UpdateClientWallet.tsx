import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Stack } from "@mui/system";
import {
  Box,
  Grid,
  IconButton,
  MenuItem,
  Typography,
  Card,
  TextField,
  Select,
  OutlinedInput,
} from "@mui/material";
import { CloseIcon } from "src/theme/overrides/CustomIcons";
import { LoadingButton } from "@mui/lab";
import ApiService from "src/Api/api";
import * as yup from "yup";
import { paymentMode } from "src/constant/constant";

const UpdateClientWallet = (props: any) => {
  const validationSchema = yup.object({
    amount: yup
      .number()
      .required("Amount is required")
      .positive("Amount must be a positive number"),
    UTR: yup.string().required("UTR Number is required"),
    remarks: yup.string().required("Please provide a reason"),
    modeOfDeposit: yup.string().required("Please select a mode of deposit"),
  });

  const [isLoadingUserWallet, setisLoadingUserWallet] = React.useState(false);
  const token: any = localStorage.getItem("neoToken");
  const user: any = props.updateUser;
  const [userData, setUserData] = React.useState<any>({});

  const handleOnSubmit = async (event: any) => {
    event.preventDefault();
    setisLoadingUserWallet(true);
    let id = user && user._id;
    const data = new FormData(event.currentTarget);
    let body = {
      amount: data.get("amount"),
      depositDate: new Date(),
      UTR: data.get("UTR"),
      modeOfDeposit: data.get("modeOfDeposit"),
      remarks: data.get("remarks"),
    };
    await ApiService.setToken(token);
    const responseData = await ApiService.post(
      `/client/update/wallet/${id}`,
      body
    );
    if (responseData.status === 200) {
      let data = responseData.data.data;
      setUserData(data);
      setisLoadingUserWallet(false);
      props.closeWalletUpdate();
    } else {
      setisLoadingUserWallet(false);
      console.log(responseData, "error----");
    }
  };

  return (
    <Dialog
      open={props.open}
      PaperProps={{
        sx: {
          borderRadius: "8px",
          maxWidth: "900px",
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={props.closeWalletUpdate}
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
          <Typography fontWeight={700}>
            Client Wallet Balance Details
          </Typography>
        </Stack>
      </DialogTitle>
      <DialogContent sx={{ mx: 4 }}>
        <Typography fontSize={12}>
          Please update client wallet balance with the following details below:
        </Typography>
      </DialogContent>
      <DialogContent>
        <Box component="form" onSubmit={handleOnSubmit}>
          <Box borderRadius={"16px"}>
            <Stack p={2} px={3} spacing={4} direction={"row"}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    fontSize={20}
                    fontFamily={"Public Sans"}
                    fontWeight={600}
                    sx={{ px: 2 }}
                  >
                    Update Client Wallet Balance
                  </Typography>
                  <Card sx={{ p: 3 }}>
                    <Box
                      rowGap={3}
                      columnGap={2}
                      display="grid"
                      gridTemplateColumns={{
                        xs: "repeat(1, 1fr)",
                        sm: "repeat(2, 1fr)",
                      }}
                    >
                      <TextField
                        name="amount"
                        label="Amount"
                        type="number"
                        fullWidth
                        required
                        InputLabelProps={{ shrink: true }}
                        error={Boolean(userData.amount)}
                        helperText={userData.amount}
                      />
                      <TextField
                        name="UTR"
                        label="UTR Number"
                        fullWidth
                        required
                        InputLabelProps={{ shrink: true }}
                        error={Boolean(userData.UTR)}
                        helperText={userData.UTR}
                      />
                      <TextField
                        name="remarks"
                        label="Please Enter Reason"
                        fullWidth
                        required
                        InputLabelProps={{ shrink: true }}
                        error={Boolean(userData.remarks)}
                        helperText={userData.remarks}
                      />
                      <Select
                        name="modeOfDeposit"
                        label="Please Select Mode"
                        fullWidth
                        required
                        input={<OutlinedInput label="Mode of Deposit" />}
                        MenuProps={{
                          PaperProps: {
                            style: {
                              maxHeight: 300,
                              width: 250,
                            },
                          },
                        }}
                        error={Boolean(userData.modeOfDeposit)}
                        // helperText={`${userData.modeOfDeposit}`}
                      >
                        {paymentMode.map((mode) => (
                          <MenuItem key={mode.value} value={mode.value}>
                            {mode.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </Stack>
            <DialogActions>
              <LoadingButton
                type="submit"
                size="medium"
                loading={isLoadingUserWallet}
                sx={{ px: 2, my: 1 }}
                style={{
                  textTransform: "none",
                  borderRadius: "8px",
                  fontSize: "11px",
                  border: `1px solid grey`,
                  fontWeight: "700",
                }}
              >
                Update
              </LoadingButton>
            </DialogActions>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateClientWallet;
