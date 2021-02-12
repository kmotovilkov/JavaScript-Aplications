const routes = {
    "home": "home-template",
    "login": "login-form-template",
    "register": "register-form-template",
};
const router = (path) => {
    let app = document.getElementById("app");
    switch (path) {
        case "logout":
            authService.logout();
            return navigate("home");
        default:
            break;
    }

    let template = Handlebars.compile(document.getElementById(routes[path]).innerHTML);

    let authData = authService.getData();
    app.innerHTML = template(authData);
};

const navigate = (path) => {
    history.pushState({}, "", path);
    router(path);
}
