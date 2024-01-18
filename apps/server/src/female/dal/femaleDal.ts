import Male from '../../male/model/tableDefinition';

export const getAllMalefirstMatch = async () => {
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
      'matchmaleid',
    ],
  });
  return males;
};
