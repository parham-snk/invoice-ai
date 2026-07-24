import { useEffect, useState } from "react"
import { FaPlay, FaPause } from "react-icons/fa";
import speachRecognition, { useSpeechRecognition } from "react-speech-recognition"


export default function Home() {

    const [isPlay, setIsPlay] = useState(false)

    const { browserSupportsSpeechRecognition, listening, transcript, } = useSpeechRecognition()
    useEffect(() => {
        if (isPlay) {
            speachRecognition.startListening({ language: "fa-IR", continuous: true })
        } else {
            speachRecognition.stopListening()
        }

    }, [isPlay])

    return (
        <div className="bg-zinc-800 w-screen h-screen flex justify-center align-middle items-center flex-col">
            <div className="text-white ">
                {
                    isPlay &&
                    <FaPause size={100} className="animate-pulse cursor-pointer opacity-0" onMouseUp={() => setIsPlay(!isPlay)} />
                }
                {
                    !isPlay &&
                    <FaPlay size={100} className="animate-pulse cursor-pointer opacity-0" onMouseDown={() => setIsPlay(!isPlay)} />
                }
            </div>

            {
                transcript &&
                <div className="bg-zinc-900 p-2 border-white border text-white text-justify fixed bottom-10">
                    {
                        transcript
                    }
                </div>
            }

        </div>
    )
}