import MatchmakerIcon from '../../../../assets/icon/MatchmakerIcon';
import DiamondRing from '../../../../assets/icon/DiamondRing';
import Parents from '../../../../assets/icon/Parents';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-white shadow ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">


            <div className="hidden md:flex items-center space-x-3">
              <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => navigate('/login?login=matchmaker')}
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
           כניסת שדכנים

            </button>
            <button
               onClick={() => navigate('/login?login=female')}
               className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
               >
           כניסת בחורות
            </button>
            <button
              onClick={() => navigate('/login?login=male')}
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
           כניסת בחורים
          </button>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg
                  className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex flex-row flex-wrap bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto w-1/2">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-right">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    מאגר השידוכים הגדול בעולם למגזר החרדי{' '}
                  </span>
                  <span className="block text-green-600 xl:inline">
                    הדרך הטובה לשידוך מושלם.
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  באתר שלנו תוכל להתרשם מהצעות לשידוך באופן מעמיק אודות לפרופיל
                  אישיות מפורט עם תכונות אופי בולטות.
                  <br />
                  תוכלו לבחור את המשדכ/ת שילווה אותך בכל שלב בדרך, מהרישום ועד
                  לשידוך המוצלח.
                  <br />
                  האתר מותאם באופן בלעדי למגזר - החל מממשק צנוע וכלה בהתנהלות על
                  פי הנורמות המקובלות.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className=" lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className=""
            src="https://cdn.discordapp.com/attachments/1061944547246088242/1200014980469235763/Haredi_Jewish_married_couple-removebg-preview.png"
            alt=""
          />
        </div>
      </div>

      <div className="py-12 bg-white pb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
              למי מיועד?
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              התנהלות שידוך דיגיטלית מהירה ויעילה
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white m-1">
                    <DiamondRing />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    מחפשי שידוך
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    בחורים ובחורות בתקופת השידוכים, נכנסים למערכת וכבר יכולים
                    לקבל הצעות ממשדכים וכן לבדוק התאמה לשידוך יחד עם משדכים.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full m-1 bg-green-500 text-white">
                    <Parents />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    הורים למחפשי שידוך
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    הורים המחפשים לילדיהם יכולה לרשום את פרטי הבחור/ה ולקבל
                    הצעות שידוכים וכן לבדוק התאמה לשידוך יחד עם משדכים.
                  </dd>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full m-1 bg-green-500 text-white">
                    <MatchmakerIcon />
                  </div>
                </div>
                <div className="ml-4">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    שדכנים
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    שדכנים מקבלים פניות ממחפשי שידוך כדי לנהל עבורם את תהליך
                    השידוך מתחילתו ועד סופו.
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>

        <div className="relative bg-gray-900">
          <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
            <div className="h-full w-full xl:grid xl:grid-cols-2">
              <div className="h-full xl:relative xl:col-start-2">
                <img
                  className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                  src="stats-illustration.png"
                  alt=""
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                ></div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
            <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
              <h2 className="text-sm font-semibold tracking-wide uppercase">
                <span className="bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  להשתדך בקלות ובצניעות.
                </span>
              </h2>
              <p className="mt-3 text-3xl font-extrabold text-white">
                אתר השידוכים שלנו מאפשר למצוא שידוך מתאים בצורה יעילה ומכובדת.
                עם אלפי משודכים.
                <br /> ולמצוא את אלו המתאימים ביותר.
              </p>
              <p className="mt-5 text-lg text-gray-300"></p>

              <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                <p>
                  <span className="block text-2xl font-bold bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                    2000+
                  </span>
                  <span className="mt-1 block text-base text-gray-300">
                    <span className="font-medium text-white">משדכים</span> כבר
                    מטפלים ומציעים שידוכים מהמאגר.
                  </span>
                </p>

                <p>
                  <span className="block text-2xl font-bold bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                    100,000+
                  </span>
                  <span className="mt-1 block text-base text-gray-300">
                    <span className="font-medium text-white">פגישות</span>{' '}
                    שהתנהלו באמצעות המערכת.
                  </span>
                </p>

                <p>
                  <span className="block text-2xl font-bold bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                    20,000+
                  </span>
                  <span className="mt-1 block text-base text-gray-300">
                    <span className="font-medium text-white">משודכים</span>{' '}
                    מקבלים הצעות לשידוך מותאמים להם.{' '}
                  </span>
                </p>

                <p>
                  <span className="block text-2xl font-bold bg-gradient-to-r from-teal-300 to-cyan-400 bg-clip-text text-transparent">
                    1000+
                  </span>
                  <span className="mt-1 block text-base text-gray-300">
                    <span className="font-medium text-white">זוגות</span> שנישאו
                    דרך המאגר.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">מאיפה מתחילים ?</span>
                <span className="block text-green-600">
                  שידוך טוב מתחיל טוב.
                </span>
              </h2>
              <p className="mt-5 text-lg text-gray-600">
                ביצירת החשבון אתם תתבקשו לתת לנו מידע אודותכם כדי שנוכל להציג
                ולנהל את ההצעות ביעילות רבה, אנו נציג את הפרטים על תכונות האופי
                והאישיות שלכם באנונמיות עד שתאשרו לצד השני בשידוך לצפות בפרטים
                המלאים אודותכם. <br />
                כל המידע שתשתפו יועיל לתהליך השידוך וכן ישמר במאגרי הנתונים שלנו
                ברמת אבטחה גבוהה.
              </p>
            </div>
          </div>

          <div className="lg:flex  mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
            <div className="rounded-md shadow">
              <button
                onClick={() => navigate('/signup?signup=male')}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
              >
                רישום בחור
              </button>
            </div>
            <div className="rounded-md shadow">
              <button
                onClick={() => navigate('/signup?signup=female')}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
              >
                רישום בחורה
              </button>
            </div>
          </div>
        </div>
        <div className="relative bg-gray-900">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-50 sm:text-4xl">
                <span className="block">
                  אתם עושים את השידוך אנחנו את התהליך.
                </span>
                <span className="block text-green-600">
                  להפגיש בקלות ולשדך בנחת.
                </span>
              </h2>
              <p className="mt-5 text-lg text-gray-50">
                לאחר יצירת חשבון שדכן אנו נבצע אימות על החשבון שיצרתם ונעדכן
                אותכם מיד כשנאשר, לאחר מכן אתם אתם תוכלו לקבל הצעות לשדך ולהפגיש
                בין משודכים.
              </p>
            </div>
          </div>

          <div className="lg:flex  mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
            <div className="rounded-md shadow">
              <button
                onClick={() => navigate('/signup?signup=matchmaker')}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
              >
                הרשמה לשדכנים
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
