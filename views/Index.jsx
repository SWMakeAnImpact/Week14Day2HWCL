const React = require("react");

// Index component class which extends from React.Component
class Index extends React.Component {
  render() {
    // Destructuring to extract 'logs' from this.props
    const { logs } = this.props;

    return (
      <div>
        <h1>The Captain's Log Index Page</h1> {/* Main heading for the index page */}
        {/* Navigation link to the page for creating a new log entry */}
        <nav>
          <a href="/new">Create a New Log</a>
        </nav>
        {/* Form for searching logs by title */}
        <form action="/search" method="post">
          Search by title:
          <input type="text" name="title" /> {/* Input field for search query */}
          <button type="submit">submit</button> {/* Submit button for the search form */}
        </form>
        {/* List of log entries */}
        <ul>
          {/* Mapping over each log in the logs array to display */}
          {logs.map((log, i) => {
            return (
              <li key={i}>
                {/* Each log entry is listed with title, entry, and status of the ship */}
                Title:<a href={`/log/${log._id}`}>{log.title}</a> {/* Link to the individual log detail page */}
                <br />
                Entry:{log.entry} {/* Displaying the log entry text */}
                <br />
                {/* Conditional rendering to display ship status */}
                {log.shipIsBroken
                  ? `The ship is broken`
                  : `The ship is NOT broken`}
                <br />
                {/* Link to edit the current log */}
                <a href={`/log/${log._id}/edit`}> Edit This Log </a>
                {/* Form to delete the current log */}
                <form action={`/log/${log._id}?_method=DELETE`} method="POST">
                  <input type="submit" value="DELETE" /> {/* Delete button */}
                </form>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

// Exporting the Index component to be used in other parts of the application
module.exports = Index;
