import { Navigate } from 'react-router-dom';
import Card from './Card';
import { useAtom } from 'jotai';
import { logedUserInfo } from '../../../helpers/logedUserInfo';
import HookFirstMatchCards from '../hooks/GetFirstMatchingCards';
import LoadingCircle from '../../loading/component/LoadingCircle';
import ErrorAlert from '../../errors/component/ErrorAlert';

const InitMatchPage = () => {
  const token = localStorage.getItem('TOKEN');
  const [logedUser] = useAtom(logedUserInfo);
  const { data, error, isLoading } = HookFirstMatchCards();


  if (!token || !logedUser) return <Navigate replace to={'/'} />;
  if (isLoading) return <LoadingCircle />;
  if (error !== '') return <ErrorAlert message={error} />;
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center">
        {data && data.map((item, i) => <Card user={item} key={i} />)}
      </div>
    </>
  );
};
export default InitMatchPage;
