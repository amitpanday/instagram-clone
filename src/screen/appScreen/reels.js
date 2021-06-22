import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Reels extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#eee' }}>
                <View style={{ position: 'absolute', alignItems: 'center', height: 60, width: 420, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, backgroundColor: 'rgba(100, 100, 100, 0.2)' }}>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ color: '#000000', fontSize: 20, fontWeight: '500' }}>Reels</Text>
                    </View>
                    <View style={{ marginRight: 20 }}>
                        <Image
                            style={{ width: 25, height: 25 }}
                            resizeMode={'contain'}
                            source={require('../../assets/camera.png')}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default Reels;