import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import logo from './logo.svg';
import { enquireScreen } from 'enquire-js';
import './App.css';
import Home from './Home'
import second from './second'
import Header from './layout/Nav0'
import Footer from './layout/Footer0'
import {
  Nav00DataSource,
  Footer00DataSource,
} from './layout/data.source.js';


let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           这里是页面入口
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }
  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Header dataSource={Nav00DataSource} isMobile={this.isMobile} />
          <Route exact path="/" component={Home} />
          <Route exact path="/second" component={second} />
          <Footer dataSource={Footer00DataSource} isMobile={this.isMobile}></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
