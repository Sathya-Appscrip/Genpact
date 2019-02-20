import { ofType } from 'redux-observable'
import { ajax } from 'rxjs/ajax'
import { map, switchMap } from 'rxjs/operators'
import * as actionTypes from '../actions/actionTypes';
import { updateUser } from '../actions'

const fetchUserEpic = action$ =>
    action$.pipe(
        ofType(actionTypes.GET_USER),
        map(action => action.payload.userID),
        switchMap(userID =>
            ajax
                .getJSON(`https://reqres.in/api/users/${userID}`)
                .pipe(map(data => updateUser(data)))
        )
    )

export default fetchUserEpic
