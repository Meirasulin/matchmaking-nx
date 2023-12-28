import { matchmakersSignin } from '../dal/matchmakersDAL';
import { MatchmakerType } from '../types/matchmakerType';

export const signupService = (matchmaker: MatchmakerType) => {
  try {
    const sign = matchmakersSignin(matchmaker)
      .then((res) => {
        return res;
      })
      .catch((err) => err);
    return sign;
  } catch (error) {
    return error;
  }
};
