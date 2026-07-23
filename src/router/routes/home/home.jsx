import { useEffect, useState } from "react"
import { FaPlay, FaPause } from "react-icons/fa";



export default function Home() {

    const [isPlay, setIsPlay] = useState(false);
    const [data, setData] = useState();


    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition()
    recognition.lang = "fa-IR"; // فارسی
    recognition.continuous = true;
    recognition.interimResults = true;


    recognition.onresult = (eve) => {
        let text = "";

        for (let i = eve.resultIndex; i < eve.results.length; i++) {
            text += eve.results[i][0].transcript;
        }

        setData(text)
    }
    useEffect(() => {

    }, [])
    useEffect(() => {
        if (isPlay) {

        }
    }, [isPlay])

    return (
        <div className="bg-zinc-800 w-screen h-screen flex justify-center align-middle items-center flex-col">
            <div className="text-white ">
                {
                    isPlay &&
                    <FaPause size={100} className="animate-pulse cursor-pointer opacity-0" onClick={() => {

                        setIsPlay(!isPlay)
                        recognition.start()
                    }} />
                }
                {
                    !isPlay &&
                    <FaPlay size={100} className="animate-pulse cursor-pointer opacity-0" onClick={() => {
                        setIsPlay(!isPlay)
                    }} />
                }
            </div>

            <div className="text-white ">
                {data}
            </div>
        </div>
    )
}