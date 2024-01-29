export const getAge = (birthdate: Date) => {
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  age -= birthdate.getMonth() > today.getMonth() ? 1 : 0;
  return age;
};
