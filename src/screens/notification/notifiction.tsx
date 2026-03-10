import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { NotificationData } from './mock-data';
import Header2 from '../../components/header2';
import { useContext } from 'react';
import { ThemeContext } from '../../theme/themecontext';
import { string } from '../../constants';

function Notification() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Header2 title={string.notification.notification} />

      <View
        style={{ backgroundColor: theme.background2, padding: 10, flex: 1 }}
      >
        <ScrollView>
          <View style={Styles.bodyContainer}>
            {NotificationData.map(item => (
              <View
                key={item.label}
                style={[
                  Styles.menuItemContainer,
                  { backgroundColor: theme.card },
                ]}
              >
                <View style={Styles.contentContainer}>
                  <Text style={[Styles.titleText, { color: theme.text }]}>
                    {item.label}
                  </Text>
                  <Text style={Styles.notificationTime}>{item.time}</Text>
                </View>

                <View style={Styles.contentContainer}>
                  <Text style={Styles.fromDocsText}>{item.fromdoc}</Text>
                  <Text style={Styles.fromNameText}>{item.fromName}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default Notification;

const Styles = StyleSheet.create({
  bodyContainer: {},
  menuItemContainer: {
    padding: 18,
    margin: 7,
    borderRadius: 20,
    gap: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: { fontSize: 20, fontWeight: 600 },
  notificationTime: { fontSize: 16, color: '#B8C1CC' },
  fromDocsText: { color: '#02D1AC', fontSize: 20 },
  fromNameText: { fontSize: 16, color: '#66737F', fontWeight: 500 },
});
