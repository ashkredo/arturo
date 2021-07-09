import "../styles/globals.css";
import { FC } from "react";
import type { AppProps } from "next/app";
import { StoreProvider } from "../contexts/StoreContext";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../styles/theme";

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <StoreProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </StoreProvider>
    </ThemeProvider>
  );
};

export default MyApp;
