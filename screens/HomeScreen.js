import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as moviesActions from '../redux/actions/AdjaraActions';
import { Box } from '../constants/common';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
		};
  }
  componentWillMount() {
    this.retrieveMovies();
  }

  retrieveMovies() {
    this.props.actions.retrievePopularMovies("test",(data) => {
      try {
        this.setState({isLoading:false},(e) => {
          //  alert(e)
          })
         } catch(e) {
            //	alert(e)
            }
          
    })
  }
  
  render() {
    
    const { popularMovies } = this.props;
    console.log(popularMovies);
  if (this.state.isLoading) {return <View />} else {
    return (
      <View style={styles.container}>
        <View style={{ borderRadius:13, padding:5, backgroundColor:'#51F4AD', justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
          <Text style={{color:'white'}}>Movies</Text>
        </View>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {popularMovies && popularMovies.map((item, i) => {
            return (<Box key={i} name={item.title_en} image={item.poster} genre={`${item.data_date}-${item.release_date}`} rating={item.imdb} />)
          })}
        </ScrollView>
      </View>
    );
        }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

function mapStateToProps(state, ownProps) {
	return {
		popularMovies: state.movies.popularMovies,
	};
}
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(moviesActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
