import {
  STATUS_IN_PROGRESS, TICKETS_ADD_REQUEST, ADD_TICKET_TITLE_CHANGE,
  TICKETS_ADD_SUCCESS, TICKETS_ADD_FAILURE, STATUS_DONE,
  TICKET_CHANGE_STATUS
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
    // ADD TICKET
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
    case TICKETS_ADD_FAILURE:
      return {
        ...state,
        isRequesting: false
      };

    // ON CHANGE ADD TITLE
    case ADD_TICKET_TITLE_CHANGE:
      return {
        ...state,
        ticketAddData: {
          ...state.ticketAddData,
          title: action.title
        }
      };

    // CHANGE STATUS
    case TICKET_CHANGE_STATUS:
      state.data =  state.data.map(ticket => {
        console.log(ticket.id === action.id, action.status)
        return ticket.id === action.id
          ? { ...ticket, status: action.status }
          : ticket
      })
      return {
        ...state
      }
    default:
      return state;
  }
};

export default tickets;
