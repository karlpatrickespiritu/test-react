import {STATUS_IN_PROGRESS, TICKETS_ADD_REQUEST} from "../actions/tickets";

let defaultTicketData = {
  id: 0,
  title: 'Go Home',
  desc: 'Get a taxi outside.',
  status: STATUS_IN_PROGRESS
};

const tickets = (
  state = {
    isRequesting: false,
    data: [defaultTicketData]
  },
  action
) => {
  switch (action.type) {
    case TICKETS_ADD_REQUEST:
      return {
        ...state,
        isRequesting: true
      };
    default:
      return state;
  }
};

export default tickets;
