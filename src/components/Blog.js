import React from 'react';
import {ScrollView} from 'react-native';
import {Button, Card, Title, Paragraph} from 'react-native-paper';

const Blog = () => {
  const data = [...Array(10).keys()];

  return (
    <ScrollView>
      {data.map((item, index) => {
        return (
          <Card style={{margin: 10}} key={index}>
            <Card.Cover source={{uri: `https://picsum.photos/700?random=${index + 1}`}}/>
            <Card.Content>
              <Title style={{ marginTop: 15 }}>Card title {index + 1}</Title>
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum nec turpis dictum
                efficitur
                ac a mi. Vestibulum ante ipsum primis in faucibus orci luctus</Paragraph>
              <Button style={{ alignItems: 'flex-start', marginLeft: -15 }}>
                Read More
              </Button>
            </Card.Content>
          </Card>
        )
      })}
    </ScrollView>
  )
};

export default Blog;
