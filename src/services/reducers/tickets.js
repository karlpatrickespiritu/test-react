import {
  STATUS_IN_PROGRESS, TICKETS_ADD_REQUEST, ADD_TICKET_TITLE_CHANGE,
  TICKETS_ADD_SUCCESS, TICKETS_ADD_FAILURE, STATUS_DONE,
  TICKET_CHANGE_STATUS, TICKETS_UPDATE_REQUEST, TICKETS_UPDATE_SUCCESS, TICKETS_UPDATE_FAILURE
} from "../actions/tickets";
import hash from "../utils/hash";

let defaultTicketData = {
  id: hash.generateSimple(),
  title: 'Go Home',
  status: STATUS_IN_PROGRESS
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
        isRequesting: false,
        ticketAddData: defaultTicketAddData
      };
    case TICKETS_ADD_FAILURE:
      return {
        ...state,
        isRequesting: false
      };

    // UPDATE TICKET
    case TICKETS_UPDATE_REQUEST:
      return {
        ...state,
        isRequesting: true
      };
    case TICKETS_UPDATE_SUCCESS:
      const { updatedTicket } = action
      updatedTicket.status = parseInt(updatedTicket.status, 10)
      const foundIndex = state.data.findIndex(ticket => ticket.id === updatedTicket.id);
      state.data[foundIndex] = updatedTicket;
      return {
        ...state,
        isRequesting: false,
      };
    case TICKETS_UPDATE_FAILURE:
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
