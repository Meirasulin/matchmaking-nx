export type TypeMatchmakersList =  {
    id: number
    email: string;
    gender: "male" | "female";
    password?: string;
    firstname: string;
    lastname: string;
    birthdate?: string;
    phonenumber: string;
    specialty: string;
    matchmakerid?: {} | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
  }[] 