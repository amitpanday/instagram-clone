import React from 'react';
import { View, Image, SectionList } from 'react-native';

import SubHeader from '../../component/subHeader';
import FileColletor from '../../component/fileCollector';
import Cropper from '../../component/cropper';

class UploadFiles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [{
                isHeader: true,
                data: ["Pizza"]
            },
            {
                isHeader: false,
                data: ["French Fries"]
            }],
            selectedImageData: ''
        };
        this.cropper = null;
    }

    onSelectImage = (data) => {
        const { node } = data;
        this.setState({ selectedImageData: node });
    }

    onCropped = (data) => {
        this.cropper.crop().then((cropImageUri) => {
            console.log(cropImageUri)
        });
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#000000' }}>
                <SubHeader navigation={this.props.navigation} onClick={this.onCropped} />
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <SectionList
                        showsVerticalScrollIndicator={false}
                        stickySectionHeadersEnabled={false}
                        sections={this.state.data}
                        keyExtractor={(item, index) => item + index}
                        renderSectionHeader={({ section }) => (
                            section.isHeader && this.state.selectedImageData ? (
                                <Cropper ref={cropper => { this.cropper = cropper }} imageData={this.state.selectedImageData} />
                            ) : null
                        )}
                        renderItem={({ item, section, index }) => (!section.isHeader ? (<FileColletor onSelectImage={this.onSelectImage} />) : null)}
                    />
                </View>
            </View>
        )
    }
}

export default UploadFiles;