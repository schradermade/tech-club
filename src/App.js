import "./App.css";
import Title from "./components/Title";
import Description from "./components/Description";
import MeetTime from "./components/MeetTime";
import Age from "./components/WhoCanJoin";
import ContactUs from "./components/ContactUs";
import { ThemeProvider } from "@material-ui/styles";

import { createMuiTheme } from "@material-ui/core";
import WhatWeDo from "./components/WhatWeDo";

const theme = createMuiTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Title />
        <Description />
        <MeetTime />
        <Age />
        <WhatWeDo />
        <ContactUs />
        <header className="App-header">
          <p></p>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
