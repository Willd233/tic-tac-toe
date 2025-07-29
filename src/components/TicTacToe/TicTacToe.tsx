"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./styles/TicTacToe.module.scss";
import Timer from "../TurnTimer/timer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faO, faXmark } from "@fortawesome/free-solid-svg-icons";

export function TicTacToe() {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [gameStatus, setGameStatus] = useState({
    message: "Tic Tac Toe",
    color: "",
    winningCells: [] as number[],
  });

  const handleClick = (i: number) => {
    if (!isPlaying || cells[i] || gameStatus.winningCells.length > 0) return;

    const newCells = [...cells];
    newCells[i] = turn;
    setCells(newCells);
    setTurn(turn === "X" ? "O" : "X");
    setGameStatus((prevStatus) => ({ ...prevStatus, winningCells: [] }));
  };

  const checkGameOutcome = useCallback(() => {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // Usamos find() para buscar la primera condición ganadora
    const foundWinningCondition = winningConditions.find((condition) => {
      return (
        cells[condition[0]] &&
        cells[condition[0]] === cells[condition[1]] &&
        cells[condition[1]] === cells[condition[2]]
      );
    });

    if (foundWinningCondition) {
      const winner = cells[foundWinningCondition[0]];
      setGameStatus({
        message: `${winner} Wins!`,
        color: winner === "X" ? "#940a0a" : "#F3B52E",
        winningCells: foundWinningCondition,
      });
      setIsPlaying(false);
      setTurn("X"); // Reinicia el turno para el siguiente juego
    } else if (cells.every((cell) => cell !== "")) {
      // Si no hay ganador y todas las celdas están llenas, es un empate
      setGameStatus({
        message: "It's a tie!",
        color: "",
        winningCells: [],
      });
      setIsPlaying(false);
      setTurn("X"); // Reinicia el turno para el siguiente juego
    }
  }, [cells]);

  const startTimer = () => {
    setIsPlaying(true);
    setCells(Array(9).fill(""));
    setTurn("X"); // Siempre comienza con X
    setGameStatus({
      message: "Tic Tac Toe",
      color: "",
      winningCells: [],
    });
  };

  // Inside your Grid component, before the return statement
  const getCellClasses = (index: number, cell: number) => {
    const classes = [styles.icon];

    // Add 'filled' class if the cell is not empty
    if (cell) {
      classes.push(styles.filled);
    }

    // Add hover classes
    if (isPlaying && !cells[index]) {
      if (turn === "X") {
        classes.push(styles.hoverX);
      } else if (turn === "O") {
        classes.push(styles.hoverO);
      }
    }

    // Add winner cell classes
    if (gameStatus.winningCells.includes(index)) {
      if (cells[gameStatus.winningCells[0]] === "X") {
        classes.push(styles.winnerCellX);
      } else {
        classes.push(styles.winnerCellO);
      }
    }

    return classes.join(" ");
  };

  useEffect(() => {
    checkGameOutcome();
  }, [cells, checkGameOutcome]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 style={{ color: gameStatus.color }}>{gameStatus.message}</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.game}>
          <div
            className={`${styles.X} ${
              turn === "X" && isPlaying ? styles.turnActive : ""
            } `}
          >
            <div
              className={`${styles.text} ${
                cells[gameStatus.winningCells[0]] === "X"
                  ? styles.turnTitleWinnerX
                  : ""
              }`}
            >
              <h1>X Turn</h1>
            </div>
            <div
              className={`${styles.timer} ${styles.afterO} ${
                cells[gameStatus.winningCells[0]] === "X"
                  ? styles.turnWinnerX
                  : ""
              }`}
            >
              <span className={styles.titleInternal}>
                <Timer
                  playing={isPlaying}
                  turn={turn}
                  setTurn={setTurn}
                  tag={"O"}
                />
              </span>
            </div>
          </div>
          <section className={styles.grid}>
            {cells.map((cell, index) => (
              <span
                key={index}
                className={getCellClasses(index, cell)}
                data-cell={cell}
                onClick={() => handleClick(index)}
              >
                {cell === "X" && (
                  <FontAwesomeIcon icon={faXmark} className={styles.iconRed} />
                )}
                {cell === "O" && (
                  <FontAwesomeIcon icon={faO} className={styles.iconOrange} />
                )}
              </span>
            ))}
          </section>

          <div
            className={`${styles.O} ${
              turn === "O" && isPlaying ? styles.turnActive : ""
            }`}
          >
            <div
              className={`${styles.text}  ${
                cells[gameStatus.winningCells[0]] === "O"
                  ? styles.turnTitleWinnerO
                  : ""
              }`}
            >
              <h1>O Turn</h1>
            </div>
            <div
              className={`${styles.timer} ${styles.afterX} ${
                cells[gameStatus.winningCells[0]] === "O"
                  ? styles.turnWinnerO
                  : ""
              }`}
            >
              <span className={styles.titleInternal}>
                <Timer
                  playing={isPlaying}
                  turn={turn}
                  setTurn={setTurn}
                  tag={"X"}
                />
              </span>
            </div>
          </div>
        </div>
        <button
          disabled={isPlaying === true}
          onClick={startTimer}
          className={`${styles.button}  ${
            isPlaying ? styles.inProgress : styles.play
          }`}
        >
          {isPlaying ? "EN PROGRESO" : "JUGAR"}
        </button>
      </div>
    </div>
  );
}
