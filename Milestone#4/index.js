// Create refrences to the form and display area
var resumeForm = document.getElementById('form');
var displayResumeElement = document.getElementById('resume-display');
//*** Form Handling ***/
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault();
    //** Input Values **/
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // Create dynamic content for the resume
    var dynamicresumeHTML = "<h2><b>Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(experience, "</p>");
    // To Display created resume
    if (displayResumeElement) {
        displayResumeElement.innerHTML = dynamicresumeHTML;
    }
    else {
        console.error('Display Element is missing');
    }
});
