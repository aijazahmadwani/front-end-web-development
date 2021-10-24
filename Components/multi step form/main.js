let states = [{
    "key": "AN",
    "name": "Andaman and Nicobar Islands"
},
{
    "key": "AP",
    "name": "Andhra Pradesh"
},
{
    "key": "AR",
    "name": "Arunachal Pradesh"
},
{
    "key": "AS",
    "name": "Assam"
},
{
    "key": "BR",
    "name": "Bihar"
},
{
    "key": "CG",
    "name": "Chandigarh"
},
{
    "key": "CH",
    "name": "Chhattisgarh"
},
{
    "key": "DH",
    "name": "Dadra and Nagar Haveli"
},
{
    "key": "DD",
    "name": "Daman and Diu"
},
{
    "key": "DL",
    "name": "Delhi"
},
{
    "key": "GA",
    "name": "Goa"
},
{
    "key": "GJ",
    "name": "Gujarat"
},
{
    "key": "HR",
    "name": "Haryana"
},
{
    "key": "HP",
    "name": "Himachal Pradesh"
},
{
    "key": "JK",
    "name": "Jammu and Kashmir"
},
{
    "key": "JH",
    "name": "Jharkhand"
},
{
    "key": "KA",
    "name": "Karnataka"
},
{
    "key": "KL",
    "name": "Kerala"
},
{
    "key": "LD",
    "name": "Lakshadweep"
},
{
    "key": "MP",
    "name": "Madhya Pradesh"
},
{
    "key": "MH",
    "name": "Maharashtra"
},
{
    "key": "MN",
    "name": "Manipur"
},
{
    "key": "ML",
    "name": "Meghalaya"
},
{
    "key": "MZ",
    "name": "Mizoram"
},
{
    "key": "NL",
    "name": "Nagaland"
},
{
    "key": "OR",
    "name": "Odisha"
},
{
    "key": "PY",
    "name": "Puducherry"
},
{
    "key": "PB",
    "name": "Punjab"
},
{
    "key": "RJ",
    "name": "Rajasthan"
},
{
    "key": "SK",
    "name": "Sikkim"
},
{
    "key": "TN",
    "name": "Tamil Nadu"
},
{
    "key": "TS",
    "name": "Telangana"
},
{
    "key": "TR",
    "name": "Tripura"
},
{
    "key": "UK",
    "name": "Uttar Pradesh"
},
{
    "key": "UP",
    "name": "Uttarakhand"
},
{
    "key": "WB",
    "name": "West Bengal"
}
];

let districts = [
    "Anantnag",
    "Bandipora",
    "Baramulla",
    "Budgam",
    "Doda",
    "Ganderbal",
    "Jammu",
    "Kathua",
    "Kishtwar",
    "Kulgam",
    "Kupwara",
    "Poonch",
    "Pulwama",
    "Rajouri",
    "Ramban",
    "Reasi",
    "Samba",
    "Shopian",
    "Srinagar",
    "Udhampur"
];

var formData = {}; // global variable to display data for preview form
let currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form ...
    let x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Preview";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    let x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    // if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab == 4) {
        addQualFileUploadDynamically();
        addExpFileUploadDynamically();
    }
    if (currentTab >= x.length) {
        addFilenameToQuals();
        addFilenameToExps();
        addPhotoFilenameToPDetails();
        addSignatureFilenameToPDetails();
        document.getElementById("preview").click();
        currentTab = currentTab - 1;
        //...the form gets submitted:
        //document.getElementById("recruitmentForm").submit();
        // return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    let i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";


    //step indicator on click function
    x[n].addEventListener('click',()=>{
        let t = document.getElementsByClassName("tab");
        for(let i=0;i<t.length;i++){
            t[i].style.display="none";
        }
        for (i = 0; i < x.length; i++) {
            x[i].className = x[i].className.replace(" active", "");
        }
        t[n].style.display = "block";
        x[n].className += " active";
        currentTab = n; 
    })
}


// ####################################################################
const statesElement = document.getElementById("states");
// show states select options
for (let i = 0; i < states.length; i++) {
    statesElement.innerHTML += `<option value="${states[i].key}">${states[i].name}</option>`;
}
const districtElement = document.getElementById("districts");
// show states select options
for (let i = 0; i < districts.length; i++) {
    districtElement.innerHTML += `<option value="${districts[i]}">${districts[i]}</option>`;
}

document.getElementById("nextBtn").addEventListener("click", e => {
    x = document.getElementsByClassName("tab");
    inputs = x[currentTab].querySelectorAll("input,select");
    let allValidated = true;
    for (let inp of inputs) {
        inp.reportValidity();
        if (!inp.checkValidity()) allValidated = false;
    }
    if (allValidated) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
        nextPrev(1);
    }
})

document.getElementById("prevBtn").addEventListener("click", e => {
    nextPrev(-1);
})
// function to delete dynamically added rows
const deleteRow = (e) => {
    e.parentElement.remove();
}

//   add rows dynamically for qualification tab
addQual = document.getElementById("addQual");
quals = document.getElementById("qualifications");
addQual.addEventListener('click', e => {
    const element = document.createElement('div');
    element.className = 'row border m-1 rounded';
    element.innerHTML = ` <div class="form-group col-md-6 col-lg-4">
                                    <label for="examName">Degree/Exam</label><span class="" style="color:red"> *
                                    </span>
                                    <div class="input-field">
                                        <i class="fas fa-graduation-cap"></i>
                                        <input type="text" placeholder="MCA" id="examName" name="exam_name" onchange="setQualName(getRowParent(this))" required>
                                    </div>

                                </div>
                                <div class="form-group col-md-6 col-lg-4">
                                    <label for="subjects">Subject(s)</label><span class="" style="color:red"> * </span>
                                    <div class="input-field">
                                        <i class="fas fa-newspaper"></i>
                                        <input type="text" placeholder="Computer Science" id="subjects" name="subjects"
                                            required>
                                    </div>

                                </div>
                                <div class="form-group col-md-6 col-lg-4">
                                    <label for="yearOfPassing">Year of Passing</label><span class="" style="color:red">
                                        *
                                    </span>
                                    <div class="input-field">
                                        <i class="fas fa-clock"></i>
                                        <input type="text" placeholder="Year of Passing" id="yearOfPassing"
                                            name="year_of_passing" maxlength="4" minlength="4" pattern="[0-9]{4}"
                                            title="Enter 4 digit year" placeholder="e.g. 2016" required>
                                    </div>

                                </div>
                                <div class="form-group col-md-6 col-lg-4">
                                    <label for="division">Division</label><span class="" style="color:red"> * </span>
                                    <div class="input-field">
                                        <i class="fas fa-award"></i>
                                        <input type="text" placeholder="Division" id="division" name="division"
                                            required>
                                    </div>

                                </div>
                                <div class="form-group col-md-6 col-lg-4">
                                    <label for="cgpa">%age / CGPA</label><span class="" style="color:red"> * </span>
                                    <div class="input-field">
                                        <i class="fas fa-percentage"></i>
                                        <input type="text" placeholder="e.g. 88.6" id="cgpa" name="percentage" required>
                                    </div>

                                </div>
                                <div class="form-group col-md-6 col-lg-4">
                                    <label for="university">Board/University</label><span class="" style="color:red">
                                        *
                                    </span>
                                    <div class="input-field">
                                        <i class="fas fa-university"></i>
                                        <input type="text" placeholder="Board / University" id="university"
                                            name="university" required>
                                    </div>

                                </div>
                                <input type="hidden" name="hidden_exam_name" value="" id="hiddenQualName">
                                <input type="hidden" name="hidden_file_name" value="" id="hidden_file_name">
                    <button type="button" class="btn btn-danger m-1 deleteQualBtn" onclick="deleteRow(this)">Delete</button>
                `;
    quals.appendChild(element);

})

//   add rows dynamically for experience tab
addExp = document.getElementById("addExp");
exp = document.getElementById("experiences");
addExp.addEventListener('click', e => {
    const element = document.createElement('div');
    element.className = 'row border m-1 rounded';
    element.style.width = "100%";
    element.innerHTML = `    <div class="form-group col-md-6 col-lg-4">
                                    <label for="designation">Designation</label>
                                    <div class="input-field">
                                        <i class="fas fa-briefcase"></i>
                                        <input type="text" placeholder="Designation" id="designation"
                                            name="designation" onchange="setDesignationName(getRowParent(this))">
                                    </div>

                                </div>
                                <div class="form-group col-md-6 col-lg-4">
                                    <label for="employer">Employer</label>
                                    <div class="input-field">
                                        <i class="fas fa-warehouse"></i>
                                        <input type="text" placeholder="Employer" id="employer" name="employer" onchange="setEmployerName(getRowParent(this))">
                                    </div>

                                </div>
                                <div class="form-group col-md-6 col-lg-4">
                                    <label for="payScale">Pay Scale</label>
                                    <div class="input-field">
                                        <i class="fas fa-rupee-sign"></i>
                                        <input type="text" placeholder="e.g. 15000" id="payScale" name="pay_scale">
                                    </div>

                                </div>
                               <div class="form-group col-md-6 col-lg-4">
                                    <label for="dob">Start Date</label>
                                    <div class="input-field">
                                        <i class="fas fa-calendar-alt"></i>
                                        <input class="" type="date" id="experience_start_date"
                                            name="experience_start_date" required
                                            onchange="calculateDate(getRowParent(this))">
                                    </div>
                                </div>
                                <div class="form-group col-md-6 col-lg-4">
                                    <label for="dob">End Date</label>
                                    <div class="input-field">
                                        <i class="fas fa-calendar-alt"></i>
                                        <input class="" type="date" id="experience_end_date" name="experience_end_date"
                                            required onchange="calculateDate(getRowParent(this))">
                                    </div>
                                </div>
                                <div class="form-group col-md-6 col-lg-4">
                                    <br>
                                    <br>
                                    <span id="experience_diff"></span>
                                </div>
                                 <input type="hidden" name="hidden_designation" value="" id="hidden_designation">
                                <input type="hidden" name="hidden_employer" value="" id="hidden_employer">
                                <input type="hidden" name="hidden_file_name" value="" id="hidden_file_name">
                    <button type="button" class="btn btn-danger m-1 deleteExpBtn" onclick="deleteRow(this)">Delete</button>`;
    exp.appendChild(element);
})
// ########################## add certificate dynamically
// addCertif = document.getElementById("addCertificate");
// certifications = document.getElementById("marks_certificates");

// addCertif.addEventListener('click', e => {
//     const element = document.createElement('div');
//     element.className = 'row  m-1 ';
//     element.style.width = "100%";
//     element.innerHTML = `<input type="file" class="form-control-file pdf-file p-1 m-2" accept=".pdf" name="marks_certificate" required>
//                     <button type="button" class="btn btn-danger m-2" onclick="deleteRow(this)">Delete</button>`;
//     certifications.appendChild(element);
// })

//############################################################################
//image validation
const IMAGE_TYPES = [
    "image/jpeg",
    "image/png",
    "image/jpg"
];
const loadImage = (file) => {
    return new Promise(resolve => {
        const image = new Image();

        image.addEventListener("load", () => {
            resolve(image);
        });
        image.src = window.URL.createObjectURL(file);
    })
}
async function getDimensions(file) {
    let img = await loadImage(file);
    return { "height": img.naturalHeight, "width": img.naturalWidth }
};
async function validate(elem) {
    let imagePreview = document.getElementById(elem.dataset["preview"]);
    imagePreview.innerHTML = "";
    if (!elem.files) return false;
    let file = elem.files[0];
    if (!IMAGE_TYPES.includes(file.type)) {
        elem.setCustomValidity("Invalid Type");
        elem.reportValidity();
        return false;
    }
    let dimensions = await getDimensions(file);
    if (dimensions.height !== parseInt(elem.dataset["height"]) || dimensions.width !== parseInt(elem.dataset["width"])) {
        elem.setCustomValidity("Dimensions not matching");
        elem.reportValidity();
        return false;
    }
    if (file.size > parseInt(elem.dataset["size"]) * 1024) {
        elem.setCustomValidity("File size is too large");
        elem.reportValidity();
        return false;
    }
    //image preview
    elem.setCustomValidity("");
    // change file name 
    // const myRenamedFile = new File([file], "aijaz.jpg");
    // console.log(myRenamedFile);

    const image = document.createElement('img');
    image.style.width = "100px";
    image.src = URL.createObjectURL(file);
    imagePreview.appendChild(image);

}


// pdf validation
const PDF_TYPES = [
    "application/pdf"
];
function validatePDF(ele) {
    let file = ele.files[0];
    if (!PDF_TYPES.includes(file.type)) {
        ele.setCustomValidity("Invalid Type");
        ele.reportValidity();
        return false;
    }
    if (file.size > 1024 * 1024) {
        ele.setCustomValidity("File size is too large");
        ele.reportValidity();
        return false;
    }
    //console.log(URL.createObjectURL(file))
    ele.setCustomValidity("");

}

// let pdfs = document.getElementsByClassName("pdf-file");
// for (let item of pdfs) {
//     item.addEventListener('change', e => {
//         let file = e.target.files[0];
//         if (!PDF_TYPES.includes(file.type)) {
//             e.target.setCustomValidity("Invalid Type");
//             // item.reportValidity();
//             return false;
//         }
//         if (file.size > 1024 * 1024) {
//             //console.log(file.size);
//             e.target.setCustomValidity("File size is too large");
//             // e.target.reportValidity();
//             return false;
//         }
//         //console.log(URL.createObjectURL(file))
//         e.target.setCustomValidity("");
//     })
// }


// form preview ####################################################################
reportBtn = document.getElementById("preview");
reportBtn.addEventListener('click', async () => {

    // let formData = {};
    //personal details
    personalDetailElement = document.getElementById("personalDetails");
    let personalDetails = personalDetailElement.querySelectorAll("select,input");
    for (let i of personalDetails) {
        formData[i.name] = i.value;
    }
    //address details
    addressDetailsElement = document.getElementById("addressDetails");
    let addressDetails = addressDetailsElement.querySelectorAll("select,input");
    for (let i of addressDetails) {
        formData[i.name] = i.value;
    }

    // qualifications 
    let qualificationElement = document.getElementById("qualifications");
    let qualRows = qualificationElement.getElementsByClassName("row");
    let qualifications = [];
    for (let row of qualRows) {
        let rowData = {}
        for (let inp of row.querySelectorAll("input")) {
            rowData[inp.name] = inp.value
        }
        qualifications.push(rowData);
    }
    formData["qualifications"] = qualifications;
    // experiences
    let experienceElement = document.getElementById("experiences");
    let expRows = experienceElement.getElementsByClassName("row");
    let experiences = [];
    for (let row of expRows) {
        let rowData = {}
        for (let inp of row.querySelectorAll("input")) {
            rowData[inp.name] = inp.value

        }
        experiences.push(rowData);
    }
    formData["experiences"] = experiences;

    //convert images (photo and signature ) to base 64
    let photo = document.getElementById('photo');
    let signature = document.getElementById('signature');
    let photoB64 = await b64(photo.files[0]);
    let signatureB64 = await b64(signature.files[0]);
    //console.log(signatureB64);
    // console.log(photoB64);
    formData["photo"] = photoB64;
    formData["signature"] = signatureB64;
    //console.log(formData);

    //marks certificates
    let marks_certificate_element = document.getElementById("marks_certificates");
    let marks_rows = marks_certificate_element.getElementsByClassName("row");
    let marks_certificates = [];
    for (let row of marks_rows) {
        let rowData = {}
        for (let inp of row.querySelectorAll("input")) {
            blobURL = window.URL.createObjectURL(inp.files[0]);
            //let inpB64 = await b64(inp.files[0]);
            rowData[inp.name] = blobURL;
        }
        marks_certificates.push(rowData);
    }
    formData["marks_certificates"] = marks_certificates;
    // experience certificates
    let exp_certificate_element = document.getElementById("experiences_certificates");
    let exp_rows = exp_certificate_element.getElementsByClassName("row");
    let exp_certificates = [];
    for (let row of exp_rows) {
        let rowData = {}
        for (let inp of row.querySelectorAll("input")) {
            blobURL = window.URL.createObjectURL(inp.files[0]);
            //let inpB64 = await b64(inp.files[0]);
            rowData[inp.name] = blobURL;
        }
        exp_certificates.push(rowData);
    }
    formData["experiences_certificates"] = exp_certificates;

    categoryCertificateElement = document.getElementById("category_certificate");
    categoryCertificateURL = window.URL.createObjectURL(categoryCertificateElement.files[0]);
    formData["category_certificate"] = categoryCertificateURL;
    fillData(formData);
})

// function to convert images to base 64
async function b64(file) {
    return new Promise(resolve => {
        reader = new FileReader();
        reader.addEventListener("load", function (e) {
            resolve(e.target.result);
        });
        reader.readAsDataURL(file);
    })
}

// fill data in preview form
function fillData(data) {
    console.log(data);
    document.getElementById("experiencesbody").innerHTML = "";
    document.getElementById("qualificationsbody").innerHTML = "";
    document.getElementById("preview_marks_certificates").innerHTML = "";
    document.getElementById("preview_experience_certificates").innerHTML = "";
    document.getElementById("preview_category_certificate").innerHTML = "";

    let static_elements = document.getElementsByClassName("preview_static");
    for (let ele of static_elements) {
        key = ele.dataset["key"];
        ele.innerHTML = " " + data[key];
    }
    //  show qualifications
    document.getElementById("qualificationsbody").innerHTML += data.qualifications.map((qual, idx) => {
        return `
            <tr>
                    <th scope="row">${idx + 1}</th>
                    <td>${qual.exam_name}</td>
                    <td>${qual.subjects}</td>
                    <td>${qual.year_of_passing}</td>
                    <td>${qual.division}</td>
                    <td>${qual.percentage}</td>
                    <td>${qual.university}</td>
            </tr>
            `
    }).join("");
    // show experiences
    document.getElementById("experiencesbody").innerHTML += data.experiences.map((exp, idx) => {
        return `
            <tr>
                    <th scope="row">${idx + 1}</th>
                    <td>${exp.designation}</td>
                    <td>${exp.employer}</td>
                    <td>${exp.pay_scale}</td>
                    <td>${exp.experience_start_date}</td>
                    <td>${exp.experience_end_date}</td>
                    <td>${previewDuration(exp.experience_start_date, exp.experience_end_date)}</td>
            </tr>
            `
    }).join("");
    // show image and signature
    let photo = document.getElementById("preview_photo");
    let signature = document.getElementById("preview_signature");
    photo.src = data.photo;
    signature.src = data.signature;

    //show preview link for marks certificates pdf files.
    document.getElementById("preview_marks_certificates").innerHTML += data.marks_certificates.map((mark) => {
        return `<li class="view"><a href="${mark.marks_certificate}" target="_blank"> View</a></li>`
    }).join("");
    //show preview link for experience certificates pdf files.
    document.getElementById("preview_experience_certificates").innerHTML += data.experiences_certificates.map((exp) => {
        return `<li class="view"><a href="${exp.experience_certificate}" target="_blank"> View</a></li>`
    }).join("");

    //show preview link for category and experience certificates pdf files.
    // document.getElementById("preview_experience_certificates").innerHTML += `<a href="${data.experience_certificate}" target="_blank"> View</a>`;;
    document.getElementById("preview_category_certificate").innerHTML += `<a href="${data.category_certificate}" target="_blank"> View</a>`;
}



// get the closet parent row of an element
function getRowParent(elem) {
    return elem.closest(".row")
}

// function to calculate no. of years and months for experience tab
function calculateDate(parent) {
    // console.log(parent)
    let start_date = parent.querySelector("#experience_start_date").value, end_date = parent.querySelector("#experience_end_date").value;
    //console.log(start_date)
    if (!start_date || !end_date) {
        return;
    }
    else {
        let a = luxon.DateTime.fromISO(end_date);
        let b = luxon.DateTime.fromISO(start_date);

        let diff = a.diff(b, ['years', 'months', 'days']);

        parent.querySelector("#experience_diff").innerText = diff.toFormat("y 'years' M 'months' d 'days'")
    }
}

// calculate duration for preview form 
function previewDuration(start_date, end_date) {
    let a = luxon.DateTime.fromISO(end_date);
    let b = luxon.DateTime.fromISO(start_date);

    let diff = a.diff(b, ['years', 'months', 'days']);
    return diff.toFormat("y 'years' M 'months' d 'days'");
}


// function to print form at end
function printForm() {
    let printContent = document.querySelector(".modal-body");
    // let view = document.querySelectorAll(".view");
    console.log(printContent);
    let WinPrint = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');
    WinPrint.document.write('<html><head>');
    WinPrint.document.write(`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity = "sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin = "anonymous" >`);
    WinPrint.document.write('<link rel="stylesheet" href="./style.css">');
    WinPrint.document.write('</head><body onload="print();">');
    WinPrint.document.write(printContent.innerHTML);
    //  WinPrint.document.removeChild(view);
    WinPrint.document.close();
    WinPrint.focus();
    // WinPrint.print();
    // WinPrint.close();
    //return true;
}

// function to set qualification name to hidden input field
function setQualName(parent) {
    let qual = parent.querySelector("#examName").value;
    parent.querySelector("#hiddenQualName").value = qual;
}
// add qualifications file upload options dynamically for last section
function addQualFileUploadDynamically() {
    let qual = {};
    // qualifications 
    let qualificationElement = document.getElementById("qualifications");
    let qualRows = qualificationElement.getElementsByClassName("row");
    let qualifications = [];
    for (let row of qualRows) {
        let rowData = {}
        for (let inp of row.querySelectorAll("input")) {
            rowData[inp.name] = inp.value
        }
        qualifications.push(rowData);
    }
    qual["qualifications"] = qualifications;
    document.getElementById("marks_certificates").innerHTML = "";
    document.getElementById("marks_certificates").innerHTML += qual.qualifications.map((qual) => {
        return `<div class="row  m-1 " style="width: 100%;">
                                        <label id="">${qual.exam_name}</label>
                                        <input type="file" onchange="validatePDF(this);" class="form-control-file pdf-file p-1 m-2" accept=".pdf"
                                            name="marks_certificate" required>
                                    </div>`
    }).join("");

}

// this function will add file name of uploaded qualifications files to  qualification section (manual input section)
function addFilenameToQuals() {
    console.log(formData);
    let marks_certificates = document.getElementById("marks_certificates");
    let marksRows = marks_certificates.getElementsByClassName("row");
    let qualificationElement = document.getElementById("qualifications");
    let qualRows = qualificationElement.getElementsByClassName("row");
    let marks_file_names = [];
    for (let row of marksRows) {
        let mark = row.querySelector("input");
        let file_name = mark.files[0].name;
        marks_file_names.push(file_name);
    }
    let i = 0;
    for (let row of qualRows) {
        let temp = row.querySelector("#hidden_file_name");
        temp.value = marks_file_names[i];
        i = i + 1;
    }
}


// function to set  designation name to hidden input field
function setDesignationName(parent) {
    let designation = parent.querySelector("#designation").value;
    parent.querySelector("#hidden_designation").value = designation;
}
// function to set employer name to hidden input field
function setEmployerName(parent) {
    let employer = parent.querySelector("#employer").value;
    parent.querySelector("#hidden_employer").value = employer;
}

// add exper`i`ence file upload options dynamically for last section
function addExpFileUploadDynamically() {
    let exp = {};
    let experienceElement = document.getElementById("experiences");
    let expRows = experienceElement.getElementsByClassName("row");
    let experiences = [];
    for (let row of expRows) {
        let rowData = {}
        for (let inp of row.querySelectorAll("input")) {
            rowData[inp.name] = inp.value
        }
        experiences.push(rowData);
    }
    exp["experiences"] = experiences;
    document.getElementById("experiences_certificates").innerHTML = "";
    document.getElementById("experiences_certificates").innerHTML += exp.experiences.map((exp) => {
        return `<div class="row  m-1 " style="width: 100%;">
                                        <label id="">${exp.hidden_designation} ${exp.hidden_employer}</label>
                                        <input type="file" onchange="validatePDF(this);" class="form-control-file pdf-file p-1 m-2" accept=".pdf"
                                            name="experience_certificate" required>
                                    </div>`
    }).join("");

}

// this function will add file name of uploaded experience files to experience section (manual input section)
function addFilenameToExps() {
    let exp_certificates = document.getElementById("experiences_certificates");
    let exp_cert_Rows = exp_certificates.getElementsByClassName("row");
    let experiencesElement = document.getElementById("experiences");
    let expRows = experiencesElement.getElementsByClassName("row");
    let exp_file_names = [];
    for (let row of exp_cert_Rows) {
        let exp = row.querySelector("input");
        let file_name = exp.files[0].name;
        exp_file_names.push(file_name);
    }
    let i = 0;
    for (let row of expRows) {
        let temp = row.querySelector("#hidden_file_name");
        temp.value = exp_file_names[i];
        i = i + 1;
    }
}

// add file name of photo and signature to personal details section
function addPhotoFilenameToPDetails() {
    let photoElement = document.getElementById("hiddenPhotoFile");
    photoElement.value = getPhotoFilename();
}
function addSignatureFilenameToPDetails() {
    let signatureElement = document.getElementById("hiddenSignatureFile");
    signatureElement.value = getSignatureFilename();
}

function getPhotoFilename() {
    let photo = document.getElementById("photo");
    return photo.files[0].name;
}

function getSignatureFilename() {
    let signature = document.getElementById("signature");
    return signature.files[0].name;
}


//fucntion to rename files before upload
