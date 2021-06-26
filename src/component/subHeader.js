import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default SubHeader = ({ navigation, onClick }) => {
    return (
        <View style={{ alignItems: 'center', height: 60, width: 420, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, backgroundColor: 'rgba(100, 100, 100, 0.2)' }}>
            <View style={{ marginLeft: 10, flexDirection: 'row', }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        style={{ width: 25, height: 25, tintColor: '#FFFFFF' }}
                        resizeMode={'contain'}
                        source={require('../assets/close.png')}
                    />
                </TouchableOpacity>
                <Text style={{ marginLeft: 25, color: '#FFFFFF', fontSize: 20, fontWeight: '500' }}>New Post</Text>
            </View>
            <View style={{ marginRight: 20 }}>
                <TouchableOpacity onPress={() => onClick('next')}>
                    <Image
                        style={{ width: 35, height: 35, tintColor: '#3e50f0' }}
                        resizeMode={'contain'}
                        source={require('../assets/forward.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}