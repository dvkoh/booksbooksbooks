import React from 'react';
import MediaQuery from 'react-responsive';

class HeadName extends React.Component{
	constructor(){
		super();
		this.handleScroll = this.handleScroll.bind(this);
		this.state = {
			name: 'Dongyoon',
			display: true
		};
	}
	changeName = () => {
		if(this.state.name === 'Dong Yoon')this.setState({name:'David'})
		else if(this.state.name === 'David')this.setState({name:'동윤'})
		else if(this.state.name === '동윤')this.setState({name:'東潤'})
		else this.setState({name:'Dong Yoon'})
	}

	componentDidMount() {
	  window.addEventListener('scroll', this.handleScroll);
	};
	componentWillUnmount() {
	  window.removeEventListener('scroll', this.handleScroll);
	};
	handleScroll(event) {
	  if(window.scrollY>0)this.setState({display:false});
	  else this.setState({display:true});
	};

	render(){

		return(
			<div>
			<MediaQuery minWidth={1400}>
				<div className='roboto-400 f72 ml4 white mr4'>
					<div className='frame roboto-400 mt3 mb4'>						
						<p className=''>{this.state.name} <span className='roboto-700'>Koh</span></p>
					</div>	
					<div className='pt5 mt3 line-height'>
						<p><a href='https://dvkoh.github.io/archive/' className={this.state.display? 'transition':'transition invisible'}>Archive ↗</a>
						<br/><a href='https://dvkoh.github.io/portfolio/' className={this.state.display? 'transition':'transition invisible'}>Portfolio ↗</a></p>
						<br/>
					</div>
					<div className='headwidth'>
					<p className='f0 tc'>* books books books *</p>
					</div>
				</div>
			</MediaQuery>
			<MediaQuery maxWidth={1400}>
				<MediaQuery minDeviceWidth={1224}>
					<div className='roboto-400 f72 ml4 white mr4'>
						<div className='frame roboto-400 mt3 mb4'>						
							<p className=''>{this.state.name} <span className='roboto-700'>Koh</span></p>
						</div>	
						<div className='pt5 mt3 line-height'>
							<p><a href='https://dvkoh.github.io/archive/' className={this.state.display? 'transition':'transition invisible'}>Archive ↗</a>
							<br/><a href='https://dvkoh.github.io/portfolio/' className={this.state.display? 'transition':'transition invisible'}>Portfolio ↗</a></p>
							<br/>
						</div>
						<div className='headwidth-s'>
							<p className='f0 tc'>* books<span className='invisible'>*&nbsp;</span></p>
							<p className='f0 tc'><span className='invisible'>*&nbsp;</span>books<span className='invisible'>*&nbsp;</span></p>
							<p className='f0 tc'><span className='invisible'>*&nbsp;</span>books *</p>
						</div>
					</div>
				</MediaQuery>
				<MediaQuery maxDeviceWidth={1224}>
					<div className='roboto-400 f72 ml4 white mr4'>
						<div className='frame roboto-400 mt3 mb4'>						
							<p className=''>{this.state.name} <span className='roboto-700'>Koh</span></p>
						</div>	
						<div className='pt5 mt3 line-height'>
							<p><a href='https://dvkoh.github.io/archive/' className={this.state.display? 'transition':'transition invisible'}>Archive ↗</a>
							<br/><a href='https://dvkoh.github.io/portfolio/' className={this.state.display? 'transition':'transition invisible'}>Portfolio ↗</a></p>
							<br/>
						</div>
						<div className='headwidth-m'>
							<p className='f0 tc'>* books<span className='invisible'>*&nbsp;</span></p>
							<p className='f0 tc'><span className='invisible'>*&nbsp;</span>books<span className='invisible'>*&nbsp;</span></p>
							<p className='f0 tc'><span className='invisible'>*&nbsp;</span>books *</p>
						</div>
					</div>
				</MediaQuery>
			</MediaQuery>
			</div>
		);
	}
}

export default HeadName;