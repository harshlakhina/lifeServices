import { View, Text, StyleSheet } from 'react-native';
import Header2 from '../../components/header2';
import { useContext } from 'react';
import { ThemeContext } from '../../theme/themecontext';

function ContactDevelopers() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Header2 title="Contact Developers" />
      <View style={[{ backgroundColor: theme.background }, Styles.container]}>
        <View style={[{ backgroundColor: theme.input }, Styles.card]}>
          <Text style={{ color: theme.text }}>
            Email: support@lifeservices.com
          </Text>
          <Text style={{ color: theme.text }}>Phone: +91 XXXXX XXXXX</Text>
          <Text style={{ color: theme.text }}>
            Working Hours: Mon – Fri (9:00 AM – 6:00 PM)
          </Text>
        </View>
      </View>
    </>
  );
}

export default ContactDevelopers;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    gap: 10,
    padding: 20,
    borderRadius: 20,
  },
});
