import React from 'react';
import { View, Image, Text, Dimensions, TouchableOpacity, TextInput } from 'react-native';

const { width, height } = Dimensions.get('screen');

export default Card = ({ data }) => {
    return (
        <View key={Number(data.id)} style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: 50, height: 50, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            style={{ width: 50, height: 50, borderRadius: 50 }}
                            resizeMode={'contain'}
                            source={{ uri: data.avatar }}
                        />
                    </View>
                    <View>
                        <Text style={{ color: '#000000', fontSize: 16, fontWeight: '500', marginLeft: 10 }}>{data.author}</Text>
                        <Text style={{ color: '#000000', fontSize: 12, fontWeight: '500', marginLeft: 10 }}>Fineland</Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => console.log('three dot click')}>
                        <Image
                            style={{ width: 20, height: 20 }}
                            resizeMode={'contain'}
                            source={require('../assets/three-dot.jpeg')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Image
                    style={{ width: width, height: 400 }}
                    source={{ uri: data.image }}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5, paddingHorizontal: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 30, height: 30 }}
                            resizeMode={'contain'}
                            source={require('../assets/notification.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 30, height: 30 }}
                            resizeMode={'contain'}
                            source={require('../assets/message.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={{ width: 30, height: 30 }}
                            resizeMode={'contain'}
                            source={require('../assets/share.png')}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Image
                        style={{ width: 30, height: 30 }}
                        resizeMode={'contain'}
                        source={require('../assets/save.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 10, justifyContent: 'center' }}>
                <TouchableOpacity style={{ padding: 2 }}>
                    <Text style={{ color: '#000000', fontSize: 15, fontWeight: '600' }}>{`${data.likeCount} Iikes`}</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', padding: 2, flexWrap: 'wrap' }}>
                    <Text style={{ color: '#000000', fontSize: 15, fontWeight: '600' }}>{data.author}</Text>
                    <Text style={{ color: '#000000', fontSize: 12, fontWeight: '500', marginLeft: 5, textAlign: 'center', marginTop: 2, textAlign: 'justify' }}>{data.text}</Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 10, justifyContent: 'center' }}>
                <TouchableOpacity>
                    <Text style={{ color: '#8e8e8e', fontWeight: '500', fontSize: 15 }}>{`View ${data.commentCount} Comment`}</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5, alignItems: 'center' }}>
                    <View style={{ width: 250, height: 35, flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Image
                                style={{ width: 35, height: 35 }}
                                resizeMode={'contain'}
                                source={require('../assets/default_user.png')}
                            />
                        </TouchableOpacity>
                        <TextInput
                            style={{ width: 180, height: 35, color: '#000000', fontSize: 18, marginLeft: 10 }}
                            placeholderTextColor={'#8e8e8e'}
                            placeholder={'Add a comment...'}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', padding: 2, }}>
                        <TouchableOpacity>
                            <Image
                                style={{ width: 15, height: 15 }}
                                resizeMode={'contain'}
                                source={require('../assets/notification.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={{ width: 15, height: 15 }}
                                resizeMode={'contain'}
                                source={require('../assets/message.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 15, height: 15, borderRadius: 50, borderColor: '#000000', borderWidth: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 2 }}>
                            <Text style={{ color: '#8e8e8e', fontSize: 16, marginBottom: 5, width: 15, height: 15, marginLeft: 5 }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ color: '#8e8e8e', fontWeight: '400', fontSize: 12, marginTop: 5 }}>6 HOURS AGO</Text>
            </View>
        </View>
    );
}