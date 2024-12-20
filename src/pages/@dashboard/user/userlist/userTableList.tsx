import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";

import {
  Typography,
  Stack,
  useTheme,
  TableContainer,
  TableRow,
} from "@mui/material";

import NoRecordFound from "src/utils/NoRecordFound/NoRecordFound";
import { splitDateConversion } from "src/utils/validations/Date";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { CircularTableLoader } from "src/components/circularTableLoader";
import UserDetails from "../user/UserDetails";

const UserTableList = (props: any) => {
  const theme = useTheme();
  const userList = props ? props.props : [];
  const densMode = props ? props.denseMode : false;
  const [open, setOpen] = useState(false);
  const [getUser, setGetUser] = useState(false);
  const [viewUser, setViewUser] = useState({});
  const openUserDetails = async (item: any) => {
    setGetUser(true);
    setViewUser({});
    setOpen(true);
    let data = item;
    setViewUser(data);
    setGetUser(false);
  };
  const closeUserDetails = () => {
    setOpen(false);
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: theme.palette.mode || "#F7F9FB" }}>
              <TableCell
                sx={{
                  borderBottom: "none",
                  px: 3,
                }}
              >
                <Typography
                  fontSize={14}
                  fontWeight={600}
                  fontFamily={"Public Sans"}
                  color={"grey"}
                >
                  Client Details
                </Typography>
              </TableCell>

              <TableCell
                sx={{
                  borderBottom: "none",
                }}
              >
                <Typography
                  fontSize={14}
                  fontWeight={600}
                  fontFamily={"Public Sans"}
                  color={"grey"}
                >
                  Contact
                </Typography>
              </TableCell>

              <TableCell
                sx={{
                  borderBottom: "none",
                }}
              >
                <Typography
                  fontSize={14}
                  fontWeight={600}
                  fontFamily={"Public Sans"}
                  color={"grey"}
                >
                  POC / Date
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                }}
              >
                <Typography
                  fontSize={14}
                  fontWeight={600}
                  fontFamily={"Public Sans"}
                  color={"grey"}
                >
                  Signing Info
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                }}
              >
                <Typography
                  fontSize={14}
                  fontWeight={600}
                  fontFamily={"Public Sans"}
                  color={"grey"}
                >
                  Wallet Balance
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  textAlign: "center",
                }}
              >
                <Typography
                  fontSize={14}
                  fontWeight={600}
                  fontFamily={"Public Sans"}
                  color={"grey"}
                >
                  Invoices
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                  textAlign: "center",
                }}
              >
                <Typography
                  fontSize={14}
                  fontWeight={600}
                  fontFamily={"Public Sans"}
                  color={"grey"}
                >
                  Update Wallet
                </Typography>
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "none",
                }}
              >
                <Typography
                  fontSize={14}
                  fontWeight={600}
                  fontFamily={"Public Sans"}
                  color={"grey"}
                >
                  Action
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.length > 0
              ? userList.map((item: any, index: any) => {
                  return (
                    <TableRow key={index}>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          borderBottom: "none",
                          p: densMode ? 2 : 0.5,
                          px: 3,
                        }}
                      >
                        <Typography
                          fontSize={13}
                          color={"#303981"}
                          fontFamily={"Public Sans"}
                          fontWeight={700}
                        >
                          {item.name && item.name !== "" ? item.name : "N/A"}
                        </Typography>
                        <Typography
                          fontSize={12}
                          color={"#212B36"}
                          fontFamily={"Public Sans"}
                          fontWeight={500}
                        >
                          GST: {item && item.gstNumber ? item.gstNumber : "N/A"}
                        </Typography>
                        <Typography
                          fontSize={11}
                          color={"#212B36"}
                          fontFamily={"Public Sans"}
                        >
                          {item && item.state !== "" ? item.state : "N/A"}
                        </Typography>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          borderBottom: "none",
                          p: 0,
                        }}
                      >
                        <Typography
                          fontSize={12}
                          color={"#212B36"}
                          fontFamily={"Public Sans"}
                          fontWeight={500}
                        >
                          Code: {item && item.code ? item.code : "N/A"}
                        </Typography>
                        <Typography
                          fontSize={12}
                          color={"#212B36"}
                          fontFamily={"Public Sans"}
                          fontWeight={500}
                        >
                          M.No: {item && item.mobile ? item.mobile : "N/A"}
                        </Typography>
                        <Typography
                          fontSize={11}
                          color={"#212B36"}
                          fontFamily={"Public Sans"}
                        >
                          {item && item.email !== "" ? item.email : "N/A"}
                        </Typography>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          py: 0,
                          borderBottom: "none",
                        }}
                      >
                        <Stack>
                          <Typography
                            fontSize={13}
                            color={"#212B36"}
                            fontFamily={"Public Sans"}
                            fontWeight={600}
                          >
                            {item.poc ? item.poc : "N/A"}
                          </Typography>
                          <Typography
                            fontSize={10}
                            color={"#212B36"}
                            fontFamily={"Public Sans"}
                          >
                            Date:
                            {item && item.createdAt !== ""
                              ? splitDateConversion(item.createdAt)
                              : "N/A"}
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{
                          borderBottom: "none",
                          px: 3,
                          py: 0,
                        }}
                      >
                        <Typography
                          fontSize={13}
                          color={"#303981"}
                          fontFamily={"Public Sans"}
                          fontWeight={700}
                        >
                          {item.signingInfo && item.signingInfo
                            ? item.signingInfo.companyName
                            : "N/A"}
                        </Typography>
                        <Typography
                          fontSize={12}
                          color={"#212B36"}
                          fontFamily={"Public Sans"}
                          fontWeight={500}
                        >
                          AP :
                          {item && item.signingInfo
                            ? item.signingInfo.authorizedPerson
                            : "N/A"}
                        </Typography>
                        <Typography
                          fontSize={11}
                          color={"#212B36"}
                          fontFamily={"Public Sans"}
                        >
                          CIN:
                          {item && item.signingInfo
                            ? item.signingInfo.cin
                            : "N/A"}
                        </Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          borderBottom: "none",
                          py: 0,
                        }}
                      >
                        <Typography
                          fontSize={13}
                          color={"#212B36"}
                          fontFamily={"Public Sans"}
                        >
                          {item && item.wallet && item.wallet.balance
                            ? parseFloat(item.wallet.balance).toFixed(2)
                            : 0}
                        </Typography>
                      </TableCell>
                      <TableCell
                        sx={{
                          borderBottom: "none",
                          py: 0,
                        }}
                      >
                        <LoadingButton
                          variant="contained"
                          onClick={() => props.openUserInvoice(item)}
                          sx={{
                            fontSize: "12px",
                            fontFamily: "Public Sans",
                            borderRadius: "8px",
                            fontWeight: 700,
                            px: "4px",
                            py: "4px",
                            gap: "4px",
                            lineHeight: "22px",
                            fontStyle: "normal",
                            border: "1px solid  rgba(145, 158, 171, 0.32)",
                            textTransform: "none",
                            "&:hover": {
                              backgroundColor: "#36B37E",
                              color: "white",
                            },
                          }}
                        >
                          {/* {!isEdit ? "Create User" : "Save Changes"} */}
                          {"Invoice"}
                        </LoadingButton>
                      </TableCell>
                      <TableCell
                        sx={{
                          borderBottom: "none",
                          py: 0,
                        }}
                      >
                        <LoadingButton
                          variant="contained"
                          onClick={() => props.openWalletUpdate(item)}
                          sx={{
                            fontSize: "12px",
                            fontFamily: "Public Sans",
                            borderRadius: "8px",
                            fontWeight: 700,
                            px: "8px",
                            py: "4px",
                            gap: "4px",
                            lineHeight: "20px",
                            fontStyle: "normal",
                            border: "1px solid  rgba(145, 158, 171, 0.32)",
                            textTransform: "none",
                            "&:hover": {
                              backgroundColor: "#36B37E",
                              color: "white",
                            },
                          }}
                        >
                          {/* {!isEdit ? "Create User" : "Save Changes"} */}
                          {"Update"}
                        </LoadingButton>
                      </TableCell>
                      <TableCell
                        sx={{
                          borderBottom: "none",
                          py: 0,
                        }}
                      >
                        <LoadingButton
                          variant="contained"
                          onClick={() => openUserDetails(item)}
                          sx={{
                            fontSize: "12px",
                            fontFamily: "Public Sans",
                            borderRadius: "8px",
                            fontWeight: 700,
                            px: "8px",
                            py: "4px",
                            gap: "8px",
                            lineHeight: "22px",
                            fontStyle: "normal",
                            border: "1px solid  rgba(145, 158, 171, 0.32)",
                            textTransform: "none",
                            "&:hover": {
                              backgroundColor: "#36B37E",
                              color: "white",
                            },
                          }}
                        >
                          {/* {!isEdit ? "Create User" : "Save Changes"} */}
                          {"View"}
                        </LoadingButton>
                      </TableCell>
                    </TableRow>
                  );
                })
              : ""}
          </TableBody>
        </Table>

        <>
          {userList.length <= 0 ? (
            <NoRecordFound text1={"Users"} text2={"user"} />
          ) : (
            ""
          )}
        </>
        <UserDetails
          open={open}
          getUser={getUser}
          viewUser={viewUser}
          closeUserDetails={closeUserDetails}
        />
      </TableContainer>
    </>
  );
};

export default UserTableList;
