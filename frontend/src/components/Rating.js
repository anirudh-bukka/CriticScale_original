import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

 
 export class Rating extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: 0
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
    const { rating } = this.state;
    
    return (                
      <div>
        <p>Rating: {rating}</p>
        <StarRatingComponent 
          name="rate1" 
          renderStarIcon={() => <span>♫</span>}
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}