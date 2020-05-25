import React, { Component } from "react";

import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";
import { Icon } from "@material-ui/core";
import styles from "./Rating.module.css";
import Box from '@material-ui/core/Box';
 
class Rating extends Component {
  

  render() {
    const ratings = [...Array(5)].map((item, index) => index + 1);
    const { changeRating } = this.props;

    return (
      <div>
        {ratings.map((item) => {
          return (
            <Icon onClick={() => changeRating(item,this.props.movie.id)} className={styles.star}  > 
             {item<=(this.props.movie.userRating || 0 ) ? <Star className={styles.starr} />  : <StarBorder />}
            </Icon>
          );
        })}
      </div>
    );
  }
}

export default Rating;
