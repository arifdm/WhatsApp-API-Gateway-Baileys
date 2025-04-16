# WhatsApp API with Baileys and Express

This project uses [Baileys](https://github.com/WhiskeySockets/Baileys) to connect to WhatsApp and provides an API to send messages through WhatsApp. The code is set up to display a QR code in the terminal for initial authentication and to send messages via a REST API.

## Features

- Display and scan QR code in the terminal console.
- Send messages through a REST API.
- Handle automatic reconnection if the connection is closed due to reasons other than logout.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/aviantotiyo/WhatsApp-API-Gateway-Baileys.git
   cd <repository-directory>
   ```

2. **Install dependencies:**

   Make sure you have Node.js and npm installed. Then run:

   ```bash
   npm install
   ```

3. **Run the server:**

   ```bash
   node index.js
   ```

   This will start the Express server on port 3000 and attempt to connect to WhatsApp. A QR code will be displayed in the terminal for you to scan with your WhatsApp app.

## Using the API

Once the server is running and you have scanned the QR code, you can send messages through the API using tools like Postman or `curl`.

### Send Message Endpoint

- **URL:** `POST /send-message`
- **Content-Type:** `application/json`

**Request Body Example:**

```json
{
  "number": "621234567890",
  "message": "Hello, this is a test message!"
}
```

**Response Example:**

```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

**Postman Setup:**

1. Open Postman.
2. Set the request type to `POST`.
3. Enter the URL: `http://localhost:3000/send-message`.
4. Go to the `Body` tab, select `raw`, and set the type to `JSON`.
5. Enter the JSON data as shown in the example above.
6. Click `Send`.

## Notes

- If you encounter issues with authentication or need to rescan the QR code, you might need to delete the `auth_info_baileys` folder. This can be done with:

  ```bash
  rm -rf auth_info_baileys
  ```

  After deleting, restart the server to generate a new QR code.

- Make sure to replace `<repository-url>` and `<repository-directory>` with the appropriate values for your project.

## Troubleshooting

- **Connection Issues:** Ensure your internet connection is stable. If you see `Connection closed due to logout`, follow the note above to rescan the QR code.
- **Errors Sending Messages:** Check the logs for detailed error messages and ensure the number format is correct (`621234567890`) Please follow your country code number.

For further assistance, refer to the [Baileys documentation](https://github.com/WhiskeySockets/Baileys) or check the issues in the GitHub repository.
