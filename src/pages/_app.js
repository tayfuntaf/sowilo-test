import Router from "next/router";
import NProgress from "nprogress";
import { ThemeProvider } from "next-themes";

// import fonts
import { Playfair_Display as PlayfairDisplay, Ubuntu } from "@next/font/google";

// import plugins styles
import "animate.css";
import "nprogress/nprogress.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import theme styles
import "../../public/assets/scss/app.scss"
import "../../public/assets/plugins/css/themify-icons.min.css"

// import i18n
import "@/i18n";

// load a variable font
const fontBody = Ubuntu({
  style: ["normal"],
  weight: ["400", "700"],
  variable: "--font-body",
  preload: false,
});
const fontTitle = PlayfairDisplay({ variable: "--font-title", preload: false });

export default ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem="false"
      >
        <div className={`${fontBody.className} ${fontTitle.variable}`}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>,
  );
};

// NProgress
Router.events.on("routeChangeError", () => NProgress.done());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
