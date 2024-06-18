import React, { FC } from "react";
import { CompletionListProps } from "./types";
import { FaTimes } from "react-icons/fa";
import { useTheme } from "@emotion/react";

import * as Styled from "./styled";
import { FaCircleCheck } from "react-icons/fa6";

export const CompletionList: FC<CompletionListProps> = ({ verification }) => {
  const theme = useTheme();

  return (
    <Styled.ProgressContainer>
      {verification.map((value, index) => (
        <Styled.ProgressItem key={index}>
          {value.status ? (
            <FaCircleCheck color={theme.color.green.default} size={24} />
          ) : (
            <FaTimes color={theme.color.red.default} />
          )}
          <Styled.ProgressItemTitle>{value.name}</Styled.ProgressItemTitle>
          <Styled.ProgressItemDesc color={theme.color.medium.shade}>
            {value.desc}
          </Styled.ProgressItemDesc>
        </Styled.ProgressItem>
      ))}
    </Styled.ProgressContainer>
  );
};
