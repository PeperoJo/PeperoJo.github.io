var URL = "https://josephhan.io/js/project-data.json";

// https://stackoverflow.com/questions/31763022/how-do-you-get-responsetext-from-jquery-getjson-method-in-javascript
var jsonData;
var jsonCall = $.getJSON(URL,function(){
   jsonData = JSON.parse(jsonCall.responseText); //must be done here because it is asynchronous
   // console.log("within call:");
   console.log(jsonCall);
   console.log(jsonData.projects);
   populate(jsonData.projects)
  });
//doesn't work here
// console.log("after call:");
// console.log(jsonData);




function projectContainer(block) {
  this.info = block;

  this.output = `
    <div class="col-md-${this.info.projectContainersize} p-2">
      <div class="project-container p-3 proj-text-dark0 ${this.info.projectMiscClasses}" onclick="window.open('${this.info.projectLink}','mywindow');">
        <div class="project-title">
          ${this.info.projectTitle}
        </div>
        <div class="project-descr">
          ${this.info.projectDescription}
        </div>
        <div class="project-tags p-3">
          ${this.info.projectTags}
        </div>
        <div class="project-link p-3">
          <i class="fas fa-external-link-alt"></i>
        </div>
        <div class="project-img">
          <img src="${this.info.projectImg.src}" height="${this.info.projectImg.height}">
        </div>
      </div>
    </div>
    `;
}

function populate(data) {
  for (i = 0; i < data.length; i++) {
    var project00 = new projectContainer(data[i]);
    if (project00.info.show) {
      $('#projects').append(project00.output);
    }
  }
}
