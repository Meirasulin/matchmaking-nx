export type MatchmakerType = {
  firstName: string;
  lastName: string;
  birthDate: string;
  phoneNumber: string;
  email: string;
  gender: 'male' | 'female';
  specialty: string;
  password: string;
};
export type LoginMatchmakerType = {
  email: string;
  password: string;
};
