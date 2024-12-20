import { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { useTheme } from "@mui/material/styles";
import { Box, Link, BoxProps } from "@mui/material";

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const theme = useTheme();

    const PRIMARY_LIGHT = theme.palette.primary.light;

    const PRIMARY_MAIN = theme.palette.primary.main;

    const PRIMARY_DARK = theme.palette.primary.dark;

    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          width: 160,
          height: 40,
          display: "inline-flex",
          ...sx,
        }}
        {...other}
      >
        <svg
          fillRule="evenodd"
          stroke="none"
          strokeWidth="1"
          width="183"
          height="43"
          viewBox="0 0 183 43"
          fill={PRIMARY_MAIN}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
              <stop offset="0%" stopColor={PRIMARY_DARK} />
              <stop offset="100%" stopColor={PRIMARY_MAIN} />
            </linearGradient>

            <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor={PRIMARY_LIGHT} />
              <stop offset="100%" stopColor={PRIMARY_MAIN} />
            </linearGradient>

            <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor={PRIMARY_LIGHT} />
              <stop offset="100%" stopColor={PRIMARY_MAIN} />
            </linearGradient>

            <clipPath id="clip0_1_3275">
              <rect
                width="182.24"
                height="42.79"
                fill="white"
                transform="translate(0.5)"
              />
            </clipPath>
            <clipPath id="clip1_1_3275">
              <rect
                width="177.79"
                height="42.59"
                fill="white"
                transform="translate(3)"
              />
            </clipPath>
          </defs>
          <g clipPath="url(#clip0_1_3275)">
            <g clipPath="url(#clip1_1_3275)">
              <path
                d="M25 29.71C25 27.34 29.51 17.9 29.51 17.14C29.51 17.07 29.45 16.93 29.38 16.93C28.66 16.93 21.75 23.85 20.07 25.38C15.45 29.85 13.46 32.58 11.6 32.58C10.46 32.58 9.86 31.53 9.86 30.63C9.86 28.95 11.18 25.67 11.72 24.13H11.6C11.24 24.48 9.38 26.44 9.07 26.44C8.76 26.44 8.77 23.64 8.77 22.46C8.77 20.99 9.43 20.29 10.75 19.11C11.47 18.48 17.24 12.54 17.96 9.12C18.2 8.14 18.5 7.72 18.8 7.72H23.91C22.65 11 19.83 17.71 19.83 18.06C19.83 18.2 19.95 18.27 20.13 18.27C20.79 18.27 31.36 7.3 34.43 7.3C35.2 7.3 35.81 7.42 36.28 7.63C32.94 3.01 27.53 0 21.4 0C11.24 0 3 8.24 3 18.4C3 28.56 11.24 36.8 21.4 36.8C27.81 36.8 33.45 33.51 36.75 28.54C34.04 30.52 30.45 32.59 28.49 32.59C26.39 32.59 25 31.75 25 29.73V29.71Z"
                fill="#00AB55"
              />
              <path
                d="M37.61 9.7C37.61 9.76 37.62 9.82 37.62 9.88C37.62 12.25 31.79 23.43 31.79 25.18C31.79 25.53 31.85 25.88 32.09 25.88C33.59 25.88 38.82 20.94 39.7 20.19C39.76 19.6 39.79 19.01 39.79 18.41C39.79 15.26 39 12.3 37.6 9.71L37.61 9.7Z"
                fill="#00AB55"
              />
              <path
                d="M80.78 12.81C80.26 8.09 77.48 5.34 74.29 5.34C68.21 5.34 61.58 10.31 60.47 20.68C60.19 20.99 59.82 21.42 59.32 21.9C57.94 23.16 52.53 27.28 48.75 27.28C47.25 27.28 45.69 25.95 45.69 24.83C45.69 24.2 46.17 24.06 47.19 24.06C49.29 24.06 59.86 20.01 59.86 13.02C59.86 8.27 57.58 6.87 54.58 6.87C48.33 6.87 39.8 12.88 39.8 20.84V24.12C39.8 30.27 43.05 32.57 47.55 32.57C52.66 32.57 57.28 29.5 60.28 26.63C60.37 26.53 60.45 26.44 60.53 26.35C61.29 30.33 63.85 32.57 67.51 32.57C71.95 32.57 74.54 30.82 77.42 26.98C80.78 20.31 81.21 16.71 80.78 12.8V12.81ZM52.71 11.9C53.73 11.9 54.22 12.74 54.22 13.92C54.22 16.92 47.55 19.58 45.32 19.72C46.22 16.44 49.59 11.9 52.71 11.9ZM73.03 24.12C71.83 26.33 70.5 26.71 69.3 26.71C67.31 26.71 66.05 25.66 66.05 22.45C66.05 16.09 70.08 11.62 72.72 11.62C74.7 11.62 75.06 13.19 75.36 14.34C76.08 17.09 74.53 21.42 73.02 24.12H73.03Z"
                fill="#00AB55"
              />
              <path
                d="M100.12 31.23C98.39 32.24 95.57 33.05 92.45 33.05C86.32 33.05 83.63 28.88 83.63 23.75C83.63 16.75 88.8 8.85001 96.28 8.85001C100.69 8.85001 103.08 11.48 103.08 14.79C103.08 20.87 96.23 22.5 87.65 22.36C87.46 23.37 87.6 25.52 88.13 26.77C89.04 28.83 90.91 29.88 93.3 29.88C96.03 29.88 98.09 29.02 99.53 28.25L100.11 31.22L100.12 31.23ZM95.71 11.97C91.92 11.97 89.1 15.66 88.14 19.3C94.37 19.35 99.26 18.53 99.26 14.94C99.26 13.02 97.82 11.97 95.72 11.97H95.71Z"
                fill="black"
              />
              <path
                d="M105.29 28.55C106.39 29.22 108.4 29.99 110.27 29.99C112.95 29.99 114.68 28.26 114.68 26.2C114.68 24.38 113.87 23.28 111.47 21.94C108.79 20.45 107.3 18.4 107.3 16.05C107.3 11.98 110.8 8.86 115.68 8.86C117.79 8.86 119.66 9.44 120.52 10.01L119.42 13.03C118.61 12.55 117.12 11.98 115.4 11.98C113 11.98 111.28 13.47 111.28 15.48C111.28 17.16 112.38 18.21 114.44 19.36C117.03 20.85 118.8 22.86 118.8 25.44C118.8 30.33 114.82 33.06 109.94 33.06C107.45 33.06 105.24 32.29 104.19 31.48L105.29 28.56V28.55Z"
                fill="black"
              />
              <path
                d="M122.96 32.58L127.42 9.39001H131.4L126.94 32.58H122.96ZM128.14 2.92001C128.14 1.39001 129.34 0.240005 130.78 0.240005C132.22 0.240005 133.13 1.29001 133.13 2.73001C133.08 4.31001 131.98 5.41001 130.45 5.41001C129.06 5.41001 128.15 4.36001 128.15 2.92001H128.14Z"
                fill="black"
              />
              <path
                d="M134.17 37.85C135.56 38.71 137.86 39.38 140.3 39.38C144.18 39.38 147.25 37.37 148.64 31.09L149.41 27.64H149.27C147.26 30.95 144.43 32.57 141.22 32.57C136.57 32.57 134.18 28.64 134.18 24.52C134.13 16.66 139.93 8.85001 148.89 8.85001C151.57 8.85001 154.5 9.62001 156.32 10.48L152.77 29.65C151.81 34.54 150.52 37.94 148.07 40C145.77 42.01 142.66 42.59 139.97 42.59C137.14 42.59 134.51 41.92 133.02 40.96L134.17 37.85ZM151.95 12.84C151.23 12.51 149.79 12.07 148.12 12.07C142.32 12.07 138.35 18.11 138.3 23.86C138.3 26.4 139.21 29.42 142.76 29.42C146.31 29.42 149.61 25.11 150.47 20.56L151.96 12.85L151.95 12.84Z"
                fill="black"
              />
              <path
                d="M159.04 32.58L162.15 16.15C162.68 13.56 162.96 11.31 163.25 9.39H166.8L166.22 13.94H166.32C168.38 10.68 171.49 8.86 174.9 8.86C177.68 8.86 180.79 10.44 180.79 15.33C180.79 16.34 180.6 17.82 180.36 19.07L177.77 32.58H173.79L176.33 19.21C176.52 18.3 176.67 17.2 176.67 16.24C176.67 13.89 175.76 12.17 173.03 12.17C170.3 12.17 166.18 15.57 165.12 21.32L163.01 32.58H159.03H159.04Z"
                fill="black"
              />
            </g>
          </g>
        </svg>
      </Box>
    );

    if (disabledLink) {
      return <>{logo}</>;
    }

    return (
      <Link to="/" component={RouterLink} sx={{ display: "contents" }}>
        {logo}
      </Link>
    );
  }
);

export default Logo;
