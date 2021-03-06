// Every component needs to be either a functional or class component!
// Class = If you need lifecycle methods, access to state, data fetching
// Function = If just showing data, prensentational

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
