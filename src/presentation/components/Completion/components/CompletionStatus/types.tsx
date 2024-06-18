export interface CompletionStatusComponentData {
  profile: ProfileData;
}

export interface ProfileData {
  name: string;
  avatar: string;

  globalProgress: number;
  verified: boolean;
  profilePictureIsVerified: boolean;
  parentsVerified: boolean;
  litterVerified: boolean;
}

export interface CompletionStatusProps extends CompletionStatusComponentData {}
