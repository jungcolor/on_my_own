import './reset.css';

window.addEventListener("DOMContentLoaded", (e) => {
    const app = document.getElementById("app");
    app.innerText = "webpack settings";
    console.log(document.body);

    document.body.append(app);
});