import React, { Component } from 'react'
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {
    console.log('in Restaurants - this.props.restaurants', this.props.restaurants)
    return (
      <div>
        <ul>
          {/* {this.props.restaurants.map((restaurant) => (
            <Restaurant key={restaurant.id} restaurant={restaurant} />)
          )} */}
          {this.props.restaurants.map((restaurant) => (
            <li>{restaurant.text}<Restaurant key={restaurant.id} restaurant={restaurant} /></li>
          )
          )}
        </ul>
      </div>
    );
  }
};

export default Restaurants;