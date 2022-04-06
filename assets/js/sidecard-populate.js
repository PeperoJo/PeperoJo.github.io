var URL = "https://josephhan.io/assets/js/sidecard-data.json";

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




function sidecardContainer(block) {
  this.info = block;


  var onclickaction = "";


  this.output = `
    <div class="sidecard">
      <div class="sideimg"
        style="
          width: 100%;
          height: 200px;
          background-color: #F2F3F5;
        ">
        <img src="assets/img/projects/moonranger2.png"
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
          background-color: red;
        "
      >
        hello
      </div>
    </div>


  `;
}

function populate(data) {
  for (i = 0; i < data.length; i++) {
    var project00 = new sidecardContainer(data[i]);
    if (project00.info.show) {
      $('#sideprojects').append(project00.output);
    }
  }
}
