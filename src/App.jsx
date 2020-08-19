import React, { Component, PureComponent, memo } from "react";

// class Foo extends Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     if (nextProps.name === this.props.name) {
//       return false;
//     }
//     return true;
//   }
//   render() {
//     console.log("Foo render");
//     return null;
//   }
// }

class Foo1 extends PureComponent {
  render() {
    console.log("Foo1 render");
    return <div>{this.props.person.age}</div>;
  }
}

const Foo3 = memo(function Foo3(props) {
  console.log("Foo3 render");
  return <div>{props.person.age}</div>;
});

export default class App extends Component {
  state = {
    count: 0,
    person: {
      age: 1,
    },
  };
  callback = () => {};
  render() {
    const person = this.state.person;
    return (
      <div>
        <button
          onClick={() => {
            person.age++;
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Add
        </button>
        {/* <Foo person={person} /> */}
        <Foo1 person={person} cb={this.callback} />
        <Foo3 person={person} cb={this.callback} />
      </div>
    );
  }
}
