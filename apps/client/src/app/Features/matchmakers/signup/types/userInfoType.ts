export type TypePersonalDetails = {
  firstName: string;
  lastName: string;
  birthDate: Date;
  specialty: string;
  gender: 'male' | 'female';
};
export type TypeContactInfo = {
  phoneNumber: string;
  email: string;
  password: string;
  passwordConfirm?: string;
};

export type TypeUserInfo = TypePersonalDetails & TypeContactInfo;
