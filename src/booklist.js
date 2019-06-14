import React from 'react'
import Book from './book'


class BookList extends React.Component{	
	constructor({DBase}){
		super();
		this.state={
		}
	}

	render(){
		const BookComponent = this.props.DBase.map((db,i)=>{
			return (
				<div>
					<Book
					key={i}
					Num={i}
					Code={this.props.DBase[i].Code} 
					Date={this.props.DBase[i].Date}  
					Title={this.props.DBase[i].Title} 
					Author={this.props.DBase[i].Author} 
					Content={this.props.DBase[i].Content}
					Img={this.props.DBase[i].Img}
					Percent={this.props.DBase[i].Percent}
					/>
				</div>
			);
		})

		return(
			<div class='flex flex-column bookstart'>
				{BookComponent}
			</div>
		);
	}
}

export default BookList;