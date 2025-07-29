# 🎮 Tic Tac Toe Game

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=font-awesome&logoColor=white)

A classic Tic Tac Toe game built with **React**, **TypeScript**, and **Sass**. This project features a responsive design, turn-based gameplay with a timer, and clear visual feedback for game status.

---

## 🚀 Features

- **Classic Gameplay**: Play the timeless game of Tic Tac Toe.
- **Turn-Based System**: Clear indication of the current player's turn ("X" or "O").
- **Game Status Feedback**: Displays messages for wins, ties, and active game state.
- **Winning Highlight**: Visually highlights the winning combination of cells.
- **Play/Reset Button**: Easily start a new game or reset the board.
- **Turn Timer**: Includes a timer for each player's turn, assuming the functionality of `TurnTimer/timer.tsx`.
- **Responsive Design**: Utilizes Sass modules for a well-structured and adaptable UI.
- **Modern Icons**: Uses Font Awesome for "X" and "O" markers.

---

## 🛠️ Technologies Used

- [**React**](https://react.dev/)
- [**TypeScript**](https://www.typescriptlang.org/)
- [**Sass/SCSS**](https://sass-lang.com/)
- [**Font Awesome**](https://fontawesome.com/)

---

## 📦 Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

- Node.js (version 18.x or higher)
- npm or Yarn

### Steps

1.  **Clone the repository (or integrate into your existing project):**

    ```bash
    git clone git@github.com:Willd233/tic-tac-toe.git
    cd tic-tac-toe
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser (if using Next.js default configuration) to see the application.

---

## 🎮 How to Play

1.  **Start Game**: Click the "JUGAR" (Play) button to begin a new game.
2.  **Take Turns**: Players "X" and "O" take turns clicking on an empty cell to place their marker.
3.  **Win Condition**: The first player to get three of their markers in a row (horizontally, vertically, or diagonally) wins the game.
4.  **Tie Game**: If all cells are filled and no player has achieved three in a row, the game is a tie.
5.  **New Game**: After a win or tie, the board will reset, and the "JUGAR" button will reappear to start another round.

---

## 📁 Project Structure

The core game logic is encapsulated within the `TicTacToe` component.

```
TIC-TAC-TOE/
├── .next/ # Next.js build output (automatically generated)
├── node_modules/ # Project dependencies (automatically generated)
├── public/ # Static assets (favicon.ico, etc.)
├── src/ # Main application source code
│ ├── app/ # Next.js App Router pages and layouts
│ │ ├── favicon.ico
│ │ ├── layout.tsx
│ │ └── page.tsx
│ ├── components/ # Reusable React components
│ │ ├── TicTacToe/
│ │ │ ├── styles/
│ │ │ │ └── TicTacToe.module.scss # Specific styles for the TicTacToe component
│ │ │ └── TicTacToe.tsx # Main Tic Tac Toe game component
│ │ └── TurnTimer/
│ │ └── timer.tsx # Component for the turn timer
│ └── global/ # Global assets and styles
│ └── styles/
│ └── globals.scss # Global SCSS styles
├── .gitignore # Files/folders ignored by Git
├── eslint.config.mjs # ESLint configuration
├── next-env.d.ts # TypeScript definitions for the Next.js environment
├── next.config.ts # Next.js configuration file
├── package-lock.json # Tracks exact dependency versions
├── package.json # Project metadata and scripts
├── README.md # Project documentation (this file!)
└── tsconfig.json # TypeScript configuration
```

---

## ⚙️ Game Logic Overview

- **State Management**:
  - `cells`: An array representing the 9 board cells, storing "X", "O", or empty strings.
  - `turn`: Keeps track of the current player ("X" or "O").
  - `isPlaying`: A boolean indicating if a game is currently active.
  - `gameStatus`: An object containing the game's message (e.g., "X Wins!"), a color for the message, and an array of `winningCells` to highlight.
- **`handleClick(i: number)`**: This function is called when a player clicks on a cell. It updates the `cells` state, switches the `turn`, and clears any previous winning cell highlights.
- **`checkGameOutcome()`**: This `useCallback` hook is responsible for determining if there's a winner or a tie. It iterates through predefined `winningConditions` and updates the `gameStatus` accordingly. If a winner is found or it's a tie, `isPlaying` is set to `false`, and the `turn` is reset to "X" for the next game.
- **`startTimer()`**: Initiates a new game by resetting the board, setting `isPlaying` to `true`, and ensuring "X" always starts.
- **`getCellClasses(index: number, cell: number)`**: A helper function to dynamically apply CSS classes based on the cell's state (filled, hover effects, and winning cell highlights).
- **`useEffect`**: The `checkGameOutcome` function is called whenever the `cells` state changes to check for a win or tie.

---

## ⌨️ Contributing

Contributions are welcome! If you find a bug, have a suggestion, or want to add a new feature, please open an issue or submit a pull request.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

## ✉️ Contact

If you have any questions or comments, feel free to reach out at [emiliod255@gmail.com]
