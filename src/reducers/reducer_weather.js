import { FETCH_WEATHER} from "../actions";

export default function (state = [], action) {
    switch (action.type){
        case FETCH_WEATHER:{

            // push method replace the exist state of daya
            //return state.push(action.payload.data);

            // concat method concatenate with previous state
            //return state.concat(action.payload.data);

            // same with previous approach but use ES6 feature
            return [action.payload.data, ...state];
        }
    }
    return state;
}