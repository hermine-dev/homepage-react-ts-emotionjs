import { FC } from "react";
import { useTheme } from "@emotion/react";
import { FaRegBell, FaAngleDown } from "react-icons/fa";

import * as Styled from "./styled";

import { HeaderProps } from "./types";
export * from "./types";

export const Header: FC<HeaderProps> = ({ profile }) => {
  const theme = useTheme();

  return (
    <header>
      <Styled.HeaderContainer>
        <Styled.HeaderInner>
          <Styled.HeaderTitle>My Tipaw</Styled.HeaderTitle>
          <Styled.HeaderRightInfo>
            <Styled.HeaderSpanWrapper>
              <Styled.HeaderSpan color={theme.color.blue.default}>
                FR &#x2022;
              </Styled.HeaderSpan>{" "}
              Nl
            </Styled.HeaderSpanWrapper>
            <div>
              <FaRegBell size={21} />
            </div>
            <Styled.HeaderAvatar>
              <div>
                <img
                  src={profile.avatar}
                  width="50px"
                  alt="some guy with a dog"
                />
              </div>
              <div>{profile.name}</div>
              <FaAngleDown />
            </Styled.HeaderAvatar>
          </Styled.HeaderRightInfo>
        </Styled.HeaderInner>
      </Styled.HeaderContainer>
    </header>
  );
};
