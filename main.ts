// Adventure Game in MakeCode

let playerHealth = 100;
let playerInventory: string[] = [];
let currentRoom = "start";

function startGame() {
    basic.showString("Welcome to the Adventure Game!");
    basic.showString("Press A to begin");
}

function updateDisplay(message: string) {
    basic.clearScreen();
    basic.showString(message);
}

function showOptions(options: string[]) {
    for (let i = 0; i < options.length; i++) {
        basic.showString(options[i]);
        basic.pause(500);
        basic.clearScreen();
    }
}

function exploreRoom() {
    updateDisplay("You are in " + currentRoom);
    showOptions(["1. Look around", "2. Go to another room", "3. Check inventory"]);

    input.onButtonPressed(Button.A, function () {
        basic.clearScreen();
        exploreOptions();
    });
}

function exploreOptions() {
    switch (currentRoom) {
        case "start":
            startRoomOptions();
            break;
        case "forest":
            forestRoomOptions();
            break;
        // Add more cases for other rooms as needed
    }
}

function startRoomOptions() {
    showOptions(["1. Enter the forest", "2. Quit"]);

    input.onButtonPressed(Button.A, function () {
        basic.clearScreen();
        currentRoom = "forest";
        exploreRoom();
    });
}

function forestRoomOptions() {
    showOptions(["1. Explore deeper into the forest", "2. Go back to the starting area"]);

    input.onButtonPressed(Button.A, function () {
        basic.clearScreen();
        // Add logic for different actions in the forest
        // Update playerHealth, add items to inventory, etc.
        exploreRoom();
    });
}

// Game loop
startGame();

input.onButtonPressed(Button.A, function () {
    basic.clearScreen();
    exploreRoom();
});
