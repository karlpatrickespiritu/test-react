import hash from "../utils/hash";

export const STATUS_IN_PROGRESS = 0
export const STATUS_DONE = 1
export const STATUS_CLOSE = 2

export const TICKETS_ADD_REQUEST = 'TICKETS_IN_PROGRESS_REQUEST'
export const TICKETS_ADD_SUCCESS = 'TICKETS_IN_PROGRESS_SUCCESS'
export const TICKETS_ADD_FAILURE = 'TICKETS_IN_PROGRESS_FAILURE'

export const ADD_TICKET_TITLE_CHANGE = 'ADD_TICKET_TITLE_CHANGE'

export const addTicketTitleChange = (title) => ({
  type: ADD_TICKET_TITLE_CHANGE,
  title
})

export const addTicket = key => (dispatch, getState) => {
  dispatch(addTicketRequest())
  setTimeout(() => {
    // let's say we got the new added ticket from the server
    let newTicket = getState().tickets.ticketAddData
    newTicket.id = hash.generateSimple()

    dispatch(addTicketReceive(newTicket))
  }, 2000)
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