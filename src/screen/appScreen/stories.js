import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Path } from 'react-native-svg';

export default Story = ({ data, onClicked }) => {
    return (
        <View key={data.id} style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 5, width: 80 }}>
            {data.id == 0 ? (
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => onClicked(data)}>
                        <Image
                            style={{ width: 65, height: 65, borderRadius: 32 }}
                            source={{ uri: data.source }}
                        />
                        <View style={{
                            backgroundColor: '#FFFFFF',
                            width: 24,
                            height: 24,
                            borderRadius: 13,
                            zIndex: 500,
                            position: 'absolute',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bottom: 0,
                            right: 0
                        }}>
                            <Svg width="24" height="24" viewBox="0 0 24 24">
                                <Path fill="#405DE6" d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                            </Svg>
                        </View>
                    </TouchableOpacity>
                    <Text numberOfLines={1} style={{
                        color: "#000000",
                        fontWeight: "300",
                        fontSize: 13,
                        width: '80%',
                        textAlign: 'center',
                        marginTop: 5,
                    }}>{data.name}</Text>
                </View>
            ) : (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <LinearGradient
                            colors={['#833AB4', '#C13584', '#F77737']}
                            style={{ height: 76, width: 76, alignItems: 'center', justifyContent: 'center', borderRadius: 38 }}
                        >
                            <TouchableOpacity onPress={() => onClicked(data)}>
                                <Image
                                    style={{ width: 67, height: 67, borderRadius: 32 }}
                                    source={{ uri: data.source }}
                                />
                            </TouchableOpacity>
                        </LinearGradient>
                        {data.live ? (
                            <View style={{ justifyContent: 'center', marginLeft: 5, alignItems: 'center', flexDirection: 'column' }}>
                                <LinearGradient
                                    colors={['#833AB4', '#C13584', '#F77737']}
                                    style={{
                                        height: 24,
                                        width: 38,
                                        alignItems: 'center',
                                        borderColor: '#FFFFFF',
                                        borderWidth: 3,
                                        position: 'absolute',
                                        justifyContent: 'center',
                                        borderRadius: 6,
                                        padding: 4,
                                        bottom: 0,
                                        margin: 'auto',
                                        top: -16,
                                        marginLeft: 30
                                    }}
                                >
                                    <Text style={{
                                        color: '#FFFFFF',
                                        fontSize: 10,
                                        fontWeight: 'bold'
                                    }}>LIVE</Text>
                                </LinearGradient>

                            </View>
                        ) : null}
                        <Text numberOfLines={1} style={{
                            color: "#000000",
                            fontWeight: "300",
                            fontSize: 13,
                            marginTop: 5,
                            textAlign: 'center'
                        }}>{data.name}</Text>
                    </View>
                )}
        </View>
    );
}