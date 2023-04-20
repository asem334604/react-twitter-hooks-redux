import React from 'react';
import UserAvatar from "./UserAvatar";
import {useDispatch, useSelector} from "react-redux";
import {updateStatsAction} from "../action/statsAction";

const UserStats = () => {
const {user, stats} = useSelector(state => state);
const dispatch = useDispatch();
    return (
            <div className={'user-stats'}>
                <UserAvatar/>
                {user.name}
                <div className={'stats'}>
                    <div onClick={() => dispatch(updateStatsAction('inc', 'followers'))}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(updateStatsAction('dec', 'followers'));
                    }}>Followers:{stats.followers} </div>
                    <div onClick={() => dispatch(updateStatsAction('inc', 'subscribe'))}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(updateStatsAction('dec', 'subscribe'))
                    }}>Subscribe: {stats.subscribe} </div>
                </div>

            </div>
    );
};
//gravatar.com
export default UserStats;