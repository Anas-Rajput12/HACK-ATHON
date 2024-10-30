document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const about = document.getElementById('about').value;
    const education = document.getElementById('education').value.split('\n');
    const skills = document.getElementById('skills').value.split(',');
    const experience = document.getElementById('experience').value.split('\n');
    const photo = document.getElementById('photo').files[0];

    // Display data in resume
    document.getElementById('display-name').textContent = name;
    document.getElementById('display-dob').textContent = dob;
    document.getElementById('display-email').textContent = email;
    document.getElementById('display-phone').textContent = phone;
    document.getElementById('display-address').textContent = address;
    document.getElementById('display-about').textContent = about;

    // Populate education
    const educationList = document.getElementById('educationList');
    educationList.innerHTML = education.map(item => `<li>${item}</li>`).join('');

    // Populate skills
    const skillsList = document.getElementById('skillsList');
    skillsList.innerHTML = skills.map(item => `<li>${item.trim()}</li>`).join('');

    // Populate experience
    const workList = document.getElementById('workList');
    workList.innerHTML = experience.map(item => `<li>${item}</li>`).join('');

    // Handle photo display
    if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('display-photo').src = e.target.result;
        };
        reader.readAsDataURL(photo);
    }

    // Show the resume section and hide the form
    document.getElementById('resume').style.display = 'block';
    document.getElementById('resume-form-section').style.display = 'none';
});

// Add functionality for regenerating the CV
document.getElementById('regenerate-cv').addEventListener('click', function() {
    document.getElementById('resume').style.display = 'none';
    document.getElementById('resume-form-section').style.display = 'block';
    document.getElementById('resume-form').reset();
});
