import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default class ToDo extends React.Component{

    state = {
        isEditing: false,
        isCompleted: false
    }


    render(){
        const { isCompleted } = this.state;

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._toggleTodo}>
                    <View style={[styles.circle, isCompleted ? styles.completedCircle : styles.uncompletedCircle]}></View>
                </TouchableOpacity>
                <Text style={styles.text}>Hello 투두에염</Text>
            </View>
        )
    }

    _toggleTodo = () => {
        this.setState(prevState => {
            return {
                isCompleted: !prevState.isCompleted
            };
        })
    }

    // _toggleTodo = () => {
    //     this.setState({
    //         isCompleted: !this.state.isCompleted
    //     })
    // }

}

const styles = StyleSheet.create({
    container: {
        width: width - 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: 1,
        // borderBottomWidth: StyleSheet.hairlinewidth,
        // StyleSheet.hairlinewidth는 StyleSheet에 정의된 상수인데(얇음) LG Nexus 5X 등의 장치에서는 안보일 수 있음
        flexDirection: "row",
        alignItems: "center"
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        // borderRadius를 width, height의 절반으로 주면 원이됨
        borderWidth: 3,
        marginRight: 20
    },
    completedCircle: {
        borderColor: "#bbb"
    },
    uncompletedCircle: {
        borderColor: "#F23657"
    },
    text: {
        fontWeight: "600",
        fontSize: 20,
        marginVertical: 20
    }
})