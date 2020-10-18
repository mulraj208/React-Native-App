import React from 'react';
import {ScrollView} from 'react-native';
import {Button, Card, Title, Paragraph} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Blog = ({data}) => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      {data.map((post, index) => {
        const postId = index + 1;

        return (
          <Card style={{margin: 10}} key={index}>
            <Card.Cover source={{uri: post.image}}/>
            <Card.Content>
              <Title style={{marginTop: 15}}>{post.title}</Title>
              <Paragraph>{post.excerpt}</Paragraph>
              <Button
                style={{alignItems: 'flex-start', marginLeft: -15}}
                onPress={() => {
                  navigation.navigate("Post", {postId, post});
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
