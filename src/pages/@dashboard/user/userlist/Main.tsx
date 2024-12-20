import {
  Box,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  TablePagination,
  useTheme,
  FormControlLabel,
  Switch,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import ApiService from "src/Api/api";
import UpdateClientWallet from "../user/UpdateClientWallet";
import Invoices from "../../Invoice/Invoices";
import { useSettingsContext } from "src/components/settings";
import UserTableList from "./userTableList";
import { CircularTableLoader } from "src/components/circularTableLoader";

const Main = () => {
  //  Theme Settings
  const theme = useTheme();
  // Token get from localstorage
  const token: any = localStorage.getItem("neoToken") || null;
  // Table Dense Mode
  const [denseMode, setdenseMode] = useState(false);
  const [isWalletUpdate, setisWalletUpdate] = useState(false);
  const [apiStep2, setApiStep2] = useState(false);

  const [invoiceOpen, setInvoiceOpen] = useState(false);
  // userlist for save data from all users
  const [OrderList, setOrderLists] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const [updateWalletDialog, setupdateWalletDialog] = useState(false);

  // const Item = styled(Paper)(({ theme }) => ({
  //   ...theme.typography.body2,
  //   padding: theme.spacing(0.5),
  //   borderRadius: "18px",
  //   color: theme.palette.text.secondary,
  //   gap: 1,
  // }));
  // Pagination - View User
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    getUserList();
    setPage(0);
  };

  const [invoiceUserView, setinvoiceUserView] = useState<any>({});
  const [updateUserWallet, setUpdateUserWallet] = useState<any>({});

  //// Client / User List - - - - - - - - - - - - - - - -
  const [orderTableOpen, setorderTableOpen] = useState(true);
  const getUserList = async () => {
    let params = {
      page: page + 1,
      limit: rowsPerPage ? rowsPerPage : 5,
      searchValue: searchValue,
    };
    await ApiService.setToken(token);
    const responseData: any = await ApiService.get("/client", params);
    if (responseData.status == 200) {
      let list = responseData.data.data;
      let count = responseData.data.total;
      setTotalCount(count);
      if (list.length > 0) {
        setOrderLists(list);
      } else {
        setOrderLists([]);
      }
      setorderTableOpen(false);
    } else {
      setorderTableOpen(false);
    }
    setApiStep2(true);
  };

  useEffect(() => {
    if (token) {
      getUserList();
    }
  }, [isWalletUpdate, apiStep2, updateWalletDialog, rowsPerPage, page, token]);

  // viewUser Model -----------------------
  const openUserInvoice = async (item: any) => {
    setinvoiceUserView(item);
    setInvoiceOpen(true);
  };
  const closeInvoiceDialog = () => {
    setInvoiceOpen(false);
  };
  const verifyWalletUpdate = () => {
    setisWalletUpdate(true);
    console.log(isWalletUpdate);
  };

  // Wallet Update Modal ---------------------
  const openWalletUpdate = async (item: any) => {
    setUpdateUserWallet(item);
    setupdateWalletDialog(true);
  };
  const closeWalletUpdate = async (item: any) => {
    setupdateWalletDialog(false);
  };
  const { themeStretch } = useSettingsContext();

  return (
    <Box borderRadius={"16px"}>
      <>
        {/* Main Table Format */}
        <Box
          boxShadow={
            "0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20)"
          }
          borderRadius={"16px"}
          sx={{ backgroundColor: theme.palette.mode }}
        >
          <Stack
            sx={{ mx: 2 }}
            display={"flex"}
            direction={"row"}
            spacing={0.5}
          >
            <TextField
              fullWidth
              onChange={(e) => setsearchValue(e.target.value)}
              placeholder="Search by Client Name, GST, POC"
              value={searchValue}
              InputProps={{
                sx: {
                  my: 1,
                },
                style: { borderRadius: "10px", height: "50px" },
                startAdornment: (
                  <InputAdornment position="start">
                    {/* <SearchIcon /> */}
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Box>
            {!apiStep2 ? (
              <CircularTableLoader />
            ) : (
              <UserTableList
                props={OrderList}
                open={apiStep2}
                denseMode={denseMode}
                openWalletUpdate={openWalletUpdate}
                openUserInvoice={openUserInvoice}
              />
            )}
          </Box>
          <Divider></Divider>
          <Box px={2}>
            <Stack
              display={"flex"}
              direction={"row"}
              justifyContent={"space-between"} // Aligns elements with space in between
            >
              <FormControlLabel
                sx={{
                  display: "block",
                }}
                control={
                  <Switch
                    checked={denseMode}
                    onChange={() => setdenseMode(!denseMode)}
                    name="Dense Mode"
                    color="primary"
                  />
                }
                label="dense Mode"
              />
              <TablePagination
                component="div"
                count={totalCount}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Stack>
          </Box>
        </Box>
      </>

      <>
        {/* Update Wallet Modal */}
        <UpdateClientWallet
          open={updateWalletDialog}
          setisWalletUpdate={verifyWalletUpdate}
          updateUser={updateUserWallet}
          closeWalletUpdate={closeWalletUpdate}
        />
      </>
      <>
        {/* invoice Modal */}
        <Invoices
          open={invoiceOpen}
          invoiceUserView={invoiceUserView}
          closeInvoiceDialog={closeInvoiceDialog}
        />
      </>
    </Box>
  );
};

export default Main;
