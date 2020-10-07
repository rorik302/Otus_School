import React from 'react';
import CoursesListPage from "../pages/CoursesListPage";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <header>
          <Navbar/>
        </header>

        <main>
          <div className="card shadow">
            <div className="card-body">
              <CoursesListPage />
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App