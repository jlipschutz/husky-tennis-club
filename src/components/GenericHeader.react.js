import React from 'react';

type Props = {
  children?: React.Node
};

const divStyle = {
  marginTop: '80px',
  marginLeft: '30px',
};

class GenericHeader extends React.Component {
  render(): React.Node {
    return (
      <div style={divStyle}>
        <h1>{this.props.children}</h1>
      </div>
    );
  }
}

export default GenericHeader;
