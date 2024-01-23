import { Navigate } from 'react-router-dom';
import Card from './Card';
import tRPC from '../../../../trpc/trpcClient';
import { useEffect, useState } from 'react';
import { userInfoTodisplayType } from '../types/userIfnoToDisplay';
import { selectorLogedUser } from '../../login/redux/loginReducer';
import store from '../../../redux/initRedux';


const InitMatchPage = () => {
  const token = localStorage.getItem('TOKEN');
  const getMatchingCards = tRPC.matching.getAllInitMatchingCards.query;
  const [matchingCards, setMatchingCards] = useState<userInfoTodisplayType[] | undefined>();
  const logedUser = selectorLogedUser(store.getState().login)
  if (!logedUser) return <Navigate replace to={'/'}/>
  
  
  useEffect(() => {
    getMatchingCards(logedUser.gender).then((res) => {
      setMatchingCards(res as userInfoTodisplayType[])
    });
  }, []);
  
  if (!token) return <Navigate replace to={'/'} />;
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {matchingCards && matchingCards.map((item, i) => (
        <Card user={item} key={i} />
        ))}
    </div>
  );
};
export default InitMatchPage;
