import React, {Component} from 'react';
import HeadName from './HeadName';
// import './App.css';
import Tabletop from 'tabletop';
import BookList from './booklist';


class App extends Component{
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    Tabletop.init({
        key: '18nn5hacJIhB6qIfMy6T8bD5vCpltz08b4jdjNL2OxYc',
        callback: sheet => {
          this.setState({
            data: sheet
          })
        },
        simpleSheet: true
      })
      // window.open("https://i.ibb.co/VtZq1nW/mm.gif", "PopupWin", "width=375,height=150,top=300,left=15");
  }
  render(){
    const { data } = this.state;
    return (
      <div className="App">
        <div className='absolute'>
         <BookList DBase={data}/>
        </div>
        <HeadName/>       
      </div>
    );
  }
}

export default App;
