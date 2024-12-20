import { useSnackbar } from "notistack";

const Success = (value: any) => {
  const { enqueueSnackbar } = useSnackbar();

  return enqueueSnackbar(`${value}`, {
    variant: "success",
    // style: {
    //   color: " var(--success-darker, #0A5554)",
    //   backgroundColor: "var(--success-lighter, #D8FBDE)",
    //   marginRight: "100px",
    //   fontFamily: "Public Sans",
    //   fontWeight: 500,
    //   fontSize: "14px",
    //   lineHeight: "22px",
    //   maxWidth: "400px",
    //   marginTop: "50px",
    // },
  });
};
const Error = (value: any) => {
  const { enqueueSnackbar } = useSnackbar();

  return enqueueSnackbar(`${value}`, {
    variant: "error",
    //   style: {
    //     color: " var(--success-darker, #0A5554)",
    //     backgroundColor: "var(--success-lighter, #D8FBDE)",
    //     marginRight: "100px",
    //     fontFamily: "Public Sans",
    //     fontWeight: 500,
    //     fontSize: "14px",
    //     lineHeight: "22px",
    //     maxWidth: "400px",
    //     marginTop: "50px",
    //   },
  });
};
export { Error, Success };
