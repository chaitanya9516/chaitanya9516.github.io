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

let input = document.querySelector(".terminal_input_command");

input.addEventListener("keydown", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        let terminal_val = input.value;
        //alert(terminal_val);
        if (terminal_val === "help") {
            let output;

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

            let terminal = document.getElementById("terminal");
            let generation_p = document.createElement('p');
            generation_p.classList.add('terminal_row');
            generation_p.classList.add('terminal_log');
            generation_p.innerHTML = output;
            terminal.appendChild(generation_p);

            let generate_div = document.createElement('div');
            generate_div.classList.add('terminal_row');
            generate_div.classList.add('terminal_log');



            let generation_p2 = document.createElement('p');
            generation_p2.classList.add('terminal_row');
            generation_p2.classList.add('terminal_log');

            let generate_span = document.createElement('span');
            generate_span.innerHTML = 'ask@Chay:~$ ';
            generate_span.style.color = 'rgb(100, 255, 218)';
            terminal.appendChild(generate_span);

            let generate_input = document.createElement('input');
            generate_input.classList.add('terminal_input_command');
            generate_input.style.color = '#c1c8ec';
            // generate_input.setAttribute('onclick', );
            generation_p2.appendChild(generate_span);
            generation_p2.appendChild(generate_input);
            terminal.appendChild(generation_p2);



        }
    }
});