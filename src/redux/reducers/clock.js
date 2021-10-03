const clock = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_TIME":
      const date = new Date();
      return Object.assign({}, state, {
        time: date.toLocaleTimeString(),
      });

    default:
      return state;
  }
};

export default clock;
