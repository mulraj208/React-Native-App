import React from 'react';
import {ScrollView} from 'react-native';
import {Button, Card, Title, Paragraph} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Blog = () => {
  const data = [...Array(10).keys()];
  const navigation = useNavigation();

  return (
    <ScrollView>
      {data.map((item, index) => {
        const postId = index + 1;

        return (
          <Card style={{margin: 10}} key={index}>
            <Card.Cover source={{uri: `https://picsum.photos/700?random=${postId}`}}/>
            <Card.Content>
              <Title style={{marginTop: 15}}>Card title {postId}</Title>
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum nec turpis dictum
                efficitur
                ac a mi. Vestibulum ante ipsum primis in faucibus orci luctus</Paragraph>
              <Button
                style={{alignItems: 'flex-start', marginLeft: -15}}
                onPress={() => {
                  navigation.navigate("Post", {postId});
                }}
              >
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
