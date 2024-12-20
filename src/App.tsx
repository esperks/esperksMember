// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// locales
import ThemeLocalization from "./locales";
// components
import SnackbarProvider from "./components/snackbar";
import { ThemeSettings } from "./components/settings";
import { MotionLazyContainer } from "./components/animate";
import Header from "./layouts/compact/Header";

// ----------------------------------------------------------------------

export default function App() {
  return (
    <MotionLazyContainer>
      <ThemeProvider>
        <ThemeSettings>
          <ThemeLocalization>
            <SnackbarProvider>
              <Router />
            </SnackbarProvider>
          </ThemeLocalization>
        </ThemeSettings>
      </ThemeProvider>
    </MotionLazyContainer>
  );
}
