// Every component needs to be either a functional or class component!
// Class = If you need lifecycle methods, access to state, data fetching
// Function = If just showing data, prensentational

// boilerplate functional component
import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = () => {
	return (
		<View style={styles.containerStyle}>
      <Text>This is text</Text>
		</View>
	);
};

const styles = {
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	}
};

export default AlbumDetail;
