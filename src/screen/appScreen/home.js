import React, { Component } from 'react';
import { View, Text, Image, FlatList, Dimensions, TouchableOpacity, ScrollView, SectionList, SafeAreaView } from 'react-native';
import Modal from 'react-native-modal';

import Header from '../../component/header';
import Card from '../../component/card';
import { NodeAPI } from '../../services/webservice';
import Story from './stories';


import postData from '../../data/home';
import storyData from '../../data/stories';
import avatarData from '../../data/avatars';

const { width, height } = Dimensions.get('screen');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedStories: {},
            storiesModal: false,
            loaderVisible: false,
            scrollOffset: null,
        }
        this.scrollViewRef = React.createRef();
    }

    componentDidMount() {
        let data = [];
        data.push({ 'type': 'story', "horizontal": true, 'data': avatarData }, { 'type': 'post', "horizontal": false, 'data': postData })
        this.setState({ data });
    }

    handleStoriesPress = (data) => {
        this.props.navigation.navigate('ShowStories');
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <Header navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <SectionList
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                        stickySectionHeadersEnabled={false}
                        sections={this.state.data}
                        keyExtractor={(item, index) => item + index}
                        renderSectionHeader={({ section }) => (
                            section.horizontal ? (
                                <View style={{ flex: 1, marginTop: 2 }}>
                                    <FlatList
                                        horizontal
                                        showsHorizontalScrollIndicator={false}
                                        data={section.data}
                                        extraData={this.state}
                                        keyExtractor={(item, index) => (item + index)}
                                        renderItem={({ item, index }) => (
                                            <Story
                                                data={item}
                                                onClicked={this.handleStoriesPress}
                                            />
                                        )}
                                    />
                                    <View style={{
                                        height: 1,
                                        width: width,
                                        backgroundColor: '#D8D8D8',
                                        marginTop: 5
                                    }} />
                                </View>
                            ) : null
                        )}
                        renderItem={({ item, section, index }) => (
                            !section.horizontal ? (<Card data={item} />) : null
                        )}
                    />
                </View>
            </View>
        );
    }
}

export default Home;