import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      someData: [],
    };
  }

  componentDidMount() {
    console.log('mounted home');
  }

  render() {
    return (
      <>
        Hello World
      </>
    );
  }
}

// Overview.propTypes = {
//   id: PropTypes.number.isRequired,
// };

export default Home;
