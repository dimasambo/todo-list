# @todo-list

Web application for managing your tasks.

## Development

1. `yarn install`
2. `yarn dev` - it will start dev server with the frontend

## Solution description
I decided to separate `active` and `deleted` `todos` to simulate work
with real data from server, because these entities probably would 
be received from different endpoints.

To make it easier for now, I could just add `deleted` field to the 
interface and filter them on the client side.