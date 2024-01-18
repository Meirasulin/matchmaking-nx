export type MatchmakerType = {
  firstname: string;
  lastname: string;
  birthdate: string;
  phonenumber: string;
  email: string;
  gender: 'male' | 'female';
  specialty: string;
  password: string;
};
export type LoginMatchmakerType = {
  email: string;
  password: string;
};
