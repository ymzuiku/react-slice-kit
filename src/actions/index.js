export function setNum(num) {
  return dispatch => {
    dispatch({
      type: 'test',
      reducer(state) {
        return state.setIn(['test', 'num'], num);
      },
    });
  };
}
