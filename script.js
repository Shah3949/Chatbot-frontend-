const faqData = {
  whatsapp: {
    name: "WhatsApp",
    faqs: [
      {
        question: "How do I send a photo on WhatsApp?",
        answer: "Here's how to send photos on WhatsApp:",
        steps: [
          "Open WhatsApp and go to the chat where you want to send the photo",
          "Tap the 📎 (attachment) icon next to the message box",
          "Select 'Camera' to take a new photo or 'Gallery' to choose existing photo",
          "Select the photo you want to send",
          "Add a caption if you want (optional)",
          "Tap the send button (➤) to share your photo",
        ],
      },
      {
        question: "How do I create a WhatsApp group?",
        answer: "Follow these steps to create a WhatsApp group:",
        steps: [
          "Open WhatsApp on your phone",
          "Tap on the three dots (⋮) in the top right corner",
          "Select 'New group' from the menu",
          "Choose contacts you want to add (you can add up to 256 people)",
          "Tap the green arrow to continue",
          "Add a group name and photo (optional)",
          "Tap the green checkmark to create your group",
        ],
      },
      {
        question: "How do I make a voice call on WhatsApp?",
        answer: "To make a voice call on WhatsApp:",
        steps: [
          "Open WhatsApp and go to the Calls tab",
          "Tap the phone icon (📞) at the bottom",
          "Select the contact you want to call",
          "Or open a chat with someone and tap the phone icon at the top",
          "Wait for them to answer",
          "Tap the red phone icon to end the call",
        ],
      },
    ],
  },
  paytm: {
    name: "Paytm",
    faqs: [
      {
        question: "How do I add money to my Paytm wallet?",
        answer: "Here's how to add money to your Paytm wallet:",
        steps: [
          "Open the Paytm app on your phone",
          "Tap on 'Add Money' or 'Wallet' on the home screen",
          "Enter the amount you want to add",
          "Choose your payment method (debit card, credit card, or net banking)",
          "Enter your card details or banking information",
          "Complete the payment verification",
          "Money will be added to your wallet immediately",
        ],
      },
      {
        question: "How do I pay someone using Paytm?",
        answer: "To send money to someone using Paytm:",
        steps: [
          "Open Paytm app and tap 'Pay' or 'Send Money'",
          "Enter the recipient's mobile number or scan their QR code",
          "Enter the amount you want to send",
          "Add a note (optional)",
          "Choose payment source (wallet, bank, or card)",
          "Enter your Paytm PIN or use fingerprint",
          "Confirm the payment - money will be sent instantly",
        ],
      },
    ],
  },
  maps: {
    name: "Google Maps",
    faqs: [
      {
        question: "How do I get directions on Google Maps?",
        answer: "Getting directions on Google Maps:",
        steps: [
          "Open Google Maps app on your phone",
          "Tap the search bar at the top",
          "Type your destination (address, place name, or business)",
          "Select the correct location from the search results",
          "Tap the 'Directions' button (usually blue)",
          "Choose your transport mode (car, walking, public transport)",
          "Tap 'Start' to begin navigation",
          "Follow the voice instructions and map guidance",
        ],
      },
      {
        question: "How do I save a location on Google Maps?",
        answer: "To save a location for future use:",
        steps: [
          "Search for the location you want to save",
          "Tap on the location to open its details",
          "Tap the 'Save' button (bookmark icon)",
          "Choose a list to save it to (Favorites, Want to go, etc.)",
          "Or create a new list by tapping 'New list'",
          "The location is now saved and accessible from your profile",
        ],
      },
    ],
  },
  email: {
    name: "Email (Gmail)",
    faqs: [
      {
        question: "How do I send an email?",
        answer: "Sending an email using Gmail:",
        steps: [
          "Open Gmail app or go to gmail.com",
          "Tap the compose button (✏️ or + icon)",
          "In the 'To' field, enter the recipient's email address",
          "Add a subject line that describes your email",
          "Type your message in the main text area",
          "Attach files if needed by tapping the attachment icon (📎)",
          "Review your email and tap 'Send' (➤)",
        ],
      },
      {
        question: "How do I attach a file to an email?",
        answer: "To attach files to your email:",
        steps: [
          "While composing an email, tap the attachment icon (📎)",
          "Choose the type of file (photo, document, etc.)",
          "Select the file from your device storage",
          "Wait for the file to upload (you'll see a progress bar)",
          "You can attach multiple files by repeating this process",
          "Send the email as usual",
        ],
      },
    ],
  },
  youtube: {
    name: "YouTube",
    faqs: [
      {
        question: "How do I search for videos on YouTube?",
        answer: "Searching for videos on YouTube:",
        steps: [
          "Open YouTube app or go to youtube.com",
          "Tap the search icon (🔍) at the top",
          "Type what you're looking for (song, tutorial, etc.)",
          "Tap search or press enter",
          "Browse through the results",
          "Tap on any video to watch it",
          "Use filters to narrow down results if needed",
        ],
      },
      {
        question: "How do I subscribe to a YouTube channel?",
        answer: "To subscribe to a YouTube channel:",
        steps: [
          "Find a video from the channel you like",
          "Tap on the channel name below the video",
          "On the channel page, tap the 'Subscribe' button",
          "The button will turn red and show 'Subscribed'",
          "Ring the bell icon (🔔) to get notifications",
          "You can find subscribed channels in your Library tab",
        ],
      },
    ],
  },
  facebook: {
    name: "Facebook",
    faqs: [
      {
        question: "How do I post on Facebook?",
        answer: "Posting on Facebook:",
        steps: [
          "Open Facebook app or go to facebook.com",
          "Tap 'What's on your mind?' at the top of your feed",
          "Type your message or thought",
          "Add photos by tapping the photo icon if you want",
          "Choose your audience (Public, Friends, etc.)",
          "Tap 'Post' to share with your friends",
          "Your post will appear on your timeline and friends' feeds",
        ],
      },
      {
        question: "How do I add friends on Facebook?",
        answer: "Adding friends on Facebook:",
        steps: [
          "Tap the search bar at the top of Facebook",
          "Type the name of the person you want to add",
          "Look through the search results",
          "Tap on the correct person's profile",
          "Tap the 'Add Friend' button",
          "Wait for them to accept your friend request",
          "You can also find friends through 'People You May Know'",
        ],
      },
    ],
  },
  banking: {
    name: "Online Banking",
    faqs: [
      {
        question: "How do I check my bank balance online?",
        answer: "Checking your bank balance online:",
        steps: [
          "Download your bank's official mobile app",
          "Register with your account number and personal details",
          "Set up login credentials (username and password)",
          "Log in to your account",
          "Look for 'Balance' or 'Account Summary'",
          "Your current balance will be displayed",
          "You can also see recent transactions",
        ],
      },
      {
        question: "How do I transfer money online?",
        answer: "Transferring money through online banking:",
        steps: [
          "Log in to your bank's app or website",
          "Go to 'Transfer' or 'Send Money' section",
          "Choose 'To Another Account' or 'NEFT/IMPS'",
          "Enter recipient's account number and IFSC code",
          "Enter the amount you want to transfer",
          "Add recipient's name and your transfer reason",
          "Verify details and enter your transaction PIN",
          "Confirm the transfer",
        ],
      },
    ],
  },
  safety: {
    name: "Digital Safety",
    faqs: [
      {
        question: "How do I create a strong password?",
        answer: "Creating a strong password:",
        steps: [
          "Use at least 8-12 characters",
          "Include uppercase letters (A-Z)",
          "Include lowercase letters (a-z)",
          "Add numbers (0-9)",
          "Include special characters (!@#$%)",
          "Avoid using personal information (name, birthday)",
          "Don't use common words or patterns",
          "Use different passwords for different accounts",
        ],
      },
      {
        question: "How do I spot fake messages or scams?",
        answer: "Identifying fake messages and scams:",
        steps: [
          "Be suspicious of urgent messages asking for money",
          "Check the sender's number - scammers often use fake numbers",
          "Don't click on suspicious links",
          "Banks never ask for PIN or password via SMS",
          "Too good to be true offers are usually fake",
          "Check for spelling and grammar mistakes",
          "Verify with the company directly if unsure",
          "Never share OTP or banking details with anyone",
        ],
      },
    ],
  },
};

let currentTopic = null;
let chatHistory = [];

// Auto-resize textarea
function adjustTextareaHeight() {
  const textarea = document.getElementById("chatInput");
  textarea.style.height = "auto";
  textarea.style.height = Math.min(textarea.scrollHeight, 120) + "px";
}

// Handle enter key press
function handleKeyPress(event) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
}

// Show mobile topics overlay
function showMobileTopics() {
  document.getElementById("mobileTopicsOverlay").style.display = "flex";
}

// Hide mobile topics overlay
function hideMobileTopics() {
  document.getElementById("mobileTopicsOverlay").style.display = "none";
}

// Select a topic
function selectTopic(topic) {
  currentTopic = topic;
  hideWelcomeMessage();

  const topicData = faqData[topic];
  if (topicData) {
    const message = `I'd like to learn about ${topicData.name}`;
    addUserMessage(message);

    setTimeout(() => {
      const response = `Great! I can help you with ${topicData.name}. Here are some common questions I can answer:`;
      addBotMessage(response, generateTopicQuestions(topic));
    }, 1000);
  }
}

// Generate topic questions
function generateTopicQuestions(topic) {
  const topicData = faqData[topic];
  const questions = topicData.faqs.map((faq) => faq.question);
  return questions;
}

// Send message
function sendMessage() {
  const input = document.getElementById("chatInput");
  const message = input.value.trim();

  if (message === "") return;

  hideWelcomeMessage();
  addUserMessage(message);
  input.value = "";
  adjustTextareaHeight();

  // Show typing indicator
  showTypingIndicator();

  // Process the message
  setTimeout(() => {
    processMessage(message);
    hideTypingIndicator();
  }, 1500);
}

// Process user message
function processMessage(message) {
  const lowerMessage = message.toLowerCase();

  // Try to detect and update topic from message
  for (const [key, data] of Object.entries(faqData)) {
    if (
      lowerMessage.includes(key) ||
      lowerMessage.includes(data.name.toLowerCase())
    ) {
      currentTopic = key;
      break;
    }
  }

  // Check if it matches a specific FAQ
  let bestMatch = null;
  let bestScore = 0;

  if (currentTopic && faqData[currentTopic]) {
    for (const faq of faqData[currentTopic].faqs) {
      const score = calculateSimilarity(
        lowerMessage,
        faq.question.toLowerCase()
      );
      if (score > bestScore && score > 0.3) {
        bestScore = score;
        bestMatch = faq;
      }
    }
  }

  if (bestMatch) {
    addBotMessage(bestMatch.answer, null, bestMatch.steps);
    return;
  }

  // General responses
  if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
    addBotMessage(
      "Hello! I'm here to help you learn digital tools. What would you like to know about?",
      Object.keys(faqData).map((key) => `Learn about ${faqData[key].name}`)
    );
  } else if (lowerMessage.includes("help")) {
    addBotMessage(
      "I can help you with popular digital tools and apps. Choose a topic or ask me a specific question:",
      Object.keys(faqData).map((key) => faqData[key].name)
    );
  } else {
    addBotMessage(
      "I'd be happy to help! You can ask me about WhatsApp, Paytm, Google Maps, Email, YouTube, Facebook, Online Banking, or Digital Safety. What interests you?",
      Object.keys(faqData).map((key) => faqData[key].name)
    );
  }
}

// Calculate text similarity (simple version)
function calculateSimilarity(str1, str2) {
  const words1 = str1.split(" ");
  const words2 = str2.split(" ");
  let matches = 0;

  for (const word1 of words1) {
    for (const word2 of words2) {
      if (word1.length > 2 && word2.includes(word1)) {
        matches++;
        break;
      }
    }
  }

  return matches / Math.max(words1.length, words2.length);
}

// Add user message to chat
function addUserMessage(message) {
  const chatMessages = document.getElementById("chatMessages");
  const messageDiv = document.createElement("div");
  messageDiv.className = "message user-message";
  messageDiv.innerHTML = `
                <div class="message-avatar user-avatar">👤</div>
                <div class="message-content">${message}</div>
            `;
  chatMessages.appendChild(messageDiv);
  scrollToBottom();

  chatHistory.push({ type: "user", content: message });
}

// Add bot message to chat
function addBotMessage(message, quickOptions = null, steps = null) {
  const chatMessages = document.getElementById("chatMessages");
  const messageDiv = document.createElement("div");
  messageDiv.className = "message bot-message";

  let content = `
                <div class="message-avatar bot-avatar">🤖</div>
                <div class="message-content">
                    ${message}
            `;

  if (steps) {
    content += `
                    <div class="step-tutorial">
                        <h4>Step-by-step guide:</h4>
                        <ol>
                            ${steps.map((step) => `<li>${step}</li>`).join("")}
                        </ol>
                    </div>
                `;
  }

  if (quickOptions) {
    content += `
                    <div class="quick-options">
                        ${quickOptions
                          .map(
                            (option) =>
                              `<button class="quick-btn" onclick="handleQuickOption('${option}')">${option}</button>`
                          )
                          .join("")}
                    </div>
                `;
  }

  content += "</div>";
  messageDiv.innerHTML = content;
  chatMessages.appendChild(messageDiv);
  scrollToBottom();

  chatHistory.push({
    type: "bot",
    content: message,
    steps: steps,
    options: quickOptions,
  });
}

// Handle quick option clicks
function handleQuickOption(option) {
  const message = option.startsWith("Learn about")
    ? option
    : `Tell me about ${option}`;
  addUserMessage(message);

  setTimeout(() => {
    processMessage(message);
  }, 500);
}

// Show typing indicator
function showTypingIndicator() {
  document.getElementById("typingIndicator").style.display = "flex";
  scrollToBottom();
}

// Hide typing indicator
function hideTypingIndicator() {
  document.getElementById("typingIndicator").style.display = "none";
}

// Hide welcome message
function hideWelcomeMessage() {
  const welcomeMessage = document.getElementById("welcomeMessage");
  if (welcomeMessage) {
    welcomeMessage.style.display = "none";
  }
}

// Scroll to bottom of chat
function scrollToBottom() {
  const chatMessages = document.getElementById("chatMessages");
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Mobile responsive adjustments
function adjustForMobile() {
  const isMobile = window.innerWidth <= 768;
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");

  if (isMobile) {
    mobileMenuBtn.style.display = "block";
  } else {
    mobileMenuBtn.style.display = "none";
    hideMobileTopics();
  }
}

// Initialize the app
document.addEventListener("DOMContentLoaded", function () {
  adjustForMobile();

  // Focus on input for desktop
  if (window.innerWidth > 768) {
    document.getElementById("chatInput").focus();
  }
});

// Handle window resize
window.addEventListener("resize", adjustForMobile);

// Handle click outside mobile overlay
document
  .getElementById("mobileTopicsOverlay")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      hideMobileTopics();
    }
  });
