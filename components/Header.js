import {View, Text, StyleSheet} from 'react-native'

export default function Header() {
    return(
        <View style={styles.header}>
            <Text>HEADER CABEÇA</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        width: '100%',
    backgroundColor: "#998754",
    height: 100,
    justifyContent: 'center',
     alignItems:'center'
    }
})