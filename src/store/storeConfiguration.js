import {createStore} from "redux";
// import {twitterReducer} from "../reducers/twitterReducer";
import {rootReducer} from "../reducers/rootReducer";


// const initialState = {
//     user: {
//         avatar: 'https://www.gravatar.com/avatar/0000?d=monsterid',
//         name: 'Monster'
//     },
//     stats: {
//         followers: 10,
//         subscribe: 1
//     }
// }

// export  const store = createStore(twitterReducer, initialState);
// export  const store = createStore(rootReducer, initialState);
export  const store = createStore(rootReducer);