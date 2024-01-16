const React = require("react");

// Edit component class which extends from React.Component
class Edit extends React.Component {
  render() {
    // Render method returns JSX that will be displayed in the browser
    return (
      <div>
        <h1> Edit the Log</h1> {/* Heading for the edit page */}
        {/* Form for editing an existing log entry. 
             The form submission will be handled by the server route specified in the 'action' attribute */}
        <form action={`/log/${this.props.logs._id}?_method=PUT`} method="POST">
          {/* Input field for the 'title' of the log, pre-filled with the current title */}
          Name:
          <input
            type="text"
            name="title"
            defaultValue={this.props.logs.title}
          />
          <br />
          {/* Input field for the 'entry' of the log, pre-filled with the current entry text */}
          Entry:
          <input
            type="text"
            name="entry"
            defaultValue={this.props.logs.entry}
          />
          <br />
          {/* Checkbox to indicate whether the ship is broken or not.
               It is pre-checked if shipIsBroken property is true in the logs prop */}
          Is ship broken:
          {this.props.logs.shipIsBroken ? (
            <input type="checkbox" name="shipIsBroken" defaultChecked />
          ) : (
            <input type="checkbox" name="shipIsBroken" />
          )}
          <br />
          {/* Submit button for the form */}
          <input type="submit" value="Submit Changes" />
        </form>
        {/* Link to navigate back to the home page */}
        <a href="/">back</a>
      </div>
    );
  }
}

// Exporting the Edit component to be used in other parts of the application
module.exports = Edit;
