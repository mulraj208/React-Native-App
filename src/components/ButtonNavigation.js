import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import Blog from "./Blog";
import Notifications from "./Notifications";

const ButtonNavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'blog', title: 'Blog', icon: 'blogger'},
    {key: 'notifications', title: 'Notifications', icon: 'album'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    blog: Blog,
    notifications: Notifications,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default ButtonNavigation;
