import React from 'react';
import CoursesListPage from "../pages/CoursesListPage";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CoursesListPage />
      </div>
    )
  }
}

export default App