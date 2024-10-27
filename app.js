"use strict";
// import * as html2pdf from 'html2pdf.js';
const form = document.getElementById("form");
const resume = document.getElementById("hide");
// const skillsSection = document.getElementById('skills-section') as HTMLElement;
const img = document.getElementById("userimg");
const userImg = document.getElementById("img");
const myName = document.getElementById('fName');
const userName = document.getElementById('firstName');
const userDesignation = document.getElementById('userDesignation');
const designation = document.getElementById('designation');
const userAboutMe = document.getElementById('useraboutme');
const aboutMe = document.getElementById('aboutme');
const userMobileNo = document.getElementById('usermobileno');
const mobileNo = document.getElementById('mobileno');
const userEmail = document.getElementById('useremail');
const email = document.getElementById('email');
const userIntermadiate = document.getElementById('userintermadiate');
const intermadiate = document.getElementById('intermadiate');
const userMatric = document.getElementById('usermatric');
const matric = document.getElementById('matric');
const userExperience = document.getElementById('userexperience');
const experience = document.getElementById('experience');
const editButton = document.getElementById("editResume");
const saveButton = document.getElementById("saveResume");
const downloadButton = document.getElementById("downloadResume");
const generateLinkButton = document.getElementById("generateLink");
const shareLinkDiv = document.getElementById("shareLink");
const resumeLink = document.getElementById("resumeLink");
const skillsDisplay = document.getElementById("skillsDisplay");
const skillCheckboxes = [
    document.getElementById("skills1"),
    document.getElementById("skills2"),
    document.getElementById("skills3"),
    document.getElementById("skills4"),
    document.getElementById("skills5"),
    document.getElementById("skills6")
];
form.addEventListener("submit", function (event) {
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
            var _a;
            userImg.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
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
// downloadButton.addEventListener("click", function () {
//     const resumeElement = resume; // The element containing the resume
//     // Options for PDF generation
//     const options = {
//         margin: 1,
//         filename: `Resume_${myName.textContent}.pdf`, // Use the name in the resume for filename
//         image: { type: 'jpeg', quality: 0.98 },
//         html2canvas: { scale: 2 },
//         jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
//     };
//     // Generate and save PDF
//     // html2pdf().set(options).from(resumeElement).save();
// });
