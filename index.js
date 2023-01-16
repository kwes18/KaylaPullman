window.onload = init();

function init() {
const contact = document.getElementById('contact');

contact.addEventListener('submit', (event) => {
    event.preventDefault();
    let mail = new FormData(contact);

    sendMail(mail);
    
})

const sendMail = (mail) => {
    fetch("https://kwes18.github.io/contact.html/send", {
      method: "post",
      body: mail,  
    }).then((response) => {
        return response.json();
    });
    

};

}