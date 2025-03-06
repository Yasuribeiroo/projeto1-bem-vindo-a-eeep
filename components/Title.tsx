import {View, Text, StyleSheet} from 'react-native'

function Title () {
  return (
    <View style={styles.container}>
      <Text style={styles.up}>
      Bem-vindo à EEEP Deputado Roberto Mesquita!
      </Text>
      <Text style={styles.under}>
       Venha fazer parte da escola que prepara profissionais para o mercado de trabalho.
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  up: {
    fontSize: 24,
    fontWeight: 'bold',
    height: 80,
    padding: 10,
    color: '#ffff',
    display:'flex',
    textAlign: 'center',
    backgroundColor:'green',
  },
  container: {
    paddingHorizontal: 10,
    fontWeight: 'bold'
  },
  under: {
    color:'black',
    fontSize:15,
  }
})

export default Title