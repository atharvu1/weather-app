import React from 'react';
import './Background.css'
class Background extends React.Component{
	
	render(){
		return(
		       
		       <img src={ require(`../img/${this.props.bg}.jpg`) }  alt={this.props.bg}/>
		);
	}
}
export default Background;
// <img  src={ `require(img/${this.state.bg}.jpg)` } alt={this.props.bg}/>