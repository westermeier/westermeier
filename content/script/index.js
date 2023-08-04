fileInput = document.getElementById("fileInput");
imageInput = document.getElementById("imageInput");
videoInput = document.getElementById("videoInput");
iframe = document.getElementById("iframe");
/*
if (document.getSelection()) {
    alert(document.getSelection().toString())
}
*/
fileInput.addEventListener("change", e => {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        try {
            document.getElementById("content").innerHTML = reader.result;
        } catch (error) {
            alert(error)
        }
    })

    reader.readAsText(file);
});

imageInput.addEventListener("change", e => {
    const file = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        try {
            var image = reader.result;
            document.getElementById("content").innerHTML += '<img class="image" src="' + image + '">';
        } catch (error) {
            alert(error)
        }
    })

    reader.readAsDataURL(file);
});

videoInput.addEventListener("change", e => {
    const file = videoInput.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        try {
            var video = reader.result;
            document.getElementById("content").innerHTML += '<video controls class="video" src="' + video + '"></video>';
        } catch (error) {
            alert(error)
        }
    })

    reader.readAsDataURL(file);
});

function newFile() {
    var blob = new Blob([document.getElementById("content").innerHTML], { type: "text" })
    var link = URL.createObjectURL(blob);
    document.getElementById("link").href = link;
    document.getElementById("link").download = "index.alfa";
    document.getElementById("link").click();
}

function add(string) {
    document.getElementById("content").innerHTML += string;
}

function addHeader() {
    hIndex = headerInput.value;
    document.getElementById("content").innerHTML += '<h' + hIndex + '>Header' + '<h' + hIndex + '>';
}

function addUrlImage() {
    if (urlInput.value == null || urlInput.value == "") {
        url = prompt("Image Url : ");   
    }
    else {
        url = urlInput.value;
    }
    document.getElementById("content").innerHTML += '<img class="image" src="' + url + '">';
    urlInput.value = '';
}

function addLocalImage() {
    imageInput.click();
}

function addUrlVideo() {
    if (urlInput.value == null || urlInput.value == "") {
        url = prompt("Video Url : ");   
    }
    else {
        url = urlInput.value;
    }
    document.getElementById("content").innerHTML += '<video controls class="video" src="' + url + '"></video>';
    urlInput.value = '';
}

function addLocalVideo() {
    videoInput.click();
}