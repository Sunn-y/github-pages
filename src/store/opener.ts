const SHOWPROJECT = "project/SHOWPROJECT";
const HIDEPROJECT = "project/HIDEPROJECT";

export const showProject = () => ({ type: SHOWPROJECT });
export const hideProject = () => ({ type: HIDEPROJECT });

const initState = {
  openState : false
}

function otherFunc(state = initState, action) {
  switch (action.type) {
    case SHOWPROJECT:
      return {
        openState: true,
      };
    case HIDEPROJECT:
      return {
        openState: false,
      };
    default:
      return state;
  }
}

export default otherFunc;