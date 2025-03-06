import {View, StyleSheet, Pressable, Text} from 'react-native'

function PressButton () {
  return (
    <View>
      <Pressable>
        <Text style={styles.button}>Inicie sua jornada na DRM!</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  button: {
    fontSize: 24,
    fontWeight: 'bold',
    height: 50,
    padding: 10,
    color: 'blue',
    textAlign: 'center',
    backgroundColor:'#bfddf3'
  }
})
export default PressButton