import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function Login(props){
    return(
        <View style={styles.login}>
            <Text>This is the Login Screen</Text>
            <Button title="Log In" onPress={()=>{
                console.log('Hello Dallas');
                
            }}></Button>
            <Button title="Log In" onPress={()=>{
                console.log('Hello Nate');
                
            }}></Button>

            <Button title="Log In" onPress={()=>{
                console.log('Hello Dani');
                
            }}></Button>
            <Button title="Log In" onPress={()=>{
                console.log('Hello Shayla');
                
            }}></Button>

                <Button title="Log In" onPress={()=>{
                console.log('Hello Chris!');
                
            }}></Button>
        </View>

    );
}

const styles = StyleSheet.create({
    login: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        height: '12%',
        alignItems: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        
      },
})