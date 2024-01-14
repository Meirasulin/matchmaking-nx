import { existsSync } from 'fs';
import {
  nameValidet,
  requiredValidet,
} from '../helpers/inputValidtion';
import {  eduList, headwearList, jobStatusList, pelKoshersList } from './selectOptionLists';
import { JobAndEduListsType, MatchinfoListsType, MatchinfolInputType, PersonalInputType, maleOrFeamleType, subInfoInputsType } from '../types/inputsListsTypes';

export const maleOrFeamle: maleOrFeamleType = {
  male: [
    {
      labelName: 'ישיבה גבוהה',
      name: 'yeshiva',
      validatoin: requiredValidet,
    },
  ],
  female: [
    {
      labelName: 'סמינר',
      name: 'seminar',
      validatoin: requiredValidet,
    },
  ]
}
export const PersonalInputs: PersonalInputType[] = [
  {
    labelName: 'שם פרטי',
    name: 'firstname',
    validatoin: nameValidet,
  },
  {
    labelName: 'שם משפחה',
    name: 'lastname',
    validatoin: nameValidet,
  },
  {
    labelName: 'שם האב',
    name: 'fathername',
    validatoin: requiredValidet,
  },
  {
    labelName: 'שם האם',
    name: 'mothername',
    validatoin: requiredValidet,
  },
];

export const MatchinfoInputs: MatchinfolInputType[] = [
  {
    labelName: 'מוצא',
    name: 'origin',
    validatoin: requiredValidet,
  },
  {
    labelName: 'גובה',
    name: 'height',
    validatoin: requiredValidet,
  },
  {
    labelName: 'תמונה',
    name: 'imglink',
    validatoin: {required: false},
  },
];

export const MatchinfoLists: MatchinfoListsType[] = [
  {
    name: 'headwear',
    labelName: 'כיסוי ראש מועדף',
    list: headwearList,
    validatoin: requiredValidet,
  },
  {
    name: 'pelkoshers',
    labelName:  'אופי פלאפון',
    list: pelKoshersList,
    validatoin: requiredValidet,
  },

];

const eduSubInputs:  subInfoInputsType[]= [
  {
    labelName: 'מכללה / אוניברסיטה',
    name: 'highereducationacademy',
    validatoin: requiredValidet,
  },
  {
    labelName: 'תואר / תעודה',
    name: 'educationname',
    validatoin: requiredValidet,
  },
]

const jobSubInputs: subInfoInputsType[] = [
  {
    labelName: 'שם מקום העבודה',
    name: 'jobcompany',
    validatoin: requiredValidet,
  },
]
export const JobAndEduLists: (JobAndEduListsType & {subList:  subInfoInputsType[]})[] = [
  {
    labelName: 'השכלה גבוהה',
    list:  eduList,
    name: 'highereducation',
    validatoin: requiredValidet,
    subList: eduSubInputs
  },
  {
    labelName: 'משרה',
    list: jobStatusList,
    name: 'jobstatus',
    validatoin: requiredValidet,
    subList: jobSubInputs
  }
]
