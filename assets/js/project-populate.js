var URL = "https://josephhan.io/assets/js/project-data.json";

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


  var onclickaction = "";

  if (this.info.projectLink != ""){
    onclickAction = `onclick="window.open('${this.info.projectLink}','mywindow');"`;
  } else {
    onclickAction = ``;
  }


  this.output = `
  <div class="col-md-${this.info.projectContainersize} p-2">
    <div class="project2-container  proj-text-dark0 ${this.info.projectMiscClasses}" ${onclickAction}">


      <div class="project2-img ${this.info.status}"
        style="
          position: relative;
          width: 100%;
          height: 325px;
          background-color: ${this.info.projectImg.bgcolor};
          overflow: hidden;
        ">
        <img src="${this.info.projectImg.src}"
        style="

          height: 100%;
          position: absolute;
          top: -9999px;
          bottom: -9999px;
          left: -9999px;
          right: -9999px;
          margin: auto;
          /* margin-left: auto; */
          /* margin-right: auto; */
          /* padding-bottom: 20px; */
          /* background-color: blue; */
        "
        >
      </div>


      <div class="project2-info pt-4">
        <div style="position:relative; padding-bottom: 70px;">
          <div class="project2-tags">
            ${this.info.projectTags}
          </div>

          <div class="project2-title">
            ${this.info.projectTitle}
          </div>
          <div class="project2-descr">
            ${this.info.projectDescription}
          </div>

          <div class="project2-link d-none">
            <i class="fas fa-external-link-alt d-none"></i>
            <i class="fas fa-link"></i>
          </div>
        </div>
      </div>



    </div>
  </div>


  `;

  this.output1 = `
      <div class="col-md-${this.info.projectContainersize} p-2">
        <div class="project2-container  proj-text-dark0 ${this.info.projectMiscClasses}" onclick="window.open('${this.info.projectLink}','mywindow');">

          <div class="project2-info p-4 bg-blur">
            <div style="position:relative; padding-bottom: 40px;">
              <div class="project2-title">
                ${this.info.projectTitle}
              </div>
              <div class="project2-descr">
                ${this.info.projectDescription}
              </div>
              <div class="project2-tags">
                ${this.info.projectTags}
              </div>
              <div class="project2-link">
                <i class="fas fa-external-link-alt d-none"></i>
                <i class="fas fa-link"></i>
              </div>
            </div>

          </div>
          <div class="project2-img img-hover " id="moonranger" style="">
            <img src="${this.info.projectImg.src}"
            style="
              ${this.info.projectImg.style}
            "
            >
          </div>




        </div>
      </div>
    `;

  this.output2 = `
    <div class="col-md-${this.info.projectContainersize} p-2">
      <div class="project-container p-4 proj-text-dark0 ${this.info.projectMiscClasses}" onclick="window.open('${this.info.projectLink}','mywindow');">
        <div class="project-title">
          ${this.info.projectTitle}
        </div>
        <div class="project-descr">
          ${this.info.projectDescription}
        </div>
        <div class="project-tags p-4">
          ${this.info.projectTags}
        </div>
        <div class="project-link p-4">
          <i class="fas fa-external-link-alt d-none"></i>
          <i class="fas fa-link"></i>
        </div>
        <div class="project-img ${this.info.status}">
          <img src="${this.info.projectImg.src}" style="${this.info.projectImg.style}">
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
