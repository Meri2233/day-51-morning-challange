let notificationMsgEl = document.querySelector(".nmessage");
let messageBoxEl = document.querySelector(".notificationmessage")

notificationMsgEl.addEventListener('click', (e) => {
    messageBoxEl.style.display = "flex";
});

function display() {
    messageBoxEl.style.display = "flex";
}

function remove() {
    setTimeout(() => {
        messageBoxEl.style.display = "none";
    }, 2000)
}

messageBoxEl.addEventListener("mouseover", display);
messageBoxEl.addEventListener("mouseout", remove);