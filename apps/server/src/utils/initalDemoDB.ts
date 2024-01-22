import Matchmakers from "../matchmaker/model/tableDefinition";
import { MatchmakerType } from "../matchmaker/types/matchmakerType";
// type MatchmakersListType = {
//         firstname: string;
//         lastname: string;
//         birthdate: Date;
//         email: string;
//         phonenumber: string;
//         gender: 'male' | 'female';
//         specialty: string;
//         password: string;
// }
const matchmakersList: MatchmakerType[] = [
    {
      firstname: 'יעקב',
      lastname: 'לוי',
      birthdate: '20/10/1990', 
      email: 'jackob@gmail.com',
      phonenumber: '0548425452',
      gender: 'male',
      specialty: 'מבוגרים',
      password: '123456789'
    },
    {
      firstname: 'משה',
      lastname: 'כהן',
      birthdate: '05/02/1980',
      email: 'moshe@gmail.com',
      phonenumber: '0522121555', 
      gender: 'male',
      specialty: 'ילדים',
      password: '987654321'
    },
    {
      firstname: 'רחל',
      lastname: 'כץ',
      birthdate: '12/07/1995',
      email: 'rachel@gmail.com',
      phonenumber: '0503334444',
      gender: 'female', 
      specialty: 'נשים',
      password: '123456'
    },
    {
      firstname: 'שרה',
      lastname: 'לוי',
      birthdate: '08/09/1985',
      email: 'sarah@gmail.com', 
      phonenumber: '0541239876',
      gender: 'female',
      specialty: 'מבוגרים',
      password: 'password123'
    },
    {
      firstname: 'דוד',
      lastname: 'אלעזר',
      birthdate: '15/12/1991',
      email: 'david@gmail.com',
      phonenumber: '0501234567',
      gender: 'male',
      specialty: 'ילדים', 
      password: 'abc123'
    },
    {
      firstname: 'רבקה',
      lastname: 'כהן',
      birthdate: '28/02/1988', 
      email: 'rebecca@gmail.com',
      phonenumber: '0509876543',
      gender: 'female',
      specialty: 'נשים',
      password: ' 654321'
    },
    {
      firstname: 'אברהם',
      lastname: 'לוי',
      birthdate: '07/07/1975',
      email: 'avraham@gmail.com',
      phonenumber: '0521239876',
      gender: 'male', 
      specialty: 'מבוגרים',
      password: 'pass123'
    },
    {
      firstname: 'לאה',
      lastname: 'כץ', 
      birthdate: '18/04/1993',
      email: 'leah@gmail.com',
      phonenumber: '0505558888',
      gender: 'female',
      specialty: 'ילדים',
      password: 'qwerty'
    },
    {
      firstname: 'יוסף',
      lastname: 'כהן',
      birthdate: '30/10/1989',
      email: 'yosef@gmail.com',
      phonenumber: '0524568799',
      gender: 'male',
      specialty: 'נשים',
      password: 'abcdef'
    },
    {
      firstname: 'מרים',
      lastname: 'אלעזר',
      birthdate: '12/12/1980',
      email: 'miriam@gmail.com',
      phonenumber: '0501234567',
      gender: 'female', 
      specialty: 'מבוגרים',
      password: 'password'
    }
  ];



  export const initDB = async () => {
    try {
        matchmakersList.map(async (matchmaker)=>{
            const newMatchmakers = await Matchmakers.create(matchmaker)
            console.log('newMatchmakers in db', newMatchmakers);
        })
    } catch (error) {
        console.log(error);
        
    }
  }

 
