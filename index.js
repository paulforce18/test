function about(){
    document.querySelector(".root").removeChild(document.querySelector(".cheatSheet"));
    document.querySelector(".name > h1").innerHTML = "John Paul C. Alimango"
}
function gitSheet(){
    cheatSheetHandler(cheatSheet);
    document.querySelector(".name > h1").innerHTML = "Git"
}


const cheatSheet = {
    "Creating Snapshot":[
    {
        title: "Initializing a repository",
        commands: [
            "git init"
        ]
    },
    {
        title: "Staging files",
        commands: [
            "git add file1.js","# Stages a single file", 
            "git add file1.js file2.js","# Stages multiple files",
            "git add *.js","# Stages with a pattern",
            "git add .","# Stages the current directory and all its content"
        ]
    },
    {
        title: "Viewing the status",
        commands: [
            "git status","# Full status",
            "git status -s","# Short status",
        ]
    },
    {
        title: "Committing the staged files",
        commands: [
            "git commit -m “Message”","# Commits with a one-line message",
            "git commit","# Opens the default editor to type a long message",
        ]
    },
    {
        title: "Skipping the staging area",
        commands: [
            "git commit -am “Message”"
        ]
    },
    {
        title: "Removing files",
        commands: [
            "git rm file1.js","# Removes from working directory and staging area",
            "git rm --cached file1.js","# Removes from staging area only"
        ]
    },
    {
        title: "Renaming or moving files",
        commands: [
            "git mv file1.js file1.txt"
        ]
    },
    {
        title: "Viewing the staged/unstaged changes",
        commands: [
            "git diff","# Shows unstaged changes",
            "git diff --staged","# Shows staged changes", 
            "git diff --cached","# Same as the above"
        ]
    },
    {
        title: "Viewing the history",
        commands: [
            "git log" ,"# Full history", 
            "git log --oneline" ,"# Summary", 
            "git log --reverse" ,"# Lists the commits from the oldest to the newest"
        ]
    },
    ]
}

const cheatSheetHandler = (sheet) => {
    const div = document.createElement("div");
    div.className = "cheatSheet";
    let content = ``;
    const keys = Object.keys(sheet);
    for(let i=0; i<keys.length; i++){
        content += `<h2 class="title">${keys[i]}</h2>`
        for(let j=0; j<sheet[keys[i]].length; j++){
            content += `<h3 class="sec">${sheet[keys[i]][j].title}</h3> <ul class="commands">`
            for(let k=0; k < sheet[keys[i]][j].commands.length; k++){
                content += `<li><p>${sheet[keys[i]][j].commands[k]}</p></li>`
            }
            content += `</ul>`
        }
    }
    div.innerHTML = content;
    document.querySelector(".root").append(div);
}