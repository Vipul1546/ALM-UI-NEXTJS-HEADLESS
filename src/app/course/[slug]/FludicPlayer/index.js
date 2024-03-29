'use client'
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import styles from './fluidicPlayer.module.scss';


const FluidicPlayer = ({ loid, loResourcesId, accountId, userId }) => {
    const token = Cookies.get('token')

    useEffect(() => {
        const asdf = cpPlayerLib.getAllPlayers()

        cpPlayerLib.startPlayer(loid, accountId, userId, token, "player", function (data) {
            // document.getElementById("moduleId").innerHTML = "Current module : " + JSON.stringify(data);
            return data;
        });
    }, [])
    return (
        <>
            <div id="player" className={styles.player}></div>
        </>
    )
}

export default FluidicPlayer