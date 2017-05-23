// If should be "class" based component, or "functional" component
// If just showing data, prensentational = functional
// If you need lifecycle methods, access to state, data fetching = class

// boilerplate functional component
import React from 'react';
import { View, Text } from 'react-native';

const AlbumDetail = () => {
	return (
		<View style={styles.containerStyle}>
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

//############################################################################

// boilerplate class component
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
	state = { albums: [] };
	componentWillMount() {
		this.state = { albums: [] };
		//axios.get('https://rallycoding.herokuapp.com/api/music_albums/').then(response => console.log(response));
		axios.get('https://rallycoding.herokuapp.com/api/music_albums/').then(response => this.setState({ albums: response.data }));
	}

	renderAlbums() {
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title}>{album.title}</AlbumDetail>
		);
	}

	render() {
		console.log(this.state);

		return (
			<View>
				{this.renderAlbums()}
			</View>
		);	
	}
}

export default AlbumList;

//############################################################################

