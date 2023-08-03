'use client'
import Script from 'next/script';
import styles from './fluidicPlayer.module.scss';

const FluidicPlayer = ({ loid, accountId, userId, token }) => {
    const onLoadFunc = () => {
        cpPlayerLib.startPlayer(loid, accountId, userId, token, "player", function (data) {
            // document.getElementById("moduleId").innerHTML = "Current module : " + JSON.stringify(data);
        })
    }
    return (
        <>
            <Script strategy="lazyOnload" src="https://cpcontentsdev.adobe.com/public/publiccdn/playerInteractionLib.min.js" onLoad={() => onLoadFunc()} />
            <div id="player" className={styles.player}></div>
        </>
    )
}

export default FluidicPlayer

/*

https://learningmanager.adobe.com//app/player?&user_id=19381376&account_id=116411&csrf_token=3b68df133d6b432abeee0a975ae82def&is_staged=false&preview=true&no_reporting=true&is_native=true&lo_id=course:6037764&module_id=course:6037764_6546420_11168847_0

https://cpcontents.adobe.com/public/prime-player/index_859cef75447ac235b2007828bc76d852_production.html?&user_id=19381376&account_id=116411&csrf_token=3b68df133d6b432abeee0a975ae82def&is_staged=false&preview=true&no_reporting=true&is_native=true&lo_id=course:6037764&hostName=learningmanager.adobe.com

https://learningmanager.adobe.com//app/player?lo_id=course:6037764&user_id=19381376&account_id=116411&csrf_token=3b68df133d6b432abeee0a975ae82def&is_staged=false&preview=true&no_reporting=true


*/