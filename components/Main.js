import {View, Text, StyleSheet} from 'react-native'

export default function Main() {
    return(
        <View style={styles.main}>
            <Text>MAIN CORPO</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        flex: 2,
        backgroundColor: "#113526",
        width: '100%',
        justifyContent: 'center',
        height: 100,
         alignItems:'center'
      }
    })