const React = require("react");
const moment = require("moment");
const Redux = require("redux");
const ReactRedux = require("react-redux");

function Item(props){
  return(
    <div>
      {
        props.data.map(function(item){
          return (
            <div className = "panel">
              <h2>{item.date}</h2>
              <p>${item.price}</p>
            </div>
          );
      })}
    </div>
  );
}

export default class BTNPrices extends React.Component {

  constructor(props){
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount(){
    fetch('https://api.coindesk.com/v1/bpi/historical/close.json').then(function(response){
      return response.json();
    }).then(function(result){
      let dataToArray = [];
      for(let item in result.bpi){
        dataToArray.push({
          date: moment(item).format('MMM DD'),
          price: result.bpi[item]
        })}
      this.setState({isLoading: false, dataSource: dataToArray});
    }.bind(this));
    }

  render(){
    if(this.state.isLoading){
      return (
        <div>
          <p>Loading!...</p>
        </div>
      );
    }
    return(
      <div>
        <div className = "panel">
          <h2>Bitcoin Prices:</h2>
        </div>
        <Item data = {this.state.dataSource}/>
      </div>
    );
  }
}
//
// function reducer(state = [], action){
//
// }
//
// const mapDispatchToProps = (dispatch) => ({
//   fetchData: () => dispatch(thunkFetchBTNData())
// })
//
// const mapStateToProps = (state) => ({
//   prices: state.prices
// })
//
// const ConnectedBTN = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(BTNPrices);

// function thunkFetchBTNData(url){
//   return function(dispatch){
//     return fetch(url)
//             .then(response => response.json())
//             .then(result => {
//               let dataToArray = [];
//               for(let item in result.bpi){
//                 dataToArray.push({
//                   date: moment(item).format("MMM DD"),
//                   price: result.bpi[item]
//                 })
//               }
//               dispatch({
//                 type: 'BTN_RECEIVED',
//                 payload: dataToArray
//               })
//             })
//   }
// }
