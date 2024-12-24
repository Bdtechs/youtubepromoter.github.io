document.getElementById('nextButton').addEventListener('click', function() {
    let channelLink = document.getElementById('channelLink').value;
    if (channelLink) {
        // Get Channel Info using YouTube API or mock data
        document.getElementById('second-page').style.display = 'block';
        document.getElementById('channel-name').innerText = 'YouTube Channel Name';  // Replace with actual channel name via API
        document.querySelector('.home-page').style.display = 'none';
    } else {
        alert('Please enter a valid channel link.');
    }
});

function goBack() {
    document.getElementById('second-page').style.display = 'none';
    document.querySelector('.home-page').style.display = 'block';
}

document.getElementById('subscribe-number').addEventListener('input', function() {
    let subscribePoints = this.value * 2;
    document.getElementById('subscribe-points').innerText = subscribePoints;
    document.getElementById('add-subscribe-task').disabled = !this.value;
});

document.getElementById('views-number').addEventListener('input', function() {
    let viewsPoints = this.value * 2;
    document.getElementById('views-points').innerText = viewsPoints;
    document.getElementById('add-views-task').disabled = !this.value;
});

// Add other event listeners and logic as per the requirements
