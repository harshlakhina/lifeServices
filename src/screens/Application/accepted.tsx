import { FlatList, Text, View } from 'react-native';
import { acceptedData } from './mock-data';
import { useContext } from 'react';
import { ThemeContext } from '../../theme/themecontext';

function Accepted() {
  const { theme } = useContext(ThemeContext);
  return (
    <FlatList
      data={acceptedData}
      contentContainerStyle={{ backgroundColor: theme.background, flex: 1 }}
      renderItem={({ item }) => (
        <View style={[{ backgroundColor: theme.background, flex: 1 }]}>
          <View>
            <Text>{item.name}</Text>
            <Text>{item.profession}</Text>
            <Text>{item.date}</Text>
          </View>
          <Text>Accepted</Text>
        </View>
      )}
    />
  );
}

export default Accepted;
