import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Notification extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#eee' }}>
                <View style={{ position: 'absolute', alignItems: 'center', height: 60, width: 420, flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, backgroundColor: 'rgba(100, 100, 100, 0.2)' }}>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ color: '#000000', fontSize: 20, fontWeight: '500' }}>Activity</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Notification;