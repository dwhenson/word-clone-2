import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handleGuessSubmit(event) {
    event.preventDefault();
    console.log(guess);
    setGuess("");
  }

  function checkGuess(event) {
    const nextGuess = event.target.value.trim().toUpperCase();
    if (!new RegExp("[a-zA-Z]").test(nextGuess)) return;
    if (nextGuess.length >= 6) return;
    setGuess(nextGuess);
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => handleGuessSubmit(event)}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        title="We need a 5 letter word ❤️"
        value={guess}
        onChange={(event) => checkGuess(event)}
      />
    </form>
  );
}

export default GuessInput;
