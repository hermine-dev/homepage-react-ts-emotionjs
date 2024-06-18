import { FC } from "react";
import { CompletionStatusProps } from "./types";
import { useTheme } from "@emotion/react";

import * as Styled from "./styled";

export const CompletionStatus: FC<CompletionStatusProps> = ({ profile }) => {
  const theme = useTheme();

  return (
    <Styled.StatusWrapper>
      {profile.globalProgress ? (
        <Styled.StatusCongratsWrapper>
          <Styled.StatusCongrats color={theme.color.blue.default}>
            You successfully complete your profile at Tipaw
          </Styled.StatusCongrats>
          <Styled.StatusCongratsInfo>
            Now you can use Tipaw for 100% 🎉
          </Styled.StatusCongratsInfo>
        </Styled.StatusCongratsWrapper>
      ) : (
        <div>lorem ipsum</div>
      )}

      <Styled.ProgressWrapper>
        <Styled.ProgressStatusText>
          {profile.globalProgress ? (
            <p>Profile completed</p>
          ) : (
            <p>In progress</p>
          )}
          <Styled.ProgressStatusPercentage color={theme.color.green.default}>
            {profile.globalProgress}%
          </Styled.ProgressStatusPercentage>
        </Styled.ProgressStatusText>
        <Styled.GlobalProgressWrapper>
          {Array.from({ length: 5 }).map((_, index) => (
            <Styled.GlobalProgress
              key={index}
              color={theme.color.green.default}
            />
          ))}
        </Styled.GlobalProgressWrapper>
      </Styled.ProgressWrapper>
    </Styled.StatusWrapper>
  );
};
