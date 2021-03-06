/**
 * Created by jaeyoung on 2017. 6. 9..
 */
import * as PlayerActionTypes from '../actiontypes/player';

export const addPlayer = name => {
  return {
    type: PlayerActionTypes.ADD_PLAYER,
    name
  };
};

export const removePlayer = index => {
  return {
    type: PlayerActionTypes.REMOVE_PLAYER,
    index
  };
};

export const updatePlayerScore = (index, score) => {
  return {
    type: PlayerActionTypes.UPDATE_PLAYER_SCORE,
    index,
    score
  };
};

export const showPlayerDetail = index => {
  return {
    type: PlayerActionTypes.SHOW_PLAYER_DETAIL,
    index,
  };
};

