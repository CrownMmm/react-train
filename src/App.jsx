import React, { createContext, Component } from "react";
import "./App.css";

const BatteryContext = createContext();
const OnlineContext = createContext();

class Leaf extends Component {
  static contextType = BatteryContext;
  render() {
    const battery = this.context;
    return (
     
       <h1>Battert:{battery} </h1>
    
    );
  }
}

class Middle extends Component {
  render() {
    return <Leaf />;
  }
}

class App extends Component {
  state = {
    online: false,
    battery: 60,
  };
  batteryClick = () => {
    this.setState({
      battery: this.state.battery - 1,
    });
  };
  onlineClick = () => {
    this.setState({
      online: !this.state.online,
    });
  };
  render() {
    const { battery, online } = this.state;
    return (
      <BatteryContext.Provider value={battery}>
        <OnlineContext.Provider value={online}>
          <button
            type="button"
            //   onClick={() => this.setState({ battery: battery - 1 })}
            onClick={() => this.batteryClick()}
          >
            battery
          </button>
          <button
            type="button"
            //   onClick={() => this.setState({ battery: battery - 1 })}
            onClick={() => this.onlineClick()}
          >
            online
          </button>
          <Middle />
        </OnlineContext.Provider>
      </BatteryContext.Provider>
    );
  }
}

export default App;
