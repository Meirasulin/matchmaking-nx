export type TypePersonalDetails = {
  firstName: string;
  lastName: string;
  birthDate: Date;
  maritalStatus: 'single' | 'divorcee' | 'widow';
  fatherName: string;
  motherName: string;
};

export type TypeMatchInfo = {
  origin: string;
  height: string;
  headwear: string;
  pelKoshers: string;
  currentAddress: string;
  imgLink?: string;
  }


  export type TypeJobAndEdu = {
  seminar: string;
  higherEducation: string;
  educationName: string;
  higherEducationAcademy: string;
  jobStatus: string;
  jobCompany: string;
};


export type TypeContactInfo = {
  phoneNumber: string;
  email: string;
  password: string;
  passwordConfirm?: string;
};

export type TypeUserInfo = TypePersonalDetails &
  TypeContactInfo &
  TypeMatchInfo;
