export interface HeaderComponentData {
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

//props
export interface HeaderProps extends HeaderComponentData {}
