
# Github user list

Backend for Shawn and Partners challenge


Use node (16^) to follow the bellow steps

## Installing

run those commands on the root directory

```bash
  npm install
```


## Running

run those commands on the root directory to use `nodemon` to serve the API, which will watch for files updates and restart the server automatically

```bash
  npm run dev
```
and you will see in the console the URL to access the API just like bellow: 

![api-url-link-port](https://user-images.githubusercontent.com/49080260/233885582-8d3c9ab0-fb1d-49d4-a8d6-de9bb799c34c.PNG)

### Runner for production

To run it in production use the following command

```bash
  npm start
```

## Environment

Use the file `.env` in the root directory to add or remove some environment variables.
## Routes

The configured routes are under the `/api` route.

#### Users List

The route  `/api/users` will display in `JSON` format the list of users.
Use the params `since` and `perPage`, both as number type, to page the results

#### User Details

The route `/api/{username}/details` is able to return the details of a user. The parameter `username` is the github username.

#### User Repositories

The route `/api/{username}/repos` is able to return the public repositories of a user. The parameter `username` is the github username.
