import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Header2 from '../../components/header2';
import { useContext } from 'react';
import { ThemeContext } from '../../theme/themecontext';
import { string } from '../../constants';

function PrivacyPolicy() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Header2 title={string.privacyPolicy.privacyPolicy} />

      <ScrollView
        contentContainerStyle={{ backgroundColor: theme.background2 }}
      >
        <View
          style={[
            {
              backgroundColor: theme.background2,
            },
            Styles.bodyContainer,
          ]}
        >
          <Text style={Styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            ullamcorper lorem in risus suscipit venenatis. Praesent volutpat
            nunc vel augue eleifend egestas. Nulla sagittis mi id tortor
            lobortis, eu congue libero aliquam. Curabitur hendrerit dui id massa
            auctor, egestas blandit sem ullamcor usce fermentum cursus purus,
            sed mollis ex vehicula vitae. Mauris at massa euismod, venenatis
            augue non, imperdiet diam. Phasellus ut leo luctus, dictum sapien
            eget, blandit mi. Sed nisi orci, pulvinar ac lorem quis, malesuada
            finibus sem. Ut aliquet sit amet nibh eget rutrum. In at nulla sem.
            Mauris nec ipsum maximus, vestibulum turpis quis, lacinia sapien.
            Quisque ullamcorper auctor felis in bibendum. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. In ullamcorper lorem in risus
            suscipit venenatis. Praesent volutpat nunc vel augue eleifend
            egestas. Nulla sagittis mi id tortor lobortis, eu congue libero
            aliquam. Curabitur hendrerit dui id massa auctor, egestas blandit
            sem ullamcorper. Nulla facilisi. Fusce vitae convallis sapien. Fusce
            fermentum cursus purus, sed mollis ex vehicula vitae. Mauris at
            massa euismod, venenatis augue non, imperdiet diam. Phasellus ut leo
            luctus, dictum sapien eget, blandit mi. Sed nisi orci, pulvinar ac
            lorem quis, malesuada finibus sem. Ut aliquet sit amet nibh eget
            rutrum. In at nulla sem. Mauris nec ipsum maximus, vestibulum turpis
            quis, lacinia sapien. Quisque ullamcorper auctor felis in bibendum.
            ullamcorper lorem in risus suscipit venenatis. Praesent volutpat
            nunc vel augue eleifend egestas. Nulla sagittis mi id tortor
            lobortis, eu congue libero aliquam. Curabitur hendrerit dui id massa
            auctor, egestas blandit sem ullamcor usce fermeullamcorper lorem in
            risus suscipit venenatis. Praesent volutpat nunc vel augue eleifend
            egestas. Nulla sagittis mi id tortor lobortis, eu congue libero
            aliquam. Curabitur hendrerit dui id massa auctor, egestas blandit
            sem ullamcor usce ferme ullamcorper lorem in risus suscipit
            venenatis. Praesent volutpat nunc vel augue eleifend egestas. Nulla
            sagittis mi id tortor lobortis, eu congue libero aliquam. Curabitur
            hendrerit dui id massa auctor, egestas blandit sem ullamcor usce
            fermeullamcorper lorem in risus suscipit venenatis. Praesent
            volutpat nunc vel augue eleifend egestas. Nulla sagittis mi id
            tortor lobortis, eu congue libero aliquam. Curabitur hendrerit dui
            id massa auctor, egestas blandit sem ullamcor usce ferme
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

export default PrivacyPolicy;

const Styles = StyleSheet.create({
  bodyContainer: {
    elevation: 5,
    borderRadius: 20,
    padding: 20,
    margin: 20,
  },
  text: { color: '#9999AA', lineHeight: 23 },
});
