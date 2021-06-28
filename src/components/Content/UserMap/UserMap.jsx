import React from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import './userMap.scss';

const UserMap = (props) => {


    return (
        <div className='user-map'>
            <YMaps>
                <div>
                <Map width='100%' defaultState={{ center: [57.626559, 39.893813], zoom: 9,}} />
                </div>
            </YMaps>
        </div>
    );
}

export default UserMap;