# @todo-list

Web application for managing your tasks.

## Development

1. `yarn install`
2. `yarn dev` - it will start dev server with the frontend

## Solution description
There are several approaches to implement tabs, so I chose
the one, that Twitter mostly uses - make it on the same route.
In real project each tab would fetch some data from the server.

I decided to separate `active` and `deleted` `todos` to simulate work
with real data, because these entities probably would 
be received from different endpoints.

To make it easier for now, I could just add `deleted` field to the 
interface and filter them on the client side.

HashRouter using to address the issue with page reload on refresh 
on github pages.