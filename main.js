const body = document.querySelector("body")

const mockData = [
    {
        dataKey: "clear",
        textContent: "C",
    }, 
    {
        dataKey: "-",
        textContent: "-",
    }, 
    {
        dataKey: "/",
        textContent: "/",
    }, 
    {
        dataKey: "*",
        textContent: "x",
    }, 
    {
        dataKey: "7",
        textContent: "7",
    }, 
    {
        dataKey: "8",
        textContent: "8",
    }, 
    {
        dataKey: "9",
        textContent: "9",
    }, 
    {
        dataKey: "-",
        textContent: "-",
    }, 
    {
        dataKey: "4",
        textContent: "4",
    }, 
    {
        dataKey: "5",
        textContent: "5",
    }, 
    {
        dataKey: "6",
        textContent: "6",
    }, 
    {
        dataKey: "+",
        textContent: "+",
    }, 
    {
        dataKey: "1",
        textContent: "1",
    }, 
    {
        dataKey: "2",
        textContent: "2",
    }, 
    {
        dataKey: "3",
        textContent: "3",
    },
    {
        dataKey: "equal",
        textContent: "=",
        // class: ["equal", "tall"]
        class: "equal tall"
    }, 
    {
        dataKey: "0",
        textContent: "0",
        class: "wide shift"
    }, 
    {
        dataKey: ".",
        textContent: ".",
        class: "shift"
    }
]

const initialize = () => {
    const calculator = document.createElement("div")
    calculator.classList.add("calculator")

    const screen = document.createElement("div")
    screen.id = "screen"
    screen.classList.add("screen")
    calculator.appendChild(screen)
    
    const buttonsList = document.createElement("ul")
    buttonsList.id = "buttons"
    buttonsList.classList.add("buttons")
    calculator.appendChild(buttonsList)

    body.appendChild(calculator)

    createBtnList()

} 

const createBtnList = () => {  

    const buttonsList = document.querySelector("#buttons")
    
    mockData.forEach(element => {
        const li = document.createElement("li")
        const a = document.createElement("a")
        a.href = "#"
        a.dataset.key = element.dataKey
        a.textContent = element.textContent
        // a.classList.add(...element.class);
        a.className = element.class
        a.addEventListener("click", evenBtnCalculadora)
        li.appendChild(a)
        buttonsList.appendChild(li)
    });
}

let operation = "";

const evenBtnCalculadora = (event) => {

    const screen = document.getElementById("screen")
    const element = event.target.dataset.key;

    if (element === "clear") {
        screen.textContent = "";
        screen.style.fontSize = "3rem";
        operation = "";
    } else if (element === "equal") {
        try {
            const result = eval(operation);
            screen.textContent = result;
            operation = result.toString();
            screen.style.fontSize = "3rem";
        } catch (error) {
            screen.textContent = error;
            screen.style.fontSize = "1rem";
        }
    } else {
        operation += element === "x" ? "*" : element;
        screen.textContent = operation;
        screen.style.fontSize = "3rem";
    }
    
}

document.addEventListener("DOMContentLoaded", () => initialize())
