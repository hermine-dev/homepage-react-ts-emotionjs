export interface CompletionListComponentData {
  verification: verificationData[];
}

export interface verificationData {
  name: string;
  status: boolean;
  desc: string;
}

export interface CompletionListProps extends CompletionListComponentData {}
