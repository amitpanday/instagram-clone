import React, { Component } from 'react';
import { View, Text, TextInput, Image, FlatList } from 'react-native';

import { NodeAPI } from '../../services/webservice';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaderVisible: false,
        }
    }

    componentDidMount() {
        this.getImagesData();
    }

    getImagesData = () => {
        return NodeAPI('list', 'GET').then((result) => {
            const data = result;
            this.setState({ data });
        });
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <View style={{ alignItems: 'center', height: 30, flexDirection: 'row', borderColor: '#000000', borderWidth: 0.5, borderRadius: 10, width: 380, marginTop: 10, marginLeft: 15 }}>
                    <Image
                        style={{ width: 25, height: 25 }}
                        resizeMode={'contain'}
                        source={require('../../assets/search.png')}
                    />
                    <TextInput
                        style={{ color: '#000000', padding: 5, fontSize: 16, }}
                        placeholder={'Search'}
                        placeholderTextColor={'#000000'}
                        onChangeText={(text) => console.log({ text })}
                    />
                </View>
                <View style={{ flex: 1, marginTop: 10 }}>
                    <FlatList
                        extraData={this.state}
                        numColumns={3}
                        data={this.state.data}
                        renderItem={({ item, index }) => (
                            <View style={{ flex: 1, padding: 1, margin: 1, alignItems: 'center' }}>
                                <Image
                                    resizeMode={'cover'}
                                    style={{ width: 135, height: 120 }}
                                    source={{ url: item.download_url }}
                                />
                            </View>
                        )}
                    />
                </View>
            </View>
        );
    }
}

export default Search;