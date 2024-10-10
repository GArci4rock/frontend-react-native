import { useEffect, useState } from 'react'
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native'
import CardAccount from './CardAccount2'

export default function Main() {

    const [accounts, setAccounts] = useState([])
    const [txtServico, setTxtServico] = useState('')
    const [txtUsername, setTxtUsername] = useState('')
    const [txtPass, setTxtPass] = useState('')
    const [txtImgUrl, setTxtImgUrl] = useState('')

    useEffect( () => {
        const getAccounts = async () => {
            const response = await fetch('http://localhost:3000/account/list')
            if(response.ok){
                const data = await response.json()
                console.log(data)
                setAccounts(data.accounts)
                return
            }
            console.log(data)
            return
        
        }
        getAccounts()
    }, [])

    const handleCreateAccount = async () => {
        const account = {
        service: txtServico,   
        username: txtUsername,
        logo_image: txtImgUrl,
        pass: txtPass,
        user_id: 1
        }
   

    const response = await fetch('http://localhost:3000/account/',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(account)
    })
        if(response.ok){
            const data = await response.json()
            console.log(data)
            setAccounts([...accounts, data.account])
            return
        }
        console.log('Erro ao carregar accounts')
        return
 }


    return(

        
        <View style={styles.main}>
            
            <Text>Serviços</Text>
            
            <TextInput 
                style={input}
                onChangeText={setTxtServico}
                value={txtServico}
                keyboardType='default'
                placeholder= 'digite o nome do serviço'
            />
            <Text>Username</Text>
            <TextInput 
                style={input}
                onChangeText={setTxtUsername}
                value={txtUsername}
                keyboardType='default'
            />
            <Text>Password</Text>
            <TextInput 
                style={input}
                onChangeText={setTxtPass}
                value={txtPass}
                keyboardType='default'
            />
            <Text>ImgUrl</Text>
            <TextInput 
                style={input}
                onChangeText={setTxtImgUrl}
                value={txtImgUrl}
                keyboardType='url'
            />

            <Pressable
            style={button}
            onPress={handleCreateAccount}
            >
                <Text>Cadastrar</Text>
            </Pressable>
            
            {
                accounts.map( (account) => 
                <CardAccount
                    key={account.id}
                    id={account.id}
                    service={account.service}
                    phoneNumber={account.phoneNumber}
                    userName={account.userName}
                    accounts={accounts}
                    setAccounts={setAccounts}
                  />
                )
            }
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
       padding: 15,
       backgroundColor: "#DDDDDD",
       // backgroundColor: "#998754",
       alignItems:'center',
    //    flexDirection:'row',
       margin: 50,
       borderStyle: 'solid',
       borderColor: 'black',
       borderWidth: 1,
       gap:30,
       paddingLeft: 25,
       paddingRight: 25
    },
    input: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#555555',
        paddingHorizontal: '10',
        paddingVertical: '6',
        marginVertical: '5',
        borderRadius: '5'
    },
    button: ({pressed}) => [ {
        backgroundColor: pressed ? '#CCCCCC': '#DDDDDD',
        alignItems:'center',
        color:'white',
        marginVertical:10,
        borderRadius:10,
        paddingVertical: 10

    }]
})