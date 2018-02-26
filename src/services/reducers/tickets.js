import {
  STATUS_IN_PROGRESS, TICKETS_ADD_REQUEST, ADD_TICKET_TITLE_CHANGE,
  TICKETS_ADD_SUCCESS, STATUS_DONE
} from "../actions/tickets";
import hash from "../utils/hash";

let defaultTicketData = {
  id: hash.generateSimple(),
  title: 'Go Home',
  status: STATUS_DONE
};

let defaultTicketAddData = {
  id: null,
  title: '',
  status: STATUS_IN_PROGRESS
}

const tickets = (
  state = {
    isRequesting: false,
    data: [defaultTicketData],
    ticketAddData: defaultTicketAddData,
  },
  action
) => {
  switch (action.type) {
    case TICKETS_ADD_REQUEST:
      return {
        ...state,
        isRequesting: true
      };
    case TICKETS_ADD_SUCCESS:
      state.data.push(action.newTicket)
      return {
        ...state,
        isRequesting: false
      };
    case ADD_TICKET_TITLE_CHANGE:
      return {
        ...state,
        ticketAddData: {
          ...state.ticketAddData,
          title: action.title
        }
      };
    default:
      return state;
  }
};

export default tickets;
