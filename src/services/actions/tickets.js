export const STATUS_IN_PROGRESS = 0
export const STATUS_DONE = 0
export const STATUS_CLOSE = 0

export const TICKETS_ADD_REQUEST = 'TICKETS_IN_PROGRESS_REQUEST'
export const TICKETS_ADD_SUCCESS = 'TICKETS_IN_PROGRESS_SUCCESS'
export const TICKETS_ADD_FAILURE = 'TICKETS_IN_PROGRESS_FAILURE'

export const addTicket = key => (dispatch, getState) => {
  dispatch(addTicketRequest())
}

export const addTicketRequest = () => ({
  type: TICKETS_ADD_REQUEST
})

export const addTicketReceive = () => ({
  type: TICKETS_ADD_SUCCESS
})

export const addTicketFail = () => ({
  type: TICKETS_ADD_FAILURE
})