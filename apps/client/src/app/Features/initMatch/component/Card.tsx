import { IoBagRemoveSharp } from 'react-icons/io5';
import { IoBookOutline } from 'react-icons/io5';
import { RiBriefcase4Fill } from 'react-icons/ri';
import { IoSchoolSharp } from 'react-icons/io5';
import { MdOutlinePhonelinkLock } from "react-icons/md";
import { userInfoTodisplayType } from '../types/userIfnoToDisplay';
import { colorsList } from '../style/colorsList';




type Prop = {
  fakeUser: userInfoTodisplayType
}

const Card = ({fakeUser}: Prop) => {
  const today = new Date();
  let age = today.getFullYear() - fakeUser.birthdate.getFullYear();
  age -= fakeUser.birthdate.getMonth() > today.getMonth() ? 1 : 0;
  // let  randomHex = Math.floor(Math.random() * 0xffffff).toString(16)
  const randomNumber = Math.floor(Math.random() * colorsList.length)
  let bgColor = `#${colorsList[randomNumber].padStart(6, '0')}`


  return (
    <div className={`max-w-72 rounded overflow-hidden shadow-xl m-10`}>
      <div className={`flex justify-center rounded-full overflow-hidden shadow-lg mb-1 `} style={{backgroundColor: bgColor}}>
        {' '}
        <img
          className="max-w-60 max-h-60  mr-4"
          src="https://cdn.discordapp.com/attachments/1061944547246088242/1196351593398935563/meir_asulin_Love_emoji_icon-removebg-preview_1.png"
          alt="Sunset in the mountains"
        />
        
      </div>

      <div className="font-bold text-xl mb-2 text-center ">
        {fakeUser.firstname}
      </div>
      <div className="px-6 py-4 flex justify-between">
        <span className="text-gray-700 text-base inline-block">
          גובה: {fakeUser.height}
        </span>
        <span className="text-gray-700 text-base inline-block">גיל: {age}</span>
      </div>
      <div className="px-6 py-4 flex justify-between">
        <span className="text-gray-700 text-base inline-block">
          מוצא: {fakeUser.origin}
        </span>
        <span className="text-gray-700 text-base inline-block">
          מצב משפחתי:{' '}
          {fakeUser.maritalstatus === 'single' ? 'רווק/ה' : 'גרוש/ה'}
        </span>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-2xl font-semibold text-gray-700 mr-2 mb-2">
          <IoBookOutline />
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-2xl font-semibold text-gray-700 mr-2 mb-2">
          <RiBriefcase4Fill />
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-2xl font-semibold text-gray-700 mr-2 mb-2">
          <IoSchoolSharp />
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-2xl font-semibold text-gray-700 mr-2 mb-2">
          <MdOutlinePhonelinkLock />
        </span>
      </div>
      <button>

      </button>
    </div>
  );
};
export default Card;
