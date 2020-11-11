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
        <main>

          Hello World
        </main>
      </>
    );
  }
}

// Overview.propTypes = {
//   id: PropTypes.number.isRequired,
// };

export default Home;
