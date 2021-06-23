import React, { PureComponent } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    TextInput,
    Animated,
    StyleSheet,
    Dimensions,
    Platform
} from 'react-native';

import storiesData from '../../data/stories';

const { width, height } = Dimensions.get('screen');
const timeoutBarItemWidth = width / storiesData.length - 3;
const animXList = storiesData.map(x => new Animated.Value(0));

class ShowStories extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#000000' }}>
                <View style={{ flex: 0.9, justifyContent: 'center', borderRadius: 10, }}>
                    <ImageBackground
                        resizeMode="contain"
                        style={{ flex: 1 }}
                        source={require('../../assets/page-1.jpeg')}
                    >
                        <View style={{
                            position: 'absolute',
                            top: 5,
                            height: 3,
                            width: '100%',
                            justifyContent: 'space-between',
                            flexDirection: "row",
                            alignItems: 'center',
                            paddingHorizontal: 5
                        }}>
                            {storiesData.map((storyItem, storyIndex) => (
                                <View key={storyIndex} style={{
                                    height: '100%',
                                    backgroundColor: 'rgba(255,255,255,0.5)',
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    width: timeoutBarItemWidth,
                                }}>
                                    <Animated.View style={{
                                        ...StyleSheet.absoluteFillObject,
                                        width: timeoutBarItemWidth,
                                        backgroundColor: '#fff',
                                        transform: [{
                                            translateX: animXList[storyIndex].interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [-timeoutBarItemWidth, 0],
                                                extrapolate: 'clamp'
                                            })
                                        }]
                                    }} />
                                </View>
                            ))}
                            <View style={{
                                position: 'absolute', top: 10, width: width, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between',
                            }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingLeft: 10, }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                        <Image
                                            resizeMode="contain"
                                            style={{ width: 40, height: 40, borderRadius: 100, }}
                                            source={require('../../assets/ic1.png')}
                                        />
                                    </TouchableOpacity>
                                    <View style={{ paddingLeft: 10, }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ color: 'white', fontSize: 15, fontWeight: '500' }}>Fucker</Text>
                                            <Text style={{ paddingLeft: 10, color: 'white', fontSize: 15 }}>11h</Text>
                                        </View>
                                        <Text style={{ color: 'white', fontSize: 15 }}>Fuck</Text>
                                    </View>
                                </View>
                                <TouchableOpacity>
                                    <Image
                                        style={{ width: 20, height: 20 }}
                                        resizeMode={'contain'}
                                        source={require('../../assets/three-dot.jpeg')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={{ flex: 0.1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: 350, height: 40, marginHorizontal: 10, borderColor: '#FFFFFF', borderWidth: 0.5, borderRadius: 25, }}>
                            <TextInput
                                placeholder="Send message"
                                placeholderTextColor="#FFFFFF"
                                style={{ height: 40, paddingHorizontal: 15, color: '#FFFFFF', fontSize: 14 }}
                                onChangeText={(text) => console.log(text)}
                            />
                        </View>
                        <TouchableOpacity style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}
                            onPress={() => console.log('direct click')}
                        >
                            <Image resizeMode="contain" style={{ width: 20, height: 20, tintColor: '#FFFFFF' }} source={require('../../assets/direct.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

export default ShowStories;