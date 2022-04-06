var URL = "https://josephhan.io/assets/js/sidecard-data.json";

// https://stackoverflow.com/questions/31763022/how-do-you-get-responsetext-from-jquery-getjson-method-in-javascript
var jsonData;
var jsonCall2 = $.getJSON(URL,function(){
   jsonData2 = JSON.parse(jsonCall2.responseText); //must be done here because it is asynchronous
   // console.log("within call:");
   console.log(jsonCall2);
   console.log(jsonData2.projects);
   populateSide(jsonData2.projects)
  });
//doesn't work here
// console.log("after call:");
// console.log(jsonData);




function sidecardContainer(block) {
  this.info = block;


  var onclickaction = "";


  this.output = `
    <div class="sidecard">
      <div class="sideimg"
        style="
          width: 100%;
          height: 200px;
          background-color: ${this.info.projectImg.bgcolor};
        ">
        <img src="${this.info.projectImg.src}"
        style="
        display: block;
          width: 100%;
          /* height: 100%; */
          margin-left: auto;
          margin-right: auto;
          /* padding-bottom: 20px; */
          /* background-color: blue; */
        "
        >
      </div>
      <div class="sideinfo p-3"
        style="
          display: block;
          white-space: normal;
        "
      >
        <div class="project2-tags">
          ${this.info.projectTags}
        </div>

        <div class="project2-title">
          ${this.info.projectTitle}
        </div>
        <div class="project2-descr">
          ${this.info.projectDescription}
        </div>
      </div>
    </div>


  `;
}

function populateSide(data) {
  for (i = 0; i < data.length; i++) {
    var project00 = new sidecardContainer(data[i]);
    if (project00.info.show) {
      $('#sideprojects').append(project00.output);
    }
  }
}
