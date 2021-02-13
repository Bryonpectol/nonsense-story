let btn = document.getElementById("btn");

let MainStory = document.getElementById("mainStory");

let Mainp = document.getElementById("mainP");

function tellStory() {


    mainP.textContent = "";

    let text1 = document.getElementById("text1").value;
    let text2 = document.getElementById("text2").value;
    let text3 = document.getElementById("text3").value;
    let nameText = document.getElementById("name").value;

    let nounArray = text1.toLowerCase();
    let adjArray = text2.toLowerCase();
    let verbArray = text3.toLowerCase();

    console.log(nounArray + " : " + adjArray + " : " + verbArray);

    let nounSplit = nounArray.split(", ");
    let adjSplit = adjArray.split(", ");
    let verbSplit = verbArray.split(", ");

    console.log(nounSplit);

    if(nameText = document.getElementById("name").value == "") {
        nameText = "John"
    }
    else {
        nameText = document.getElementById("name").value;
    }

    if(text1 = document.getElementById("text1").value == "") {
        alert("Please enter 3 nouns in the box below.")
    }
    else {
        text1 = document.getElementById("text1").value;
    }

    if(text2 = document.getElementById("text2").value == "") {
        alert("Please enter 3 adjectives in the box below.")
    }
    else {
        text2 = document.getElementById("text2").value;
    }

    if(text3 = document.getElementById("text3").value == "") {
        alert("Please enter 3 verbs in the box below.")
    }
    else {
        text3 = document.getElementById("text3").value;
    }

    mainP.textContent = `Once upon a time, there was a ${adjSplit[0]} ${nounSplit[0]} named ${nameText}. This ${nounSplit[0]} loved to ${verbSplit[0]}. ${nameText} had a friend ${nounSplit[1]}. They were best friends and would ${verbSplit[1]} together. If something were ever wrong with ${nameText} or the ${nounSplit[1]}, the other would help them by ${verbSplit[2]}ing for them. One day, while the ${nounSplit[1]} was ${verbSplit[2]}ing for ${nameText}, it saw a ${nounSplit[2]}. The ${nounSplit[1]} started ${verbSplit[0]}ing over to the ${nounSplit[2]} and said, "Who are you?" The ${nounSplit[2]} replied, "I am a ${adjSplit[1]} ${nounSplit[2]}, and I have come to steal the ${adjSplit[2]}ness away from you!" Sadly, ${nameText} never saw the ${nounSplit[1]} again...`;
}