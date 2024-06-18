import { Header } from "../../../../presentation/components";
import { useGetProfile } from "../../../pages/HomePageController/api/useGetProfile";
import { FC } from "react";

export const HeaderController: FC = () => {
  const { profile } = useGetProfile();

  return <Header profile={profile} />;
};

export default HeaderController;
