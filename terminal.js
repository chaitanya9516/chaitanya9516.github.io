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
            generation_p.classList.add('terminal_colour');
            generation_p.innerHTML = output;
            terminal.appendChild(generation_p);
            //let terminal2 = document.getElementsByClassName("ter");




            // terminal.innerHTML = data;
            // let div_ter = document.createElement("div");
            // div_ter.setAttribute("class", div_ter);
            // div_ter.innerHTML = generation_p;



        }
    }
});