import React from 'react'
import {
    View,
    Modal,
    Dimensions,
    ActivityIndicator,
    StyleSheet
} from 'react-native'

const { height, width } = Dimensions.get('window');

const Loader = ({ loaderVisible, onRequestClose }) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={loaderVisible}
        >
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#fcab16" />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00000080',
        paddingHorizontal: 10,
        paddingVertical: height / 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Loader












// import React from 'react'
// import { View, Text, Modal, TouchableOpacity, Dimensions, ActivityIndicator, Image, StyleSheet } from 'react-native'
// import { dynamicSize, getFontSize, fontFamily } from '../utils/responsive';
// import { Plane, Wave, Chase, Wander, Swing } from 'react-native-animated-spinkit'

// const { height, width } = Dimensions.get('window');

// const Loader = ({ loaderVisible, onRequestClose }) => {
//     return (
//         <Modal
//             animationType="fade"
//             transparent={true}
//             visible={loaderVisible}
//         // onRequestClose={() => loaderVisible = false}
//         >
//             <View style={{ flex: 1, backgroundColor: '#00000080', paddingHorizontal: dynamicSize(10), paddingVertical: height / 8, justifyContent: 'center', alignItems: 'center' }}>
//                 {/* <ActivityIndicator size="large" color="#59a8e3" /> */}
//                 <Chase size={dynamicSize(100)} color="#fcab16" />
//                 {/* <Image resizeMode="contain" style={{height:dynamicSize(100),width:dynamicSize(150)}} source={{uri:'http://www.animatedimages.org/data/media/1617/animated-truck-image-0007.gif'}}/> */}
//             </View>
//         </Modal>
//     )
// }

// const styles = StyleSheet.create({
//     lottie: {
//         width: 100,
//         height: 100
//     }
// });

// export default Loader
