import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';


export default Header = ({ navigation }) => {
    return (
        <View style={{ flexDirection: 'row', height: 50, justifyContent: 'space-around', alignContent: 'center', alignItems: 'center', borderBottomColor: '#ddd', borderBottomWidth: 0.3 }}>
            <View style={{ flex: 1, height: 50, justifyContent: 'center', padding: 10 }}>
                <TouchableOpacity style={{ width: 40, height: 40 }}>
                    <Image
                        resizeMode={'contain'}
                        style={{ width: 40, height: 40 }}
                        source={require('../assets/reels.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../assets/insta.png')} resizeMode={'contain'} style={{ width: 120, height: 120, marginTop: 80 }} />
                {/* <Text style={{ fontSize: 20, color: '#000000', fontWeight: '600', fontStyle: 'italic', textTransform: 'uppercase' }}>Instagram</Text> */}
            </View>
            <View style={{ flex: 1, height: 50, justifyContent: 'center', padding: 10, alignItems: 'flex-end' }}>
                <TouchableOpacity style={{ width: 35, height: 35 }}>
                    <Image
                        resizeMode={'contain'}
                        style={{ width: 35, height: 35 }}
                        source={require('../assets/message.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}