import './reset.css';

window.addEventListener("DOMContentLoaded", (e) => {
    const app = document.getElementById("app");
    app.innerText = "webpack settings";

    document.body.append(app);
});