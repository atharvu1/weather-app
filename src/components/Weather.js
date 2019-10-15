import React from 'react';

class Weather extends React.Component{
	/*
	state={}
	const divStyle = {
  		color: 'blue',
 		backgroundImage: 'url(' + imgUrl + ')',
	};

	componentDidUpdate(previousProps, previousState){
		console.log(this.back);
		console.log('previousProps.description '+previousProps.description);
		console.log('this.props.description '+this.props.description);
		if (previousProps.description !== this.props.description) {
			console.log('called if');
	        this.setState({
				back:previousProps.description,
			})
	    }
		//backgroundImage: `url(img/${this.props.description}) center center no-repeat;`
		console.log('this.background '+this.back);
		console.log('called');
	}*/
	render(){
		return(
		       <div className="weather__info"  >
		       		{
		       			this.props.city &&
		       			<p className="weather__key">City: 
		       				<span className="weather__value">{this.props.city}</span>
		       			</p>
		       		}
		       		{
		       			this.props.country && 
		       			<p className="weather__key">Country: 
		       				<span className="weather__value">{this.props.country}</span>
		       			</p>
		       		}
		       		{
		       			this.props.temperature && 
		       			<p className="weather__key">Temperature: 
		       				<span className="weather__value">{this.props.temperature } °C</span>
		       			</p>
		       		}
		       		{
		       			this.props.humidity && 
		       			<p className="weather__key">Humidity: 
		       				<span className="weather__value">{this.props.humidity}</span>
		       			</p>
		       		}
		       		{
		       			this.props.description && 
		       			<p className="weather__key">Condition: 
		       				<span className="weather__value">{this.props.description}</span>
		       			</p>
		       		}
		       		{
		       			this.props.error && 
		       			<p className="weather__key">Error: 
		       				<span className="weather__error">{this.props.error}</span>
		       			</p>
		       		}
		       </div>

		);
	}
}
export default Weather;