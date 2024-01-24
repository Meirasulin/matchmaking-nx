import { Navigate } from 'react-router-dom';
import Card from './Card';
import tRPC from '../../../../trpc/trpcClient';
import { useEffect, useState } from 'react';
import { userInfoTodisplayType } from '../types/userIfnoToDisplay';
import { useAppSelector } from '../../../redux/hookStore';

const InitMatchPage = () => {
  const token = localStorage.getItem('TOKEN');
  const getMatchingCards = tRPC.matching.getAllInitMatchingCards.query;
  const [matchingCards, setMatchingCards] = useState<
    userInfoTodisplayType[] | undefined
  >();
  const logedUser = useAppSelector((state) => state.login.logedUser);

  
  useEffect(() => {
    if (logedUser) {
      getMatchingCards(logedUser.gender).then((res) => {
        setMatchingCards(res as userInfoTodisplayType[]);
      });
    }
  }, []);

  if (!token) return <Navigate replace to={'/'} />;
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {matchingCards &&
        matchingCards.map((item, i) => <Card user={item} key={i} />)}
    </div>
  );
};
export default InitMatchPage;
