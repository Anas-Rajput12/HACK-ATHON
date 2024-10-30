var form = document.getElementById('resume-form');
var resumeSection = document.getElementById('resume');
var resumeFromSection = document.getElementById('resume-from-section');
var nameField = document.getElementById('name');
var dobField = document.getElementById('dob');
var emailField = document.getElementById('email');
var phoneField = document.getElementById('phone');
var addressField = document.getElementById('address');
var aboutField = document.getElementById('about'); // New About Me field
var photoField = document.getElementById('photo');
var displayPhoto = document.getElementById('display-photo');
var displayName = document.getElementById('display-name');
var displayDob = document.getElementById('display-dob');
var displayEmail = document.getElementById('display-email');
var displayPhone = document.getElementById('display-phone');
var displayAddress = document.getElementById('display-address');
var displayAbout = document.getElementById('display-about'); // Display About Me section
var educationField = document.getElementById('education');
var skillsField = document.getElementById('skills');
var experienceField = document.getElementById('experience');
var educationList = document.getElementById('educationList');
var skillsList = document.getElementById('skillsList');
var workList = document.getElementById('workList');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    displayName.textContent = nameField.value;
    displayDob.textContent = dobField.value;
    displayEmail.textContent = emailField.value;
    displayPhone.textContent = phoneField.value;
    displayAddress.textContent = addressField.value;
    displayAbout.textContent = aboutField.value; // Display About Me content

    var photoFile = photoField.files[0];
    if (photoFile) {
        var reader = new FileReader();
        reader.onload = function () {
            displayPhoto.src = reader.result;
        };
        reader.readAsDataURL(photoFile);
    } else {
        displayPhoto.src = '';
    }

    // Handle education
    educationList.innerHTML = '';
    var educationItems = educationField.value.split('\n').filter(item => item.trim() !== '');
    educationItems.forEach(item => {
        var li = document.createElement('li');
        li.textContent = item;
        educationList.appendChild(li);
    });

    // Handle skills
    skillsList.innerHTML = '';
    var skillsItems = skillsField.value.split(',').map(skill => skill.trim()).filter(skill => skill !== '');
    skillsItems.forEach(item => {
        var li = document.createElement('li');
        li.textContent = item;
        skillsList.appendChild(li);
    });

    // Handle work experience
    workList.innerHTML = '';
    var experienceItems = experienceField.value.split('\n').filter(item => item.trim() !== '');
    experienceItems.forEach(item => {
        var li = document.createElement('li');
        li.textContent = item;
        workList.appendChild(li);
    });

    resumeFromSection.style.display = 'none';
    resumeSection.style.display = 'block';
});

var regenerateButton = document.getElementById('regenerate-cv');
regenerateButton.addEventListener('click', function () {
    resumeFromSection.style.display = 'block';
    resumeSection.style.display = 'none';
    form.reset();
    displayPhoto.src = '';
    educationList.innerHTML = '';
    skillsList.innerHTML = '';
    workList.innerHTML = '';
    displayAbout.textContent = ''; // Reset About Me display
});
