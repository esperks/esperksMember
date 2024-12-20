import { useForm } from "react-hook-form";
import FormProvider, { RHFTextField } from "../../../components/hook-form";

import * as Yup from "yup";
import { useState, useMemo } from "react";
import {
  Button,
  Grid,
  Typography,
  Box,
  Card,
  MenuItem,
  Stack,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import ApiService from "src/Api/api";
import { useSnackbar } from "../../../components/snackbar";
import { IUserAccountGeneral } from "../../../@types/user";
import { client } from "src/Api/apiList";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormValuesProps extends Omit<IUserAccountGeneral, "avatarUrl"> {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phone: string;
  referral: string;
}

type Props = {
  isEdit?: boolean;
  currentUser?: IUserAccountGeneral;
};

export default function UserNewEditForm({
  isEdit = false,
  currentUser,
}: Props) {
  const { enqueueSnackbar } = useSnackbar();
  const [existingNames, setExistingNames] = useState<boolean>(false);
  const [existingEmail, setExistingEmail] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const defaultValues = useMemo<FormValuesProps>(
    () => ({
      firstName: currentUser?.firstName || "",
      lastName: currentUser?.lastName || "",
      username: currentUser?.username || "",
      password: currentUser?.password || "",
      email: currentUser?.email || "",
      phone: currentUser?.phone || "",
      referral: currentUser?.referral || "",
    }),
    [currentUser]
  );
  // Define your Yup validation schema
  const userSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First Name is required")
      .test("check-username", "Username is already taken", function (value) {
        const { existingNames }: any = this.options.context;
        if (existingNames && value) {
          return false; // Username is already taken, so return false
        }
        return true; // Username is available
      }),
    lastName: Yup.string().required("Last Name is required"),
    username: Yup.string().required("User Name is required"),

    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format")
      .test("check-username", "Email is already taken", function (value) {
        const { existingEmail }: any = this.options.context;
        if (existingEmail && value) {
          return false; // Email is already taken, so return false
        }
        return true; // Email is available
      }),

    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[1-9][0-9]{9}$/, "Invalid phone number"),

    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-zA-Z]/, "Password must contain at least one letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(/[\W_]/, "Password must contain at least one special character"),
    // referral: Yup.string().required("Referral is required"),
  });
  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(userSchema),
    defaultValues,
    mode: "all",
    context: {
      existingNames: existingNames, // Pass the actual value of existingNames
      existingEmail: existingEmail,
    },
  });

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = methods;

  const handleUserExistenceCheck = async (name: string) => {
    if (!name) {
      setExistingNames(false);
      return;
    }
    try {
      const url = `${client.registrationApi}/${name}`;
      const fetchUserExistance = await ApiService.get(url);
      if (fetchUserExistance.status === 200) {
        setExistingNames(fetchUserExistance.data.exists);
      }
    } catch (error) {
      console.error("Error fetching user existence: ", error);
    }
  };

  const handleUserEmailCheck = async (email: string) => {
    if (!email) {
      setExistingEmail(false);
      return;
    }
    try {
      const url = `${client.registrationApi}/${email}`;
      const fetchUserExistance = await ApiService.get(url);
      if (fetchUserExistance.status === 200) {
        setExistingEmail(fetchUserExistance.data.exists);
      }
    } catch (error) {
      console.error("Error fetching user existence: ", error);
    }
  };

  const onSubmit = async (values: FormValuesProps) => {
    const fetchData = await ApiService.post(client.register, values);
    if (fetchData.status === 200) {
      enqueueSnackbar("Client Created successfully!", { variant: "success" });
      reset(); // Reset form after successful submission
    } else if (fetchData.response.status === 400) {
      // Extract the error message
      const errorMessage =
        fetchData.response?.data?.message || "An error occurred";

      // Show Snackbar for the error
      enqueueSnackbar(errorMessage, { variant: "error" });

      // Show the error on the email field
      if (errorMessage.includes("email")) {
        methods.setError("email", {
          type: "manual",
          message: errorMessage,
        });
      }
    }

    console.log("hiiiii", fetchData);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        bgcolor: "#f4f6f8",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          maxWidth: "1200px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            flex: 1,
            bgcolor: "#007BFF",
            color: "#fff",
            px: { xs: 3, md: 5 },
            py: { xs: 5, md: 8 },
            height: "100%", // Ensure Box takes full height of the Card
            minHeight: "70vh", //
          }}
        >
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Welcome to ESPERKS!
          </Typography>
          <Typography mb={4} fontSize="16px">
            We're excited to help you get started with your operating agreement.
            It's an all-in-one solution for your business needs, whether you’re
            setting up a new company or onboarding your existing one.
          </Typography>
          <Card
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
              p: 3,
              borderRadius: "12px",
            }}
          >
            <Typography fontWeight="bold" mb={1}>
              "I barely had to do anything"
            </Typography>
            <Typography mb={2} fontSize="14px">
              Love the experience. Got my business set up and all necessary
              details in about a month and I barely had to do anything.
              Definitely recommend!
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              Catherine Johns
            </Typography>
          </Card>
        </Box>

        <Box
          sx={{
            flex: 1,
            px: { xs: 3, md: 5 },
            py: { xs: 5, md: 8 },
            bgcolor: "#fff",
          }}
        >
          <Typography variant="h5" mb={3} fontWeight="bold">
            Let’s get started
          </Typography>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <RHFTextField
                  name="firstName"
                  label="First Name"
                  onBlur={() => {
                    const userName = methods?.getValues("firstName");
                    handleUserExistenceCheck(userName);
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <RHFTextField name="lastName" label="Last Name" />
              </Grid>
              <Grid item xs={12}>
                <RHFTextField name="username" label="User Name" />
              </Grid>

              <Grid item xs={12}>
                <RHFTextField
                  name="email"
                  label="Email"
                  type="email"
                  onBlur={() =>
                    handleUserEmailCheck(methods.getValues("email"))
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <RHFTextField
                  name="phone"
                  label="Phone"
                  type="tel"
                  inputMode="numeric" // Explicitly defines the input type as numeric for better phone support
                  inputProps={{
                    pattern: "[0-9]*", // Only allow numeric characters
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <RHFTextField
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  helperText={
                    "Password should be strong, include letters, numbers, and special characters."
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <RHFTextField name="referral" label="Referral" />
              </Grid>
            </Grid>

            <Stack direction="row" justifyContent="center" mt={4}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={isSubmitting || !isValid} // Disable the button if the form is invalid or submission is in progress
                sx={{
                  width: "100%",
                  bgcolor: isSubmitting || !isValid ? "#9e9e9e" : "#007BFF", // Change button color for invalid/disabled state
                  "&:hover": {
                    bgcolor: isSubmitting || !isValid ? "#9e9e9e" : "#0056b3",
                  },
                }}
                startIcon={
                  isSubmitting ? (
                    <CircularProgress size={20} color="inherit" /> // Add spinner when submitting
                  ) : null
                }
              >
                {isSubmitting ? "Submitting..." : "Get Started"}
              </Button>
            </Stack>
          </FormProvider>
        </Box>
      </Card>
    </Box>
  );
}
