var form = document.getElementById('resume-form');
var resume = document.getElementById('resume');
var resumeFromSection = document.getElementById('resume-from-section');
var nameField = document.getElementById('name');
var dobField = document.getElementById('dob');
var emailField = document.getElementById('email');
var phoneField = document.getElementById('phone');
var addressField = document.getElementById('address');
var photoField = document.getElementById('photo');
var displayphoto = document.getElementById('display-photo');
var displayname = document.getElementById('display-name');
var displaydob = document.getElementById('display-dob');
var displayemail = document.getElementById('display-email');
var displayphone = document.getElementById('display-phone');
var displayaddress = document.getElementById('display-address');
var educationField = document.getElementById('education');
var skillsField = document.getElementById('skills');
var experienceField = document.getElementById('experience');
var educationList = document.getElementById('educationList');
var skillsList = document.getElementById('skillsList');
var workList = document.getElementById('workList');
form.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    displayname.textContent = nameField.value;
    displaydob.textContent = dobField.value;
    displayemail.textContent = emailField.value;
    displayphone.textContent = phoneField.value;
    displayaddress.textContent = addressField.value;
    var photoFile = (_a = photoField.files) === null || _a === void 0 ? void 0 : _a[0];
    if (photoFile) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            displayphoto.src = reader_1.result;
        };
        reader_1.readAsDataURL(photoFile);
    }
    else {
        displayphoto.src = '';
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
    resume.style.display = 'block';
});
var regeneratebutton = document.getElementById('regenrate-cv');
regeneratebutton.addEventListener('click', function () {
    resumeFromSection.style.display = 'block';
    resume.style.display = 'none';
    form.reset();
    displayphoto.src = '';
    educationList.innerHTML = '';
    skillsList.innerHTML = '';
    workList.innerHTML = '';
});
