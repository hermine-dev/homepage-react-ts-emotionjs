import { CompletionStatus } from "../../../../presentation/components/Completion/components/CompletionStatus";
import { useGetProfile } from "../../../pages/HomePageController/api/useGetProfile";
import { FC } from "react";

export const CompletionStatusController: FC = () => {
  const { profile } = useGetProfile();

  return <CompletionStatus profile={profile} />;
};

export default CompletionStatusController;
