import { Navigate } from 'react-router-dom';
import { fakeUserList } from '../utils/testUsersInfo';
import Card from './Card';
import tRPC from '../../../../trpc/trpcClient';
import { useEffect, useState } from 'react';
import { userInfoTodisplayType } from '../types/userIfnoToDisplay';

const InitMatchPage = () => {
  const token = localStorage.getItem('TOKEN');
  if (!token) return <Navigate replace to={'/'} />;
  const getAllMales = tRPC.female.getAllMaleFirstMatch.query;
  const [males, setMales] = useState<userInfoTodisplayType[]>();

  useEffect(() => {
    getAllMales().then((res) => setMales(res as userInfoTodisplayType[]));
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center">
      {males && males.map((item, i) => (
        <Card fakeUser={item} key={i} />
      ))}
    </div>
  );
};
export default InitMatchPage;
