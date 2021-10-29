import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react';
import Plan from './Plan';

//function based components
// function App() {
//   return (
//     <div className="App">
//       <h1>Today's Plan</h1>
//     </div>
//   );
// }

//class based components
class App extends Component {
  state = {
    items:[],
    text: ""
  }
  handleChange = e => {
    this.setState({ text: e.target.value })
  }
  handleAdd = e => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];
      this.setState({items: items, text:""});
    }
  }
  handleDelete = id =>{
    console.log("Deleted", id);
    const Olditems = [...this.state.items]
    console.log("Olditems", Olditems);
    const items = Olditems.filter((element, i) => {
      return i!== id
    })
    console.log("Newitems", items);
    this.setState({items:items});
  }
  render () {
    return (
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
          <h2 className="text-center">My Today's Plan</h2>
          <div className="row">
            <div className="col-9"></div>
            <input type="text" className="form-control" placeholder="Write Plans here..." value= {this.state.text} onChange={this.handleChange} />
          <div className="col-3">
            <button className="btn btn-warning px-7 fw-bold" onClick={this.handleAdd}>Add</button>
          </div>
          </div>
          <div className="container">
            <ul className="list-unstyled row m-5">
              {
                this.state.items.map((value, i)=>{
                  return <Plan key={i} id={i} value={value} sendData={this.handleDelete} />
                })
              }
              {/* <Plan/>
              {console.log(this.state.items)} */}
            </ul>
          </div>
          </div>
        </div>
      </div>
    );

  }
  
}

export default App;
