import React from "react";
import {ScrollView, Dimensions, View, Text} from "react-native";
import {Card, Title} from "react-native-paper";
import HTML from "react-native-render-html";

const htmlContent = (postId) => {
  return `
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum nec turpis dictum efficitur ac a mi. Vestibulum ante ipsum primis in faucibus orci luctus</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum nec turpis dictum efficitur ac a mi. Vestibulum ante ipsum primis in faucibus orci luctus</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum nec turpis dictum efficitur ac a mi. Vestibulum ante ipsum primis in faucibus orci luctus</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum nec turpis dictum efficitur ac a mi. Vestibulum ante ipsum primis in faucibus orci luctus</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum nec turpis dictum efficitur ac a mi. Vestibulum ante ipsum primis in faucibus orci luctus</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum nec turpis dictum efficitur ac a mi. Vestibulum ante ipsum primis in faucibus orci luctus</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum nec turpis dictum efficitur ac a mi. Vestibulum ante ipsum primis in faucibus orci luctus</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum nec turpis dictum efficitur ac a mi. Vestibulum ante ipsum primis in faucibus orci luctus</p>
    <h3>Some Title</h3>
    <img src="https://picsum.photos/seed/picsum/500/300?random="${postId} />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum nec turpis dictum efficitur ac a mi. Vestibulum ante ipsum primis in faucibus orci luctus</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum nec turpis dictum efficitur ac a mi. Vestibulum ante ipsum primis in faucibus orci luctus</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum nec turpis dictum efficitur ac a mi. Vestibulum ante ipsum primis in faucibus orci luctus</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum nec turpis dictum efficitur ac a mi. Vestibulum ante ipsum primis in faucibus orci luctus</p>    
    <em style="textAlign: center;">Look at how happy native cat is</em>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum nec turpis dictum efficitur ac a mi. Vestibulum ante ipsum primis in faucibus orci luctus</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ipsum nec turpis dictum efficitur ac a mi. Vestibulum ante ipsum primis in faucibus orci luctus</p>
`;
};

function Post({route}) {
  const imageMaxWidth = Dimensions.get("window").width - 20;
  const {postId} = route.params;

  return (
    <ScrollView>
      <Card.Cover source={{uri: `https://picsum.photos/700?random=${postId}`}}/>
      <View style={{padding: 10, backgroundColor: '#fff'}}>
        <Title style={{marginTop: 15}}>Card title {postId}</Title>
        <HTML
          html={htmlContent(postId)}
          imagesMaxWidth={imageMaxWidth}
        />
      </View>
    </ScrollView>
  );
}

export default Post;
