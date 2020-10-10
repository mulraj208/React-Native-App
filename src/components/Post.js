import React from "react";
import {ScrollView, Dimensions, View} from "react-native";
import {Card, Title} from "react-native-paper";
import HTML from "react-native-render-html";
import { IGNORED_TAGS } from 'react-native-render-html/src/HTMLUtils';
import {Video} from 'expo-av';

function Post({route}) {
  const imageMaxWidth = Dimensions.get("window").width - 20;
  const {post} = route.params;

  return (
    <ScrollView>
      <Card.Cover source={{uri: post.image}}/>
      <View style={{padding: 10, backgroundColor: '#fff'}}>
        <Title style={{marginTop: 15, fontSize: 30}}>{post.title}</Title>
        <HTML
          html={post.content}
          imagesMaxWidth={imageMaxWidth}
          renderers={{
            video: (htmlAttribs, children, convertedCSSStyles, passProps) => (
              <>
                <Video
                  key={passProps.key}
                  source={{uri: htmlAttribs.src}}
                  rate={1.0}
                  volume={1.0}
                  isMuted={false}
                  resizeMode="contain"
                  shouldPlay
                  isLooping
                  style={{width: imageMaxWidth, height: 250, backgroundColor: '#000'}}
                />
                {children}
              </>
            ),
          }}
          ignoredTags={IGNORED_TAGS.filter(tag => tag !== 'video')}
        />
      </View>
    </ScrollView>
  );
}

export default Post;
