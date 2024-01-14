export type TypeListOption = { type: string; hebrew: string }[];

export type PersonalInputType = {
  labelName: string;
  name:
    | 'firstname'
    | 'lastname'
    | 'birthdate'
    | 'maritalstatus'
    | 'fathername'
    | 'mothername';
  validatoin: {};
};

export type MatchinfolInputType = {
  labelName: string;
  name: 'origin' | 'height' | 'imglink';
  validatoin: {};
};

export type MatchinfoListsType = {
  labelName: string;
  name: 'headwear' | 'pelkoshers' | 'currentaddress';
  validatoin: Object;
  list: TypeListOption;
};

export type JobAndEduListsType = {
    labelName: string;
    name: 'highereducation' | 'jobstatus';
    validatoin: Object;
    list: TypeListOption;
  };

export type maleInfoType = {
  labelName: string;
  name: 'yeshiva' | 'torahstudystatus' 
  validatoin: {};
};
export type femaleInfoType = {
  labelName: string;
  name: 'seminar'
  validatoin: {};
};
export type maleOrFeamleType = {
  male: maleInfoType[],
  female: femaleInfoType[]
}
export type subInfoInputsType = {
  labelName: string;
  name: 'highereducationacademy' | 'educationname' | 'jobcompany'
  validatoin: {};
};