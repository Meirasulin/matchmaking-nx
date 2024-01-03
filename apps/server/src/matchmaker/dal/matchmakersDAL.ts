import Matchmakers from '../model/tableDefinition';
import { LoginMatchmakerType, MatchmakerType } from '../types/matchmakerType';
import { compare } from 'bcrypt';

export const matchmakersSignin = async (matchmaker: MatchmakerType) => {
  try {
    const newMatchmaker = await Matchmakers.create(matchmaker);
    const saveNewMatchmaker = await newMatchmaker.save();
    if (!newMatchmaker) throw new Error('Error in saveing new Matchmaker');
    console.log(
      'signup of new matchmaker as been saved - ' + saveNewMatchmaker.dataValues
    );
    return saveNewMatchmaker;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export const matchmakersLogin = async ({
  email,
  password,
}: LoginMatchmakerType) => {
  try {
    console.error('test', email, password);

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
