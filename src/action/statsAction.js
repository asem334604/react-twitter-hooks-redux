export const UPDATE_STATS = 'UPDATE_STATS';

export const updateStatsAction = (updateType, followType) => (
    {
        type: UPDATE_STATS,
        payload: {updateType, followType}
    }
);

// export const FOLLOWERS_INC = 'FOLLOWERS_INC';
// export const FOLLOWERS_DEC = 'FOLLOWERS_DEC';
// export const SUBSCRIBES_INC = 'SUBSCRIBES_INC';
// export const SUBSCRIBES_DEC = 'SUBSCRIBES_DEC';
//
// export const followersIncAction = () => (
//     {type: FOLLOWERS_INC}
// );
//
// export const followersDecAction = () => (
//     {type: FOLLOWERS_DEC}
// );
//
// export const subscribesIncAction = () => (
//     {type: SUBSCRIBES_INC}
// );
//
// export const subscribesDecAction = () => (
//     {type: SUBSCRIBES_DEC}
// );