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
        padding: 15,
        // backgroundColor: "#227698",
        justifyContent: 'center',
        alignItems:'center'
      },
      copy: {
        color: "BBBBBB"
      }
    })