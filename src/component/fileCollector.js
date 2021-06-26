import React from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    FlatList,
    Image, TouchableOpacity, ImageBackground
} from 'react-native'
import CameraRoll from '@react-native-community/cameraroll';
import Loader from '../component/loader';


export default class FileColletor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            multipleSelected: false,
            initialLoading: true,
        };
    }

    componentDidMount() {
        this.fetchImages();
    }

    fetchImages() {
        try {
            var fetchParams = {
                first: 1000,
                groupTypes: 'All',
                assetType: 'Photos',
            };
            if (Platform.OS === "android") {
                delete fetchParams.groupTypes;
            }
            CameraRoll.getPhotos(fetchParams).then(result => {
                this.setState({ images: result.edges, initialLoading: false });
                this.props.onSelectImage(result.edges[0]);
            }).catch((err) => {
                console.log(err)
            });
        } catch (error) {
            console.log(error)
        }
    }

    selectedImage(item, index) {
        this.props.onSelectImage(item);
        var { images } = this.state;
        images.map((item, index) => {
            if (item.selected) item.selected = false
        })
        images[index].selected = true;
        setTimeout(() => {
            this.setState({ images });
        }, 300)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Loader loaderVisible={this.state.initialLoading} />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={4}
                    data={this.state.images}
                    extraData={this.state}
                    keyExtractor={(item, index) => (item + index)}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity key={index} style={{ marginBottom: 1, marginRight: 1, }}
                            onPress={() => this.selectedImage(item, index)}
                        >
                            <ImageBackground
                                style={{ width: 100, height: 100 }}
                                source={{ uri: item.node.image.uri }}
                            >
                                {item.selected ? (<View style={{
                                    flex: 1,
                                    backgroundColor: '#FFFFFF',
                                    opacity: 0.5
                                }} />) : null}
                            </ImageBackground>
                            {this.state.multipleSelected ? (
                                <View style={{
                                    position: 'absolute',
                                    top: 5,
                                    right: 5,
                                    backgroundColor: '#2473f0',
                                    height: 25, width: 25,
                                    borderRadius: 100,
                                    borderColor: '#FFFFFF',
                                    borderWidth: 2, justifyContent: 'center', alignItems: 'center'
                                }}>
                                    <Text style={{ fontWeight: '500', fontSize: 12, color: '#FFFFFF' }}>{item.serialNumber}</Text>
                                </View>
                            )
                                : null}
                        </TouchableOpacity>
                    )}
                    ListHeaderComponent={() => (
                        <View style={{ flexDirection: 'row', height: 45, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10 }}>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: '600', fontSize: 16, color: '#FFFFFF' }}>Gallery</Text>
                                <Image resizeMode="contain" style={{ marginLeft: 10, width: 15, height: 15, tintColor: '#FFFFFF' }} source={require('../assets/down_a.png')} />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => this.setState({ multipleSelected: !this.state.multipleSelected })} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: !this.state.multipleSelected ? 'rgba(255,255,255,0.2)' : '#2473f0', height: 35, width: 35, borderRadius: 100, marginRight: 8 }}>
                                    <Image resizeMode="contain" style={{ width: 22, height: 22, tintColor: '#FFFFFF' }} source={require('../assets/multi-copy.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.2)', height: 35, width: 35, borderRadius: 100 }}>
                                    <Image resizeMode="contain" style={{ width: 20, height: 20, tintColor: '#FFFFFF' }} source={require('../assets/camera.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>
        );
    }
}