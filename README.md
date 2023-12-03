# **AI Code Converter**

![Screensot of the app](https://github.com/Louai-Zokerburg/AI-Code-Converter/blob/dev/project-screenshot-img.png?raw=true)

## **Live Demo**

Check out the live demo **[here](https://ai-code-converter-client.vercel.app/)**

## **Description**

AI Code Converter is a MERN (MongoDB, Express.js, React.js, Node.js) stack web application that simplifies the translation of code snippets from one programming language to another. By integrating with the ChatGPT API, this tool provides developers with an effortless way to convert code snippets without manual intervention.

## **Tech Stack**

- Frontend**:** **React.js**
- Styling: **Tailwindcss**
- State Management**:** **Zustand**
- Backend**:** **Node.js, Express.js**
- Database**:** **MongoDB**
- API**:** **ChatGPT API**

## **Features**

- 💪🏻 **A Solid & robust authentication system**: Using the JWT Tokens.
- 🧑🏻‍💻 **Language Agnostic:** Supports translation between a wide range of programming languages..
- ✨ **User-Friendly Interface:** Intuitive web interface for easy code input and output.
- 🌓 **Multi Theme**: It provides Dark and Light theme.
- 🤖 **ChatGPT Integration:** Utilizes the ChatGPT API for accurate and context-aware code translations.
- 🤩 **History Tracking:** Keeps a record of past translations for reference.

## **How to Install**

Follow these steps to set up AI Code Converter on your local machine.

### **Prerequisites**

- Node.js and npm installed

### **Installation**

1. Clone the repository:
    
    ```bash
    git clone https://github.com/Louai-Zokerburg/AI-Code-Converter.git
    ```
    
2. Navigate to the project directory:
    
    ```bash
    cd AI-Code-Converter
    ```
    
3. Install server dependencies:
    
    ```bash
    npm install
    ```
    
4. Navigate to the client directory and install client dependencies:
    
    ```bash
    cd client
    npm install
    ```
    
5. Create a **`.env`** file in the root directory and add the following:
    
    ```
    MONGO_URI=
    JWT_SECRET=
    JWT_LIFETIME=
    OPENAI_API_KE=
    ```
    
    Replace **`your_chatgpt_api_key`** with your actual ChatGPT API key.
    
6. Run the server:
    
    ```bash
    npm start
    ```
    
7. Navigate the client and start the dev server
    
    ```bash
    cd client
    npm run dev
    ```
    
8. Access the application in your browser at **`http://localhost:5173`**.

## **Usage**

1. Signup or login to the app
2. Select the source programming language.
3. Input your code snippet in the designated code editor
4. Choose the target programming language.
5. Click the "Convert" button to initiate the translation.
6. View the translated code on the results page.
7. Access your translation history on the sidebar, allowing you to revisit previous translations.