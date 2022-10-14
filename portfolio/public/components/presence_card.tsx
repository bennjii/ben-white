import { useThrottle } from "./throttle";
import { useLanyardWs, useLanyard } from "use-lanyard";
import { useEffect, useState } from "react";
import Image from "next/image"

export const PresenceCard: React.FC<{ profile: boolean, minimal?: boolean }> = ({ profile, minimal }) => {
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
			<div></div>
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
            <div className={`${profile ? "max-w-full w-full" : "max-w-5xl"} w-full flex flex-row  bg-[#191414] ${minimal ? "p-3 rounded-[35px]" : "px-6 py-6 rounded-[35px]"} gap-5 font-inter`}>
            <div className="rounded-3xl overflow-hidden max-h-[80px] flex max-w-[80px] w-full h-[80px] flex-row items-center justify-center" style={{ backgroundImage: `url(${data.spotify.album_art_url})`, backgroundSize: "contain" }}>
                {/* // eslint-disable-next-line @next/next/no-img-element */}
                <div className="flex flex-row items-center justify-center gap-[3px]">
                    <div className="animate-rise_fall w-1 bg-white h-4" style={{ animationDelay: "0.1s" }} />
                    <div className="animate-rise_fall w-1 bg-white h-6" style={{ animationDelay: "0.2s" }} />
                    <div className="animate-rise_fall w-1 bg-white h-8" style={{ animationDelay: "0.4s" }} />
                    <div className="animate-rise_fall w-1 bg-white h-5" style={{ animationDelay: "0.3s" }} />
                    <div className="animate-rise_fall w-1 bg-white h-8" style={{ animationDelay: "0.4s" }} />
                    <div className="animate-rise_fall w-1 bg-white h-6" style={{ animationDelay: "0.9s" }} />
                    <div className="animate-rise_fall w-1 bg-white h-4" style={{ animationDelay: "0.8s" }} />
                </div>
                {/* <img src={data.spotify.album_art_url} alt={data.spotify.album} height={80} width={80} className="w-full"/> */}
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className={`${minimal ? "max-w-[180px]" : "max-w-[300px]"} w-full inline-block`}>
                    <h1 className={`${minimal ? "text-base" : "text-3xl"} font-bold text-white block truncate`}>{data?.spotify.song}</h1>
                    <p className="text-opacity-50 text-white block truncate">{data?.spotify.artist}</p>
                </div>

                {
                    minimal ?
                    <div className="h-full flex flex-1 flex-col">
                        <div className="flex flex-row flex-1 max-h-1">
                            <div className="w-full bg-white bg-opacity-50 rounded-full overflow-hidden flex">
                                <div style={{ width: `${progress}%`, transition: "150ms linear", borderRadius: "15px" }} className="bg-white bg-opacity-100"></div>
                            </div>
                        </div>
                    </div>
                    :
                    <></>
                }
            </div>

                {
                    !minimal ?
                    <div className="flex flex-col flex-1 p-3" > {/* style={{ display: "none" }} */}
                        <div className="h-full flex flex-1 flex-col">
                            <div className="flex flex-row flex-1 max-h-1">
                                <div className="w-full bg-white bg-opacity-50 rounded-full overflow-hidden flex">
                                    <div style={{ width: `${progress}%`, transition: "150ms linear", borderRadius: "15px" }} className="bg-white bg-opacity-100"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row flex-1">
                            <div className="flex flex-col flex-1 justify-end">
                                {/* Text */}
                                {/* <p className="font-semibold text-white text-xl m-0">Leave America, two kids follow her</p>
                                <p className="font-semibold text-white text-opacity-50 text-sm m-0">I don{'\''}t wana talk about who{'\''}s doing it first</p> */}
                            </div>
                            <div className="flex flex-col justify-end items-end">
                                {/* Duration */}
                                <div className="flex flex-row items-center gap-1">
                                    <p className="font-bold text-white">{millisToMinutesAndSeconds(new Date().getTime() - data.spotify.timestamps.start )}</p>
                                    <p className="font-bold text-white">/</p>
                                    <p className="font-bold text-white text-opacity-50">{millisToMinutesAndSeconds(total)}</p>
                                </div>
                                {
                                    minimal ?
                                    <></>
                                    :
                                    <div className="flex flex-row items-center gap-2">
                                        <p className="font-bold text-sm text-white text-opacity-50">{time.join(":")}</p>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <></>
                }
        </div>
    )
}

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000)
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds.toFixed(0);
}