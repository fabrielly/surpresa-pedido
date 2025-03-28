
document.getElementById("revealButton").addEventListener("click", function() {
    document.getElementById("proposal").classList.remove("hidden");
});

function responder(opcao) {
    if (opcao === "sim") {
        alert("Parabéns! Que vocês sejam muito felizes juntos! 💍🎉");
    } else {
        alert("Talvez na próxima... 😢");
    }
}
