var data = [{
    "show": true,

    "projectTitle": "flagship project testing",

    "projectDescription": "This is created from JS",

    "projectTags": "Web Development | Testing | Tags",

    "projectImg": {
      "src": "img/projects/random.png",
      "height": "50%",
    },

    "projectLink": "https://google.com",

    "projectContainersize": "12",

    "projectMiscClasses": ""
  },

  {
    "show": true,

    "projectTitle": "Secondary Project A",

    "projectDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem est, aliquam ut libero id, tincidunt mollis odio.",

    "projectTags": "UI/UX Design | Mobile App",

    "projectImg": {
      "src": "img/projects/placeholder.png",
      "height": "60%",
    },

    "projectLink": "https://google.com",

    "projectContainersize": "6",

    "projectMiscClasses": ""
  },

  {
    "show": true,

    "projectTitle": "Secondary Project B",

    "projectDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem est, aliquam ut libero id, tincidunt mollis odio.",

    "projectTags": "UI/UX Design | Mobile App",

    "projectImg": {
      "src": "img/projects/placeholder.png",
      "height": "60%",
    },

    "projectLink": "https://facebook.com",

    "projectContainersize": "6",

    "projectMiscClasses": ""
  },

  {
    "show": false,

    "projectTitle": "Mini 1",

    "projectDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem est, aliquam ut libero id, tincidunt mollis odio.",

    "projectTags": "UI/UX Design | Mobile App",

    "projectImg": {
      "src": "img/projects/placeholder.png",
      "height": "60%",
    },

    "projectLink": "https://facebook.com",

    "projectContainersize": "4",

    "projectMiscClasses": ""
  },

];


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

function populate(){
  for (i = 0; i < data.length; i++) {
    var project00 = new projectContainer(data[i]);
    if (project00.info.show) {
      $('#projects').append(project00.output);
    }
  }
}
populate();

var ajaxJSON;
$.getJSON("https://josephhan.io/js/project-data.json", function(ajaxJSON){
  // console.log( "JSON Data: " + json[0].projectTitle );
  console.log( "JSON Data: " + ajaxJSON);

});
