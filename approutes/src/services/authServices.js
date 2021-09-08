const ACESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwicm9sZSI6InN0dWRlbnQiLCJpYXQiOjE1MTYyMzkwMjJ9.0vrXzaPDApVSrC4cKj96uX1-gQ5Vs6k0daV0iegWpcU";

export function login(email, password){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (email === "s@s" && password == "123"){
                resolve({acessToken: ACESS_TOKEN})
            } else {
                reject(new Error("Email ou senha inválidos!"))
            }
        })
    },100)
}