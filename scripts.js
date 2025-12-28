// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

// Shipment Tracking Mockup
const trackingForm = document.getElementById("trackingForm");
const trackingResult = document.getElementById("trackingResult");

trackingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const trackingID = document.getElementById("trackingID").value.trim();

  const statuses = [
    "Shipment booked",
    "In transit",
    "Arrived at hub",
    "Out for delivery",
    "Delivered successfully"
  ];

  if (trackingID) {
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    trackingResult.textContent = `Tracking ID: ${trackingID} → Status: ${randomStatus}`;
  } else {
    trackingResult.textContent = "Please enter a valid Tracking ID.";
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const chatBody = document.getElementById("chatBody");
  const chatForm = document.getElementById("chatForm");
  const chatInput = document.getElementById("chatInput");

  // Sample tracking data
  const trackingData = {
    "TX123": "Delivered successfully",
    "TX456": "In transit - expected tomorrow",
    "TX789": "Pending pickup at warehouse"
  };

  function addMessage(sender, text) {
    const msg = document.createElement("p");
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userMsg = chatInput.value.trim();
    if (!userMsg) return;

    addMessage("You", userMsg);
let botReply = "Sorry, I didn't understand that.";

    const msg = userMsg.toLowerCase();

    // Check for tracking ID
    if (trackingData[userMsg.toUpperCase()]) {
      botReply = `Status for ${userMsg.toUpperCase()}: ${trackingData[userMsg.toUpperCase()]}`;
    } else if (msg.includes("hello")) {
      botReply = "Hello! How can I assist you today?";
    } else if (msg.includes("services")) {
      botReply = "We offer Freight Transport, Warehousing, and Supply Chain solutions.";
    } else if (msg.includes("contact")) {
      botReply = "You can reach us via the Contact page form.";
    } else if (msg.includes("track")) {
      botReply = "Please enter your Tracking ID (e.g., TX123).";
    }

    setTimeout(() => addMessage("Bot", botReply), 500);
    chatInput.value = "";
  });
});
