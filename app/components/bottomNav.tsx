import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => <Text>Inicio</Text>;

const AlbumsRoute = () => <Text>Lembretes</Text>;

const RecentsRoute = () => <Text>Configurações</Text>;

export const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Inicio', icon: 'queue-music' },
    { key: 'albums', title: 'Lembretes', icon: 'queue-music' },
    { key: 'recents', title: 'Configurações', icon: 'queue-music' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};