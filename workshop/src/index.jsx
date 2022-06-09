import React from 'react';
import ReactDOM from 'react-dom/client';

import '../assets/stylesheets/application.scss';

import App from './components/App';

// Functional components
// const Hello = (props) => {
//   const { name, age } = props;
//   return <h1>Hi {name}, {age} yyears old. </h1>;
// };

// Class components
// class Hello extends React.Component {
//   render() {
//     const { name, age } = this.props;
//     return <h1>Hi {name}, {age} years old. </h1>;
//   }
// }

const container = document.querySelector('#root');
if (container) {
  // create the root component
  const root = ReactDOM.createRoot(container);
  // render something in the root
  // root.render(<Hello name="Tirso" age="28" />);
  root.render(<App />);
}
