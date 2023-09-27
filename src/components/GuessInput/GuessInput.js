import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handleChange(event) {
    const capGuess = event.target.value.toUpperCase();
    if (capGuess.length > 5) {
      window.alert("guess cannot exceed 5 characters");
      return;
    }
    setGuess(capGuess);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (guess.length < 5) {
      window.alert("guess must be 5 characters");
      return;
    }
    console.log(guess);
    setGuess("");
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={handleChange}
        />
      </form>
    </>
  );
}

export default GuessInput;
