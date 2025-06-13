const terminal = document.getElementById('terminal');

let commands = [
  "fsociety@root:~$ hello",
  "Welcome to fsociety.",
  "fsociety@root:~$ help",
  "Available commands: hello, about, clear"
];

let i = 0;

function typeCommand() {
  if (i < commands.length) {
    terminal.innerHTML += commands[i] + '\n';
    i++;
    setTimeout(typeCommand, 1000);
  }
}

typeCommand();
