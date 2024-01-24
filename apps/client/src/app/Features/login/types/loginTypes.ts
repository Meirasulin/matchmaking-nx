export type TypeLoginInput = {
    email: string;
    password: string;
  };
  export type TypeLogedSimpleUserInfo = {
    id: number;
    firstname: string;
    lastname: string;
    birthdate: string;
    email: string;
    phonenumber: string;
    currentaddress?: string | null;
    origin: string;
    height: number;
    highereducation?: string | null;
    educationname?: string | null;
    highereducationacademy?: string | null;
    jobstatus?: string | null;
    jobcompany?: string | null;
    seminar?: string | null;
    headwear?: string | null;
    pelkoshers?: string | null;
    fathername?: string | null;
    mothername?: string | null;
    maritalstatus: string;
    gender: 'male' | 'female';
    imglink?: string | null;
    yeshiva?: string | null;
    torahstudystatus?: string | null;
  };
  