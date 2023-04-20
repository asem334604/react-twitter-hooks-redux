// import {FOLLOWERS_DEC, FOLLOWERS_INC, SUBSCRIBES_DEC, SUBSCRIBES_INC} from "../action/statsAction";
import {UPDATE_STATS} from "../action/statsAction";

const initialState = {
    followers: 10,
    subscribe: 1
}

export const statsReducer = (stats = initialState, action) => {
    switch (action.type) {
        case UPDATE_STATS: {
            let fType = action.payload.followType;
            let uType = action.payload.updateType;
            if (fType === "followers" && uType === 'inc')
                return {...stats, followers: stats.followers + 1};
            else if (fType === "followers" && uType === 'dec')
                return {...stats, followers: stats.followers - 1};
            else if (fType === "subscribe" && uType === 'inc')
                return {...stats, subscribe: stats.subscribe + 1};
            else if (fType === "subscribe" && uType === 'dec')
                return {...stats, subscribe: stats.subscribe - 1};
            else {console.log('Probably wrong parameters for updateStatsAction');
                break;
            }
        }
        default:
            return stats;
    }
}

// export const statsReducer = (stats = initialState, action) => {
//     switch (action.type) {
//         case FOLLOWERS_INC:
//             return{...stats, followers : ++stats.followers};
//
//         case FOLLOWERS_DEC:
//             return{...stats, followers: stats.followers>0?
//                     stats.followers - 1 : 0 };
//
//         case SUBSCRIBES_INC:
//             return{...stats, subscribe: stats.subscribe + 1};
//
//         case SUBSCRIBES_DEC:
//             return{...stats, subscribe: stats.subscribe>0?
//                     stats.subscribe - 1 : 0};
//
//         default: return stats;
//     }
// }