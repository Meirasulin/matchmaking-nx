import { ReactElement, useEffect, useState } from 'react';
import tRPC from '../../../../trpc/trpcClient';
import React from 'react';
import { TypeMatchmakersList } from '../types/MatchmakersList';
import '../style/morDetails.css';
import { FieldValues, useForm } from 'react-hook-form';
import { MdOutlineCancel } from 'react-icons/md';
type Prop = {
  open: boolean;
  onClose: () => void;
  forNextStep: {
    asked: number;
    asks: number;
    asksType: 'male' | 'female';
  };
};

const MorDetailsButton: React.FC<Prop> = ({ open, onClose, forNextStep }) => {
  const getAllMatchmakers = tRPC.matchmaker.getAllMatchmakersForinitMatch.query;
  const createMatch = tRPC.matching.createMatch.mutate;
  const [matchmakersList, setMatchmakersList] = useState<
    TypeMatchmakersList | undefined
  >();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    mode: 'onSubmit',
  });
  const { asked, asks, asksType } = forNextStep;

  const handleClickChose = async ({ select_matchmakers }: FieldValues) => {
    const res = await createMatch({
      asked,
      asks,
      asksType,
      handler: Number(select_matchmakers),
    }).then(()=> {

    })
  };

  useEffect(() => {
    const getMatchmakers = async () => {
      const matchmakers = await getAllMatchmakers();
      console.log(matchmakers);
      
      setMatchmakersList(matchmakers as TypeMatchmakersList);
    };
    getMatchmakers();
  }, []);
  return (
    <>
      <div
        onClick={onClose}
        className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? 'visible bg-black/20' : 'invisible'}
      `}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
          bg-white rounded-xl shadow p-6 transition-all
          ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}
        `}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
          >
            <MdOutlineCancel />
          </button>
          <div className="text-center w-56">
            <div className="mx-auto my-4 w-48">
              <h3 className="text-lg font-black text-gray-800">
                לפרטים נוספים והתאמה לשידוך יש לבחור משדכ/ת
              </h3>
              <p className="text-sm text-gray-500">בחר מתוך הרשימה</p>
            </div>
            <div>
              <form onSubmit={handleSubmit(handleClickChose)}>
                <select
                  id="select_matchmakers"
                  className="inputs mb-1"
                  {...register('select_matchmakers', { required: true })}
                >
                  <option className="text-center mb-1"></option>
                  {matchmakersList &&
                    matchmakersList.map((matchmaker, i) => (
                      <option
                        key={i}
                        value={matchmaker.id}
                        className="text-center mb-1"
                      >

                        {matchmaker.firstname} {matchmaker.lastname}
                      </option>
                    ))}
                </select>
                <button 
                disabled={!isValid}
                className={!isValid ? 'disableButton btn btn-danger w-full mb-1':  "btn btn-danger w-full mb-1" } type="submit">
                  בחר
                </button>
              </form>
            </div>
            <div className="flex gap-4">
              <button className="btn btn-light w-full" onClick={onClose}>
                ביטול
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MorDetailsButton;
