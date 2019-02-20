import { combineEpics } from 'redux-observable';
import fetchUserEpic from './fetchUser';


export default combineEpics(
    fetchUserEpic
  );