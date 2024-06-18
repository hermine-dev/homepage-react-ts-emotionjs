import React, { FC } from "react";

import * as Styled from "./styled";

import CompletionStatusController from "../../../application/components/CompletionController/CompletionStatusController";
import CompletionListController from "../../../application/components/CompletionController/CompletionListController";
export * from "./types";
/*
 Feel free to change this page however you wish
 You can divide this page into smaller components if you wish to

*/
export const HomePage: FC = () => {
  return (
    <Styled.PageWrapper>
      <Styled.PageInner>
        <CompletionStatusController />
        <CompletionListController />
      </Styled.PageInner>
    </Styled.PageWrapper>
  );
};
