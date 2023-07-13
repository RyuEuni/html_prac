import React from 'react';

class App extends React.Component {
  handleClick = () => {
    const root = document.getElementById('root');
    root.style.backgroundColor = 'black';
    root.style.color = 'white';
  };

  render() {
    return (
      <div id="root" onClick={this.handleClick}>
        <h1>
          나는 신발이 없음을 한탄했는데, <br /> 길에서 발이 없는 사람을 만났다.
        </h1>
      </div>
    );
  }
}

export default App;