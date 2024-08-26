# Event Management API

This API provides endpoints for managing events, participants, and sessions. Below is a detailed description of the available routes, their methods, and the data types used.

## Routes

### Event Routes

- **Create Event**
  - **URL:** `/api/events`
  - **Method:** `POST`
  - **Controller:** [`createEvent`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FeventController.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22createEvent%22%5D "d:\Work\shaik\ems\controllers\eventController.js")
  - **Service:** [`createEvent`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FeventService.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22createEvent%22%5D "d:\Work\shaik\ems\services\eventService.js")
  - **Request Body:**
    ```json
    {
      "name": "string",
      "date": "string",
      "location": "string",
      "description": "string"
    }
    ```
  - **Response:**
    ```json
    {
      "id": "number",
      "name": "string",
      "date": "string",
      "location": "string",
      "description": "string"
    }
    ```

- **Get Event Report**
  - **URL:** `/api/events/:id/report`
  - **Method:** `GET`
  - **Controller:** [`getEventReport`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FeventController.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22getEventReport%22%5D "d:\Work\shaik\ems\controllers\eventController.js")
  - **Service:** [`getEventReport`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FeventService.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22getEventReport%22%5D "d:\Work\shaik\ems\services\eventService.js")
  - **Response:** PDF document

- **Get All Events**
  - **URL:** `/api/events`
  - **Method:** `GET`
  - **Controller:** [`getAllEvents`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FeventController.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22getAllEvents%22%5D "d:\Work\shaik\ems\controllers\eventController.js")
  - **Service:** [`getAllEvents`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FeventService.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22getAllEvents%22%5D "d:\Work\shaik\ems\services\eventService.js")
  - **Response:**
    ```json
    [
      {
        "id": "number",
        "name": "string",
        "date": "string",
        "location": "string",
        "description": "string"
      }
    ]
    ```

- **Update Event**
  - **URL:** `/api/events/:id`
  - **Method:** `PUT`
  - **Controller:** [`updateEvent`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FeventController.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22updateEvent%22%5D "d:\Work\shaik\ems\controllers\eventController.js")
  - **Service:** [`updateEvent`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FeventService.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22updateEvent%22%5D "d:\Work\shaik\ems\services\eventService.js")
  - **Request Body:**
    ```json
    {
      "name": "string",
      "date": "string",
      "location": "string",
      "description": "string"
    }
    ```
  - **Response:**
    ```json
    {
      "id": "number",
      "name": "string",
      "date": "string",
      "location": "string",
      "description": "string"
    }
    ```

- **Delete Event**
  - **URL:** `/api/events/:id`
  - **Method:** `DELETE`
  - **Controller:** [`deleteEvent`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FeventController.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22deleteEvent%22%5D "d:\Work\shaik\ems\controllers\eventController.js")
  - **Service:** [`deleteEvent`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FeventService.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22deleteEvent%22%5D "d:\Work\shaik\ems\services\eventService.js")
  - **Response:** [`204 No Content`](command:_github.copilot.openSymbolFromReferences?%5B%22204%20No%20Content%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22d%3A%5C%5CWork%5C%5Cshaik%5C%5Cems%5C%5Ccontrollers%5C%5CeventController.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fd%253A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FeventController.js%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FeventController.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A23%2C%22character%22%3A23%7D%7D%5D%5D "Go to definition")

### Participant Routes

- **Register Participant**
  - **URL:** `/api/participants`
  - **Method:** `POST`
  - **Controller:** [`registerParticipant`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FparticipantController.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22registerParticipant%22%5D "d:\Work\shaik\ems\controllers\participantController.js")
  - **Service:** [`registerParticipant`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FparticipantService.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22registerParticipant%22%5D "d:\Work\shaik\ems\services\participantService.js")
  - **Request Body:**
    ```json
    {
      "eventId": "number",
      "name": "string",
      "email": "string"
    }
    ```
  - **Response:**
    ```json
    {
      "id": "number",
      "name": "string",
      "email": "string",
      "event": {
        "id": "number",
        "name": "string"
      }
    }
    ```

- **Update Participant**
  - **URL:** `/api/participants/:id`
  - **Method:** `PUT`
  - **Controller:** [`updateParticipant`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FparticipantController.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22updateParticipant%22%5D "d:\Work\shaik\ems\controllers\participantController.js")
  - **Service:** [`updateParticipant`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FparticipantService.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22updateParticipant%22%5D "d:\Work\shaik\ems\services\participantService.js")
  - **Request Body:**
    ```json
    {
      "name": "string",
      "email": "string"
    }
    ```
  - **Response:**
    ```json
    {
      "id": "number",
      "name": "string",
      "email": "string",
      "event": {
        "id": "number",
        "name": "string"
      }
    }
    ```

- **Unregister Participant**
  - **URL:** `/api/participants/:id`
  - **Method:** `DELETE`
  - **Controller:** [`unregisterParticipant`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FparticipantController.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22unregisterParticipant%22%5D "d:\Work\shaik\ems\controllers\participantController.js")
  - **Service:** [`unregisterParticipant`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FparticipantService.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22unregisterParticipant%22%5D "d:\Work\shaik\ems\services\participantService.js")
  - **Response:** [`204 No Content`](command:_github.copilot.openSymbolFromReferences?%5B%22204%20No%20Content%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22d%3A%5C%5CWork%5C%5Cshaik%5C%5Cems%5C%5Ccontrollers%5C%5CeventController.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fd%253A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FeventController.js%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FeventController.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A23%2C%22character%22%3A23%7D%7D%5D%5D "Go to definition")

- **Get Participant**
  - **URL:** `/api/participants/:id`
  - **Method:** `GET`
  - **Controller:** [`getParticipant`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FparticipantController.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22getParticipant%22%5D "d:\Work\shaik\ems\controllers\participantController.js")
  - **Service:** [`getParticipant`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FparticipantService.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22getParticipant%22%5D "d:\Work\shaik\ems\services\participantService.js")
  - **Response:**
    ```json
    {
      "id": "number",
      "name": "string",
      "email": "string",
      "event": {
        "id": "number",
        "name": "string"
      }
    }
    ```

- **Get Participants by Event**
  - **URL:** `/api/events/:eventId/participants`
  - **Method:** `GET`
  - **Controller:** [`getParticipantsByEvent`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FparticipantController.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22getParticipantsByEvent%22%5D "d:\Work\shaik\ems\controllers\participantController.js")
  - **Service:** [`getParticipantsByEvent`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FparticipantService.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22getParticipantsByEvent%22%5D "d:\Work\shaik\ems\services\participantService.js")
  - **Response:**
    ```json
    [
      {
        "id": "number",
        "name": "string",
        "email": "string",
        "event": {
          "id": "number",
          "name": "string"
        }
      }
    ]
    ```

### Session Routes

- **Create Session**
  - **URL:** `/api/sessions`
  - **Method:** `POST`
  - **Controller:** [`createSession`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FsessionController.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22createSession%22%5D "d:\Work\shaik\ems\controllers\sessionController.js")
  - **Service:** [`createSession`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FsessionService.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22createSession%22%5D "d:\Work\shaik\ems\services\sessionService.js")
  - **Request Body:**
    ```json
    {
      "eventId": "number",
      "title": "string",
      "description": "string",
      "startTime": "string",
      "endTime": "string"
    }
    ```
  - **Response:**
    ```json
    {
      "id": "number",
      "title": "string",
      "description": "string",
      "startTime": "string",
      "endTime": "string",
      "event": {
        "id": "number",
        "name": "string"
      }
    }
    ```

- **Update Session**
  - **URL:** `/api/sessions/:id`
  - **Method:** `PUT`
  - **Controller:** [`updateSession`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FsessionController.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22updateSession%22%5D "d:\Work\shaik\ems\controllers\sessionController.js")
  - **Service:** [`updateSession`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FsessionService.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22updateSession%22%5D "d:\Work\shaik\ems\services\sessionService.js")
  - **Request Body:**
    ```json
    {
      "title": "string",
      "description": "string",
      "startTime": "string",
      "endTime": "string"
    }
    ```
  - **Response:**
    ```json
    {
      "id": "number",
      "title": "string",
      "description": "string",
      "startTime": "string",
      "endTime": "string",
      "event": {
        "id": "number",
        "name": "string"
      }
    }
    ```

- **Delete Session**
  - **URL:** `/api/sessions/:id`
  - **Method:** `DELETE`
  - **Controller:** [`deleteSession`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FsessionController.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22deleteSession%22%5D "d:\Work\shaik\ems\controllers\sessionController.js")
  - **Service:** [`deleteSession`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FsessionService.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22deleteSession%22%5D "d:\Work\shaik\ems\services\sessionService.js")
  - **Response:** [`204 No Content`](command:_github.copilot.openSymbolFromReferences?%5B%22204%20No%20Content%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22d%3A%5C%5CWork%5C%5Cshaik%5C%5Cems%5C%5Ccontrollers%5C%5CeventController.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fd%253A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FeventController.js%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FeventController.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A23%2C%22character%22%3A23%7D%7D%5D%5D "Go to definition")

- **Get Session**
  - **URL:** `/api/sessions/:id`
  - **Method:** `GET`
  - **Controller:** [`getSession`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FsessionController.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22getSession%22%5D "d:\Work\shaik\ems\controllers\sessionController.js")
  - **Service:** [`getSession`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FsessionService.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22getSession%22%5D "d:\Work\shaik\ems\services\sessionService.js")
  - **Response:**
    ```json
    {
      "id": "number",
      "title": "string",
      "description": "string",
      "startTime": "string",
      "endTime": "string",
      "event": {
        "id": "number",
        "name": "string"
      }
    }
    ```

- **Get Sessions by Event**
  - **URL:** `/api/events/:eventId/sessions`
  - **Method:** `GET`
  - **Controller:** [`getSessionsByEvent`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FsessionController.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22getSessionsByEvent%22%5D "d:\Work\shaik\ems\controllers\sessionController.js")
  - **Service:** [`getSessionsByEvent`](command:_github.copilot.openSymbolInFile?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FsessionService.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22getSessionsByEvent%22%5D "d:\Work\shaik\ems\services\sessionService.js")
  - **Response:**
    ```json
    [
      {
        "id": "number",
        "title": "string",
        "description": "string",
        "startTime": "string",
        "endTime": "string",
        "event": {
          "id": "number",
          "name": "string"
        }
      }
    ]
    ```

## Data Types

### Event

- **id:** `number`
- **name:** `string`
- **date:** `string`
- **location:** `string`
- **description:** `string`

### Participant

- **id:** `number`
- **name:** `string`
- **email:** `string`
- **event:** [`Event`](command:_github.copilot.openSymbolFromReferences?%5B%22Event%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22d%3A%5C%5CWork%5C%5Cshaik%5C%5Cems%5C%5Ccontrollers%5C%5CeventController.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fd%253A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FeventController.js%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FeventController.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A9%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22d%3A%5C%5CWork%5C%5Cshaik%5C%5Cems%5C%5Cservices%5C%5CeventService.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fd%253A%2FWork%2Fshaik%2Fems%2Fservices%2FeventService.js%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FeventService.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A9%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22d%3A%5C%5CWork%5C%5Cshaik%5C%5Cems%5C%5Cservices%5C%5CparticipantService.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fd%253A%2FWork%2Fshaik%2Fems%2Fservices%2FparticipantService.js%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FparticipantService.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A2%2C%22character%22%3A9%7D%7D%5D%5D "Go to definition")

### Session

- **id:** `number`
- **title:** `string`
- **description:** `string`
- **startTime:** `string`
- **endTime:** `string`
- **event:** [`Event`](command:_github.copilot.openSymbolFromReferences?%5B%22Event%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22d%3A%5C%5CWork%5C%5Cshaik%5C%5Cems%5C%5Ccontrollers%5C%5CeventController.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fd%253A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FeventController.js%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FeventController.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A9%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22d%3A%5C%5CWork%5C%5Cshaik%5C%5Cems%5C%5Cservices%5C%5CeventService.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fd%253A%2FWork%2Fshaik%2Fems%2Fservices%2FeventService.js%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FeventService.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A1%2C%22character%22%3A9%7D%7D%2C%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22d%3A%5C%5CWork%5C%5Cshaik%5C%5Cems%5C%5Cservices%5C%5CparticipantService.js%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fd%253A%2FWork%2Fshaik%2Fems%2Fservices%2FparticipantService.js%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FparticipantService.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A2%2C%22character%22%3A9%7D%7D%5D%5D "Go to definition")

## Services

- **EventService:** [`services/eventService.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FeventService.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "d:\Work\shaik\ems\services\eventService.js")
- **ParticipantService:** [`services/participantService.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FparticipantService.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "d:\Work\shaik\ems\services\participantService.js")
- **SessionService:** [`services/sessionService.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FsessionService.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "d:\Work\shaik\ems\services\sessionService.js")
- **PDFService:** [`services/pdfService.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fservices%2FpdfService.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "d:\Work\shaik\ems\services\pdfService.js")

## Controllers

- **EventController:** [`controllers/eventController.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FeventController.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "d:\Work\shaik\ems\controllers\eventController.js")
- **ParticipantController:** [`controllers/participantController.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FparticipantController.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "d:\Work\shaik\ems\controllers\participantController.js")
- **SessionController:** [`controllers/sessionController.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fcontrollers%2FsessionController.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "d:\Work\shaik\ems\controllers\sessionController.js")

## Database Configuration

- **Database Configuration:** [`config/database.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fconfig%2Fdatabase.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "d:\Work\shaik\ems\config\database.js")

## Middleware

- **Validate Participant:** middlewares/validateParticipant.js

## Entities

- **Event:** [`entities/Event.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fentities%2FEvent.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "d:\Work\shaik\ems\entities\Event.js")
- **Participant:** [`entities/Participant.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fentities%2FParticipant.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "d:\Work\shaik\ems\entities\Participant.js")
- **Session:** [`entities/Session.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2Fentities%2FSession.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "d:\Work\shaik\ems\entities\Session.js")

## Getting Started

1. Clone the repository.
2. Install dependencies using `pnpm install`.
3. Configure the database in [`.env`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fd%3A%2FWork%2Fshaik%2Fems%2F.env%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "d:\Work\shaik\ems\.env") file.
4. Run the server using `pnpm start`.

## License

This project is licensed under the MIT License.# shaik-ems
