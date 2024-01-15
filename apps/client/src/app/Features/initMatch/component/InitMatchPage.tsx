import { Navigate } from 'react-router-dom';
import { fakeUserList } from '../utils/testUsersInfo';
import Card from './Card';

const InitMatchPage = () => {
    const token = localStorage.getItem('TOKEN')
    if (!token) return <Navigate replace to={'/'}/>
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {fakeUserList.map((item, i) => (
        <Card fakeUser={item} key={i} />
      ))}
    </div>
  );
};
export default InitMatchPage;
