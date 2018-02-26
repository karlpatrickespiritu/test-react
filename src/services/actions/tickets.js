import Ticket from "../http/Tickets";

export const STATUS_IN_PROGRESS = 0
export const STATUS_DONE = 1
export const STATUS_CLOSE = 2

export const TICKETS_ADD_REQUEST = 'TICKETS_IN_PROGRESS_REQUEST'
export const TICKETS_ADD_SUCCESS = 'TICKETS_IN_PROGRESS_SUCCESS'
export const TICKETS_ADD_FAILURE = 'TICKETS_IN_PROGRESS_FAILURE'

export const TICKET_CHANGE_STATUS = 'TICKET_CHANGE_STATUS'

export const ADD_TICKET_TITLE_CHANGE = 'ADD_TICKET_TITLE_CHANGE'

export const addTicketTitleChange = (title) => ({
  type: ADD_TICKET_TITLE_CHANGE,
  title
})

export const addTicket = key => (dispatch, getState) => {
  dispatch(addTicketRequest())

  let ticket = getState().tickets.ticketAddData

  Ticket.add(ticket)
    .then(newTicket => dispatch(addTicketReceive(newTicket)))
    .catch(fail => console.error('server failed.', fail))
}

export const addTicketRequest = () => ({
  type: TICKETS_ADD_REQUEST
})

export const addTicketReceive = (newTicket) => ({
  type: TICKETS_ADD_SUCCESS,
  newTicket
})

export const addTicketFail = () => ({
  type: TICKETS_ADD_FAILURE
})


export const ticketChangeStatus = (id, status) => ({
  type: TICKET_CHANGE_STATUS,
  id,
  status
})