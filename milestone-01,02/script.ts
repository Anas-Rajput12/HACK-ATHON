const toggleButton = document.getElementById('toggle-skills');
const skillsSection = document.getElementById('skills');
const education = document.getElementById('education');
const experience = document.getElementById('experience');
const intro = document.getElementById('intro');

toggleButton?.addEventListener('click', () => {
    if (skillsSection?.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection!.style.display = 'none';
    }
});

toggleButton?.addEventListener('click', () => {
    if (education?.style.display === 'none') {
        education.style.display = 'block';
    } else {
        education!.style.display = 'none';
    }
});

toggleButton?.addEventListener('click', () => {
    if (experience?.style.display === 'none') {
        experience.style.display = 'block';
    } else {
        experience!.style.display = 'none';
    }
});

toggleButton?.addEventListener('click', () => {
    if (intro?.style.display === 'none') {
        intro.style.display = 'block';
    } else {
        intro!.style.display = 'none';
    }
});


const toggleWork = document.getElementById('toggle-work') as HTMLButtonElement;
const workSection = document.getElementById('workList') as HTMLElement;

toggleWork.addEventListener('click', () => {
    if (workSection.style.display === 'none') {
        workSection.style.display = 'block';
        toggleWork.textContent= '-'
       
    } else {
        workSection.style.display = 'none';
        toggleWork.textContent= '+'         
    }
});