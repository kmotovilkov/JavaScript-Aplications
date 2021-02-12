const apiKey = "AIzaSyB_Dpl6Z1XPnM4PEzRI_bNCX1GxNuSjl9c";

const authService = {
    async login(email, password) {

        let response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email, password,
            })
        });
        let data = await response.json();

        localStorage.setItem("auth", JSON.stringify(data));

        return data;

    },
    getData() {
        try {
            let data = JSON.parse(localStorage.getItem("auth"));
            return {
                isAuthenticated: Boolean(data.idToken),
                email: data.email
            };


        } catch (error) {
            return {
                isAuthenticated: false,
                email: ""
            };
        }
    },
    logout() {
        localStorage.setItem("auth", "");
    }
};