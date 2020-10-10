import React from 'react';
import {ScrollView} from 'react-native';
import {Button, Card, Title, Paragraph} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Blog = () => {
  const data = [
    {
      title: 'Our Mission',
      excerpt: 'With the world in turmoil over an enemy it cannot see, where fear is now the greatest weapon set against humanity...',
      content: `
        <p>With the world in turmoil over an enemy it cannot see, where fear is now the greatest weapon set against humanity, and where the populations wander and run around like lost sheep, everyone is looking for an answer or seeking some hope in this current crisis.</p>
        <p>In troubled times you can discover peace. In uncertain circumstances you can know assurance. When all the world crumbles around you, you can stand on a rock that will never move.&nbsp;</p>
        <p>That rock is the truth.</p>
        <p>Millions of people across continents and nations are looking for a way out of the mess we are in.</p>
        <p>In a world full of lies and deceptions, people everywhere are looking for the truth.</p>
        <p>With fear and insecurity staring millions in the face, they can only dream of a better life.</p>
        <img src="https://crownflag.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-22-at-2.55.39-AM-3.jpeg" alt="">
        <p>The Crown Flag points to a way out. It points to the truth. It tells of a new life for anyone who dares to believe. Billions of people from every nation and language on earth believe this simple yet profound statement: &ldquo;I am the way; and I am the truth; and I am the life.&rdquo;</p>
        <p>The Bible tells us that God so loved the world that he gave his only Begotten Son, so that whoever believes on him shall not perish, but have everlasting life. He promises forgiveness to anyone who will be truthful with him and turn to him for help.</p>
        <img src="https://crownflag.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-22-at-2.55.38-AM.jpeg" alt="">
        <p>We are not a religion, a church, a denomination, or an organization. We are simply the Crown Flag which promotes a logo pointing people to the truth that Jesus Christ is God, and he is calling for all of us to hear his voice in these extraordinary times.&nbsp;</p>
        <p>He said that he will return to this world, not as a baby in a manger, but as the King of Kings and Lord of all Lords throughout the whole universe. He will bring an end to all evil and wickedness and save everyone who is looking for his return.</p>
        <p>He says, &ldquo;Come unto me all of you who are troubled, anxious, distressed and perplexed, and I will give you rest.&rdquo;</p>
        <img src="https://crownflag.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-20-at-4.31.35-PM.jpeg" alt="">
        <p>Get yourself a Bible and discover the truth that there is only one way to know God personally, and that is through surrendering your life to Jesus Christ. He offers a new start and the miracle of transformation when you put your faith in him.</p>
        <p>God, who made us, still loves us and calls to us to come back to him before it is too late.</p>`,
      image: "https://crownflag.com/wp-content/uploads/2020/09/crown-flag-soul-2.jpg",
    },
    {
      title: 'Come Join Us',
      excerpt: 'Millions of people across continents and nations are looking for a way out of the mess we are in...',
      content: `
        <p>Millions of people across continents and nations are looking for a way out of the mess we are in.</p>
        <p>In a world full of lies and deceptions, people everywhere are looking for the truth.</p>
        <p>With fear and insecurity staring millions in the face, they can only dream of a better life.</p>
        <video src="https://crownflag.com/wp-content/uploads/2020/09/crownflag-Brazil-pass-it-on.mp4" />
        <p>The Crown Flag points to a way out. It points to the truth. It tells of a new life for anyone who dares to believe. Billions of people from every nation and language on earth believe this simple yet profound statement: &ldquo;I am the way; and I am the truth; and I am the life.&rdquo;</p>
        <p>The Bible tells us that God so loved the world that he gave his only Begotten Son, so that whoever believes on him shall not perish, but have everlasting life. He promises forgiveness to anyone who will be truthful with him and turn to him for help.</p>
        <p>We are not a religion, a church, a denomination, or an organization. We are simply the Crown Flag which promotes a logo pointing people to the truth that Jesus Christ is God, and he is calling for all of us to hear his voice in these extraordinary times.&nbsp;</p>
        <img src="https://crownflag.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-20-at-4.31.36-PM.jpeg" alt="">
        <p>He said that he will return to this world, not as a baby in a manger, but as the King of Kings and Lord of all Lords throughout the whole universe. He will bring an end to all evil and wickedness and save everyone who is looking for his return.</p>
        <p>He says, &ldquo;Come unto me all of you who are troubled, anxious, distressed and perplexed, and I will give you rest.&rdquo;</p>
        <img src="https://crownflag.com/wp-content/uploads/2020/09/WhatsApp-Image-2020-09-20-at-4.31.36-PM-5.jpeg" alt="">
        <p>Get yourself a Bible and discover the truth that there is only one way to know God personally, and that is through surrendering your life to Jesus Christ. He offers a new start and the miracle of transformation when you put your faith in him.</p>
        <p>God, who made us, still loves us and calls to us to come back to him before it is too late.</p>`,
      image: "https://crownflag.com/wp-content/uploads/2020/08/james-adams-zUSY6EgCRHo-unsplash.jpg",
    },
  ];
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
