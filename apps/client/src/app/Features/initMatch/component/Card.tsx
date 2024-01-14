import { IoBagRemoveSharp } from 'react-icons/io5';
import { IoBookOutline } from 'react-icons/io5';
import { RiBriefcase4Fill } from 'react-icons/ri';
import { IoSchoolSharp } from 'react-icons/io5';

const Card = () => {
  return (
    <div className="max-w-fit max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="/docs/images/people/profile-picture-3.jpg"
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          אריאל
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>
        <div className="flex flex-row content-between">
          <IoBookOutline />
          <RiBriefcase4Fill />
          <IoSchoolSharp />
        </div>
      </div>
    </div>
  );
};
export default Card;
