import styled from "@emotion/styled";

export const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px;
  border: 1px solid #f0f0f0;
  border-bottom: none;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ProgressStatusText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StatusCongratsWrapper = styled.div`
  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

export const StatusCongrats = styled.div`
  font-size: 18px;
  wont-weight: bold;
  margin-bottom: 16px;
  color: ${(props) => props.color};
`;

export const StatusCongratsInfo = styled.div`
  font-size: 14px;
  color: #63637e;
`;

export const ProgressWrapper = styled.div`
  @media (max-width: 1024px) {
    margin: 0 auto;
  }
`;

export const ProgressStatusPercentage = styled.div`
  color: ${(props) => props.color};
  font-weight: bold;
  margin-left: 8px;
`;

export const GlobalProgressWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const GlobalProgress = styled.div`
  width: 64px;
  height: 8px;
  border-radius: 20px;
  background-color: ${(props) => props.color};
  @media (max-width: 768px) {
    width: 50px;
    height: 4px;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;
