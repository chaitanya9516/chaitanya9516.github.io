var modal = document.getElementById("myModal");
var input = document.querySelector(".terminal_input_command");
const terminal = document.querySelector(".terminal");

function show_modal() {
    modal.style.display = "block";
}

function shut() {

    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
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
    lastInputElement.innerHTML = `<span class="terminal_user">ask@justin:~$</span><span class="terminal_log">${local_terminal_data}</span>`
    terminal.insertBefore(outputElement, input.parentNode);
    terminal.insertBefore(lastInputElement, outputElement);

}


input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        var terminal_val = input.value;
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
            <li>articles ......... Recent articles</li>
            <li>projects ......... My pinned projects on GitHub</li>
            </ul><span>Besides, there are some hidden feature, try to find it out!</span>`

        } else if (terminal_val === "about") {
            output = "Hello, I' m Justin Maximillian Kimlim from Indonesia, a 15 y.o.junior high school student with hobbies of computer science, programming and science fiction.I enjoy making projects or even website clone.";
        }

        build_elements(output);
        input.value = "";
    }
});