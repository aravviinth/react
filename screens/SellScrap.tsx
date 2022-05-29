import { StyleSheet } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { RootTabScreenProps } from '../types';

export default function SellScrap({ navigation }: RootTabScreenProps<'SellScrap'>) {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}> 
      <FontAwesome
          name="navicon"
          size={20}
          color="#fff"
          style={{ marginRight: 15 }}
        /> 
        <Text style={styles.text}>Pickup location</Text>
        <FontAwesome
          name="chevron-down"
          size={20}
          color="#fff"
          style={{ marginRight: 15 }}
        /> 
      </View>
      {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/SellScrap.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#3EB489',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 100
  },
  text: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  }
});
