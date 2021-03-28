var modal = document.getElementById("myModal");

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


    var terminal = document.getElementById("terminal");
    let generation_p = document.createElement('p');
    generation_p.classList.add('terminal_row');
    generation_p.classList.add('terminal_log');
    generation_p.innerHTML = output_val;
    terminal.appendChild(generation_p);


    let generation_p2 = document.createElement('p');
    generation_p2.classList.add('terminal_row');
    generation_p2.classList.add('terminal_log');

    let generation_span = document.createElement('span');
    generation_span.innerHTML = 'ask@Chay:~$ ';
    generation_span.classList.add('terminal_user');
    //terminal.appendChild(generation_span);

    let generation_input = document.createElement('input');
    generation_input.setAttribute('type', 'text');
    generation_input.setAttribute('autocomplete', 'off');
    generation_input.setAttribute('spellcheck', 'false');
    generation_input.setAttribute('autocorrect', 'off');
    generation_input.classList.add('terminal_input_command');

    generation_p2.appendChild(generation_span);
    generation_p2.appendChild(generation_input);
    terminal.insertBefore(generation_p2, terminal.childNodes[0]);

}

var input = document.querySelector(".terminal_input_command");

input.addEventListener("keydown", function(event) {

    if (event.keyCode === 13) {
        let terminal_val = input.value;
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
    }
});