import React, { useEffect, useState } from "react";
import {
  Box,
  CircularProgress,
  Divider,
  IconButton,
  Stack,
  TablePagination,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  useTheme,
} from "@mui/material";
import { CloseIcon } from "src/theme/overrides/CustomIcons";
import ApiService from "src/Api/api";
import NoRecordFound from "src/utils/NoRecordFound/NoRecordFound";
import TableList from "./TableList";
import { CircularTableLoader } from "src/components/circularTableLoader";
import { motion } from "framer-motion";

interface InvoicesProps {
  open: boolean;
  invoiceUserView: { _id?: string };
  closeInvoiceDialog: () => void;
}

const Invoices: React.FC<InvoicesProps> = ({
  open,
  invoiceUserView,
  closeInvoiceDialog,
}) => {
  const token: string | null = localStorage.getItem("neoToken");
  const theme = useTheme();

  const [invoiceList, setInvoiceList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [invoicePage, setInvoicePage] = useState<number>(0);
  const [invoiceRowsPerPage, setInvoiceRowsPerPage] = useState<number>(10);
  const [totalCount, setTotalCount] = useState<number>(0);

  const getInvoices = async () => {
    const Id = invoiceUserView._id;

    if (!Id || !token) {
      setInvoiceList([]);
      setTotalCount(0);
      return;
    }

    setIsLoading(true);

    const params = {
      page: invoicePage + 1,
      limit: invoiceRowsPerPage,
    };

    try {
      await ApiService.setToken(token);
      const response: any = await ApiService.get(
        `/client/invoices/${Id}`,
        params
      );

      if (response.status === 200) {
        const { data, total } = response.data;
        setInvoiceList(data || []);
        setTotalCount(total || 0);
      } else {
        console.error("Error fetching invoices:", response);
        setInvoiceList([]);
        setTotalCount(0);
      }
    } catch (error) {
      console.error("Error fetching invoices:", error);
      setInvoiceList([]);
      setTotalCount(0);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (invoiceUserView._id) {
      getInvoices();
    }
  }, [invoiceUserView._id, invoicePage, invoiceRowsPerPage]);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setInvoicePage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setInvoiceRowsPerPage(newRowsPerPage);
    setInvoicePage(0);
  };

  const animationVariants = {
    hidden: { opacity: 0, y: -20 }, // Initial state
    visible: { opacity: 1, y: 0 }, // Final state
  };

  return (
    <Dialog
      open={open}
      PaperProps={{
        sx: {
          width: "90%",
          // minWidth: "40%",
          maxWidth: "1200px",
          // height: "",
          maxHeight: "90vh",
          minHeight: "400px",
          borderRadius: "8px",
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={closeInvoiceDialog}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      {/* <DialogTitle sx={{ mx: 2 }}>
        <Stack>
          <Typography fontWeight={700}>Invoices Details</Typography>
          <Typography>Basic information about client invoices list</Typography>
        </Stack>
      </DialogTitle> */}
      <DialogTitle sx={{ mx: 2 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Stack>
            {/* First line animation */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Typography fontWeight={700}>Invoices Details</Typography>
            </motion.div>

            {/* Second line animation */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
              <Typography>
                Basic information about client invoices list
              </Typography>
            </motion.div>
          </Stack>
        </motion.div>
      </DialogTitle>

      <DialogContent
        sx={{
          padding: 2,
          display: "flex",
          flexDirection: "column",
          height: "calc(100% - 64px)",
        }}
      >
        {isLoading ? (
          <CircularTableLoader />
        ) : invoiceList.length > 0 ? (
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              backgroundColor:
                theme.palette.mode === "dark" ? "grey.800" : "grey.100",
              borderRadius: "16px",
              boxShadow:
                "0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20)",
              paddingBottom: 2, // Space below border box
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                overflowY: "auto",
                position: "relative", // Ensure relative positioning for sticky header
              }}
            >
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Second line animation */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                  <TableList invoiceList={invoiceList} withFixedHeader />
                </motion.div>
              </motion.div>
            </Box>
            <Divider />
            <TablePagination
              component="div"
              count={totalCount}
              page={invoicePage}
              onPageChange={handleChangePage}
              rowsPerPage={invoiceRowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        ) : (
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              backgroundColor:
                theme.palette.mode === "dark" ? "grey.800" : "grey.100",
              borderRadius: "16px",
              boxShadow:
                "0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20)",
              paddingBottom: 2, // Space below border box
            }}
          >
            <NoRecordFound text1="Invoice" text2="invoice" />
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Invoices;
