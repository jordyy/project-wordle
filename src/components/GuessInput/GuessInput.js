import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handleChange(event) {
    setGuess(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(guess);
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
