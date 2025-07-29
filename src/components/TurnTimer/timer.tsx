"use client"
import { useEffect, useState } from "react"

export default function Timer({
    playing,
    turn,
    setTurn,
    tag,
}: {
    playing: boolean,
    turn: "X" | "O"
    setTurn: (turn: "X" | "O") => void;
    tag: "X" | "O",
}) {

    const [timer, setTimer] = useState(5);


    useEffect(() => {
        setTimer(5)
    }, [turn])

    useEffect(() => {
        if (!playing) return;

        if (tag === turn) {
            if (timer < 5) setTimer(5);
            return;
        }

        const interval = setInterval(() => {
            if (timer <= 0) {
                setTimer(5);
                setTurn(turn === "X" ? "O" : "X")
                return;
            }

            setTimer(timer - 1);
        }, 1000)
        
        return () => clearInterval(interval)

    }, [playing, timer, setTurn, turn, tag]);



    return (
        <div>
            <span>{timer}</span>
        </div>
    )
}


