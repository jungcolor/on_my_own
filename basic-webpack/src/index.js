import './reset.css';

window.addEventListener("DOMContentLoaded", (e) => {
    const app = document.getElementById("app");
    app.innerText = "webpack settings";
    // console.log(process.env.ENV_TEST);

    document.body.append(app);
});