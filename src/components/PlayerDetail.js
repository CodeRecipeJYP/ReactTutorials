/**
 * Created by jaeyoung on 2017. 6. 14..
 */
import React from 'react';
import PropTypes from 'prop-types';


const PlayerDetail = ({  }) => {
  if(props.index === -1){
    return (
      <div>
        <h3>{ }</h3>
        <ul>
          <li>
            <span>Score: </span>
            { }
          </li>
          <li>
            <span>Created: </span>
            { }
          </li>
          <li>
            <span>Updated: </span>
            { }
          </li>
        </ul>
      </div>
    );
  }
  else {
    return (<p>Click on a player to see more details</p>);
  }
};

PlayerDetail.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default PlayerDetail;