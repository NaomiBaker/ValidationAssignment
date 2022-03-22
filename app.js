function login() {
    // main input
    let inputEle = document.createElement("Input");
    inputEle.placeholder = "User Name...";

    //input with password
    let inputElePass = document.createElement("input");
    inputElePass.placeholder = "Password...";
    inputElePass.setAttribute("type", "password");

    //message ele
    let messageEle = document.createElement("h3");

    // button
    let button = document.createElement("button");
    button.innerHTML = "Log In";

    //checks for correct values
    button.addEventListener("click", function () {
        if (
            inputEle.value !== "coolStudent123" ||
            inputElePass.value !== "coolStudent123"
        ) {
            messageEle.innerHTML = "Incorrect User and/or Password";
        } else {
            // reset content of body
            document.body.innerHTML = "";

            // append navigation and homepage, since
            // username and password were correct
            navigation();
            homepage();
        }
    });

    // append all elements to DOM
    document.body.appendChild(inputEle);
    document.body.appendChild(inputElePass);
    document.body.appendChild(messageEle);
    document.body.appendChild(button);
}

const pages = [
    {
        page: "Home",
        navigate: homepage
    },
    {
        page: "About",
        navigate: about
    },
    {
        page: "Interact",
        navigate: interact
    }
];

function navButton(pg, pr, nv) {
    let button = document.createElement("button");
    button.innerHTML = pg;
    button.addEventListener("click", function () {
        document.body.querySelector(".wrapper").innerHTML = "";
        nv();
    });
    pr.appendChild(button);
}

function navigation() {
    let nav = document.createElement("nav");
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    nav.style.height = "80px";
    nav.style.backgroundColor = "blue";
    let obj;
    for (obj of pages) {
        navButton(obj.page, nav, obj.navigate);
    }

    document.body.appendChild(nav);
    document.body.appendChild(wrapper);
}

function homepage() {
    let home = document.createElement("div");
    home.innerHTML = "Home Page";
    document.body.querySelector(".wrapper").appendChild(home);
}

function about() {
    let about = document.createElement("div");
    about.innerHTML = "About Page";
    document.body.querySelector(".wrapper").appendChild(about);
}

function interact() {
    let interact = document.createElement("div");
    interact.innerHTML = "Interact Page";


//main input
    let list= ["Submit Note"];

    let inputEle = document.createElement("Input");
    inputEle.placeholder= "Text...";

    let list2 = [""];
    let inputEle2 = document.createElement("Input");
    inputEle2.placeholder= "Importance..."


//message ele
    let messageEle = document.createElement("h3");
    let messageEle2 = document.createElement("h3");


// button
    let button = document.createElement("button");
    button.innerHTML= "Submit";

    button.addEventListener("click", function(){


        list.push(inputEle.value)
        list2.push(inputEle2.value)
        renderList();

    })


//list element
    let listEle = document.createElement("div");
    let listEle2 = document.createElement("div");


//render the list
    function renderList() {

        listEle.innerHTML = "";
        listEle2.innerHTML = "";

        {

        }


        for (let i = 0; i < list.length; i++) {
            let ele = document.createElement("div");
            ele.innerHTML = list[i];
            listEle.appendChild(ele)
        }
        for (let i = 0; i < list2.length; i++) {
            let ele2 = document.createElement("div");
            ele2.innerHTML = list2[i];
            listEle2.appendChild(ele2)
        }

    }


//append input
    document.body.appendChild(inputEle);
    document.body.appendChild(inputEle2);
    document.body.appendChild(messageEle);
    document.body.appendChild(messageEle2);
    document.body.appendChild(button);
    document.body.appendChild(listEle);
    document.body.appendChild(listEle2);

    renderList();

}


login();
