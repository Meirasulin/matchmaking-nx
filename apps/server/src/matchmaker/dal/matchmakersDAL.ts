import Matchmakers from "../model/tableDefinition";
import { MatchmakerType } from "../types/matchmakerType";

export const matchmakersSignin = async (matchmaker: MatchmakerType) => {
  try {
    const newMatchmaker = Matchmakers.create(matchmaker);
    if (!newMatchmaker) throw new Error("Error in saveing new Matchmaker");
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

export const matchmakersLogin = async ({ email, password }: MatchmakerType) => {
  try {
    // const findMatchmaker = Matchmakers.findOne(email, )
    // const newMatchmaker = Matchmakers.build(matchmaker);
    // const saveNew = await newMatchmaker.save();
    // if (!saveNew) throw new Error("Error in saveing new Matchmaker");
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
