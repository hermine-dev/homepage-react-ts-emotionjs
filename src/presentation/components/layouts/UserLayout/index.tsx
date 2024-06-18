import { lazy } from "react";
import { Outlet } from "react-router-dom";

import * as Styled from "./styled";

const HeaderController = lazy(
  () => import("../../../../application/components/shared/HeaderController")
);

export const UserLayout = () => {
  return (
    <Styled.UserLayoutWrapper>
      <HeaderController />
      <main>
        <Outlet />
      </main>
    </Styled.UserLayoutWrapper>
  );
};
