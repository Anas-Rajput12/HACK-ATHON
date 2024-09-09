const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeSection = document.getElementById('resume') as HTMLDivElement;
const resumeFromSection = document.getElementById('resume-from-section') as HTMLDivElement;

const nameField = document.getElementById('name') as HTMLInputElement;
const dobField = document.getElementById('dob') as HTMLInputElement;
const emailField = document.getElementById('email') as HTMLInputElement;
const phoneField = document.getElementById('phone') as HTMLInputElement;
const addressField = document.getElementById('address') as HTMLTextAreaElement;
const photoField = document.getElementById('photo') as HTMLInputElement;

const displayPhoto = document.getElementById('display-photo') as HTMLImageElement;
const displayName = document.getElementById('display-name') as HTMLSpanElement;
const displayDob = document.getElementById('display-dob') as HTMLSpanElement;
const displayEmail = document.getElementById('display-email') as HTMLSpanElement;
const displayPhone = document.getElementById('display-phone') as HTMLSpanElement;
const displayAddress = document.getElementById('display-address') as HTMLSpanElement;

const educationField = document.getElementById('education') as HTMLTextAreaElement;
const skillsField = document.getElementById('skills') as HTMLInputElement;
const experienceField = document.getElementById('experience') as HTMLTextAreaElement;

const educationList = document.getElementById('educationList') as HTMLUListElement;
const skillsList = document.getElementById('skillsList') as HTMLUListElement;
const workList = document.getElementById('workList') as HTMLUListElement;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    displayName.textContent = nameField.value;
    displayDob.textContent = dobField.value;
    displayEmail.textContent = emailField.value;
    displayPhone.textContent = phoneField.value;
    displayAddress.textContent = addressField.value;

    const photoFile = photoField.files?.[0];
    if (photoFile) {
        const reader = new FileReader();
        reader.onload = () => {
            displayPhoto.src = reader.result as string;
        };
        reader.readAsDataURL(photoFile);
    } else {
        displayPhoto.src = '';
    }

    educationList.innerHTML = '';
    const educationItems = educationField.value.split('\n').filter(item => item.trim() !== '');
    educationItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        educationList.appendChild(li);
    });

    skillsList.innerHTML = '';
    const skillsItems = skillsField.value.split(',').map(skill => skill.trim()).filter(skill => skill !== '');
    skillsItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        skillsList.appendChild(li);
    });

    workList.innerHTML = '';
    const experienceItems = experienceField.value.split('\n').filter(item => item.trim() !== '');
    experienceItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        workList.appendChild(li);
    });

    resumeFromSection.style.display = 'none';
    resumeSection.style.display = 'block';
});

const regenerateButton = document.getElementById('regenrate-cv') as HTMLButtonElement;
regenerateButton.addEventListener('click', () => {
    resumeFromSection.style.display = 'block';
    resumeSection.style.display = 'none';
    form.reset();
    displayPhoto.src = '';
    educationList.innerHTML = '';
    skillsList.innerHTML = '';
    workList.innerHTML = '';
});

document.querySelectorAll('[contenteditable]').forEach(element => {
    element.addEventListener('blur', (event) => {
        const target = event.target as HTMLElement;
        if (target.id === 'display-name') {
            nameField.value = target.textContent || '';
        } else if (target.id === 'display-dob') {
            dobField.value = target.textContent || '';
        } else if (target.id === 'display-email') {
            emailField.value = target.textContent || '';
        } else if (target.id === 'display-phone') {
            phoneField.value = target.textContent || '';
        } else if (target.id === 'display-address') {
            addressField.value = target.textContent || '';
        }
    });
});
