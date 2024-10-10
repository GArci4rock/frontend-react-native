import  { View, StyleSheet, Text} from 'react-native'

export default function CardAccount ({ service, userName, phoneNumber}) {

    return (
        <View style={styles.card}>
            <View style={styles.content}>
                <Text style={styles.service}>{service}</Text>
                <Text style={styles.username}>{userName}</Text>
                <Text style={styles.phone}>{phoneNumber}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    card:{
       padding: 10,
       borderStyle: 'solid',
       borderColor: '#EEEEEE',
       borderWidth: 1,
       gap: 15,
       borderRadius: 10,
       alignItems:'center',
       flexDirection:'row',
       
    },
    content: {
        gap:6
    },
    service: {
        fontSize: 17
    },
    username: {
       color:"#36454F",
       fontSize:15
    },
    phone: {
        color: "#008000"
    }

})