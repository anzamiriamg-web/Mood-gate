function sendFeeling() {
  let user = localStorage.getItem("currentUser");
  let feeling = document.getElementById("feelingSelect").value;

  if (feeling === "") return;

  lastFeeling = feeling;
  localStorage.setItem("lastFeeling", feeling);

  showSuggestions(feeling);

  saveMessage(`${user}: I am feeling ${feeling}`, user);
}
function showSuggestions(feeling) {
  let box = document.getElementById("suggestionsBox");

  let suggestions = "";

  if (feeling === "stressed" || feeling === "sad") {
    suggestions = `
      <h3>Suggested Replies</h3>
      <button onclick="useSuggestion('I am here for you 🤍')">I am here for you 🤍</button>
      <button onclick="useSuggestion('Take a deep breath 🌿')">Take a deep breath 🌿</button>
      <button onclick="useSuggestion('You are strong 💪')">You are strong 💪</button>
    `;
  }

  if (feeling === "happy") {
    suggestions = `
      <h3>Suggested Replies</h3>
      <button onclick="useSuggestion('That’s amazing 🎉')">That’s amazing 🎉</button>
      <button onclick="useSuggestion('So proud of you 😄')">So proud of you 😄</button>
    `;
  }

  if (feeling === "angry") {
    suggestions = `
      <h3>Suggested Replies</h3>
      <button onclick="useSuggestion('I understand your frustration')">I understand your frustration</button>
      <button onclick="useSuggestion('Let’s talk it out calmly')">Let’s talk it out calmly</button>
    `;
  }

  box.innerHTML = suggestions;
}

function useSuggestion(text) {
  document.getElementById("replyBox").value = text;
}
function clearChat() {
  localStorage.removeItem("messages");
  document.getElementById("chatBox").innerHTML = "";
}