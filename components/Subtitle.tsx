import {View, Text, StyleSheet} from 'react-native'

function Subtitle () {
  return (
    <View>
      <Text style={styles.sub}>
     Escolha um curso e faça sua história!
      </Text>
      <Text style={styles.abaixo}>
      Aqui você pode escolher cursar Administração, Desenvolvimento de Sistemas ou Redes de Computadores. Todos eles possuem alta demanda no mercado atual.
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  sub: {
    fontSize: 20,
    color: '#ffff',
    textAlign: 'center',
    backgroundColor:'#fca61d',
    padding:15,
    fontWeight:'bold',
    marginTop:30
  },
  abaixo:{
    color:'black',
    
    
  }
})

export default Subtitle