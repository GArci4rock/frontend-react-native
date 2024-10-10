import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image'

export default function CardAccount ({ id, service, userName, imUrl, accounts, setAccounts}) {

    const handleDelete = async () => {
        console.log('Teste Excluir...', id)
        const response = await fetch(`http://localhost:3000/account/${id}`,{
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
        })
            if(response.ok){
                const data = await response.json()
                console.log(data)
                const newAccounts = accounts.filter((item) => item.id !== id)
                return
            }
            console.log('Erro ao carregar accounts')
            return
        }

    return (
        <View style={styles.card}>
            <Image 
                style={styles.logo}
                source={imUrl}
            />
            <View style={styles.content}>
                <Text style={styles.service}>{service}</Text>
                <Text style={styles.username}>{userName}</Text>
                <Pressable onPress={handleDelete}><Text>🗑 Excluir</Text></Pressable>
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
       flexDirection: 'row',
       gap: 15,
       borderRadius: 10,
       alignItems: 'center' 
    },
    logo:{
        width:60,
        height:60
        
    },
    content: {
        gap:6
    },
    service: {
        fontSize: 17
},
    username: {
       color:"#FFFFFF"
    }

})