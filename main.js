const body = document.querySelector("body")

const mockData = [
    {
        dataKey: "clear",
        textContent: "C",
        class: []
    }, 
    {
        dataKey: "-",
        textContent: "-",
        class: []
    }, 
    {
        dataKey: "/",
        textContent: "/",
        class: []
    }, 
    {
        dataKey: "*",
        textContent: "x",
        class: []
    }, 
    {
        dataKey: "7",
        textContent: "7",
        class: []
    }, 
    {
        dataKey: "8",
        textContent: "8",
        class: []
    }, 
    {
        dataKey: "9",
        textContent: "9",
        class: []
    }, 
    {
        dataKey: "-",
        textContent: "-",
        class: []
    }, 
    {
        dataKey: "4",
        textContent: "4",
        class: []
    }, 
    {
        dataKey: "5",
        textContent: "5",
        class: []
    }, 
    {
        dataKey: "6",
        textContent: "6",
        class: []
    }, 
    {
        dataKey: "+",
        textContent: "+",
        class: []
    }, 
    {
        dataKey: "1",
        textContent: "1",
        class: []
    }, 
    {
        dataKey: "2",
        textContent: "2",
        class: []
    }, 
    {
        dataKey: "3",
        textContent: "3",
        class: []
    },
    {
        dataKey: "equal",
        textContent: "=",
        class: ["equal", "tall"]
    }, 
    {
        dataKey: "0",
        textContent: "0",
        class: ["wide", "shift"]
    }, 
    {
        dataKey: ".",
        textContent: ".",
        class: ["shift"]
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

    createBtnList(buttonsList)

    body.appendChild(calculator)
} 

const createBtnList = (buttonsList) => {  
    
    mockData.forEach(element => {
        const li = document.createElement("li")
        const a = document.createElement("a")
        a.href = "#"
        a.dataset.key = element.dataKey
        a.textContent = element.textContent
        a.classList.add(...element.class);
        li.appendChild(a)
        buttonsList.appendChild(li)
    });
}

document.addEventListener("DOMContentLoaded", () => initialize())
