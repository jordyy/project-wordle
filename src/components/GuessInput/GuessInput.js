import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="five letter word"
          id="guess-input"
          type="text"
          value={tentativeGuess}
          onChange={(event) => {
            const capGuess = event.target.value.toUpperCase();
            setTentativeGuess(capGuess);
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
