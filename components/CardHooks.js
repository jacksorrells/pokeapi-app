import React, {useState, useEffect } from 'react';
import { Card, Icon, Avatar } from 'antd';
import axios from 'axios';

const { Meta } = Card;

function CardHooks(props) {
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://pokeapi.co/api/v2/pokemon/1/',);
      setData(result.data);
    };

    fetchData();
  }, {});

  return (
    <div>
      <Card
        style={{ width: 300 }}
        actions={[
          <Icon type="setting" key="setting" />,
          <Icon type="edit" key="edit" />,
          <Icon type="ellipsis" key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={data.name}
          description="This is the description"
        />
      </Card>
    </div>
  )
}

export default CardHooks;