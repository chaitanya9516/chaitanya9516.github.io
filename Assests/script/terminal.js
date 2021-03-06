var modal = document.getElementById("myModal");
var input = document.querySelector(".terminal_input_command");
const terminal = document.querySelector(".terminal");
var local_terminal_data = localStorage.getItem("input_val");

function show_modal() {
    modal.style.display = "block";
}

function shut() {

    modal.style.display = "none";
}

const Remove_inputs = () => {
    const Log = terminal.querySelectorAll(".terminal_row");
    Log.forEach(log_data => {
        if (!log_data.contains(input)) {
            terminal.removeChild(log_data)
        }
    })
}

const EXIT = () => {
    Remove_inputs();
    input.removeEventListener("change", input)
    modal.style.display = "none";
}

modal.querySelector(".modal_close_btn").addEventListener("click", () => {
    EXIT()
})


window.onclick = function(event) {
    if (event.target == modal) {
        Remove_inputs();
        modal.style.display = "none";
        Remove_inputs();
    }
}

function build_elements(output_val) {

    let outputElement = document.createElement("p");
    outputElement.classList.add('terminal_row');
    outputElement.classList.add('terminal_log');
    outputElement.innerHTML = output_val;
    let lastInputElement = document.createElement('p');
    lastInputElement.classList.add('terminal_row');
    let local_terminal_data = localStorage.getItem("input_val");
    lastInputElement.innerHTML = `<span class="terminal_user">ask@chay:~$</span><span class="terminal_log">${local_terminal_data}</span>`
    terminal.insertBefore(outputElement, input.parentNode);
    terminal.insertBefore(lastInputElement, outputElement);

}


input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        var x = input.value;
        let terminal_val = x.toLowerCase();
        localStorage.setItem("input_val", terminal_val);
        var output;
        //alert(terminal_val);
        if (terminal_val === "help") {

            output = `<span>Some available commands are:</span><ul>
            <li>about ............ About me</li>
            <li>clear ............ Clear terminal log</li>
            <li>exit ............. Exit terminal session</li>
            <li>help ............. Showing available commands</li>
            <li>links ............ Social media links</li>
            <li>theme ............ Change theme of terminal</li>
            <li>projects ......... My pinned projects on GitHub</li>
            </ul><span>Besides, there are some hidden feature, try to find it out!</span>`

        } else if (terminal_val === "links") {
            output = `<ul>
                <li><a href="https://instagram.com/chaitanya9516" target="_blank" rel="noopener">Instagram</a></li>
                <li><a href="https://github.com/chaitanya9516" target="_blank" rel="noopener">GitHub</a></li>
                <li><a href="mailto:chaitanya9516@gmail.com" target="_blank" rel="noopener">Email</a></li>
                </ul>`
        } else if (terminal_val === "about") {
            output = "An experienced Developing enthusiast based in Hyderabad , India with an obsession of designing and building magnificent websites by connecting the various dots in between...";
        } else if (terminal_val === "github") {
            let github = window.open('https://github.com/chaitanya9516', "_blank");
            github.focus()
            output = ""
        } else if (terminal_val === "https://chaiitanya.in" || terminal_val === "chaiitanya.invv" || terminal_val === "http://chaiitanya.in") {
            output = `This website is designed and built by chaitanya using HTML, CSS and Vanilla JavaScript and was inspired by several websites over the internet. Find out the repo of this website <a href = "https://github.com/chaitanya9516/chaitanya9516.github.io" target="_blank" rel="noopener">here.</a>`
        } else if (terminal_val === "hello" || terminal_val === "hi") {
            window.open('mailto:chaitanya9516@gmail.com?Subject=Hello');
            output = `Say hello to me <a href="mailto:chaitanya9516@gmail.com?Subject=Hello">here!</a>`;
        } else if (terminal_val === "refresh") {
            location.reload()
            output = ""
        } else if (terminal_val === "whoami") {
            output = "You are human when you type this command :)"
        } else if (terminal_val === "date") {
            output = new Date()
        } else if (terminal_val === "projects") {
            output = `<ul>
            <li><a href="https://github.com/chaitanya9516/protecttext" target="_blank" rel="noopener">ProtectText</a></li>
            <li><a href="https://github.com/chaitanya9516/IPLogger" target="_blank" rel="noopener">Cutby</a></li>
            <li><a href="https://github.com/chaitanya9516/selenium-c-bot" target="_blank" rel="noopener">Lazyscript</a></li>
            <li><a href="https://github.com/chaitanya9516/Password-Generator-using-js" target="_blank" rel="noopener">PasswordGenerator</a></li>
            </ul>`
        } else {
            output = `${terminal_val} is not recognized as language code.`
        }


        build_elements(output);

        if (terminal_val === "clear" || input === "cls") {
            Remove_inputs();
        }
        if (terminal_val === "exit") {
            EXIT();

        }


        input.value = "";
    }
});