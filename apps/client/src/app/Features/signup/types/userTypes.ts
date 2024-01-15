
export type TypePersonalDetails = {
  firstname: string;
  lastname: string;
  birthdate: Date;
  maritalstatus: 'single' | 'divorcee' | 'widow';
  fathername: string;
  mothername: string;
};

export type TypeMatchInfo = {
  origin: string;
  height: number;
  headwear: string;
  pelkoshers: string;
  currentaddress: string;
  imglink?: string;
};

export type TypeJobAndEdu = {
  seminar?: string;
  torahstudystatus?: string;
  yeshiva?: string;
  highereducation: string;
  educationname: string;
  highereducationacademy: string;
  jobstatus: string;
  jobcompany?: string;
};

export type TypeContactInfo = {
  phonenumber: string;
  email: string;
  password: string;
  passwordConfirm?: string;
};

export type TypeUserInfo = TypePersonalDetails &
  TypeContactInfo &
  TypeMatchInfo &
  TypeJobAndEdu;


export type TypeAtomUserInfo =
  | TypeJobAndEdu
  | TypeUserInfo
  | TypeContactInfo
  | TypePersonalDetails
  | TypeMatchInfo;

