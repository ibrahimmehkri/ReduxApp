const React = require("react");
const ReactDOM = require("react-dom");
const Redux = require("redux");
import { Provider, connect } from "react-redux";
import configureStore from "../store/index.js";
import { thunkAddCity, thunkFetching, thunkRemoveCity, nameChange, popChange, valueChange } from "../actions/index.js";

let initialState = {
  cities: [],
  name: '',
  population: '',
  value: 'Stockholm'
}

const store = configureStore(initialState);

class List extends React.Component{
  render(){
    if(this.props.cities.length === 0){
      this.props.dataRequired();
      return <div><p>Loading!</p></div>
    } else {
        return(
          <div>
            <div className="panel">
              <div className="panel-heading"><strong>Add City</strong></div>
              <div className = "form-group">
                <input type="text" value={this.props.name} onChange={this.props.nameChange} placeholder="Name" className="form-control"/>
              </div>
              <div className = "form-group">
                  <input type="text" value={this.props.population} onChange={this.props.popChange} placeholder="Population" className="form-control"/>
              </div>
              <div className = "form-group">
                <input type="button" value="Add" onClick = {this.props.addButtonClicked} className="btn btn-primary"/>
              </div>
            </div>
            <div className = "panel">
              <div className="panel-heading"><strong>Remove City</strong></div>
              <div className = "form-group">
                <select value={this.props.value} onChange={this.props.valueChange} className="form-control">
                  {this.props.cities.map(function (city){
                    return <option value={city.name}>{city.name}</option>
                  })}
                </select>
              </div>
              <div className = "form-group">
                <input type="button" value="Remove" onClick={this.props.removeButtonClicked} className="btn btn-primary"/>
              </div>
            </div>
              {this.props.cities.map(function (city){
                return <div className = "panel">
                  <h3>{city.name}</h3>
                  <p>{city.population}</p>
                </div>
              })}
          </div>
        );
      }
    }
};

const mapStateToProps = state => ({
  cities: state.cities,
  name: state.name,
  population: state.population,
  value: state.value
})

const mapDispatchToProps = dispatch => ({
  dataRequired: () => dispatch(thunkFetching()),
  nameChange: (event) => dispatch(nameChange(event)),
  popChange: (event) => dispatch(popChange(event)),
  addButtonClicked: () => dispatch(thunkAddCity()),
  valueChange: (event) => dispatch(valueChange(event)),
  removeButtonClicked: () => dispatch(thunkRemoveCity())
})

var ConnectedList = connect(mapStateToProps, mapDispatchToProps)(List);

export default class Cities extends React.Component {
  render(){
    return(
      <Provider store={store}>
          <ConnectedList></ConnectedList>
      </Provider>
    );
  }
}
