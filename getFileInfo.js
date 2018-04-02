    var message = "";
    
    if (document.fileCreatedDate) {
        message += "The document file was created at: <b>" + document.fileCreatedDate + "</b><br />";
    }
    if (document.fileModifiedDate) {
        message += "The document file was last modified at: <b>" + document.fileModifiedDate + "</b><br />";
    }
    if (document.lastModified) {
        message += "The document file was last modified at: <b>" + document.lastModified + "</b><br />";
    }
    if (document.fileUpdatedDate) {
        message += "The document file was last updated at: <b>" + document.fileUpdatedDate + "</b><br />";
    }
    if (document.fileSize) {
        message += "The size of the document file is: <b>" + document.fileSize + " bytes</b><br />";
    }
    
    var info = document.getElementById ("info");
    info.innerHTML = message;