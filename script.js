// Object to store votes
const votes = {};

// Function to handle voting
function vote(candidate) {
    if (!votes[candidate]) {
        votes[candidate] = 0;
    }
    votes[candidate]++;

    updateVoteList();
}

// Function to update the displayed votes
function updateVoteList() {
    const voteList = document.getElementById("vote-list");
    voteList.innerHTML = "";

    for (const candidate in votes) {
        const listItem = document.createElement("li");
        listItem.textContent = `${candidate}: ${votes[candidate]} votes`;
        voteList.appendChild(listItem);
    }
}
