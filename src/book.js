import React from 'react';
import MediaQuery from 'react-responsive';
import nl2br from 'react-newline-to-break'; 

class Book extends React.Component{
	constructor(props){
		super(props);
		this.state={
			toggle:false
		};
	}

	render(){
		const hoverIn =()=> {if(this.state.toggle === false)this.setState({toggle:true});}
		const hoverOut =()=> {if(this.state.toggle === true)this.setState({toggle:false});}

		const info =[this.props.Code, this.props.Date, this.props.Title, this.props.Author, this.props.Content, this.props.Img, this.props.Percent];

		const imgYes=()=>{if(info[4]==='x')console.log('apple');}

		return(
			<div>
			<MediaQuery minWidth={1400}>
				<div id={`${info[0]}` } className='width'  onMouseOver={hoverIn} onMouseLeave={hoverOut}>
					<div className='white roboto-400 f7 line-height-1 mr5 absolute right'>
						<p className={this.state.toggle? '':'invisible'}>
							>><br/>{nl2br(`${info[4]}`)}
						</p>
					</div>

					<div className={this.state.toggle? 'dim':''}>
				    	<div className='white calisto f7 tl absolute ml5 line-height-1'>
			    			<p className=''><span className='bg-black'>- {`${info[1]}`}&nbsp;&nbsp;&nbsp;</span><span className='white-30'>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . </span></p>
			    		</div>
			    		<p className='calisto f4 pt1 pl4 absolute behind white-80 tc'>{`${info[2]}`}, <span className='i'>{`${info[3]}`}</span></p>
			    		<div className='tc ml4'>
							<img src={`${info[5]}`} alt=''/>	
						</div>
					</div>
				</div>
			</MediaQuery>
			<MediaQuery maxWidth={1400}>
				<MediaQuery minDeviceWidth={1224}>
				<div id={`${info[0]}` } className='width'>
					<div className={this.state.toggle? 'dim':''}>
				    	<p className='calisto f4 pt3 absolute behind white-80 tc line-height-0'>{`${info[2]}`}, <span className='i'>{`${info[3]}`}</span></p>
			    		<div className='tc' onMouseOver={hoverIn} onMouseLeave={hoverOut}>
							<img src={`${info[5]}`} alt=''/>	
						</div>
					</div>
				</div>
				</MediaQuery>
				<MediaQuery maxDeviceWidth={1224}>
				<div id={`${info[0]}` } className='width-m'>
					<div className={this.state.toggle? 'dim':''}>
				    	<p className='calisto f8 pt11 absolute behind white-80 tc line-height-0'>{`${info[2]}`}, <span className='i'>{`${info[3]}`}</span></p>
			    		<div className='tc' onMouseOver={hoverIn} onMouseLeave={hoverOut}>
							<img src={`${info[5]}`} alt='' className='small'/>	
						</div>
					</div>
				</div>
				</MediaQuery>
			</MediaQuery>
			</div>
		);
	}
}
export default Book;