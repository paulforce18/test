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

export default cheatSheet;