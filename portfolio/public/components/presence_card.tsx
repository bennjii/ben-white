import { useThrottle } from "./throttle";
import { useLanyardWs, useLanyard } from "use-lanyard";
import { useEffect, useState } from "react";
import Image from "next/image"

export const PresenceCard: React.FC<{}> = () => {
    const data = useThrottle(useLanyardWs("255884977466507265"));
    const [, rerender] = useState({});

    useEffect(() => {
		const interval = setInterval(() => {
			rerender({});
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);
    
    if (!data) {
		// Loading state
		return (
			<div>
				...
			</div>
		);
	}

    if (!data?.spotify) {
		return null;
	}

    const total = data?.spotify.timestamps.end - data?.spotify.timestamps.start;
	const progress = 100 - (100 * (data?.spotify.timestamps.end - new Date().getTime())) / total;

    const time = new Date().toLocaleString('en-US', { hour12: false }).split(",")[1].split(":");
    time.pop();

    return ( 
        <div className="max-w-5xl w-full flex flex-row rounded-[35px] bg-[#191414] px-6 py-6 gap-5 font-inter">
            <div className="rounded-3xl overflow-hidden">
                {/* // eslint-disable-next-line @next/next/no-img-element */}
                <img src={data.spotify.album_art_url} alt={data.spotify.album} height={80} width={80}/>
            </div>

            <div className="flex flex-col items-start justify-center max-w-[200px] w-full truncate">
                <h1 className="text-3xl font-bold">{data?.spotify.song}</h1>
                <p className="text-opacity-50 text-white">{data?.spotify.artist}</p>
            </div>

            <div className="flex flex-col flex-1 p-3">
                <div className="h-full flex flex-1 flex-col">
                    <div className="flex flex-row flex-1 max-h-1">
                        <div className="w-full bg-white bg-opacity-50 rounded-full overflow-hidden flex">
                            <div style={{ width: `${progress}%`, transition: "150ms linear" }} className="bg-white bg-opacity-100"></div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row flex-1">
                    <div className="flex flex-col flex-1">
                        {/* Text */}
                        <p className="font-semibold text-white text-base">Leave America, two kids follow her</p>
                        <p className="font-semibold text-white text-opacity-50 text-base">I don{'\''}t wana talk about who{'\''}s doing it first</p>
                    </div>
                    <div className="flex flex-col justify-end items-end">
                        {/* Duration */}
                        <div className="flex flex-row items-center gap-1">
                            <p className="font-bold text-sm text-white">{millisToMinutesAndSeconds(new Date().getTime() - data.spotify.timestamps.start )}</p>
                            <p className="font-bold text-sm text-white">/</p>
                            <p className="font-bold text-sm text-white text-opacity-50">{millisToMinutesAndSeconds(total)}</p>
                        </div>
                        {/* Waveform */}
                        <div className="flex flex-row items-center gap-2">
                            <svg width="20" height="16" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="1" y1="11.7772" x2="1" y2="17.3213" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <line x1="26.8653" y1="11.7772" x2="26.8653" y2="17.3213" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <line x1="5.31091" y1="5.31085" x2="5.31091" y2="23.7875" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <line x1="9.62177" y1="1" x2="9.62177" y2="27.0207" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <line x1="13.9327" y1="6.38861" x2="13.9327" y2="21.6321" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <line x1="18.2435" y1="2.0777" x2="18.2435" y2="27.0207" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                                <line x1="22.5544" y1="8.54407" x2="22.5544" y2="20.5544" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                            </svg>

                            <p className="font-bold text-sm text-white text-opacity-50">{time.join(":")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000)
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds.toFixed(0);
}