import React from 'react';

class Titles extends React.Component{
	render(){
		return(
			<div /*style={{backgroundImage: 'url(img/' + this.props.bg + '.jpg)'}}*/>
				<h1 className="title-container__title" >Weather finder</h1>
				<h3 className="title-container__subtitle">Find out weather,conditions and more...</h3>
			</div>
		);
	}
}
export default Titles
//background: url("img/bg.jpg") center center no-repeat;