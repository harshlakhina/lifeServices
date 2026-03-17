import { FlatList, Text, View } from 'react-native';
import { acceptedData } from './mock-data';
import { useContext } from 'react';
import { ThemeContext } from '../../theme/themecontext';

function Accepted() {
  const { theme } = useContext(ThemeContext);
  return (
    <FlatList
      data={acceptedData}
      contentContainerStyle={{
        backgroundColor: theme.background2,
        flexGrow: 1,
        padding: 20,
        gap: 20,
      }}
      renderItem={({ item }) => (
        <View
          style={[
            { backgroundColor: theme.card, padding: 20, borderRadius: 20 },
          ]}
        >
          <Text style={{ color: theme.text }}>{item.name}</Text>
          <Text style={{ color: theme.text }}>{item.profession}</Text>
          <Text style={{ color: theme.text }}>{item.date}</Text>
          <Text style={{ color: theme.text }}>Accepted</Text>
        </View>
      )}
    />
  );
}

export default Accepted;
