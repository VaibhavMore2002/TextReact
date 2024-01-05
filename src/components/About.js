export default function About(props) {
  let modeStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#22242e" : "#9fbdb9",
    borderRadius: "10px",
    border: "1px solid",
    borderColor: props.mode === "dark" ? "white" : "black",
    padding: "10px",
  };
  return (
    <div className="container my-3" style={modeStyle}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={modeStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={modeStyle}
            >
              <strong>About Text-React</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>
                Text React is a user-friendly website designed to assist
                individuals in manipulating text effortlessly.
              </strong>{" "}
              With a simple and intuitive interface, the website offers a
              variety of text-related tasks to enhance and customize your
              content. The key features include :<br />
              1) <code>Uppercase: Converts the selected text to uppercase</code>
              , ensuring a consistent and bold presentation.
              <br />
              2){" "}
              <code>Lowercase: Transforms the selected text to lowercase</code>,
              providing a clean and standardized appearance.
              <br />
              3){" "}
              <code>
                Capitalized Text: Capitalizes the first letter of each word in
                the selected text
              </code>
              , perfect for creating titles or headings.
              <br />
              4){" "}
              <code>
                Remove Extra Spaces: Eliminates unnecessary spaces within the
                text
              </code>
              , ensuring a neat and well-formatted output.
              <br />
              5) <code>Clear Text: Instantly clears the text area</code>,
              offering a quick and efficient way to start afresh. <br />
              6){" "}
              <code>
                Copy Text: Allows users to easily copy the modified text to the
                clipboard
              </code>
              , streamlining the process of incorporating the changes into other
              applications or documents. Whether you're working on a document,
              social media post, or any other text-based project, Text React
              provides a convenient platform to perform these common text
              manipulations, saving time and effort in the process.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={modeStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={modeStyle}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Text React is a free-to-use online platform that empowers users to
              effortlessly manipulate text for various purposes. With its
              user-friendly interface, the website offers a range of
              text-related functionalities at no cost.
              <br />
              Text React is committed to providing a convenient and cost-free
              solution for users seeking to enhance and customize their text
              content. Enjoy the benefits of these text manipulation tools
              without any financial burden, making it an accessible resource for
              various text-related tasks.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={modeStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={modeStyle}
            >
              <strong>Browser Compatibility</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Text React is designed to be compatible with a wide range of web
              browsers, ensuring accessibility and usability for users across
              different platforms. Whether you prefer Google Chrome, Mozilla
              Firefox, Microsoft Edge, Safari, Opera, or other popular browsers,
              you can confidently use Text React without concerns about
              compatibility. The developers behind Text React understand the
              importance of a seamless user experience and have taken measures
              to ensure that the website functions optimally on various
              browsers. This commitment to cross-browser compatibility allows
              users to enjoy the features of Text React regardless of their
              preferred browser choice. As web technologies evolve, Text React
              strives to stay up-to-date with industry standards, providing a
              consistent and reliable text manipulation experience for users
              across different browsing environments. This dedication to
              compatibility enhances the accessibility of Text React, making it
              a versatile tool for anyone seeking to manipulate and customize
              text conveniently.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
