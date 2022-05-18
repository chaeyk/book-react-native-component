import React from "react";
import { Pressable, TouchableOpacity, Text } from "react-native";
import PropTypes from 'prop-types';

interface IButtonProps {
    title?: string;
    children?: string;
    onPress: () => void;
}

const MyButton = (props: IButtonProps) => {
    console.log(props);
    return (
        <Pressable
            onPress={() => props.onPress()}
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'gray',
                    padding: 16,
                    margin: 10,
                    borderRadius: 8,
                }
            ]}>
            <Text style={{ fontSize: 24 }}>{props.children || props.title}</Text>
        </Pressable>
    );
};

MyButton.defaultProps = {
    title: 'Button',
}

MyButton.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
}

export default MyButton;
