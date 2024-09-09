var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
var education = document.getElementById('education');
var experience = document.getElementById('experience');
var intro = document.getElementById('intro');
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', function () {
    if ((skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.style.display) === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', function () {
    if ((education === null || education === void 0 ? void 0 : education.style.display) === 'none') {
        education.style.display = 'block';
    }
    else {
        education.style.display = 'none';
    }
});
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', function () {
    if ((experience === null || experience === void 0 ? void 0 : experience.style.display) === 'none') {
        experience.style.display = 'block';
    }
    else {
        experience.style.display = 'none';
    }
});
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', function () {
    if ((intro === null || intro === void 0 ? void 0 : intro.style.display) === 'none') {
        intro.style.display = 'block';
    }
    else {
        intro.style.display = 'none';
    }
});
var toggleWork = document.getElementById('toggle-work');
var workSection = document.getElementById('workList');
toggleWork.addEventListener('click', function () {
    if (workSection.style.display === 'none') {
        workSection.style.display = 'block';
        toggleWork.textContent = '-';
    }
    else {
        workSection.style.display = 'none';
        toggleWork.textContent = '+';
    }
});
