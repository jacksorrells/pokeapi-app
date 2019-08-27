import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import axios from 'axios';

function CardViewHooks() {
  const [data, setData] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://pokeapi.co/api/v2/pokemon/',
      );
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.results.map(item => (
        <Card key={item.objectID} title={item.name} >
          <a href={item.url}>{item.name}</a>
        </Card>
      ))}
    </div>
  )
}

export default CardViewHooks;