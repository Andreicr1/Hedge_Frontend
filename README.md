# Hedge System Frontend

This project uses environment variables to configure API access.

Create a `.env` file in the project root based on the example below:

```
REACT_APP_API_BASE_URL=http://127.0.0.1:8000
```

These variables will be loaded automatically by React scripts. The `REACT_APP_API_BASE_URL` value is used by the forms to send requests to your backend.

