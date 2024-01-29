import tRPC from '../../../../trpc/trpcClient';
import { useEffect, useState } from 'react';
import { userInfoTodisplayType } from '../types/userIfnoToDisplay';
import { useAtom } from 'jotai';
import { logedUserInfo } from '../../../helpers/logedUserInfo';

const HookFirstMatchCards = () => {
  const [data, setData] = useState<userInfoTodisplayType[] | undefined>(
    undefined
  );
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const getMatchingCards = tRPC.matching.getAllInitMatchingCards.query;
  const [logedUser] = useAtom(logedUserInfo);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (!logedUser) throw new Error('no loged user connection');
        const response = await getMatchingCards(logedUser.gender);
        if (!response) throw new Error('error in fetch posts data');
        setData(response as userInfoTodisplayType[]);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { data, error, isLoading };
};

export default HookFirstMatchCards;
