document.getElementById('wishButton').addEventListener('click', function() {

    const messageDiv = document.getElementById('message');

    messageDiv.textContent = "आपको और आपके परिवार को दशहरा की हार्दिक शुभकामनाएं!";

    messageDiv.classList.remove('hidden');

    setTimeout(() => {

        messageDiv.classList.add('show');

    }, 10);

});

