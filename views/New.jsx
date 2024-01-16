const React = require("react");

// New component class extending React.Component for creating a new log entry
class New extends React.Component {
  render() {
    // Render method to display the JSX content
    return (
      <div>
        <h1>New Log</h1> {/* Heading displayed on the page for creating a new log entry */}
        {/* Form for submitting a new log entry. 
             The action attribute defines the server endpoint that will handle the post request. */}
        <form action="/" method="post">
          {/* Input field for the title of the new log */}
          Title:
          <input type="text" name="title" />
          <br />
          {/* Input field for the entry text of the new log */}
          Entry:
          <input type="text" name="entry" />
          <br />
          {/* Checkbox to indicate if the ship is broken */}
          Is ship broken:
          <input type="checkbox" name="shipIsBroken" />
          <br />
          {/* Button to submit the form */}
          <button type="submit">submit</button>
        </form>
        {/* Link to navigate back to the main index page */}
        <a href="/">back</a>
      </div>
    );
  }
}

// Exporting the New component so it can be used in other parts of the application
module.exports = New;
