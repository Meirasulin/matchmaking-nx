import Female from '../../female/model/tableDefinition';
import Male from '../../male/model/tableDefinition';
import Matchmakers from '../../matchmaker/model/tableDefinition';
import Matching from '../model/tableDefinition';
import { TypeMatching } from '../types/matchingType';

export const getInitMatchCards = async (userType: string) => {
  if (userType === 'female') {
    const males = await Male.findAll({
      attributes: [
        'firstname',
        'birthdate',
        'maritalstatus',
        'origin',
        'height',
        'headwear',
        'pelkoshers',
        'torahstudystatus',
        'highereducation',
        'jobstatus',
        'id',
        'gender',
      ],
    });
    // const maleRes = males.map((user)=> {
    //   return user.dataValues
    //     });
    return males;
  } else if (userType === 'male') {
    const females = await Female.findAll({
      attributes: [
        'firstname',
        'birthdate',
        'maritalstatus',
        'origin',
        'height',
        'headwear',
        'pelkoshers',
        'highereducation',
        'jobstatus',
        'id',
        'gender',
      ],
    });
    // const femaleRes = females.map((user)=> {
    //   return user.dataValues
    //     });
    return females;
  }
};

type changeMatching = {
    asks: number;
    asksType: 'female' | 'male';
    asked: number;
    handler: number;
};

export const createMatch = async (matchingInfo: changeMatching) => {
  const asks = await Male.findOne({
    where: { id: matchingInfo.asks },
  });
  const asked = await Female.findOne({
    where: { id: matchingInfo.asked },
  });
  const handler = await Matchmakers.findOne({
    where: { id: matchingInfo.handler },
  });
  let newMatch: TypeMatching | {} = {};
  if (matchingInfo.asksType === 'male') {
    newMatch = {
      idmale: asks.dataValues.id,
      Idfemale: asked.dataValues.id,
      idMatchmaker: handler.dataValues.id,
      status: 'start',
      asks: 'male',
    };
    // const match = await Matching.create(newMatch);
    // if (!match) throw new Error('error in createing match');
    // return match;
  } else if (matchingInfo.asksType === 'female') {
    newMatch = {
      idmale: asked.dataValues.id,
      Idfemale: asks.dataValues.id,
      idMatchmaker: handler.dataValues.id,
      status: 'start',
      asks: 'female',
    };
  }
  if (!newMatch) throw new Error('error in createing match');
  const match = await Matching.create(newMatch);
  if (!match) throw new Error('error in createing match');
  return match;
};
