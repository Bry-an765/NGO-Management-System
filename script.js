



function openModal() {
    var overlay = document.getElementById("overlay");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
}



function closeModal() {
    var overlay = document.getElementById("overlay");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
}



function closeIfOutside(event) {
    var overlay = document.getElementById("overlay");
    if (event.target === overlay) {
        closeModal();
    }
}



document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});



function saveProgram() {


    var name          = document.getElementById("prog-name").value;
    var description   = document.getElementById("prog-desc").value;
    var category      = document.getElementById("prog-category").value;
    var status        = document.getElementById("prog-status").value;
    var startDate     = document.getElementById("start-date").value;
    var endDate       = document.getElementById("end-date").value;
    var beneficiaries = document.getElementById("beneficiaries").value;
    var budget        = document.getElementById("budget").value;

    
    if (name.trim() === "") {
        alert("Please enter a program name.");
        document.getElementById("prog-name").focus();
        return;
    }

    if (category === "") {
        alert("Please select a category.");
        document.getElementById("prog-category").focus();
        return;
    }

    if (status === "") {
        alert("Please select a status.");
        document.getElementById("prog-status").focus();
        return;
    }

if (startDate !== "" && endDate !== "") {
    if (endDate < startDate) {
        alert("End date cannot be before the start date.");
        document.getElementById("end-date").focus();
        return;
    }
}

    
    var programData = {
        name:          name,
        description:   description,
        category:      category,
        status:        status,
        startDate:     startDate,
        endDate:       endDate,
        beneficiaries: beneficiaries,
        budget:        budget
    };

    
    console.log("New program saved:", programData);

    
    closeModal();
    showToast();
    clearForm();
}


function showToast() {
    var toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(function() {
        toast.classList.remove("show");
    }, 3000);
}



function clearForm() {
    document.getElementById("prog-name").value          = "";
    document.getElementById("prog-desc").value          = "";
    document.getElementById("prog-category").value      = "";
    document.getElementById("prog-status").value        = "";
    document.getElementById("start-date").value         = "";
    document.getElementById("end-date").value           = "";
    document.getElementById("beneficiaries").value      = "";
    document.getElementById("budget").value             = "";
}