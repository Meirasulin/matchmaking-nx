import Female from '../../female/model/tableDefinition';
import Male from '../../male/model/tableDefinition';
import { femaleInfoForMatchmakers, maleInfoForMatchmakers } from '../utils/attributesLists';
import Matching from '../../matching/model/tableDefinition';
import Matchmakers from '../model/tableDefinition';
import { LoginMatchmakerType, MatchmakerType } from '../types/matchmakerType';
import { compare,  } from 'bcrypt';


// export const testGetMatchmaker = async () => {
//   try {
//     const matchmaker = await Matchmakers.findAll();
//     if (!matchmaker) throw new Error('error in faind all qurey');
//     console.log(matchmaker);
//     return matchmaker;
//   } catch (error) {
//     console.log(error);
//     return Promise.reject(error);
//   }
// };
// export const findUser = async (email: string) => {
//   try {
//     const findMatchmaker = await Matchmakers.findOne({
//       where: { email },
//       raw: true,
//     });
//     if (findMatchmaker) throw new Error ('user not found')
    
//   } catch (error) {}
// };
export const getAllMatchmakersForInitMatch = async () => {
  const matchmakers = await Matchmakers.findAll({
    attributes: [
      'id',
      'firstname',
      'lastname',
      'email',
      'phonenumber',
      'gender',
      'specialty',
    ]
  })
  return matchmakers
}


export const matchmakersSignUp = async (matchmaker: MatchmakerType) => {
  try {
    const newMatchmaker = await Matchmakers.create(matchmaker);
    // const saveNewMatchmaker = await newMatchmaker.save();
    if (!newMatchmaker) throw new Error('Error in saveing new Matchmaker');
    return newMatchmaker;
  } catch (error) {
    console.log(error);
    throw error
  }
};

export const matchmakersLogin = async ({
  email,
  password,
}: LoginMatchmakerType) => {
  try {

    const findMatchmaker = (await Matchmakers.findOne({
      where: { email },
      raw: true,
    })) as unknown as MatchmakerType;
    if (!findMatchmaker) throw new Error('The email or password is incorrect');
    const match = await compare(password, findMatchmaker.password);
    if (!match) throw new Error('The email or password is incorrect');
    return findMatchmaker;
  } catch (error) {
    return Promise.reject(error);
  }
};


export const getAllMatchs = async (matchmakerid: number) =>{
  const matchmaker = await Matchmakers.findOne({
    where: {
      id: matchmakerid
    }
  })
  if (!matchmaker) throw new Error ('unvalidated matchmaker')
  const matchs = await Matching.findAll({
where:{
  idmatchmaker: matchmaker.dataValues.id as number
}})
if (!matchs) throw new Error ('no matchs yet')

const matchsInfo =  matchs.map(async (match)=>{
  const male = await Male.findOne({
    where: {
      id: match.dataValues.idmale
    },
    attributes: maleInfoForMatchmakers
  })
  const female = await Female.findOne({
    where: {
      id: match.dataValues.idfemale
    },
    attributes: femaleInfoForMatchmakers
  })
  return {male, female}
})
return matchsInfo
}