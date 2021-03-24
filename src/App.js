import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";

// styled compoenents variable
const theme = {
  textBlackColor: "#171725",
  buttonBorderColor:"#F1F1F5",
  buttonBackgroundColorPurple: "#7B7CE6",
  font: "Montserrat', sans-serif"
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route component={Home} path="/"></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
