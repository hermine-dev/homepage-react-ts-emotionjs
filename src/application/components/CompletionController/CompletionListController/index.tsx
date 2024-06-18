import { CompletionList } from "../../../../presentation/components/Completion/components/CompletionList";
import { useGetProfile } from "../../../pages/HomePageController/api/useGetProfile";
import { FC } from "react";

export const CompletionListController: FC = () => {
  const { profile } = useGetProfile();

  const verificationValues = [
    {
      name: "Verification",
      status: profile.verified,
      desc: "You verified your account",
    },
    {
      name: "Picture profile",
      status: profile.profilePictureIsVerified,
      desc: "You added your profile picture",
    },
    {
      name: "Parents",
      status: profile.parentsVerified,
      desc: "You added the parents",
    },
    {
      name: "Litter",
      status: profile.litterVerified,
      desc: "Your created the litter",
    },
  ];

  return <CompletionList verification={verificationValues} />;
};

export default CompletionListController;
