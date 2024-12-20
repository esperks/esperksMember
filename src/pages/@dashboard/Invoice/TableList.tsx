import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography, useTheme, Stack } from "@mui/material";
import NoRecordFound from "src/utils/NoRecordFound/NoRecordFound";
import { splitDateConversion } from "src/utils/validations/Date";
const TableList = (props: any) => {
  const theme = useTheme();
  const invoiceList = props && props.invoiceList;
  return (
    <>
      <Table>
        <TableHead>
          <TableRow
            sx={{ backgroundColor: theme.palette.mode, borderRadius: "16px" }}
          >
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
                Invoice Details
              </Typography>
            </TableCell>

            <TableCell
              sx={{
                borderBottom: "none",
                px: 0,
                pr: 2,
              }}
            >
              {" "}
              <Typography
                fontSize={14}
                fontWeight={600}
                fontFamily={"Public Sans"}
                color={"grey"}
              >
                Bank Details
              </Typography>
            </TableCell>

            <TableCell
              sx={{
                borderBottom: "none",
              }}
            >
              {" "}
              <Typography
                fontSize={14}
                fontWeight={600}
                fontFamily={"Public Sans"}
                color={"grey"}
              >
                Amount
              </Typography>
            </TableCell>

            <TableCell
              sx={{
                borderBottom: "none",
              }}
            >
              {" "}
              <Typography
                fontSize={14}
                fontWeight={600}
                fontFamily={"Public Sans"}
                color={"grey"}
              >
                SGST
              </Typography>
            </TableCell>

            <TableCell
              sx={{
                borderBottom: "none",
              }}
            >
              {" "}
              <Typography
                fontSize={14}
                fontWeight={600}
                fontFamily={"Public Sans"}
                color={"grey"}
              >
                CGST
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
              }}
            >
              {" "}
              <Typography
                fontSize={14}
                fontWeight={600}
                fontFamily={"Public Sans"}
                color={"grey"}
              >
                IGST
              </Typography>
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
              }}
            >
              {" "}
              <Typography
                fontSize={14}
                fontWeight={600}
                fontFamily={"Public Sans"}
                color={"grey"}
              >
                Taxable Amount
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoiceList.length > 0
            ? invoiceList.map((item: any, index: any) => {
                return (
                  <TableRow key={index + item._id}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        borderBottom: "none",
                        p: props.denseMode ? 2 : 0.5,
                        px: 3,
                      }}
                    >
                      <Typography
                        fontSize={13}
                        color={"#303981"}
                        fontFamily={"Public Sans"}
                        fontWeight={700}
                      >
                        Invoice :{" "}
                        {item && item.invoiceNumber
                          ? item.invoiceNumber
                          : "N/A"}{" "}
                      </Typography>
                      <Typography
                        fontSize={12}
                        color={"#212B36"}
                        fontFamily={"Public Sans"}
                        fontWeight={500}
                      >
                        Code: {item && item.code ? item.code : "N/A"}{" "}
                      </Typography>
                      <Typography
                        fontSize={11}
                        color={"#212B36"}
                        fontFamily={"Public Sans"}
                      >
                        {item && item.placeOfSupply !== ""
                          ? item.placeOfSupply
                          : "N/A"}{" "}
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
                        {" "}
                        {item && item.bankAccount
                          ? item.bankAccount
                          : "N/A"}{" "}
                      </Typography>
                      <Typography
                        fontSize={12}
                        color={"#212B36"}
                        fontFamily={"Public Sans"}
                        fontWeight={500}
                      >
                        Ref:{" "}
                        {item && item.bankRefNumber
                          ? item.bankRefNumber
                          : "N/A"}{" "}
                      </Typography>
                      <Typography
                        fontSize={11}
                        color={"#212B36"}
                        fontFamily={"Public Sans"}
                      >
                        Date{" "}
                        {item && item.createdAt !== ""
                          ? splitDateConversion(item.createdAt)
                          : "N/A"}{" "}
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
                          color={"green"}
                          fontFamily={"Public Sans"}
                          fontWeight={600}
                        >
                          {item && item.amount ? item.amount : "N/A"}
                        </Typography>
                      </Stack>
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
                        {item && item.SGST
                          ? parseFloat(item.SGST).toFixed(2)
                          : 0}
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
                        {item && item.CGST
                          ? parseFloat(item.CGST).toFixed(2)
                          : 0}
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
                        {item && item.IGST
                          ? parseFloat(item.IGST).toFixed(2)
                          : 0}
                      </Typography>
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
                        color={"red"}
                        fontFamily={"Public Sans"}
                        fontWeight={700}
                      >
                        {item && item.taxable ? item.taxable : "N/A"}{" "}
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })
            : ""}
        </TableBody>
      </Table>
      {invoiceList.length <= 0 ? (
        <NoRecordFound text1={"Invoice"} text2={"invoice"} />
      ) : (
        ""
      )}
    </>
  );
};

export default TableList;
