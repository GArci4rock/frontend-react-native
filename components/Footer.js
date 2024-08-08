import {View, Text, StyleSheet} from 'react-native'

export default function Footer() {
    return(
        <View style={styles.footer}>
            <Text>FOOTER PÈ </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    footer:{
        width: '100%',
        backgroundColor: "#227698",
        justifyContent: 'center',
        height:100,
        alignItems:'center'
      }
    })