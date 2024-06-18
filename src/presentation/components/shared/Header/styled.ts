import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  padding: 16px;
`;

export const HeaderInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const HeaderSpan = styled.span`
  color: ${(props) => props.color};
`;

export const HeaderSpanWrapper = styled.span`
  @media (max-width: 480px) {
    display: none;
  }
`;

export const HeaderTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

export const HeaderRightInfo = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  font-size: 14px;
`;

export const HeaderAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
