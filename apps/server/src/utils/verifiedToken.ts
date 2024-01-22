import Male from '../male/model/tableDefinition';
import { TRPCError } from '@trpc/server';
import Female from '../female/model/tableDefinition';
import Matchmakers from '../matchmaker/model/tableDefinition';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { MaleType } from '../male/types/maleTypes';
import { FemaleType } from '../female/types/femaleType';
import { MatchmakerType } from '../matchmaker/types/matchmakerType';

export const verified = async ({ ctx, next }) => {
  const { req } = ctx;
  const token = req.headers.authorization;

  if (!token) throw new TRPCError({ code: 'UNAUTHORIZED' });
  const tokenObj = jwt.verify(
    token,
    process.env.SECRET_KEY_TOKEN
  ) as JwtPayload;

  if (tokenObj.usertype === 'male') {
    const user = (await Male.findOne({
      where: { email: tokenObj.email },
      raw: true,
    })) as unknown as MaleType;
    if (!user) throw new TRPCError({ code: 'UNAUTHORIZED' });

    if (user.password !== tokenObj.password)
      throw new TRPCError({ code: 'UNAUTHORIZED' });
  } else if (tokenObj.usertype === 'female') {
    const user = (await Female.findOne({
      where: { email: tokenObj.email },
      raw: true,
    })) as unknown as FemaleType;
    if (!user) throw new TRPCError({ code: 'UNAUTHORIZED' });

    if (user.password !== tokenObj.password)
      throw new TRPCError({ code: 'UNAUTHORIZED' });
  } else if (tokenObj.usertype === 'matchmaker') {
    const user = (await Matchmakers.findOne({
      where: { email: tokenObj.email },
      raw: true,
    })) as unknown as MatchmakerType;
    if (!user) throw new TRPCError({ code: 'UNAUTHORIZED' });
    if (user.password !== tokenObj.password)
      throw new TRPCError({ code: 'UNAUTHORIZED' });
  } else {
  }

  return next();
};
