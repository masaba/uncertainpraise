// ## High-level overview
// Things happen in this order:
// 

// ASSIGN VARIABLES

var Susan_SP_1 = ["SusanSP1_video","SusanSP1_memcheck"]
var Jane_SP_1 = ["JaneSP1_video","JaneSP1_memcheck"]

var Susan_OP_1 = ["SusanOP1_video","SusanOP1_memcheck"]
var Jane_OP_1 = ["JaneOP1_video","JaneOP1_memcheck"]

var Susan_SP_2 = ["SusanSP2_video","SusanSP2_memcheck"]
var Jane_SP_2 = ["JaneSP2_video","JaneSP2_memcheck"]

var Susan_OP_2 = ["SusanOP2_video","SusanOP2_memcheck"]
var Jane_OP_2 = ["JaneOP2_video","JaneOP2_memcheck"]

var SusanSP1_JaneOP2 = [Susan_SP_1, Jane_OP_2];
var SusanOP1_JaneSP2 = [Susan_OP_1, Jane_SP_2];
var JaneSP1_SusanOP2 = [Jane_SP_1, Susan_OP_2];
var JaneOP1_SusanSP2 = [Jane_OP_1, Susan_SP_2];

// var stimuli = shuffle([SusanSP1_JaneOP2, SusanOP1_JaneSP2, JaneSP1_SusanOP2, JaneOP1_SusanSP2]).shift() // how to select just one order? 

var teachers = shuffle(["susan","jane"])
var teacher_order = shuffle(["overpraise_selective","selective_overpraise"])
var stimuli_type = ["video","memcheck","video","memcheck"]


//var selective = teachers.shift()
//var overpraise = teachers.shift()

// var condition = {
//     SusanSP1_JaneOP2: SusanSP1_JaneOP2,
//     SusanOP1_JaneSP2: SusanOP1_JaneSP2,
//     JaneSP1_SusanOP2: JaneSP1_SusanOP2,
//     JaneOP1_SusanSP2: JaneOP1_SusanSP2
// };

// HELPER FUNCTIONS

// Shows slides. We're using jQuery here - the **$** is the jQuery selector function, which takes as input either a DOM element or a CSS selector string.
function showSlide(id) {
  // Hide all slides
  $('html,body').scrollTop(0);
	$(".slide").hide();
	// Show just the slide we want to show
	$("#"+id).show();
}

function showTeacherVideo(trialname) {

  var newSlide = $('<div/>', {
      id: 'trial_'+trialname,
      class: "slide",
  });

SlideName = 'trial_'+trialname;

      var textDiv = $('<div/>', {
        id: 'text' + trialname,
        class: "trial",
    });

    textDiv.html('<div style="width: 500px; margin: 0 auto; text-align: center; padding: 20px 15px 10px 10px"></div>\n' +
                 '<p class="block-text"><center>Meet Teacher <b>'+experiment.curr_teacher+'</b>! <br> Wait for the video to load and turn your volume up before playing the movie.<br> You must watch the whole video before proceeding to the next page.</center></p></div>\n');
newSlide.append(textDiv);

    var videoDiv = $('<div/>', {
        id: 'video' + trialname,
        class: "trial",
    });

    videoDiv.html('<div style="width: 500px; margin: 0 auto; text-align: center; padding: 20px 15px 10px 10px"></div>\n' +
    //'<center> <a href = "http://web.stanford.edu/~masaba/TEDEstimation/"\n' +
    '<center><video id = "curr_video'+trialname+'" width="640" height="480" controls src="http://web.stanford.edu/~masaba/praise/videos/'+trialname+'.mp4"\n' +
    '  Your browser does not support the video tag.</video>');
      newSlide.append(videoDiv);

  var ButtonDiv = $('<div/>', {
        id: 'button',
        class: 'button',
    });

ButtonDiv.html('<button type="button" onclick="this.blur(); experiment.next()">Next</button>');
newSlide.append(ButtonDiv);

var errorMessDiv = $('<div/>', {
        id: 'errorMessage' + trialname,
        class: 'errorMessage',
    });

errorMessDiv.html('<div <tr><td align="center">\n' +
      '<center><div id="error_timeatt'+trialname+'"></div></center>\n' +
      '</td></tr>\n' +
      '<br><br>');

newSlide.append(errorMessDiv);

$("body").append(newSlide);
showSlide(SlideName);

}

function showTeacherMemCheck(trialname) {

  var newSlide = $('<div/>', {
      id: 'trial_'+trialname,
      class: "slide",
  });

SlideName = 'trial_'+trialname;

      var textDiv = $('<div/>', {
        id: 'text' + trialname,
        class: "trial",
    });

    textDiv.html('<div style="width: 500px; margin: 0 auto; text-align: center; padding: 20px 15px 10px 10px"></div>\n' +
                 '<p class="block-text"><center>How many tracings did Teacher '+experiment.curr_teacher+' say were great?</center></p></div>\n');
    
    newSlide.append(textDiv);


   var checkDiv = $('<div/>', {
        id: 'check_' + trialname,
        class: "trial",
    }); 

   checkDiv.html('<center><form id="memcheck_form'+experiment.curr_teacher+'"><br>'+
                '<select name="memcheck_'+experiment.curr_teacher+'">'+
                '<option value="blank"></option>'+
                '<option value="1">1 tracing</option>'+
                '<option value="2">2 tracings</option>'+
                '<option value="3">3 tracings</option>'+
                '<option value="4">4 tracings</option>'+
                '<option value="5">5 tracings</option>'+
                '<option value="6">6 tracings</option></select></form>');

    // '<center><input type="radio" form id= "memcheck'+trialname+'" name="numtracings" value="1">1<br>'+
    //             '<input type="radio" id= "memcheck2'+trialname+'" name="numtracings" value="2">2<br>'+
    //             '<input type="radio" id= "memcheck3'+trialname+'" name="numtracings" value="3">3<br>'+
    //             '<input type="radio" id= "memcheck4'+trialname+'" name="numtracings" value="4">4<br>'+
    //             '<input type="radio" id= "memcheck5'+trialname+'" name="numtracings" value="5">5<br>'+
    //             '<input type="radio" id= "memcheck6'+trialname+'" name="numtracings" value="6">6<br>');

   newSlide.append(checkDiv)

      var ButtonDiv = $('<div/>', {
        id: 'button',
        class: 'button',
    });

ButtonDiv.html('<br><button type="button" onclick="this.blur(); submitMemCheck(); experiment.next();">Next</button>');
newSlide.append(ButtonDiv);


$("body").append(newSlide);
showSlide(SlideName);

}

// Shuffle array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Submitting Demographics Page
function submitDemographics(){
  data = $('#demographicsForm').serializeArray();  
  experiment.demographics.push(data);
  experiment.end();
}

function submitMemCheck(){
  name1 = '#memcheck_form'
  name = name1.concat(experiment.curr_teacher)
  data = $(name).serializeArray();
  experiment.memcheck_response.push(data);
}

function submitWarmUp(){
  data = $('#warmupForm').serializeArray();
  experiment.warmup_response.push(data);
}

function submitTestQuestion(){
  data = $('#which_tracing').serializeArray();
  experiment.tracing_response.push(data);

  exp = $('#explanation').serializeArray();
  experiment.explanation = document.getElementById("explanation").value;
}

function submitNicer(){
  data = $('#whos_nicer').serializeArray();
  experiment.nicer_response.push(data);
}

function playPause(trialname) {
var myVideo = document.getElementById();
function playPause() { 
    if (myVideo.paused) 
        myVideo.play(); 
    else 
        myVideo.pause(); 
} 
}

showSlide("instructions");


var experiment = {
  // Parameters for this sequence.
 // OP: teachers.shift(),
 //  SP: teachers.shift(),
  trial_order: shuffle(["SP","OP"],["OP","SP"]),
  teacher_order: shuffle(["Jane","Susan"],["Susan","Jane"]),
  curr_trial: "1",
  curr_teacher: "",
  curr_type: "",
  curr_num: "",
  demographics: [],
  curr_video: "",
  trial_num: ["warmup_evaluation", "introduction","1_video","1_memcheck","2_video","2_memcheck","test_intro1","test_intro2","test_final", "test_nicer"],
  memcheck_name: "",
  memcheck_response: [],
  warmup_response: [],
  tracing_response: [],
  nicer_response: [],
  explanation: "",

next: function() {

  experiment.curr_trial = experiment.trial_num.shift()
    experiment.curr_type = stimuli_type.shift()

  if (experiment.curr_trial == "warmup_evaluation") {
    showSlide("warmup_evaluation")
  }

  else if (experiment.curr_trial == "introduction") {
    showSlide("intro")
  }

  else if (experiment.curr_trial == "1_video") {
    experiment.curr_teacher = experiment.teacher_order[0]
    experiment.curr_num = "1";
    var video_name = experiment.curr_num.concat("_",experiment.trial_order[0],"_",experiment.teacher_order[0])
    experiment.curr_video = video_name;
    showTeacherVideo(video_name)
  }

  else if (experiment.curr_trial == "1_memcheck") {
    experiment.curr_teacher = experiment.teacher_order[0]
    experiment.curr_num = "1";
  //  var image_name = experiment.curr_num.concat("_",experiment.trial_order[0],"_",experiment.teacher_order[0],"_pic")
    showTeacherMemCheck("1_memcheck")
  }

  else if (experiment.curr_trial == "2_video") {
    experiment.curr_teacher = experiment.teacher_order[1]
    experiment.curr_num = "2";
    var video_name = experiment.curr_num.concat("_",experiment.trial_order[1],"_",experiment.teacher_order[1])
    experiment.curr_video = video_name;
    showTeacherVideo(video_name)
}
  else if (experiment.curr_trial == "2_memcheck") {
    experiment.curr_teacher = experiment.teacher_order[1]
    experiment.curr_num = "2";

    //var image_name = experiment.curr_num.concat("_",experiment.trial_order[1],"_",experiment.teacher_order[1],"_pic")
    showTeacherMemCheck("2_memcheck")
  }

  else if (experiment.curr_trial == "test_intro1") {
    showSlide("test_intro1")
  }

  else if (experiment.curr_trial == "test_intro2") {
    showSlide("test_intro2")
  }

  else if (experiment.curr_trial == "test_final") {
    showSlide("test_final")
  }
  else if (experiment.curr_trial == "test_nicer") {
    showSlide("test_nicer")
  }

else {
showSlide("demographics");


}


  },

  end: function() {
    // Show the finish slide.
    showSlide("finished");
    // Wait 1.5 seconds and then submit the whole experiment object to Mechanical Turk (mmturkey filters out the functions so we know we're just submitting properties [i.e. data])
    // setTimeout(function() { turk.submit(experiment) }, 1500);
    turk.submit(experiment)
  },
}
