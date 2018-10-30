/* eslint-disable import/no-extraneous-dependencies */
import { Dimensions, Platform, PixelRatio } from 'react-native';


const { height, width } = Dimensions.get('window');
export function createConstants(...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}

export const createReducer = (initialState, reducerMap) => (state = initialState, action = {}) => {
  const reducer = reducerMap[action.type];

  return reducer
    ? reducer(state, action.payload)
    : state;
};


export const checkStatus = (response) => {
  console.log("checkStatus Response >>  ", response)
  // if (!response.ok) { // (response.status < 200 || response.status > 300)
  //
  //     parseJSON(response)
  //       .then((result) => {
  //         console.log('error Parsed ',result);
  //           const error = new Error(result.errors?result.errors.errors[0].message : 'Unexpected Error');
  //           error.response = response;
  //           error.statusCode = response.status;
  //           throw error;
  //     })
  //
  // }
  return response;
};

export const parseJSON = response => response.json().catch(() => ({}));

export function parseError(response) {
  return response.json();
}

