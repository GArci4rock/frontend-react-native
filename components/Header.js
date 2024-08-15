import {View, Text, StyleSheet} from 'react-native'
import { Image } from 'expo-image';
import Feather from '@expo/vector-icons/Feather';

export default function Header() {
    return(
        <View style={styles.header}>
            <View style={styles.user}>
                <Image
                style={styles.avatar}
                source="https://avatars.githubusercontent.com/u/161066132?s=400&u=6509230abb92eeb9737fdecbd8a60b48e4800c65&v=4"
                />
            </View>
             
        <Text style={styles.name}>Matheus</Text>
           
            <Feather style={styles.menu} name="menu" size={24} color="black" />

        </View>
    )
}
const styles = StyleSheet.create({
    header:{
        width: '100%',
    // backgroundColor: "#998754",
    height: 100,
    justifyContent: 'center',
     alignItems:'center',
     flexDirection:'row',
     justifyContent: 'space-between',
     paddingHorizontal: 15
    },
    user:{
        flexDirection: 'row',
        alignItems:'center',
        gap: 10
    },
    avatar: {
        width:50,
        height:50,
        borderRadius:25
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18
    },
    menu:{
       
        padding:10
    }
})