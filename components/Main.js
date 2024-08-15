import {View, Text, StyleSheet} from 'react-native'
import { Image } from 'expo-image';

export default function Main() {
    return(
        <View style={styles.main}>
            <View style={styles.user}>
                <Image
                style={styles.avatar}
                source="https://avatars.githubusercontent.com/u/161066132?s=400&u=6509230abb92eeb9737fdecbd8a60b48e4800c65&v=4"
                />
            </View> 
            <View style={styles.gmail}> 
            <Text style={styles.name}>Gmail</Text>
            <Text >matheusif@Gmail.com</Text>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
       padding: 15,
       backgroundColor: "#DDDDDD",
       // backgroundColor: "#998754",
       alignItems:'flex-start',
       flexDirection:'row',
       margin: 50,
       borderStyle: 'solid',
       borderColor: 'red',
       borderWidth: 1
    },
    user:{
        flexDirection: 'row',
        alignItems:'center',
        gap: 10,
        
    },
    avatar: {
        width:50,
        height:50,
        borderRadius:25,
        margin: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
},
    gmail: {
        margin:12,
        gap: 3
    }

})