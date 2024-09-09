const form = document.getElementById('resume-form') as HTMLFormElement;
const resume = document.getElementById('resume') as HTMLDivElement;
const resumeFromSection = document.getElementById('resume-from-section') as HTMLDivElement;

const nameField = document.getElementById('name') as HTMLInputElement;
const dobField = document.getElementById('dob') as HTMLInputElement;
const emailField = document.getElementById('email') as HTMLInputElement;
const phoneField = document.getElementById('phone') as HTMLInputElement;
const addressField = document.getElementById('address') as HTMLTextAreaElement;
const photoField = document.getElementById('photo') as HTMLInputElement;

const displayphoto = document.getElementById('display-photo') as HTMLImageElement;
const displayname = document.getElementById('display-name') as HTMLSpanElement;
const displaydob = document.getElementById('display-dob') as HTMLSpanElement;
const displayemail = document.getElementById('display-email') as HTMLSpanElement;
const displayphone = document.getElementById('display-phone') as HTMLSpanElement;
const displayaddress = document.getElementById('display-address') as HTMLSpanElement;

const educationField = document.getElementById('education') as HTMLTextAreaElement;
const skillsField = document.getElementById('skills') as HTMLInputElement;
const experienceField = document.getElementById('experience') as HTMLTextAreaElement;

const educationList = document.getElementById('educationList') as HTMLUListElement;
const skillsList = document.getElementById('skillsList') as HTMLUListElement;
const workList = document.getElementById('workList') as HTMLUListElement;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    displayname.textContent = nameField.value;
    displaydob.textContent = dobField.value;
    displayemail.textContent = emailField.value;
    displayphone.textContent = phoneField.value;
    displayaddress.textContent = addressField.value;

    const photoFile = photoField.files?.[0];
    if (photoFile) {
        const reader = new FileReader();
        reader.onload = () => {
            displayphoto.src = reader.result as string;
        };
        reader.readAsDataURL(photoFile);
    } else {
        displayphoto.src = '';
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
    resume.style.display = 'block';
});

const regeneratebutton = document.getElementById('regenrate-cv') as HTMLButtonElement;
regeneratebutton.addEventListener('click', () => {
    resumeFromSection.style.display = 'block';
    resume.style.display = 'none';
    form.reset();
    displayphoto.src = '';
    educationList.innerHTML = '';
    skillsList.innerHTML = '';
    workList.innerHTML = '';
});
