const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        navList.classList.toggle("open");
    })
}

// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
    closePopup.addEventListener("click", () => {
        popup.classList.add("hide-popup");
    })

    window.addEventListener("load", () => {
        setTimeout(() => {
            popup.classList.remove("hide-popup");
        }, 1000);
    });
}

// Contact form handling with VueJS
var row = new Vue({
    el: '#row',
    data: {
        title: 'EXCELLENT SUPPORT',
        form: {
            email: ""
        }
    },

    methods: {
        SendMail() {
            axios
                .post("https://getform.io/f/ea28d0b0-34c8-42d3-bd4d-b46505674eb8", {
                    email: this.form.email,
                })
                .then(response => {
                    console.log(response);
                    alert("Your email has been sent");
                    this.$refs.myform.resetFields();
                })
                .catch(error => console.log(error))
        }
    }
})