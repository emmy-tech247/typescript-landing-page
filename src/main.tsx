import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


const form = document.getElementById("contactForm") as HTMLFormElement;

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = (
        document.getElementById("name") as HTMLInputElement
    ).value;

    const email = (
        document.getElementById("email") as HTMLInputElement
    ).value;

    const message = (
        document.getElementById("message") as HTMLTextAreaElement
    ).value;

    if (!name || !email || !message) {

        alert("Please fill in all fields.");

        return;

    }

    alert(
        `Thank you ${name}! Your message has been received.`
    );

    form.reset();

});