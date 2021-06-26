import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    View,
    Platform,
} from 'react-native';
import ImageEditor from '@react-native-community/image-editor';

const ImageOffset = {
    x: '',
    y: ''
};

const ImageSize = {
    width: 720,
    height: 720,
};

const ImageCropData = {
    offset: ImageOffset,
    size: ImageSize,
    displaySize: ImageSize,
    resizeMode: 'cover',
};

export default class SquareImageCropper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: {
                uri: this.props.imageData.image.uri,
                height: this.props.imageData.image.height,
                width: this.props.imageData.image.width,
            },
            measuredSize: { width: 414, height: 414 },
            croppedImageURI: null,
            cropError: null,
        };
        this.transformData = ImageCropData;
    }

    static getDerivedStateFromProps(props, state) {
        return {
            photo: {
                uri: props.imageData.image.uri,
                height: props.imageData.image.height,
                width: props.imageData.image.width,
            }
        };
    }

    crop() {
        try {
            return ImageEditor.cropImage(
                this.state.photo.uri,
                this.transformData,
            );
        } catch (cropError) {
            return cropError;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageCropper
                    image={this.state.photo}
                    size={this.state.measuredSize}
                    style={[styles.imageCropper, this.state.measuredSize]}
                    onTransformDataChange={data => (this.transformData = data)}
                />
            </View>
        );
    }
}

const ImageCropper = ({ image, size, style, onTransformDataChange }) => {
    const widthRatio = image.width / size.width;
    const heightRatio = image.height / size.height;
    let _scaledImageSize = ImageSize;
    let contentOffset = ImageOffset;
    let horizontal = widthRatio > heightRatio;
    let maximumZoomScale = null;
    let minimumZoomScale = null;


    if (horizontal) {
        _scaledImageSize = {
            width: image.width / heightRatio,
            height: size.height,
        };
    } else {
        _scaledImageSize = {
            width: size.width,
            height: image.height / widthRatio,
        };
        if (Platform.OS === 'android') {
            _scaledImageSize.width *= 2;
            _scaledImageSize.height *= 2;
            horizontal = true;
        }
    }
    contentOffset = {
        x: (_scaledImageSize.width - size.width) / 2,
        y: (_scaledImageSize.height - size.height) / 2,
    };
    maximumZoomScale = Math.min(
        image.width / _scaledImageSize.width,
        image.height / _scaledImageSize.height,
    );
    minimumZoomScale = Math.max(
        size.width / _scaledImageSize.width,
        size.height / _scaledImageSize.height,
    );

    const onScroll = (event) => {
        updateTransformData(
            event.nativeEvent.contentOffset,
            event.nativeEvent.contentSize,
            event.nativeEvent.layoutMeasurement,
        );
    }

    const updateTransformData = (offset, scaledImageSize, croppedImageSize) => {
        const offsetRatioX = offset.x / scaledImageSize.width;
        const offsetRatioY = offset.y / scaledImageSize.height;
        const sizeRatioX = croppedImageSize.width / scaledImageSize.width;
        const sizeRatioY = croppedImageSize.height / scaledImageSize.height;

        ImageCropData.offset = {
            x: image.width * offsetRatioX,
            y: image.height * offsetRatioY,
        }
        ImageCropData.size = {
            width: image.width * sizeRatioX,
            height: image.height * sizeRatioY,
        }
        onTransformDataChange && onTransformDataChange(ImageCropData);
    }

    return (
        <ScrollView
            alwaysBounceVertical={true}
            automaticallyAdjustContentInsets={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            decelerationRate="fast"
            style={style}
            horizontal={horizontal}
            contentOffset={contentOffset}
            maximumZoomScale={maximumZoomScale}
            minimumZoomScale={minimumZoomScale}
            onMomentumScrollEnd={onScroll}
            onScrollEndDrag={onScroll}
            scrollEventThrottle={16}>
            <Image
                testID={'testImage'}
                source={image}
                style={_scaledImageSize}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
    },
    imageCropper: {
        alignSelf: 'center',
    },
    cropButtonTouchable: {
        alignSelf: 'center',
        marginTop: 12,
    },
    cropButton: {
        padding: 12,
        backgroundColor: 'blue',
        borderRadius: 4,
    },
    cropButtonLabel: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    text: {
        color: 'white',
    },
});