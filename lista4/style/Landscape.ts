import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
	},

	contenttop: {
		width: '100%',
		paddingHorizontal: 12,
		paddingVertical: 6,
		backgroundColor: '#FFFDE6'
	},

	top: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
		backgroundColor: '#f9fad2', // dodger blue
	},

	contentbottom: {
		flex: 1,
		flexDirection: 'row',
		padding: 8,
		backgroundColor: '#FFF8E6'
	},

	middle: {
		flex: 0.4,
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 8,
		backgroundColor: '#eedd83',
	},
	bottom: {
		flex: 0.6,
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		padding: 8,
		backgroundColor: '#bdb76b',
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#000',
		margin: 8,
	}
});
