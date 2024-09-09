var form = document.getElementById('resume-form');
var resumeSection = document.getElementById('resume');
var resumeFromSection = document.getElementById('resume-from-section');
var nameField = document.getElementById('name');
var dobField = document.getElementById('dob');
var emailField = document.getElementById('email');
var phoneField = document.getElementById('phone');
var addressField = document.getElementById('address');
var photoField = document.getElementById('photo');
var displayPhoto = document.getElementById('display-photo');
var displayName = document.getElementById('display-name');
var displayDob = document.getElementById('display-dob');
var displayEmail = document.getElementById('display-email');
var displayPhone = document.getElementById('display-phone');
var displayAddress = document.getElementById('display-address');
var educationField = document.getElementById('education');
var skillsField = document.getElementById('skills');
var experienceField = document.getElementById('experience');
var educationList = document.getElementById('educationList');
var skillsList = document.getElementById('skillsList');
var workList = document.getElementById('workList');
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    displayName.textContent = nameField.value;
    displayDob.textContent = dobField.value;
    displayEmail.textContent = emailField.value;
    displayPhone.textContent = phoneField.value;
    displayAddress.textContent = addressField.value;
    var photoFile = (_a = photoField.files) === null || _a === void 0 ? void 0 : _a[0];
    if (photoFile) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            displayPhoto.src = reader_1.result;
        };
        reader_1.readAsDataURL(photoFile);
    }
    else {
        displayPhoto.src = '';
    }
    educationList.innerHTML = '';
    var educationItems = educationField.value.split('\n').filter(function (item) { return item.trim() !== ''; });
    educationItems.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        educationList.appendChild(li);
    });
    skillsList.innerHTML = '';
    var skillsItems = skillsField.value.split(',').map(function (skill) { return skill.trim(); }).filter(function (skill) { return skill !== ''; });
    skillsItems.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        skillsList.appendChild(li);
    });
    workList.innerHTML = '';
    var experienceItems = experienceField.value.split('\n').filter(function (item) { return item.trim() !== ''; });
    experienceItems.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        workList.appendChild(li);
    });
    resumeFromSection.style.display = 'none';
    resumeSection.style.display = 'block';
});
var regenerateButton = document.getElementById('regenrate-cv');
regenerateButton.addEventListener('click', function () {
    resumeFromSection.style.display = 'block';
    resumeSection.style.display = 'none';
    form.reset();
    displayPhoto.src = '';
    educationList.innerHTML = '';
    skillsList.innerHTML = '';
    workList.innerHTML = '';
});
document.querySelectorAll('[contenteditable]').forEach(function (element) {
    element.addEventListener('blur', function (event) {
        var target = event.target;
        if (target.id === 'display-name') {
            nameField.value = target.textContent || '';
        }
        else if (target.id === 'display-dob') {
            dobField.value = target.textContent || '';
        }
        else if (target.id === 'display-email') {
            emailField.value = target.textContent || '';
        }
        else if (target.id === 'display-phone') {
            phoneField.value = target.textContent || '';
        }
        else if (target.id === 'display-address') {
            addressField.value = target.textContent || '';
        }
    });
});
