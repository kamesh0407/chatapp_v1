<div align="center">
   <centre><h1>🚀 ChatApp </centre><br />
      </div>

Welcome to **ChatApp**, a modern, real-time chat application built with ReactJS for the front end and Node.js for the back end. This app allows users to seamlessly log in and start chatting with others instantly.

## 📸 Preview

![login ](https://github.com/kamesh0407/chatapp_v1/assets/108885723/f1c80a1a-04d4-4aa9-abff-df1a343f3494)


## 🛠 Technologies Used

- **Frontend:** ReactJS
- **Backend:** Node.js, Express, CORS, Axios
- **Chat Engine:** [ChatEngine](https://chatengine.io)
- **Libraries:** react-chat-engine-advanced

## ✨ Features

- 🌟 **User Login**: Users can simply log in by entering their names.
- 💬 **Real-Time Messaging**: Messages are shared instantly with other users.
- 🔒 **Secure Storage**: All messages are stored securely in the ChatEngine server or database.

## 📦 Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/kamesh0407/chatapp_v1.git
    cd chatapp_v1
    ```

2. **Install dependencies for the frontend:**
    ```bash
    npm create vite@latest
    √ Project name: ... frontend
   √ Select a framework: » React
   √ Select a variant: » JavaScript
    cd frontend
    npm install
    ```

3. **Install dependencies for the backend:**
    ```bash
    cd ../backend
    npm install express cors axios
    npm --save-dev nodemon
    npm install
    ```

## 🚀 Usage

1. **Start the backend server:**
    ```bash
    cd backend
    npm start
    ```

2. **Start the frontend development server:**
    ```bash
    cd ../frontend
    npm start
    ```

3. **Open your browser and navigate to:**
    ```
     http://localhost:5173/
    ```

## 📝 Code Snippets

### React ChatEngine Integration

```jsx
import React from 'react';
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatPage = () => {
  const chatProps = useMultiChatLogic('YOUR_PROJECT_ID', 'USERNAME', 'USER_SECRET');

  return (
    <div>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100vh' }} />
    </div>
  );
};

export default ChatPage;

```
<div align="center">
   <centre><h1> 📺 Video Demonstration </centre><br />
      </div>

https://github.com/kamesh0407/chatapp_v1/assets/108885723/8b022f1d-d10b-40ee-b2d7-89f19744163c




