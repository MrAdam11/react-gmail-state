import { useState } from "react";
import Header from "./components/Header";
import oldEmails from "./data/emails";

import "./styles/App.css";

function App() {
  const [emails, fixedEmails] = useState(oldEmails);

  const onChange = (index) => {
    const newEmails = [...emails];
    newEmails[index].selected = !newEmails[index].selected;
    fixedEmails(newEmails);
  };

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {emails.map((email, index) => (
          <li className="email" key={index}>
            <div className="select">
              <input
                onChange={() => onChange(index)}
                className="select-checkbox"
                type="checkbox"
                checked={email.selected}
              />
            </div>
            <div className="star">
              <input className="star-checkbox" type="checkbox" />
            </div>
            <div>
              <div className="sender">{email.sender}</div>
              <div className="title"> {email.title}</div>
            </div>
          </li>
        ))}
      </main>
    </div>
  );
}

export default App;
