import React, { useState } from "react";
import { NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData, View } from "react-native";

const EventInput = () => {
	const [text, setText] = useState('');
	const _onChangeText = (text: string) => setText(text);

	return (
		<View>
			<Text style={{ margin: 10, fontSize: 30 }}>text: {text}</Text>
			<TextInput
				style={{ borderWidth: 1, padding: 10, fontSize: 20 }}
				placeholder="Enter a text..."
				onChangeText={_onChangeText}
			/>
		</View>
	);
};

export default EventInput;
