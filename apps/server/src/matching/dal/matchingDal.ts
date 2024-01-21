import Female from '../../female/model/tableDefinition';
import Male from '../../male/model/tableDefinition';

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
