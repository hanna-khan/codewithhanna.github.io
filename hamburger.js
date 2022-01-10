    // JS FOR HAMBURGER
    burger = document.querySelector('.burger')
    navbar = document.querySelector('.navbar')
    navlist = document.querySelector('.navlist')

    burger.addEventListener('click', () => {
        navlist.classList.toggle('visibility-class-resp');
        navbar.classList.toggle('height-nav-resp');


        // SMOOTH SCROLLING JS

        var scroll = new SmoothScroll('a[href*="#"]');

        //FORM SUBMITION JS
        var form = document.getElementById("my-form");

        async function handleSubmit(event) {
            event.preventDefault();
            var status = document.getElementById("status");
            var data = new FormData(event.target);
            fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                status.innerHTML = "Thanks for your submission!";
                form.reset()
            }).catch(error => {
                status.innerHTML = "Oops! There was a problem submitting your form"
            });
        }
        form.addEventListener("submit", handleSubmit)

    })