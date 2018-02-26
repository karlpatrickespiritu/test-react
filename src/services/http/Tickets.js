import hash from "../utils/hash";

const Ticket = {
  add: (ticket) => {
    return new Promise((resolve, reject) => {
      ticket.id = hash.generateSimple()
      setTimeout(() => {
        resolve(ticket)
      }, 1000)
    })
  }
}

export default Ticket