#Requirements
React router/Redux should be applied

## There are 2 pages
1. / (main page)
2. /ticket/ticketId (detail page)


## Create new ticket
1. User can press Enter/click Add button to Add new ticket
2. If this is a real system with backend api, there will be a delay before new ticket is added.
  Simulate this behavior using ES6 Promise, delay 1 or 2 seconds then add new ticket
  UI-wise, Add button should be disabled, three dot "..." should be displayed. After ticket has been added, revert UI back to normal
3. If value is empty, new ticket should not be created
4. Once new ticket is created, textbox value should be removed

## Move ticket
1. User should be able to move ticket from IN-PROGRESS <-> DONE <-> CLOSE
2. By default, new ticket will go to IN-PROGRESS with actions [Done,Close]
3. If ticket status is Done, available actions are [Not Fix, Close]
4. If ticket status is Close, there will be no actions
5. If ticket status is DONE. After 5 seconds, ticket should be automatically moved to CLOSE (this is per ticket)
   (Should take care of potential memory leak)

## Edit ticket
1. User can click on ticket (main page) to go to detail
2. There must be input validations (check for empty)
3. Once user updated the ticket, user should be redirected back to main page
4. Updated ticket should be in correct column (In-Progress, Done, Close)

NOTE: 
1. Accepted solution should fullfil above requirements.
2. Code cleaniness should be taken into account
3. UI does not have to be the same as WORKING EXAMPLE

WORKING EXAMPLE: https://incube8-ticket.netlify.com/

And finally, GOOD LUCK!

