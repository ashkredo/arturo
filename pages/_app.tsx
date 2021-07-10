import "../styles/globals.css";
import { FC } from "react";
import type { AppProps } from "next/app";
import { StoreProvider } from "../contexts/StoreContext";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { ToastProvider } from "react-toast-notifications";
import theme from "../styles/theme";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ToastProvider autoDismiss>
          <Component {...pageProps} />
        </ToastProvider>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default MyApp;
