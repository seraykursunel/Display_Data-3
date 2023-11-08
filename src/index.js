import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

/**
 * Data
 * ------------------------
 */
const user = {
  name: "Namık Korona",
  location: "Las Vegas",
  foodType: "Kebap",
  age: 28,
  likes: "Sabahın erken saatlerine kadar kodlama",
  twitterUsername: "namıkrock",
  avatar:
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7mtwyMUAZv43YS3akEeF-rFHFVZQlS5p9ukfJUWceh7tJyWSog3s8EwQYnEFQtdOexZ9MS-fKnhy61nyZzn4f0z5GeL0s9FWBbl3EPshFr0pE5uXs0YDKOxDNyRHOouS9X7VMdC0jOj16C5NMFIAygcch3U43OckU-dg319GsWQlmfJOo9lOZEsEBNw/s16000/SSS.jpg"
};

/**
 * Verileri göstermemiz gereken React bileşenimiz
 * ------------------------
 */
function App() {
  return (
    <div className="App user-deets">
      <img src={user.avatar} alt="Namık Korona Avatar" />
      <section>
        <h1>{user.name}</h1>
        <p>Location</p>
        <h3>{user.location}</h3>
        <p>Eats</p>
        <h3>{user.foodType}</h3>
        <p>Age</p>
        <h3>{user.age}</h3>
        <p>Likes</p>
        <h3>{user.likes}</h3>
        <p>Twitter</p>
        <a>@{user.twitterUsername}</a>
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
