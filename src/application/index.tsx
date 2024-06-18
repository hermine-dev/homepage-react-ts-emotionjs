import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FC, lazy, Suspense } from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

import { UserLayout } from "../presentation/components";

const HomePageController = lazy(() => import("./pages/HomePageController"));

export const AppController: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<UserLayout />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <HomePageController />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
