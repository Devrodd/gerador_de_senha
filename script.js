let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let passwordElement = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*()_+";
let novaSenha = "";

sizePassword.textContent = sliderElement.value;

// Atualiza o valor do tamanho da senha dinamicamente
sliderElement.addEventListener("input", () => {
    sizePassword.textContent = sliderElement.value;
});

function generatePassword() {
    let pass = "";
    let passwordLength = parseInt(sliderElement.value); // Obtém o valor do slider
    let n = charset.length;

    for (let i = 0; i < passwordLength; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    novaSenha = pass; // Atualiza a variável para poder copiar depois
    containerPassword.classList.remove("hide");
    passwordElement.textContent = pass;
}

function copyPassword() {
    if (novaSenha) {
        navigator.clipboard.writeText(novaSenha).then(() => {
            alert("Senha copiada com sucesso!");
        }).catch(err => {
            console.error("Erro ao copiar senha: ", err);
        });
    }
}
