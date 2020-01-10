import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
 
class StarRate extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 1
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
  
    return (                
      <div style={{fontSize:"30px", height:"35px"}}>
        <StarRatingComponent 
          name="rate1" 
          editing={false}
          starCount={5}
          value={5}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
 
export default StarRate;