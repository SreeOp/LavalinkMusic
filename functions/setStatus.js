const { ActivityType } = require('discord.js');

// Array of status messages
const statusMessages = [
  "ZyroniX",
  "AKA ZyX",
  "Bot Under Development",
  "V1.3"
];

let currentIndex = 0;

module.exports = (client) => {
  function updateStatus() {
    const currentStatus = statusMessages[currentIndex];
    currentIndex = (currentIndex + 1) % statusMessages.length;

    client.user.setPresence({
      activities: [{ name: currentStatus, type: ActivityType.Custom }],
      status: 'dnd',
    });
  }

  // Update status every 10 minutes (600000 ms)
  setInterval(updateStatus, 15000);

  // Initial status set
  updateStatus();
};
