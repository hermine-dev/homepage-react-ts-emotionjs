import styled from "@emotion/styled";

export const ProgressItem = styled.div`
  padding: 24px;
  border: 1px solid #f0f0f0;
  margin-right: 8px;
  box-shadow: 0px 0px 10px 4px #f0f0f0;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 780px) {
    margin-bottom: 8px;
    &:nth-child(even) {
      margin-right: 0;
    }
  }

  @media (max-width: 520px) {
    margin: 0 0 8px 0;
    &:last-child {
      margin: 0;
    }
  }
`;

export const ProgressItemTitle = styled.div`
  font-weight: bold;
  margin: 16px 0;
  color: #33384f;
`;

export const ProgressItemDesc = styled.div`
  color: ${(props) => props.color};
`;

export const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px;
  border: 1px solid #f0f0f0;
  @media (max-width: 780px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
  }
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;
