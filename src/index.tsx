import * as React from "react"
import * as ReactDOM from "react-dom"
import * as moment from "moment"

var m = moment(new Date())

const App = ({ }) => {
    return (
        <h1>{m.format("YYYY-MM-DD")}</h1>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));