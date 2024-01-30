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
  
  const male = await Male.findOne({
    where: { id: matchingInfo.asks },
  });
  const female = await Female.findOne({
    where: { id: matchingInfo.asked },
  });
  const handler = await Matchmakers.findOne({
    where: { id: matchingInfo.handler },
  });
  if (!handler || !female || !male) throw new Error ('unvalidated matching info')
  let newMatch: TypeMatching | {} = {};
  if (matchingInfo.asksType === 'male') {
    newMatch = {
      idmale: male.dataValues.id,
      idfemale: female.dataValues.id,
      idmatchmaker: handler.dataValues.id,
      status: 'start',
      asks: 'male',
    };

  } else if (matchingInfo.asksType === 'female') {
    newMatch = {
      idmale: male.dataValues.id,
      idfemale: female.dataValues.id,
      idmatchmaker: handler.dataValues.id,
      status: 'start',
      asks: 'female',
    };
    
  }
  const ifMatchAllrdyExists = await Matching.findOne({
    where: {
      idmale: male.dataValues.id as number,
      idfemale: female.dataValues.id as number,
    }
  })
  if (ifMatchAllrdyExists) throw new Error('match already exists')
  const match = await Matching.create(newMatch);
  
  if (!match) throw new Error('error in createing match');
  return match;
};

