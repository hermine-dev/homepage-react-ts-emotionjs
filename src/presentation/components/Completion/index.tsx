import { FC } from "react";

import CompletionStatusController from "../../../application/components/CompletionController/CompletionStatusController";
import CompletionListController from "../../../application/components/CompletionController/CompletionListController";

export const Completion: FC = () => {
  return (
    <div>
      <CompletionStatusController />
      <CompletionListController />
    </div>
  );
};
