// import * as html2pdf from 'html2pdf.js';
const form = document.getElementById("form") as HTMLFormElement;
const resume = document.getElementById("hide") as HTMLDivElement;

// const skillsSection = document.getElementById('skills-section') as HTMLElement;

const img = document.getElementById("userimg") as HTMLInputElement;
const userImg = document.getElementById("img") as HTMLImageElement;

const myName = document.getElementById('fName') as HTMLSpanElement;
const userName = document.getElementById('firstName') as HTMLInputElement;

const userDesignation = document.getElementById('userDesignation') as HTMLInputElement;
const designation = document.getElementById('designation') as HTMLSpanElement;

const userAboutMe = document.getElementById('useraboutme') as HTMLInputElement;
const aboutMe = document.getElementById('aboutme') as HTMLSpanElement;

const userMobileNo = document.getElementById('usermobileno') as HTMLInputElement;
const mobileNo = document.getElementById('mobileno') as HTMLSpanElement;

const userEmail = document.getElementById('useremail') as HTMLInputElement;
const email = document.getElementById('email') as HTMLSpanElement;

const userIntermadiate = document.getElementById('userintermadiate') as HTMLInputElement;
const intermadiate = document.getElementById('intermadiate') as HTMLSpanElement;

const userMatric = document.getElementById('usermatric') as HTMLInputElement;
const matric = document.getElementById('matric') as HTMLSpanElement;

const userExperience = document.getElementById('userexperience') as HTMLInputElement;
const experience = document.getElementById('experience') as HTMLSpanElement;

const editButton = document.getElementById("editResume") as HTMLButtonElement;
const saveButton = document.getElementById("saveResume") as HTMLButtonElement;

const downloadButton = document.getElementById("downloadResume") as HTMLButtonElement;
const generateLinkButton = document.getElementById("generateLink") as HTMLButtonElement;
    const shareLinkDiv = document.getElementById("shareLink") as HTMLDivElement;
    const resumeLink = document.getElementById("resumeLink") as HTMLAnchorElement;
    
    const skillsDisplay = document.getElementById("skillsDisplay") as HTMLSpanElement;

const skillCheckboxes = [
    document.getElementById("skills1") as HTMLInputElement,
    document.getElementById("skills2") as HTMLInputElement,
    document.getElementById("skills3") as HTMLInputElement,
    document.getElementById("skills4") as HTMLInputElement,
    document.getElementById("skills5") as HTMLInputElement,
    document.getElementById("skills6") as HTMLInputElement
];

form.addEventListener("submit", function (event: Event) {
    event.preventDefault();

form.style.display = 'none';
resume.style.display = "block";
// skillsSection.style.display = 'none';

const enteredName = userName.value;
myName.textContent = enteredName;

const enteredDesignation = userDesignation.value;
designation.textContent = enteredDesignation;

const file = img.files ? img.files[0] : null;

if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
        userImg.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
}

const enteredAboutMe = userAboutMe.value;
aboutMe.textContent = enteredAboutMe;

const enteredMobileNo = userMobileNo.value;
mobileNo.textContent = enteredMobileNo;

const enterdEmail = userEmail.value;
email.textContent = enterdEmail;

const enterdIntermadiate = userIntermadiate.value;
intermadiate.textContent = enterdIntermadiate;

const enteredMatric = userMatric.value;
matric.textContent = enteredMatric;

const enteredExperience = userExperience.value;
experience.textContent = enteredExperience.length > 0 ? enteredExperience : "No Experience Provided";

skillCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
        const skillLine = document.createElement('p');
        skillLine.textContent = checkbox.value;
        skillsDisplay.appendChild(skillLine);
    }
});

if (skillsDisplay.innerHTML === '') {
    skillsDisplay.textContent = 'No Skills Selected';
}
});

editButton.addEventListener("click", function () {
    
    aboutMe.contentEditable = "true";
    experience.contentEditable = "true";
    email.contentEditable = "true";
    mobileNo.contentEditable = "true";
    intermadiate.contentEditable = "true";
    matric.contentEditable = "true";

   
    editButton.classList.add("hidden");
    saveButton.classList.remove("hidden");
});

saveButton.addEventListener("click", function () {
    aboutMe.contentEditable = "false";
    experience.contentEditable = "false";
    email.contentEditable = "false";
    mobileNo.contentEditable = "false";
    intermadiate.contentEditable = "false";
    matric.contentEditable = "false";

   
    saveButton.classList.add("hidden");
    editButton.classList.remove("hidden");
});

// Link Generation Button
generateLinkButton.addEventListener("click", function () {
    // Generate a unique ID and link
    const uniqueID = Date.now(); 
    const url = `https://username.vercel.app/resume?id=${uniqueID}`;

    // Display the generated link
    shareLinkDiv.classList.remove("hidden");
    resumeLink.href = url;
    resumeLink.textContent = "Shareable Resume Link";
    resumeLink.title = "Click to copy link";

    // Make the link clickable and copyable
    resumeLink.addEventListener("click", function (e) {
        e.preventDefault();
        navigator.clipboard.writeText(url).then(() => {
            alert("Link copied to clipboard!");
        }).catch(() => {
            alert("Failed to copy link.");
        });
    });
});

downloadButton.addEventListener("click", function () {
    window.print();
});

