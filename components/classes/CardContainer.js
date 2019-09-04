import React from 'react';
import { Card } from 'antd';

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'home',
      data: {}
    };
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render() {
    return (
      <div>
        <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>

        
      </div>
    )
  }
}

export default CardContainer;