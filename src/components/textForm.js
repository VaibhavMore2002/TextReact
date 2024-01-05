import React, { useState } from "react";
import PropTypes from "prop-types";
export default function TextForm(props) {
  const [Text, setText] = useState("Enter text here ");
  const handleUpper = () => {
    let Upper = Text.toUpperCase();
    setText(Upper);
    props.showAlert("Text has been converted to uppercase", "Success");
  };
  const handleLower = () => {
    let Lower = Text.toLowerCase();
    setText(Lower);
    props.showAlert("Text has been converted to lowercase", "Success");
  };
  const clearText = () => {
    let empty = "";
    setText(empty);
    props.showAlert("Text has been removed or cleared", "Success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCapitalize = () => {
    let capitalizedString = Text.split(/\s+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setText(capitalizedString);
    props.showAlert(
      "First letter of each word has been capitalized",
      "Success"
    );
  };
  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copied", "Success");
  };
  const handleExtraSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces within the text has been removed", "Success");
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <label htmlFor="myText" id="myText" className="form-label">
          <h2 className="my-2">{props.heading}</h2>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={Text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#333333" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
        <br />
        <button
          disabled={Text.length === 0}
          onClick={handleUpper}
          className="btn btn-dark mx-2 my-2"
        >
          Change To Upper-Case
        </button>
        <button
          disabled={Text.length === 0}
          onClick={handleLower}
          className="btn btn-dark mx-2 my-2"
        >
          Change To Lower-Case
        </button>
        <button
          disabled={Text.length === 0}
          onClick={handleCapitalize}
          className="btn btn-dark mx-2 my-2"
        >
          Capitalize Text
        </button>
        <button
          disabled={Text.length === 0}
          onClick={clearText}
          className="btn btn-dark mx-2 my-2"
        >
          Clear Text
        </button>
        <button
          disabled={Text.length === 0}
          onClick={handleCopy}
          className="btn btn-dark mx-2 my-2"
        >
          Copy Text
        </button>
        <button
          disabled={Text.length === 0}
          onClick={handleExtraSpaces}
          className="btn btn-dark mx-2 my-2"
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h3>Text Summary</h3>
        <p>
          This text contains
          {" " +
            Text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          words and {Text.length} characters.
        </p>
        <p>
          This text can be read in{" "}
          {Text.split(/\s+/).filter((element) => {
            return element.length !== 0;
          }).length * 0.008}{" "}
          minutes.
        </p>
        <h4>Preview</h4>
        <p>
          {Text.length > 0
            ? Text
            : "Enter something in the textbox to preview it here"}
        </p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
TextForm.defaultProps = {
  heading: "Enter the text to analyze",
};
