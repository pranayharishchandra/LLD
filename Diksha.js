var CONSTANTS = {
  loader: "<div style='display: flex;height: 300px;justify-content: center;align-items: center;'><img src='" + page.book_loader + "' style='width: 150px;margin: 0 auto; vertical-align: middle;'/></div>"
}

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
    }
  }
  return false;
};

var activeSubId = false;


$(document).on("click", "#module .panel-heading:not(.sub-heading)", function () {
  let active = $(this).attr("data-module")
  activeSubId = $(this).attr("id");
  let url = document.location.href
  if (getUrlParameter('modeActive') == false) {
    url = url + "&modeActive=" + active
  } else {
    let exurl = url.split("&modeActive")
    url = exurl[0] + "&modeActive=" + active
  }
  url = url.replace(window.location.origin, "");
  window.history.pushState(null, '', url);
  // modeActive=1609
})

$(document).ready(function () {
  if (accessCookie("tab") == "Syllabus" && accessCookie("course") == page.courseid && accessCookie("section") == page.section) {
    $('#nav-syllabus-tab').trigger('click');
    $(".breadcrumb-item.active").text(page.lang_syllabus);
    $(".page-heading-item.active").text(page.lang_syllabus);
  } else if (accessCookie("tab") == "Modules" && accessCookie("course") == page.courseid && accessCookie("section") == page.section) {
    $('#nav-modules-tab').trigger('click');
    $(".breadcrumb-item.active").text(page.lang_modules);
    $(".page-heading-item.active").text(page.lang_modules);
  } else if (accessCookie("tab") == "Assignments" && accessCookie("course") == page.courseid && accessCookie("section") == page.section) {
    $("#nav-assignments-tab").trigger('click');
    $(".breadcrumb-item.active").text(page.lang_assignments);
    $(".page-heading-item.active").text(page.lang_assignments);
  } else if (accessCookie("tab") == "Quiz" && accessCookie("course") == page.courseid && accessCookie("section") == page.section) {
    $("#nav-quiz-tab").trigger('click');
    $(".breadcrumb-item.active").text(page.lang_quiz);
    $(".page-heading-item.active").text(page.lang_quiz);
  } else if (accessCookie("tab") == "Mapping" && accessCookie("course") == page.courseid && accessCookie("section") == page.section) {
    $('#nav-question-mapping-tab').trigger('click');
    $(".breadcrumb-item.active").text(page.lang_quiz);
    $(".page-heading-item.active").text(page.lang_quiz);
  } else if (accessCookie("tab") == "Grades" && accessCookie("course") == page.courseid && accessCookie("section") == page.section) {
    $('#nav-grades-tab').trigger('click');
    $(".breadcrumb-item.active").text(page.lang_grades);
    $(".page-heading-item.active").text(page.lang_grades);
  } else if (accessCookie("tab") == "Discussions" && accessCookie("course") == page.courseid && accessCookie("section") == page.section) {
    $('#nav-discussions-tab').trigger('click');
    $(".breadcrumb-item.active").text(page.lang_discussions);
    $(".page-heading-item.active").text(page.lang_discussions);
  } else if (accessCookie("tab") == "Course Goal" && accessCookie("course") == page.courseid && accessCookie("section") == page.section) {
    $('#nav-course-goal-tab').trigger('click');
    $(".breadcrumb-item.active").text(page.lang_discussions);
    $(".page-heading-item.active").text(page.lang_discussions);
  } else if (accessCookie("tab") == "Announcements" && accessCookie("course") == page.courseid && accessCookie("section") == page.section) {
    $('#nav-announcements-tab').trigger('click');
    $(".breadcrumb-item.active").text(page.lang_announcements);
    $(".page-heading-item.active").text(page.lang_announcements);
  } else if (accessCookie("tab") == "Feedback" && accessCookie("course") == page.courseid && accessCookie("section") == page.section) {
    $('#nav-feedback-tab').trigger('click');
    $(".breadcrumb-item.active").text(page.lang_announcements);
    $(".page-heading-item.active").text(page.lang_announcements);
  } else {
    $('#nav-syllabus-tab').trigger('click');
    $(".breadcrumb-item.active").text(page.lang_syllabus)
    $(".page-heading-item.active").text(page.lang_syllabus);
  }
});

$("#nav-syllabus-tab").click(function () {
  render_syllabus();
  $(".breadcrumb-item.active").text(page.lang_syllabus);
  $(".page-heading-item.active").text(page.lang_syllabus);
  createCookie("tab", "Syllabus");
  createCookie("course", page.courseid);
  createCookie("section", page.section);
  // switchTab('syllabus');
});

$("#nav-assignments-tab").click(function () {
  render_assignment();
  $(".breadcrumb-item.active").text(page.lang_assignments);
  $(".page-heading-item.active").text(page.lang_assignments);
  createCookie("tab", "Assignments");
  createCookie("course", page.courseid);
  createCookie("section", page.section);
  // switchTab('assignments');
});
$("#nav-grades-tab").click(function () {
  render_grades();
  $(".breadcrumb-item.active").text(page.lang_grades);
  $(".page-heading-item.active").text(page.lang_grades);
  createCookie("tab", "Grades");
  createCookie("course", page.courseid);
  createCookie("section", page.section);
  // switchTab('grades');
});
$("#nav-discussions-tab").click(function () {
  render_discussion();
  $(".breadcrumb-item.active").text(page.lang_discussions);
  $(".page-heading-item.active").text(page.lang_discussions);
  createCookie("tab", "Discussions");
  createCookie("course", page.courseid);
  createCookie("section", page.section);
  $("#grades").css("display", "none");
  // switchTab('discussions');
});
$("#nav-announcements-tab").click(function () {
  render_announcement_tab();
  $(".breadcrumb-item.active").text(page.lang_announcements);
  $(".page-heading-item.active").text(page.lang_announcements);
  createCookie("tab", "Announcements");
  createCookie("course", page.courseid);
  createCookie("section", page.section);
  // switchTab('announcements');
});
$("#nav-quiz-tab").click(function () {
  render_quiz();
  $(".breadcrumb-item.active").text(page.lang_quiz);
  $(".page-heading-item.active").text(page.lang_quiz);
  createCookie("tab", "Quiz");
  createCookie("course", page.courseid);
  createCookie("section", page.section);
  // switchTab('quiz');
});
$("#nav-feedback-tab").click(function () {
  render_feedback();
  $(".breadcrumb-item.active").text(page.lang_feedback);
  $(".page-heading-item.active").text(page.lang_feedback);
  createCookie("tab", "Feedback");
  createCookie("course", page.courseid);
  createCookie("section", page.section);
  // switchTab('feedback');
});
$("#nav-feedback-tab").click(function () {
  render_feedback();
  $(".breadcrumb-item.active").text(page.lang_feedback);
  createCookie("tab", "Feedback");
  createCookie("course", page.courseid);
  createCookie("section", page.section);
});
$("#nav-course-goal-tab").click(function () {
  render_course_goal(accessCookie("selected_sub_tab"));
  $(".breadcrumb-item.active").text(page.lang_course_goal);
  $(".page-heading-item.active").text(page.lang_course_goal);
  // createCookie("tab","Course");
  createCookie("tab", "Course Goal");
  createCookie("course", page.courseid);
  createCookie("section", page.section);
  // switchTab('course-goal');
});
$("#nav-question-mapping-tab").click(function () {
  render_question_lo_mapping();
  console.log('clicked here');
  $(".breadcrumb-item.active").text(page.lang_question_lo_mapping);
  $(".page-heading-item.active").text(page.lang_question_lo_mapping);
  createCookie("tab", "Mapping");
  createCookie("course", page.courseid);
  createCookie("section", page.section);
  // switchTab('question-lo-mapping');
});
$("#nav-chatbook-tab").click(function () {
  $(".breadcrumb-item.active").text(page.lang_ask_diksha);
  $(".page-heading-item.active").text(page.lang_ask_diksha);
  createCookie("tab", "Ask DIKSHA");
  createCookie("course", page.courseid);
  createCookie("section", page.section);
  // switchTab('chatbook');
});

function createCookie(cookieName, cookieValue) {
  //var date = new Date();
  //date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
  document.cookie = cookieName + "=" + cookieValue;
  console.log("Cookie set:", cookieName, "=", cookieValue);
}
function accessCookie(cookieName) {
  var name = cookieName + "=";
  var allCookieArray = document.cookie.split(';');
  for (var i = 0; i < allCookieArray.length; i++) {
    var temp = allCookieArray[i].trim();
    if (temp.indexOf(name) == 0)
      return temp.substring(name.length, temp.length);
  }
  return "";
}
function render_announcement_tab() {
  var keyword = $('#search_announcement').val();
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: {
      function: 'search_announcement',
      search_announcement: keyword,
    },
    dataType: "json",
    success: function (data) {
      //console.log(data);
      render_announcement(data.announcement);

    },
    beforeSend: function () {
      // Code to display spinner
      $('.loader_announcement').html("<div style='display: flex;height: 300px;justify-content: center;align-items: center;'><img src='" + page.book_loader + "' style='width: 150px;margin: 0 auto; vertical-align: middle;'/></div>");
      $('#announcement').css('display', 'none');
    },
    complete: function () {
      // Code to hide spinner.
      $('.loader_announcement').empty();
      $('#announcement').css('display', 'block');
    }
  });
}
function render_announcement(announcement) {
  $('#announcement').empty();
  if (announcement.length > 0) {
    var i = 1;
    $.each(announcement, function (key, val) {
      var date = parseInt(val.startdateP1) + '-' + val.startdateP2 + '-' + val.startdateP3;
      var name = val.name;
      //var short_desc= val.intro;
      // var desc = '';
      var view_more = '';
      //if (val.intro.length >150) {
      if (val.long_intro != '') {
        //short_desc=jQuery.trim(val.intro).substring(0, 150);
        //desc = jQuery.trim(val.intro).substring(150, (val.intro.length)).split(" ").slice(0, -1).join(" ");
        view_more = '<button class="announce-toggle-button btn" toggle-text="' + i + '" >' + page.lang_view_more + '</button>';
      }
      var edit = '';
      var delete_announcement = '';
      if (page.role != 'student' && page.role != 'parent') {
        //var edit_announcement_string="<?php echo trigyn_get_string('edit_announcement', 'course', '', $SESSION->lang); ?>";
        delete_announcement = '<span class="announce-delete"><a href="javascript:;" class="delete_announcement" data-rel="' + val.name + '" data-id="' + val.cmid + '" data-section=""><i class="fas fa-trash module_threedots_icon"></i></a></span>';
        edit = '<span class="announce-edit">' +
          '<a href="javascript:;" class="courses_syllabus_actions edit_announcement" data-id="' + val.cmid + '" data-toggle="tooltip" title="' + page.lang_edit_announcement + '"><i class="fas fa-edit"></i></a></span>';
      }
      //console.log(page.role);
      var content = '';
      if (page.role != 'parent') {
        if (val.activityList != '' && val.activityList != null) {
          if (val.activityList.activity != '' || val.activityList.reference != '') {
            //var additional_activity_string="<?php echo trigyn_get_string('additional_activity_linked', 'course', '', $SESSION->lang); ?>";
            content += '<h6><strong>' + page.lang_additional_activity + '</strong></h6>';
            if (val.activityList.activity != '') {
              $.each(val.activityList.activity, function (key1, val1) {
                var activityAvailable = '';

                if (page.role == 'student' && val1.isAvailable != 1 && val1.availabilityinfo != '') {
                  activityAvailable = '<span class="faded">' + val1.name + '</span>';
                } else {
                  //activityAvailable='<a href="javascript:;" class="activity-list" type="announcement" act_id="'+val1.id+'" cm_id="'+val.cmid+'" >'+val1.name+'</a>';
                  activityAvailable = '<span class="font-weight-bold">' + val1.name + '</span>';
                }
                //var announcement_linked_string="<?php echo trigyn_get_string('this_announcement_is_linked_with_this', 'course', '', $SESSION->lang); ?>";
                if (val1.module == "assign") {
                  // val1.module = "assignment :";
                  // content +='<p>'+page.lang_announcement_linked+' '+val1.module +' '+activityAvailable+'</p>';
                  content += '<p>' + page.lang_announcement_linked_assignment + ' ' + activityAvailable + '</p>';
                } else if (val1.module == "quiz") {
                  // val1.module = "assessment :";
                  content += '<p>' + page.lang_announcement_linked_assessment + ' ' + activityAvailable + '</p>';
                }
                if (val1.isAvailable != 1 && val1.availabilityinfo != '') {
                  content += '<span class="courses_modules_datetime">' + val1.availabilityinfo + '</span>';
                }
              });
            }
            if (val.activityList.reference != '') {
              if (val.activityList.activity != '') {
                // var refer_below_string="<?php echo trigyn_get_string('you_can_refer_below_documents_for_this', 'course', '', $SESSION->lang); ?>";
                content += '<p>' + page.lang_refer_below_documents + '</p>';
              } else {
                //var refer_below_string="<?php echo trigyn_get_string('you_can_refer_below_documents', 'course', '', $SESSION->lang); ?>";
                content += '<p>' + page.lang_refer_below_documents + '</p>';
              }
              $.each(val.activityList.reference, function (key2, val2) {

                // If activity is user visible then don't show restriction msg.
                if (page.role == 'student' && val2.isAvailable != 1 && val2.availabilityinfo != '') {
                  content += '<span class="faded" act_type="' + val2.module + '" faded_id="' + val2.id + '">' + val2.name + '</span><br/>';
                  content += '<span class="courses_modules_datetime">' + val2.availabilityinfo + '</span><br/>';
                } else {
                  content += '<a href="javascript:;" class="activity-list" type="announcement" act_id="' + val2.id + '" cm_id="' + val.cmid + '" >' + val2.name + '</a><br/>';
                }
                if (page.role != 'student' && val2.availabilityinfo != '') {
                  content += '<span class="courses_modules_datetime">' + val2.availabilityinfo + '</span><br/>';
                }
              });
            }
          }
        }
      }
      //console.log(content);
      //var view_more_string="<?php echo trigyn_get_string('view_more', 'course', '', $SESSION->lang); ?>";
      $('#announcement').append('<div class="announce_leftnryt_content_wrapper d-flex align-items-top">' +
        '<div class="announce_left_wrapper">' +
        '<span class="announce_left_date">' + date + '</span>' +
        '</div>' +
        '<div class="announce_ryt_wrapper">' +
        // '<ul>'+
        // '<li>'+
        '<span class="announce_ryt_mainhead">' + val.name + '</span>' +
        // '</li>'+
        // '</ul>'+
        '<span class="announce_ryt_desc short-text" id="short-text-' + i + '"><p>' + val.short_intro + ' <small>' + content + '</small></p></span>' +
        '<div class="announce_ryt_desc toggle-text" id="toggle-text-' + i + '"><p>' + val.long_intro + ' <small>' + content + '</small><p>' +
        '</div>' +
        '</div>' +
        '<div class="announce_ryt_view-btn">' + edit + ' ' + delete_announcement + ' ' + view_more +
        //'<button class="announce-toggle-button btn" toggle-text="'+i+'" >'+page.lang_view_more+'</button>'+
        '</div>' +
        '</div>');
      i++;
    });
  } else {
    var message = '';
    if (page.role != 'student' && page.role != 'parent') {
      message = page.lang_create_announcement_above;
    }
    //var no_announcement_string="<?php echo trigyn_get_string('no_announcements', 'course', '', $SESSION->lang); ?>";
    $('#announcement').append('<div class="m-auto text-center">' +
      '<img src="' + page.url + '/' + page.prod_root + '/assets/img/announcement.png" alt="Announcement" width="100px" />' +
      '<h5>' + page.lang_no_announcements + '</h5>' + message +
      '</div>');
  }
}

function render_feedback() {
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: {
      function: 'get_course_feedback_data'
    },
    dataType: "json",
    success: function (data) {
      $('#feedback').empty();

      if (data.feedback != null) {
        if (data.feedback.length > 0) {

          var i = 1;
          var output = '';
          $.each(data.feedback, function (key, val) {

            hidden_card = ''
            if (page.role == 'evaluator') {
              var visibility_class = '';
            } else {
              var visibility_class = '<span class="icon-icl-eye-black activity_show_hide_eye"></span>';
            }
            if (val.cmvisible == 0) {
              hidden_card = 'hidden-card';
              visibility_class = '<span class="icon-icm-eye-gray-slash activity_show_hide_eye"></span>';
            }

            /*output += '<div class="col-md-6 col-lg-4 assign_col_padding">';
           output += '<div class="stud_assignment_card '+hidden_card+'">';
           output += '<div class="stud-assignment-statusbar '+val.module_status_info[0].class +'"></div>';
           output += '<div class="stud_assignment_body">';

           actions = '<a href="javascript:;" id="activity_id_'+val.cmid+'" data-current_visibility="'+val.cmvisible+'" class="showHideActivity mx-1 float-right"" data-id="'+val.cmid+'" data-module="'+val.sec_id+'"> '+ visibility_class +' </a>';
           if(page.role !== 'evaluator'){
             output += '<div class="stud_assignment_wrap">';
             output +=actions;

             output += '<div class="final_assessment_class">';
         	
             let final_asssessment_checkbox = '';
             if(val.is_final_assessment){
               final_asssessment_checkbox = val.is_final_assessment;
             }
             // final_asssessment_checkbox = await call_php_function('FinalAssessment','init',val);
             // console.log(final_asssessment_checkbox);
             output += final_asssessment_checkbox;
             output += '</div>';

             output += '</div>';
           }
                     */
            // build feedback action URLs (similar pattern to quiz links)
            disabled_class = '';
            if (!data.caneditcourse) {
              disabled_class = 'disabled';

            }
            else {
              disabled_class = '';
              var edit_url = page.url + '/' + page.prod_root + '/feedback.php?course=' + page.courseid + '&topic=' + val.topic_id + '&id=' + val.cmid + '&feedback_id=' + val.instance + '&act=edit';
              var edit_questions_url = page.url + '/' + page.prod_root + '/feedback.php?course=' + page.courseid + '&topic=' + val.topic_id + '&id=' + val.cmid + '&feedback_id=' + val.instance + '&act=edit_questions';
            }

            var view_url = page.url + '/' + page.prod_root + '/feedback.php?course=' + page.courseid + '&topic=' + val.topic_id + '&id=' + val.cmid + '&feedback_id=' + val.instance + '&act=view';
            var edit_url = page.url + '/' + page.prod_root + '/feedback.php?course=' + page.courseid + '&topic=' + val.topic_id + '&id=' + val.cmid + '&feedback_id=' + val.instance + '&act=edit';
            var edit_questions_url = page.url + '/' + page.prod_root + '/feedback.php?course=' + page.courseid + '&topic=' + val.topic_id + '&id=' + val.cmid + '&feedback_id=' + val.instance + '&act=edit_questions';
            var view_url_feedback = page.url + '/' + page.prod_root + '/feedback.php?course=' + page.courseid + '&topic=' + val.topic_id + '&id=' + val.cmid + '&feedback_id=' + val.instance + '&act=view_analysis';
            var view_url_report = page.url + '/' + page.prod_root + '/feedback.php?course=' + page.courseid + '&topic=' + val.topic_id + '&id=' + val.cmid + '&feedback_id=' + val.instance + '&act=view_report';

            var view_question = '<a href="' + view_url + '"><button class="btn edit_btn">View Questions</button></a>';
            var edit_question = '<a href="' + edit_questions_url + '"><button class="btn edit_btn" ' + disabled_class + '>Edit Questions</button></a>';
            var edit_feedback = '<a href="' + edit_url + '"><button class="btn edit_btn" ' + disabled_class + '>Edit Feedback</button></a>';
            var delete_feedback = '<a href="javascript:void(0);" class="deleteActivity" data-act_name="' + val.cmname + '" data-id="' + val.cmid + '"><button class="btn edit_btn" ' + disabled_class + '>Delete Feedback</button></a>';
            var view_feedback = '<a href="' + view_url_feedback + '"><button class="btn edit_btn">View Analysis</button></a>';
            var view_feedback_report = '<a href="' + view_url_report + '"><button class="btn edit_btn">Feedback Report</button></a>';


            output += '<div class="col-md-6 col-lg-4 assign_col_padding">';
            output += '<div class="stud_assignment_card ' + hidden_card + '">';
            output += '<div class="stud-assignment-statusbar"></div>';

            output += '<div class="stud_assignment_body">';


            actions = '<a href="javascript:;" id="activity_id_' + val.cmid + '" data-current_visibility="' + val.cmvisible + '" class="showHideActivity mx-1 float-right"" data-id="' + val.cmid + '" data-module="' + val.sec_id + '"> ' + visibility_class + ' </a>';
            if (page.role !== 'evaluator') {
              output += '<div class="stud_assignment_wrap">';
              output += actions;



              output += '</div>';
            }



            output += '<div class="stud_assignment_wrap">';
            output += '<h3 class="assignment_head">Feedback Title</h3>';
            output += '<p class="assignment_desc" data-toggle="tooltip" title="' + val.cmname + '">' + val.name + '</p>';
            output += '</div>';
            output += '<div class="stud_assignment_wrap">';
            output += '<h3 class="assignment_head">' + page.lang_topic + '</h3>';
            output += '<p class="assignment_desc" data-toggle="tooltip" title="' + val.topic_name + '">' + val.topic_name + '</p>';
            output += '</div>';
            output += '<div class="teacher_assignment_footer">';
            output += '<div class="footer_div">';
            output += '<div class="footer_btns">';
            output += '' + view_question;
            output += '</div>';
            output += '<div class="footer_btns">';
            output += '' + edit_question;
            output += '</div>';
            output += '</div>';
            output += '<div class="footer_div">';
            output += '<div class="footer_btns">';
            output += '' + edit_feedback;
            output += '</div>';
            output += '<div class="footer_btns">';
            output += '' + delete_feedback;
            output += '</div>';
            output += '</div>';
            output += '<div class="footer_div">';
            output += '<div class="footer_btns">';
            output += '' + view_feedback;
            output += '</div>';
            output += '<div class="footer_btns">';
            output += '' + view_feedback_report;
            output += '</div>';
            output += '</div>';
            output += '</div>';

            output += '</div>';
            output += '</div>';
            output += '</div>';

            i++;
          })
          $('#feedback').append(output);
        } else {
          var output = '';
          output += '<div class="row no-gutters">';
          output += '<p>No Feedback Found</p>';
          output += '</div>';
          $('#feedback').append(output);
        }
      } else {
        var output = '';
        output += '<div class="row no-gutters">';
        output += '<p>' + page.lang_no_feedback + '</p>';
        output += '</div>';
        $('#feedback').append(output);
      }
    },
    beforeSend: function () {
      // Code to display spinner
      $('.loader_feedback').html("<div style='display: flex;height: 300px;justify-content: center;align-items: center;'><img src='" + page.book_loader + "' style='width: 150px;margin: 0 auto; vertical-align: middle;'/></div>");
      $('#feedback').css('display', 'none');
    },
    complete: function () {
      // Code to hide spinner.
      $('.loader_feedback').empty();
      $('#feedback').css('display', 'flex');
    }
  })
}
function render_syllabus() {
  $('#syl-course-description').addClass("truncate-3-lines");
  $("#viewmore_desc").text("View more");
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: {
      function: 'get_course_syllabus_data',
      type: 'all',
    },
    dataType: "json",
    success: function (data) {
      // console.log(data.syllabus.length);
      render_syllabus_data(data);
    },
    beforeSend: function () {
      // Code to display spinner
      $('.loader_syllabus').html("<div style='display: flex;height: 300px;justify-content: center;align-items: center;'><img src='" + page.book_loader + "' style='width: 150px;margin: 0 auto; vertical-align: middle;'/></div>");
      $('#syllabus').css('display', 'none');
    },
    complete: function () {
      // Code to hide spinner.
      $('.loader_syllabus').empty();
      $('#syllabus').css('display', 'block');
      let view_more_interval = setInterval(function () {
        let lineHeight = parseFloat($('#syl-course-description').css('line-height'));
        let expectedHeight = lineHeight * 3;
        if ($('#syl-course-description')[0].scrollHeight != 0) {
          clearInterval(view_more_interval);
          if ($('#syl-course-description')[0].scrollHeight > expectedHeight) {
            $("#viewmore_desc").removeClass("d-none");
          } else {
            $("#viewmore_desc").addClass("d-none");
          }
        }
      }, 500);

    }
  });
}
$("#viewmore_desc").on("click", function () {
  $('#syl-course-description').toggleClass("truncate-3-lines");
  $(this).text(function (i, text) {
    return text === "View more" ? "View less" : "View more";
  });
});
function render_syllabus_data(data) {
  $('#syllabus').empty();
  $('#syllabus_text').html(data.syllabus_text);
  $('#syl-course-description').html(data.coursedescription);
  if (data.syllabus.length > 0) {
    var action = '';
    //if(data.caneditcourse) {
    if (page.role == 'coursecreator' || page.role == 'programofficer') {
      action = '<td>Actions</td>';
    }
    //}
    var i = 1;
    var output = '';
    output += '<div class="table-responsive courses_syllabus">';
    output += '<table class="table">';
    output += '<thead class="thead-light courses_syllabus_tablehead">';
    output += '<tr>';
    // output += '<td>'+page.lang_start_date+'</td>';
    // output += '<td>'+page.lang_end_date+'</td>';
    output += '<td>' + page.lang_mod_detail + '</td>';
    output += '<td class="text-center">' + page.lang_suggest_mod_dura + '</td>';
    output += action;
    output += '</tr>';
    output += '</thead>';
    output += '<tbody>';
    $.each(data.syllabus, function (key, val) {
      if (page.role == 'student' && val.isvisible == 0) {
        return;
      }
      if (val.syl_sec != 0) {
        //output += '<?php $topic_info = trigyn_get_section_info($syl['syl_id']);?>';
        var shortName = val.syl_name;
        if (val.syl_name.length > 50) {
          shortName = jQuery.trim(val.syl_name).substring(0, 50).split(" ").slice(0, -1).join(" ") + "...";
        }
        var edit = '';
        if (page.role == 'coursecreator' || page.role == 'programofficer') {
          edit += '<td>';
          if (data.caneditcourse) {
            edit += '<a href="javascript:;" class="edit_syllabus" data-id="' + val.syl_id + '">';
            edit += '<i class="fas fa-edit"></i>';
            edit += '</a>';
          }
          if (val.iscopyavailable && page.course_status.toLowerCase() == 'published') {
            edit += '<a href="javascript:void(0);" class="copy_module" data-moduleid="' + val.syl_id + '" data-modulenum="' + val.syl_sec + '">';
            edit += '<i class="fa icon fa-copy mr-1"></i>';
            edit += page.lang_copy_module;
            edit += '</a>';
          }
          edit += '</td>';
        }
        var topic_html = '<a data-toggle="tooltip" title="' + val.syl_name + '" data-id="' + val.syl_id + '">' + shortName + '</a>';;
        if (page.role != 'parent') {
          topic_html = '<a href="javascript:;" class="syllabus_accordion" data-toggle="tooltip" title="' + val.syl_name + '" data-id="' + val.syl_id + '">' + shortName + '</a>';
        }
        output += '<tr>';
        // output += '<td class="courses_syllabus_timedates">'+val.syl_startdate+'</td>';
        // output += '<td class="courses_syllabus_timedates">'+val.syl_enddate+'</td>';
        output += '<td class="courses_syllabus_subchap" >' + topic_html + '</td>';
        days = val.syl_classes ? val.syl_classes : 0;
        output += '<td class="courses_syllabus_classes text-center">' + days + '</td>';
        output += edit;
        output += '</tr>';
      }
    });
    output += '</tbody>';
    output += '</table>';
    output += '</div>';
    $('#syllabus').append(output);
  } else {
    var output = '';
    output += '<div class="row no-gutters">';
    output += '<span>' + page.lang_no_course_summary_available + '</span>';
    output += '</div>';
    $('#syllabus').append(output);
  }
}

function render_modules(module_open_id = '') {
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: {
      function: 'get_course_modules_data'
    },
    dataType: "json",
    success: function (data) {
      $('#module').empty();
      if (data.modules.length > 0) {
        var action = '';
        if (page.role != 'student' && page.role != 'editingteacher') {
          action = '<td>' + page.lang_action + '</td>';
        }
        let activeIndex = 0
        var i = 1;
        var output = '';
        let activity_count;
        let activity_completed_count;
        $.each(data.modules, function (key, val) {
          activity_count = 0;
          activity_completed_count = 0;
          section_id = 0;
          if (page.role == 'student' && val.syl_isvisible == 0) {
            return;
          }

          if (val.sec_id != 0) {
            var activeclass = '';
            var showclass = '';
            var arrow_icon = 'fa-chevron-up';

            var collapsedclass = '';
            if (module_open_id != '' && val.sec_id != module_open_id) {
              collapsedclass = 'collapsed';
            } else {
              if (i != 1) {
                collapsedclass = 'collapsed';
              }
            }
            var current_time = Math.floor(new Date().getTime() / 1000);
            //console.log(val.sec_startdate);
            //console.log(current_time);
            if (page.role == 'student' && val.sec_startdate > current_time) {
              if (i == 1) {
                // activeclass='active';
                // showclass='show';
                // arrow_icon='fa-chevron-down';
              }
            } else {
              if (module_open_id != '') {
                if (val.sec_id == module_open_id) {
                  activeIndex = i
                  activeclass = 'active';
                  showclass = 'show';
                  arrow_icon = 'fa-chevron-down';
                }
              } else {
                if (i == 1) {
                  activeIndex = i
                  activeclass = 'active';
                  showclass = 'show';
                  arrow_icon = 'fa-chevron-down';
                }
              }
            }
            // console.log(module_open_id+" - "+val.sec_id);
            output += '<div class="panel panel-default modules_full_accordian_div">';
            output += '<div class="on-load-case-student panel-heading ' + activeclass + '" data-module="' + val.sec_id + '" role="tab" data-rel="' + i + '" id="headingOne' + i + '">';
            output += '<h4 class="panel-title modules_accordian_titletext d-block">';
            // output += '<span style="display:none1"class="AISummary" data-course="'+page.courseid+'" data-course-name="'+val.course_name+'" data-cat-name="'+val.cat_name+'" data-id="'+val.sec_id+'" data-topic-name="'+val.sec_name+'" data-toggle="modal" data-target=".bd-example-modal-xl"><a href="#" style="color:#0056b3">Summary</a></span>';
            output += '<span style="display:none"class="ai_summary_info" id="ai_summary_info_' + val.sec_id + '">' + (val.sec_section_summary_info == null ? '' : val.sec_section_summary_info) + '</span>';

            if (page.role == 'student' && val.sec_startdate > current_time) {
              output += '<a role="button"  class="' + collapsedclass + '">';
              //output += '<i class="fas fa-chevron-up carret-icon module_arrow_icon"></i>';
              output += '<span>' + val.sec_name + '</span>';
              output += '</a>';
            } else {
              output += '<div class="d-flex justify-content-between align-items-center">';
              output += '<a role="button" data-toggle="collapse" data-parent="#module" onclick="return openFirstAccordionTab(' + i + ')" data-id="' + val.sec_id + '" href="#collapseOne' + i + '" aria-expanded="true" aria-controls="collapseOne' + i + '" class="' + collapsedclass + '">';
              output += '<i class="fas fa-chevron-up carret-icon module_arrow_icon"></i>';
              output += '<span>' + val.sec_name + '</span>';
              output += '</a>';
            }
            if (page.role == 'student' && val.sec_schedule_startdate != '01-01-1970' && val.sec_schedule_enddate != 0) {
              output += '' + page.lang_mod_start_date + ' ' + val.sec_schedule_startdate + '';
              //output += '<span> '+page.lang_mod_schedule_date+' '+val.sec_schedule_startdate+' to ' + val.sec_schedule_enddate +'</span>';
            }
            if (page.role == 'student' && val.sec_schedule_enddate != '01-01-1970' && val.sec_schedule_enddate != 0) {
              //output += '<span> '+page.lang_mod_start_date+' '+val.sec_schedule_startdate+'</span>';
              output += ' End Date :' + val.sec_schedule_enddate + '';
            }

            output += (page.role == 'student') ? '<div class="module-actions stud-podcast-action">' : '<div class="module-actions">';
            // output += '<div class="module-actions">';

            if (page.role == 'coursecreator') {
              if (val.sec_isvisible == 0) {
                output += '<span class="badge badge-warning mb-1">' + page.lang_hidden_for_student + '</span>';
                output += '<a href="javascript:;" class="show-hide-section" data-course="' + page.courseid + '" data-module="' + val.sec_id + '" data-visibility="1">';
                output += '<span  data-toggle="tooltip" title= "' + page.lang_unhide_module + '" class="icon-icm-eye-gray-slash activity_show_hide_eye"></span>';
                output += '</a>';
              } else {
                output += '<a href="javascript:;" class="show-hide-section" data-course="' + page.courseid + '" data-module="' + val.sec_id + '" data-visibility="0">';
                output += '<span data-toggle="tooltip" title= "' + page.lang_hide_module + '" class="icon-icl-eye-black activity_show_hide_eye"></span>';
                output += '</a>';
              }
            } else if (page.role == 'student' && page.is_pal == 1) {
              output += '<div class="dropdown course-action-dropdown d-none">';
              output += '  <button class="btn"';
              output += '    id="courseActionDropdown"';
              output += '    data-toggle="dropdown"';
              output += '    aria-haspopup="true"';
              output += '    aria-expanded="false">';
              output += '    <i class="icon-pre-more more-icon" aria-hidden="true"></i>';
              output += '  </button>';
              output += '  <div class="dropdown-menu" aria-labelledby="courseActionDropdown">';
              output += '    <a class="dropdown-item abc" href="#" onclick="generateAudio(this.dataset.moduleId,' + page.courseid + ',' + page.userid + ')" href="#" data-module-id="' + val.sec_id + '" data-module-rel="' + val.sec_name + '" data-toggle="modal" data-target="#podcastModal">';
              output += '     Chapter Podcast';
              output += '    </a>';
              output += '  </div>';
              output += '</div>';
              output += '</div>';
              section_id = val.sec_id;

              // Module Progress circular bar
              if (page.is_pal == 1) {
                output += '<div class="module-progress-pie float-right SECTION-PROGRESS-' + val.sec_id + '"></div>';
              } else {
                output += '[SECTION-PROGRESS-' + val.sec_id + ']';
              }

            }
            if (data.caneditcourse) {
              if (page.role != 'student' && page.role != 'coursereviewer' && page.role != 'editingteacher') {
                //output += '<a ><i class="icon-icm-activity-file-upload module_threedots_icon"></i></a>';
                output += '<a href="javascript:;" class="addActivity" data-id="' + val.sec_section + '" data-course="' + page.courseid + '" data-module="' + val.sec_id + '" data-section="' + page.section + '" ><i class="fas fa-plus module_threedots_icon"></i></a>';
                output += '<a href="javascript:;" class="deleteModule" data-id="' + val.sec_section + '" data-mod_name="' + val.sec_name + '" data-course="' + page.courseid + '" data-module="' + val.sec_id + '" data-section="' + page.section + '" ><i class="fas fa-trash module_threedots_icon"></i></a>';
                //output += '<a ><i class="fas fa-ellipsis-v module_threedots_icon"></i></a>';
              }
            }
            output += '</div>';
            // AI Features for students
            if (page.role == 'student' && page.is_pal == 1) {
              output += '<div class="stud-ai-features-div">';
              // output += '<a href="#" class="ai-features-name"> <span class="material-symbols-outlined micon-list_alt"></span>Summary</a>';
              output += '<a href="javascript:void(0)" class="ai-features-name AISummary"  data-course="' + page.courseid + '" data-course-name="' + val.course_name + '" data-cat-name="' + val.cat_name + '" data-id="' + val.sec_id + '" data-topic-name="' + val.sec_name + '" data-toggle="modal" data-target=".bd-example-modal-xl"> <span class="material-symbols-outlined micon-list_alt"></span>Summary</a>';

              output += '<a href="#" class="ai-features-name podcast-feature-btn" onclick="handlePodcastFeatureClick(this); return false;" data-module-id="' + val.sec_id + '" data-module-rel="' + val.sec_name + '" data-course-id="' + page.courseid + '" data-user-id="' + page.userid + '" data-toggle="modal" data-target="#podcastModal"> <span class="material-symbols-outlined micon-headset_mic"></span>Podcast</a>';
              output += '<a href="#" class="ai-features-name join-conversation-feature-btn" onclick="handleJoinConversationFeatureClick(this); return false;" data-module-id="' + val.sec_id + '" data-module-rel="' + val.sec_name + '" data-course-id="' + page.courseid + '" data-user-id="' + page.userid + '" data-toggle="modal" data-target="#podcastModal"> <span class="material-symbols-outlined micon-interpreter_mode"></span>Join the Conversation</a>';
              output += '<a href="javascript:void(0)" class="ai-features-name check-your-knowledge" onclick="return handleCheckYourKnowledgeFeatureClick(this)" data-module-id="' + val.sec_id + '" data-module-rel="' + val.sec_name + '" data-course-id="' + page.courseid + '"> <span class="material-symbols-outlined micon-list_alt_check"></span>Check Your Knowledge</a>';
              output += '</div>';
            }

            // Podcast feature - Hidden by default, will show when audio is ready
            // Using simple IDs without section_id since only one podcast plays at a time
            output += '<div class="podcast-features-popup" id="podcast-features-popup" style="display: none;">';
            output += '<div class="play-box mb-1">';
            output += '<p class="now-play-text d-flex align-items-center">Now Playing Podcast <span class="material-symbols-outlined micon-info ml-2 info-icon ai-info-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="This content is AI-generated for reference only."></span></p>';
            output += '<button type="button" class="close close-icon" id="podcastCloseBtn" onclick="handlePodcastCloseClick(event); return false;"><span class="icon-icl-cancel" aria-hidden="true"></span></button>';
            output += '</div>';
            output += '<div class="play-box">';
            output += '<h4 class="module-name" id="podcast-module-name">' + val.sec_name + '</h4>';
            output += '<div class="podcast-waveform" id="podcastWaveform">';
            for (var wb = 0; wb < 25; wb++) {
              output += '<span class="wave-bar"></span>';
            }
            output += '</div>';
            // Hide audio visually without display:none so playback and sound work in all browsers
            output += '<audio id="podcastAudio" type="audio/mpeg" src="" style="position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;clip:rect(0,0,0,0);"></audio>';
            output += '<div class="audio-controls">';
            output += ' <a href="#" id="playBtn" class="ctrl-btn podcast-play-btn"><span class="material-symbols-outlined micon-play" data-toggle="tooltip" data-placement="top" title="Play"></span></a>';
            output += ' <a href="#" id="muteBtn" class="ctrl-btn podcast-mute-btn"><span class="material-symbols-outlined micon-volume_up" data-toggle="tooltip" data-placement="top" title="Mute"></span></a>';
            output += ' <a href="#" id="replayBtn" class="ctrl-btn podcast-replay-btn"><span class="material-symbols-outlined micon-replay" data-toggle="tooltip" data-placement="top" title="Replay"></span></a>';
            output += '</div>';
            output += '<button type="button" class="btn btn-secondary mr-3 podcast-join-btn" id="joinConversationBtn" disabled style="display: none;">Join Conversation</button>';
            output += '</div>';
            output += '<div id="qaStatusText" style="text-align: center; margin-top: 10px; color: #666; font-size: 12px; min-height: 16px;"></div>';

            output += '<div class="np-progress">';
            output += ' <span class="np-time podcast-current-time">0:00</span>';
            output += '<div class="np-bar"><div class="np-bar-fill podcast-progress-fill" style="width: 0%;"></div></div>';
            output += ' <span class="np-time podcast-total-time">0:00</span>';
            output += '</div>';

            output += '</div>';

            output += '</h4>';
            output += '</div>';
            output += '<div id="collapseOne' + i + '" class="panel-collapse collapse module-panel in ' + showclass + '" role="tabpanel" aria-labelledby="headingOne' + i + '">';

            if (page.is_pal == 1) {

              // output += '<ul class="nav nav-tabs module-sub-tab" id="moduleSubTab" role="tablist">';
              // output += '<li class="nav-item">';
              // output += '<a class="nav-link active" id="prerequisite-tab-'+i+'" data-rel="'+i+'" data-filter="prerequisites" onclick="return changeTabForModule(this,1)"  data-toggle="tab" href="#prerequisite-'+i+'" role="tab" aria-controls="prerequisite" aria-selected="true">'+page.lang_prerequisites+'</a>';
              // output += '</li>';
              // output += '<li class="nav-item">';
              // output += '<a class="nav-link" id="learning-tab-'+i+'" data-rel="'+i+'" data-toggle="tab" data-filter="learning_material" onclick="return changeTabForModule(this,2)" href="#learning-'+i+'" role="tab" aria-controls="learning" aria-selected="false">'+page.lang_learning_material+'</a>';
              // output += '</li>';
              // output += '<li class="nav-item">';
              // // output += '<a class="nav-link" id="assessment-tab-'+i+'" data-rel="'+i+'" data-toggle="tab" data-filter="assignment" onclick="return changeTabForModule(this,3)" href="#assessment-'+i+'" role="tab" aria-controls="assessment" aria-selected="false">'+page.lang_assignment+'</a>';
              // output += '<a class="nav-link" id="assessment-tab-'+i+'" data-rel="'+i+'" data-toggle="tab" data-filter="exercises" onclick="return changeTabForModule(this,3)" href="#assessment-'+i+'" role="tab" aria-controls="assessment" aria-selected="false">'+page.lang_exercises+'</a>';
              // output += '</li>';
              // output += '<li class="nav-item">';
              // output += '<a class="nav-link" id="add-content-tab-'+i+'" data-rel="'+i+'" data-toggle="tab" data-filter="additional_content" onclick="return changeTabForModule(this,4)" href="#add-content-'+i+'" role="tab" aria-controls="add-content" aria-selected="false">'+page.lang_additional_content+'</a>';
              // output += '</li>';
              // output += '</ul>';

              // Module tab new accordion design
              output += '<div class="panel-group sub-accordion" id="subAccordion-' + i + '-' + key + '" role="tablist" aria-multiselectable="true">';
              output += '<div class="panel panel-default modules_full_accordian_div mb-0">';
              output += '<div class=" panel-heading ' + activeclass + '" data-module="' + val.sec_id + '" role="tab" data-rel="' + i + '" id="headingSubAccordion1' + i + '">';
              output += '<h4 class="panel-title panel-black-title modules_accordian_titletext">';
              output += '<a role="button" class="panel-black-link" data-toggle="collapse" data-parent="#subAccordion-' + i + '-' + key + '" data-id="Prerequisite" href="#collapseSubAccordion1' + i + '" aria-expanded="true" aria-controls="collapseSubAccordion1' + i + '-Prerequisite">';
              output += '<i class="fas fa-chevron-up carret-icon module_arrow_icon"></i>';
              output += '<span>' + page.lang_prerequisites + '</span>';
              output += '</a>';
              output += '</h4>';
              output += '</div>';
              output += '<div id="collapseSubAccordion1' + i + '" class="panel-collapse collapse module-panel in collapse-sub-accordion1" role="tabpanel" aria-labelledby="headingSubAccordion1' + i + '">';
              output += '<div class="panel-body connected-sortable droppable-area" style="min-height: 0px;" data-sectionid="' + val.sec_id + '-cm" id="dropAreaPrerequisite' + i + '" data-tag="prerequisites">';
              output += '</div>';
              output += '</div>';
              output += '</div>';

              output += '<div class="panel panel-default modules_full_accordian_div mb-0">';
              output += '<div class="panel-heading ' + activeclass + '" data-module="' + val.sec_id + '" role="tab" data-rel="' + i + '" id="headingSubAccordion2' + i + '">';
              output += '<h4 class="panel-title panel-black-title modules_accordian_titletext">';
              output += '<a role="button" class="panel-black-link" data-toggle="collapse" data-parent="#subAccordion-' + i + '-' + key + '" data-id="LearningMaterial" href="#collapseSubAccordion2' + i + '" aria-expanded="false" aria-controls="collapseSubAccordion2' + i + '-LearningMaterial">';
              output += '<i class="fas fa-chevron-up carret-icon module_arrow_icon"></i>';
              output += '<span>' + page.lang_learning_material + '</span>';
              output += '</a>';
              output += '</h4>';
              output += '</div>';
              output += '<div id="collapseSubAccordion2' + i + '" class="panel-collapse collapse module-panel in" role="tabpanel" aria-labelledby="headingSubAccordion2' + i + '">';
              output += '<div class="panel-body connected-sortable droppable-area" style="min-height: 0px;" data-sectionid="' + val.sec_id + '-cm" id="dropAreaLearningMaterial' + i + '" data-tag="learning_material">';
              output += '</div>';
              output += '</div>';
              output += '</div>';

              output += '<div class="panel panel-default modules_full_accordian_div mb-3">';
              output += '<div class="panel-heading ' + activeclass + '" data-module="' + val.sec_id + '" role="tab" data-rel="' + i + '" id="headingSubAccordion3' + i + '">';
              output += '<h4 class="panel-title panel-black-title modules_accordian_titletext">';
              output += '<a role="button" class="panel-black-link" data-toggle="collapse" data-parent="#subAccordion-' + i + '-' + key + '" data-id="AdditionalContent" href="#collapseSubAccordion3' + i + '" aria-expanded="false" aria-controls="collapseSubAccordion3' + i + '-AdditionalContent">';
              output += '<i class="fas fa-chevron-up carret-icon module_arrow_icon"></i>';
              output += '<span>' + page.lang_additional_content + '</span>';
              output += '</a>';
              output += '</h4>';
              output += '</div>';
              output += '<div id="collapseSubAccordion3' + i + '" class="panel-collapse collapse module-panel in" role="tabpanel" aria-labelledby="headingSubAccordion3' + i + '">';
              output += '<div class="panel-body connected-sortable droppable-area" style="min-height: 0px;" data-sectionid="' + val.sec_id + '-cm" id="dropAreaAdditionalContent' + i + '" data-tag="additional_content">';
              output += '</div>';
              output += '</div>';
              output += '</div>';
              output += '</div>';

              // Module tab new accordion design
            }

            if (page.is_pal != 1) {
              output += '<div class="tab-content module-sub-content" id="moduleSubTabContent-' + i + '">';
              output += '<div class="tab-pane fade active show">';
              output += '<div class="panel-body prerequisites">';
              if (page.role == 'programofficer' || page.role == 'coursereviewer' || page.role == 'coursecreator') {
                if (val.sec_groups.length > 0) {
                  $.each(val.sec_groups, function (key11, val11) {
                    if (val11.activities.length > 0) {
                      output += '<div class="panel panel-default modules_full_accordian_div">';
                      output += '<div class="panel-heading  ' + activeclass + '" role="tab" id="headingOne' + i + '-' + val11.id + '" data-module="' + val.sec_id + '">';
                      output += '<h4 class="panel-title sub-title modules_accordian_titletext">';
                      output += '<a role="button" data-toggle="collapse" data-parent="#module" data-id="' + val11.sec_id + '" href="#collapseOne' + i + '-' + val11.id + '" aria-expanded="true" aria-controls="collapseOne' + i + '-' + val11.id + '">';
                      output += '<i class="fas fa-chevron-up carret-icon module_arrow_icon"></i>';
                      output += '<span>' + val11.name + '</span>';
                      output += '</a>';
                      output += '</h4>';
                      output += '</div>';
                      output += '<div id="collapseOne' + i + '-' + val11.id + '" class="panel-collapse collapse module-panel in ' + showclass + '" role="tabpanel" aria-labelledby="headingOne' + i + '-' + val11.id + '">';
                      output += '<div class="panel-body connected-sortable droppable-area" style="min-height: 0px;" data-sectionid="' + val11.id + '" id="dropArea' + val11.id + '">';
                      if (page.is_pal == 1) {
                        output += '<ul class="nav nav-tabs module-sub-tab" id="moduleSubTab" role="tablist">';
                        output += '<li class="nav-item">';
                        output += '<a class="nav-link active" id="prerequisite-tab-' + i + '" data-rel="' + i + '" data-filter="prerequisites" onclick="return changeTabForModule(this,1)"  data-toggle="tab" href="#prerequisite-' + i + '" role="tab" aria-controls="prerequisite" aria-selected="true">' + page.lang_prerequisites + '</a>';
                        output += '</li>';
                        output += '<li class="nav-item">';
                        output += '<a class="nav-link" id="learning-tab-' + i + '" data-rel="' + i + '" data-toggle="tab" data-filter="learning_material" onclick="return changeTabForModule(this,2)" href="#learning-' + i + '" role="tab" aria-controls="learning" aria-selected="false">' + page.lang_learning_material + '</a>';
                        output += '</li>';
                        output += '<li class="nav-item">';
                        // output += '<a class="nav-link" id="assessment-tab-'+i+'" data-rel="'+i+'" data-toggle="tab" data-filter="assignment" onclick="return changeTabForModule(this,3)" href="#assessment-'+i+'" role="tab" aria-controls="assessment" aria-selected="false">'+page.lang_assignment+'</a>';

                        output += '<a class="nav-link" id="assessment-tab-' + i + '" data-rel="' + i + '" data-toggle="tab" data-filter="exercises" onclick="return changeTabForModule(this,3)" href="#assessment-' + i + '" role="tab" aria-controls="assessment" aria-selected="false">' + page.lang_exercises + '</a>';

                        output += '</li>';
                        output += '<li class="nav-item">';
                        output += '<a class="nav-link" id="add-content-tab-' + i + '" data-rel="' + i + '" data-toggle="tab" data-filter="additional_content" onclick="return changeTabForModule(this,4)" href="#add-content-' + i + '" role="tab" aria-controls="add-content" aria-selected="false">' + page.lang_additional_content + '</a>';
                        output += '</li>';
                        output += '</ul>';
                      }
                      if (val11.activities.length > 0) {
                        var indexPosition = 0;
                        $.each(val11.activities, function (key1, val1) {
                          var activityName = val1.name;
                          var video_time = "";
                          //Uncommnet below line of code for view video duration
                          if (val1.modname == 'url') {
                            //video_time = "20 Sec";
                            var minutes = Math.round(val1.video_duration / 60);
                            if (minutes > 0)
                              video_time = "<span class='courses_modules_subassign'>Approx runtime: " + minutes + " min</span>";
                          }
                          var viewbtn = (page.role == 'coursereviewer') ? '' : '<a class="faded btn view-disabled-btn" disabled>' + page.lang_view + '</a>';
                          if (
                            val1.modname == 'page' ||
                            val1.modname == 'resource' ||
                            val1.modname == 'scorm' ||
                            val1.modname == 'url' ||
                            val1.modname == 'bigbluebuttonbn' ||
                            val1.modname == 'customcert' ||
                            val1.modname == 'hvp' ||
                            val1.modname == 'vpl' ||
                            val1.modname == 'h5pactivity'
                          ) {
                            if (page.role == 'student') {
                              // If activity is user visible then don't show restriction msg.
                              if (val1.isAvailable != 1 && val1.availabilityinfo != '') {
                                activityName = '<span class="faded" act_type="' + val1.modname + '" faded_id="' + val1.id + '">' + val1.name + '</span>' + video_time;
                                viewbtn = '<a class="faded btn view-disabled-btn" disabled>' + page.lang_view + '</a>';
                              } else {
                                activityName = '<a href="javascript:;" class="activity-list" type="activity" act_type="' + val1.modname + '" act_id="' + val1.id + '" >' + val1.name + '</a>' + video_time;
                                viewbtn = '<a href="javascript:;" class="btn btn-primary module-view-btn activity-list" type="activity" act_type="' + val1.modname + '" act_id="' + val1.id + '">' + page.lang_view + '</a>';
                              }
                            } else {
                              activityName = '<a href="javascript:;" class="activity-list ' + val1.availabilityClass + '" type="activity" act_type="' + val1.modname + '" act_id="' + val1.id + '" >' + val1.name + '</a>' + video_time;
                            }
                          }
                          var details = '';
                          if (val1.intro != null) {
                            var shortIntro = val1.intro;
                            if (val1.intro.length > 250) {
                              shortIntro = jQuery.trim(val1.intro).substring(0, 250).split(" ").slice(0, -1).join(" ") + "...";
                            }
                            details = '<p class="courses_modules_subassign" data-toggle="tooltip" title="' + decodeHtml(val1.intro) + '">' + decodeHtml(shortIntro) + '</p>';
                          }
                          var available = '';
                          // If activity is user visible then don't show restriction msg.
                          if (val1.availabilityinfo != '') {
                            available = '<span class="courses_modules_datetime">' + val1.availabilityinfo + '</span>';
                          }
                          var actions = '';
                          var tooltip_hide_unide_string = '';
                          if (page.role != 'student' && page.role != 'coursereviewer' && page.role != 'editingteacher') {
                            if (val1.modname == 'url' && val1.isoraclevideo) {
                              // actions += '<li><a href="javascript:;" class="viewcaptiondetails" data-id="'+val1.id+'" data-bs-toggle="modal" data-bs-target="#captionmodal"><span class="fas fa-headphones" data-toggle="tooltip" title="Caption Details"></span></a></li>';
                            }
                            if (val1.completion != 0) {
                              actions += '<li><span class="fas fa-check-circle color-grey"></span></li>';
                            }
                            actions += '<li><a href="javascript:;" class="editActivity" data-id="' + val1.id + '" data-module="' + val.sec_id + '"><span class="fas fa-edit"></span></a></li>';
                            /**
                             * activity visible == 0 == page.tooltip_hide_activity
                             * activity visible == 1 == page.tooltip_unide_activity
                             */
                            var visibility_class = '<span  data-toggle="tooltip" title= "' + page.tooltip_hide_activity + '" class="icon-icl-eye-black activity_show_hide_eye"></span>';
                            if (val1.visibility == 0) {
                              visibility_class = '<span data-toggle="tooltip" title= "' + page.tooltip_unide_activity + '" class="icon-icm-eye-gray-slash activity_show_hide_eye"></span>';

                            }
                            actions += '<li><a href="javascript:;" id="activity_id_' + val1.id + '" data-current_visibility="' + val1.visibility + '" class="showHideActivity mx-1" data-id="' + val1.id + '" data-module="' + val.sec_id + '"> ' + visibility_class + ' </a></li>';
                            actions += '<li><a href="javascript:;" class="deleteActivity" data-act_name="' + val1.name + '" data-id="' + val1.id + '" data-module="' + val.sec_id + '"><span class="fas fa-trash"></span></a></li>';

                            if (page.is_del_allowed == 1) {
                              actions += '<li><a href="javascript:;" class="deleteActivity" data-id="' + val1.id + '" data-module="' + val.sec_id + '" data-act_name="' + val1.name + '"><span class="fas fa-trash-alt"></span></a></li>';
                            }
                            actions += '<li><img src="' + page.url + '/' + page.prod_root + '/assets/img/drag-icon.svg" alt="drag" class="icon-move" data-id="' + val1.id + '" data-position="' + indexPosition + '"> </li>';
                          } else {
                            // Added by Shiuli.
                            if (val1.completion != 0) {
                              actions += '<li>';
                              var prog_class = '';
                              var titleA = '';
                              if (val1.modname == 'url') {
                                var titleA = val1.progress + '%';
                              } else {
                                if (val1.progress == 0) {
                                  titleA = 'Not Started';
                                } else if (val1.progress > 0 && val1.progress < 100) {
                                  titleA = 'In-Progress';
                                } else {
                                  titleA = 'Completed';
                                }
                              }
                              if (val1.progress <= 25 && val1.progress > 0) {
                                prog_class = 'yellow-bar';
                              } else if (val1.progress > 50) {
                                prog_class = 'green-bar';
                              }
                              actions += '<div class="module-progress-pie">';
                              actions += '<div data-toggle="tooltip" title="' + titleA + '" class="c100 p' + val1.progress + ' center">';
                              if (val1.progress == 100) {
                                actions += '<span><i class="fas fa-check"></i></span>';
                              } else {
                                actions += '<span> ' + val1.progress + '%</span>';
                              }
                              actions += '<div class="slice ' + prog_class + '"><div class="bar"></div><div class="fill "></div></div>';
                              actions += '</div>';
                              actions += '</div>';
                              actions += '</li>';
                            }
                            actions += '<li>' + viewbtn + '</li>';
                          }
                          if ((page.role == 'coursereviewer') || ((page.role == 'coursecreator' || page.role == 'programofficer'))) // this code added By KD for assessment visiable for PO under assessment only
                          {
                            let extraClass = '';
                            // if (page.is_pal == 1) {
                            // 	extraClass = val1.tags.length !== 0 ? val1.tags.map(tag => tag.replace(/\s+/g, "_")).join(" ") : 'learning_material';
                            // }

                            if (val1.modname === 'label') {
                              extraClass += ' panel-title d-block ';
                            }
                            output += '<div class="col-md-12 modules_accordian_content draggable-item no-move ' + extraClass + '" id="drag-item' + val1.id + '" data-id="' + val1.id + '" data-course="' + page.courseid + '"  data-section="' + val11.id + '" data-position="' + indexPosition + '" data-modname="' + val1.modname + '">';
                            output += '<div class="courses_modules_desc d-flex align-items-center">';
                            // output += '<span class="cmn-activity-icon"><i class="'+ val1.icon +'"></i></span>';
                            output += '<span class="cmn-activity-icon"><span class="material-symbols-outlined ' + val1.icon + '"></span></span>';
                            // output += '<img src="'+val1.icon+'">';
                            output += '<h6 class="courses_modules_body_text">';
                            output += activityName;
                            output += details;
                            output += available;
                            output += '</h6>';
                            if (data.caneditcourse) {
                              if (val1.modname == 'quiz' || val1.modname == 'assign' || val1.modname == 'feedback') {
                                actions = '<li><img src="' + page.url + '/' + page.prod_root + '/assets/img/drag-icon.svg" alt="drag" class="icon-move" data-id="' + val1.id + '" data-position="' + indexPosition + '"> </li>';
                                output += '<ul class="module-action-btns">' + actions + '</ul>';
                              } else {
                                output += '<ul class="module-action-btns">' + actions + '</ul>';
                              }
                            }
                            else {
                              if (typeof visibility_class === "undefined") {
                                var visibility_class = '<span  data-toggle="tooltip" title= "' + page.tooltip_hide_activity + '" class="icon-icl-eye-black activity_show_hide_eye"></span>';  // Declare and initialize inside the block
                              }

                              if (val1.visibility == 0) {
                                visibility_class = '<span data-toggle="tooltip" title= "' + page.tooltip_unide_activity + '" class="icon-icm-eye-gray-slash activity_show_hide_eye"></span>';

                              }
                              let show_hide_icon = '<a href="javascript:;" id="activity_id_' + val1.id + '" data-current_visibility="' + val1.visibility + '" class="showHideActivity mx-1" data-id="' + val1.id + '" data-module="' + val.sec_id + '"> ' + visibility_class + ' </a>';
                              if (page.role == 'coursecreator') {
                                let captionview = '';
                                // if(val1.modname == 'url' && val1.isoraclevideo) {
                                // 	captionview = '<a href="javascript:;" class="viewcaptiondetails" data-id="'+val1.id+'" data-bs-toggle="modal" data-bs-target="#captionmodal"><span class="fas fa-headphones" data-toggle="tooltip" title="Caption Details"></span></a>';
                                // }
                                output += '<ul class="module-action-btns">';
                                output += '<li>' + captionview + '</li>'
                                output += '<li>' + show_hide_icon + '</li>';
                                output += '</ul>';
                              }
                            }
                            output += '</div>';
                            output += '</div>';
                            indexPosition++;
                          }
                        })
                      } else {
                        output += '<div class="col-md-12 modules_accordian_content">';
                        output += '<div class="panel-body connected-sortable droppable-area" data-sectionid="153" id="dropArea153"></div>';
                        output += '<div class="courses_modules_desc d-flex align-items-center">';
                        output += '<i class="fas fa-ellipsis-v courses_module_threedots_icon_left"></i>';
                        output += '<i class="fas fa-ellipsis-v courses_module_threedots_icon_left"></i>';
                        output += '<h6 class="courses_modules_body_text">';
                        output += page.lang_no_activity_found;
                        output += '</h6>';
                        output += '</div>';
                        output += '</div>';
                      }
                      output += '</div>';
                      output += '</div>';
                      output += '</div>';
                    }//added by Veena
                  })
                } else {
                  output += '<div class="col-md-12 modules_accordian_content">';
                  output += '<div class="courses_modules_desc d-flex align-items-center">';
                  output += '<i class="fas fa-ellipsis-v courses_module_threedots_icon_left"></i>';
                  output += '<i class="fas fa-ellipsis-v courses_module_threedots_icon_left"></i>';
                  output += '<h6 class="courses_modules_body_text">';
                  output += page.lang_no_groups_found;
                  output += '</h6>';
                  output += '</div>';
                  output += '</div>';
                }
              } else {
                if (val.sec_modules.length > 0 && page.is_pal != 1) {
                  $.each(val.sec_modules, function (key1, val1) {
                    // Count the total of all activites by adding 100 for each activity
                    if (val1.modname !== 'label') {
                      activity_count += 100;
                    }
                    // console.log('varun ---'+val1);
                    var activityName = val1.name;
                    var video_time = "";
                    if (val1.modname == 'url') {
                      // Uncommnet below line of code for view video duration
                      //video_time = "20 Sec";
                      var minutes = Math.round(val1.video_duration / 60);
                      if (minutes > 0)
                        video_time = "<span class='courses_modules_subassign'>Approx runtime: " + minutes + " min</span>";
                    }
                    var viewbtn = '<a class="faded btn view-disabled-btn" disabled>' + page.lang_view + '</a>';
                    if (
                      val1.modname == 'page' ||
                      val1.modname == 'resource' ||
                      val1.modname == 'scorm' ||
                      val1.modname == 'url' ||
                      val1.modname == 'bigbluebuttonbn' ||
                      val1.modname == 'quiz' ||
                      val1.modname == 'assign' ||
                      val1.modname == 'customcert' ||
                      val1.modname == 'hvp' ||
                      val1.modname == 'vpl' ||
                      val1.modname == 'h5pactivity' ||
                      val1.modname == 'feedback'
                    ) {
                      if (page.role == 'student') {
                        // If activity is user visible then don't show restriction msg.
                        viewbtn = '<h1>' + ((val1.isAvailable != 1 && val1.availabilityinfo != '') || !val1.isModuleAvailable) + '</h1>';
                        if ((val1.isAvailable != 1 && val1.availabilityinfo != '') || !val1.isModuleAvailable) {
                          activityName = '<span class="faded" act_type="' + val1.modname + '" faded_id="' + val1.id + '">' + val1.name + '</span>' + video_time;
                          viewbtn = '<a class="faded btn view-disabled-btn" disabled>' + page.lang_view + '</a>';
                        } else {
                          if (val1.modname == 'customcert') {
                            activityName = '<a href="' + val1.url + '" class="activity-list" type="activity" act_type="' + val1.modname + '" act_id="' + val1.id + '" >' + val1.name + '</a>';
                            viewbtn = '<a href="' + val1.url + '" target="_blanck" class="btn btn-primary module-view-btn activity-list" type="activity" act_type="' + val1.modname + '" act_id="' + val1.id + '">' + page.lang_view + '</a>';
                          } else if (val1.modname == 'assign') {
                            activityName = '<a href="javascript:;" class="view_assignment" type="activity" data-id="' + val1.id + '">' + val1.name + '</a>' + video_time;
                            viewbtn = '<a href="javascript:;" class="btn btn-primary module-view-btn view_assignment" type="activity" data-id="' + val1.id + '">' + page.lang_view + '</a>';
                          } else if (val1.modname == 'label') {
                            activityName = '<a href="javascript:;" class="activity-list" type="activity" act_type="' + val1.modname + '" act_id="' + val1.id + '" >' + val1.name + '</a>' + video_time;
                            viewbtn = '';
                          } else if (val1.modname == 'feedback') {
                            activityName = '<a href="javascript:;" class="activity-feedback" type="activity" act_type="' + val1.modname + '" act_id="' + val1.id + '" >' + val1.name + '</a>' + video_time;
                            viewbtn = '<a href="javascript:;" class="btn btn-primary module-view-btn activity-feedback" type="activity" act_type="' + val1.modname + '" act_id="' + val1.id + '">' + page.lang_view + '</a>';
                          } else {
                            activityName = '<a href="javascript:;" class="activity-list" type="activity" act_type="' + val1.modname + '" act_id="' + val1.id + '" >' + val1.name + '</a>' + video_time;
                            viewbtn = '<a href="javascript:;" class="btn btn-primary module-view-btn activity-list" type="activity" act_type="' + val1.modname + '" act_id="' + val1.id + '">' + page.lang_view + '</a>';
                          }
                        }
                        if (val1.isAvailable != 1 && val1.availabilityinfo != '') {
                          //activityName ='<span class="faded">'+val1.name+'</span>';
                        } else {
                          //activityName = '<a class="activity-list" type="activity" act_type="'+val1.modname+'" act_id="'+val1.id+'" >'+val1.name+'</a>';
                        }
                      } else {
                        activityName = '<a href="javascript:;" class="activity-list ' + val1.availabilityClass + '" type="activity" act_type="' + val1.modname + '" act_id="' + val1.id + '" >' + val1.name + '</a>' + video_time;
                      }
                    }
                    var details = '';
                    if (val1.intro != null) {
                      var shortIntro = val1.intro;
                      if (val1.intro.length > 250) {
                        shortIntro = jQuery.trim(val1.intro).substring(0, 250).split(" ").slice(0, -1).join(" ") + "...";
                      }
                      details = '<p class="courses_modules_subassign" data-toggle="tooltip" title="' + decodeHtml(val1.intro) + '">' + decodeHtml(shortIntro) + '</p>';
                    }
                    var available = '';
                    // If activity is user visible then don't show restriction msg.
                    if (val1.isAvailable != 1 && val1.availabilityinfo != '') {
                      available = '<span class="courses_modules_datetime">' + val1.availabilityinfo + '</span>';
                    }
                    var actions = '';
                    if (page.role != 'student') {
                      if (val1.completion != 0) {
                        actions += '<li><span class="fas fa-check-circle color-grey"></span></li>';
                      }
                      if (page.role != 'editingteacher') {
                        actions += '<li><a href="javascript:;" class="editActivity" data-id="' + val1.id + '" data-module="' + val.sec_id + '"><span class="fas fa-edit"></span></a></li>';
                        if (page.is_del_allowed == 1) {
                          actions += '<li><a href="javascript:;" class="deleteActivity" data-id="' + val1.id + '" data-module="' + val.sec_id + '" data-act_name="' + val1.name + '"><span class="fas fa-trash-alt"></span></a></li>';
                        }
                      }
                    } else {
                      // Added by Shiuli.
                      if (val1.completion != 0) {
                        activity_completed_count += val1.progress;
                        //console.log(activity_completed_count);
                        actions += '<li>';
                        var prog_class = '';
                        var titleA = '';
                        if (val1.modname == 'url') {
                          var titleA = val1.progress + '%';
                        } else {
                          if (val1.progress == 0) {
                            titleA = 'Not Started';
                          } else if (val1.progress > 0 && val1.progress < 100) {
                            titleA = 'In-Progress';
                          } else {
                            titleA = 'Completed';
                          }
                        }
                        // val1.progress = 100;
                        if (val1.progress <= 25 && val1.progress > 0) {
                          prog_class = 'brown-small-bar';
                        } else if (val1.progress > 50) {
                          prog_class = 'brown-bar';
                        }
                        actions += '<div class="module-progress-pie">';
                        actions += '<div data-toggle="tooltip" title="' + titleA + '" class="c100 p' + val1.progress + ' center">';
                        if (val1.progress == 100) {
                          actions += '<span><i class="fas fa-check"></i></span>';
                        } else {
                          actions += '<span> ' + val1.progress + '%</span>';
                        }
                        actions += '<div class="slice ' + prog_class + '"><div class="bar"></div><div class="fill "></div></div>';
                        actions += '</div>';
                        actions += '</div>';
                        actions += '</li>';
                      }
                      if (val1.modname != 'label') {
                        actions += '<li class="action123">' + viewbtn + '</li>'
                      }
                    }
                    if ((page.role != 'editingteacher') || ((val1.modname != 'quiz' && val1.modname != 'assign') && page.role == 'editingteacher')) // this code added By KD for assessment visiable for Teacher role under assessment only
                    {

                      let extraClass = '';
                      // if (page.is_pal == 1) {
                      // 	tag = val1.tags.length !== 0 ? val1.tags.map(tag => tag.replace(/\s+/g, "_")).join(" ") : 'learning_material';
                      // }

                      if (val1.modname === 'label') {
                        extraClass += ' panel-title d-block ';
                      }

                      output += '<div class="col-md-12 modules_accordian_content ' + extraClass + '">';
                      output += '<div class="courses_modules_desc d-flex align-items-center">';
                      // output += '<span class="cmn-activity-icon"><i class="'+ val1.icon +'"></i></span>';
                      output += '<span class="cmn-activity-icon"><span class="material-symbols-outlined ' + val1.icon + '"></span></span>';
                      // output += '<img src="'+val1.icon+'">';
                      output += '<h6 class="courses_modules_body_text">';
                      output += activityName;
                      output += details;
                      output += available;
                      output += '</h6>';
                      // output += '<ul class="module-action-btns">'+actions+'</ul>';

                      if (val1.modname != 'customcert') {
                        output += '<ul class="module-action-btns">' + actions + '</ul>';
                      } else {
                        if (page.role == 'editingteacher') {
                          if (val1.completion != 0) {
                            actions += '<li><span class="fas fa-check-circle color-grey"></span></li>';
                          }
                        } else {
                          if (val1.modname != 'label') {
                            output += '<ul class="module-action-btns">' + actions + '</ul>';
                          }
                        }
                      }
                      output += '</div>';
                      output += '</div>';

                    }

                  })

                } else {

                  // if(page.role =='student' && page.is_pal==1){
                  if (page.role == 'student' && page.is_pal != 1) {
                    output += '<div class="col-md-12 modules_accordian_content">';
                    output += '<div class="courses_modules_desc d-flex align-items-center">';
                    output += '<i class="fas fa-ellipsis-v courses_module_threedots_icon_left"></i>';
                    output += '<i class="fas fa-ellipsis-v courses_module_threedots_icon_left"></i>';
                    output += '<h6 class="courses_modules_body_text">';
                    output += page.lang_no_activity_found;
                    output += '</h6>';
                    output += '</div>';
                    output += '</div>';
                  } else if (page.role != 'student' && page.is_pal != 1) {
                    output += '<div class="col-md-12 modules_accordian_content">';
                    output += '<div class="courses_modules_desc d-flex align-items-center">';
                    output += '<i class="fas fa-ellipsis-v courses_module_threedots_icon_left"></i>';
                    output += '<i class="fas fa-ellipsis-v courses_module_threedots_icon_left"></i>';
                    output += '<h6 class="courses_modules_body_text">';
                    output += page.lang_no_activity_found;
                    output += '</h6>';
                    output += '</div>';
                    output += '</div>';
                  }
                }
                // output += '<div class="col-md-12 modules_accordian_content px-4" id="no-content-found-'+i+'"></div>';
              }
              output += '</div>';
              output += '</div>';
              output += '</div>';
            }
            output += '</div>';
            output += '</div>';
          }
          i++;
          if (page.is_pal != 1) {
            var module_percentage = 0;
            if (activity_completed_count > 0) {
              module_percentage = Math.round((activity_completed_count / activity_count) * 100);//.toFixed(2);
            }
            var module_class = "";
            if (module_percentage <= 25 && module_percentage > 0) {
              module_class = 'brown-small-bar';
            } else if (module_percentage > 50) {
              module_class = 'brown-bar';
            }

            module_progress = '<div class="module-progress-pie float-right">';
            module_progress += '<div class="c100 p' + module_percentage + ' center">';
            if (module_percentage == 100) {
              module_progress += '<span><i class="fas fa-check"></i></span>';
            } else {
              module_progress += '<span>' + module_percentage + '%</span>';
            }
            module_progress += '<div class="slice ' + module_class + '">';
            module_progress += '<div class="bar"></div>';
            module_progress += '<div class="fill"></div>';
            module_progress += ' </div>';
            module_progress += '</div>';
            module_progress += '</div>';

            output = output.replace(new RegExp('\\[SECTION-PROGRESS-' + section_id + '\\]', 'g'), module_progress);
          }
        });

        $('#module').append(output);

        // Render PAL activities.
        if (page.is_pal == 1) {
          render_pal_activities(data);
        }

        setTimeout(function () {

          // Get the current URL
          var urlParams = new URLSearchParams(window.location.search);
          // Check if 'cmid' parameter exists
          if (urlParams.has('cmid')) {
            // Get the value of the 'cmid' parameter
            var cmidValue = urlParams.get('cmid');
            $('a[act_id="' + cmidValue + '"]')[0].click();

            // Remove 'cmid' from the URL
            urlParams.delete('cmid');

            // Update the URL without reloading the page
            var newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + urlParams.toString();

            // Use history.replaceState to update the URL
            window.history.replaceState(null, '', newUrl);
          }

          if ($(document).find("#headingOne" + activeIndex).length) {
            $('html, body').animate({
              scrollTop: $(document).find("#headingOne" + activeIndex).offset().top
            }, 2000);
          }
        }, 600)
      } else {
        var output = '';
        output += '<div class="row no-gutters">';
        output += '<span>' + page.lang_no_course_summary_available + '</span>';
        output += '</div>';
        $('#module').append(output);
      }
    },
    beforeSend: function () {
      // Code to display spinner
      $('.loader_modules').html("<div style='display: flex;height: 300px;justify-content: center;align-items: center;'><img src='" + page.book_loader + "' style='width: 150px;margin: 0 auto; vertical-align: middle;'/></div>");
      $('#module').css('display', 'none');
    },
    complete: function (data) {
      // Code to hide spinner.
      $('.loader_modules').empty();
      $('#module').css('display', 'block');
      if (data.responseJSON.cert_access) {
        $.ajax({
          type: "POST",
          url: page.url + "/" + page.prod_root + "/call_api.php?fun=trigyn_get_notification_icon",
          mathod: 'POST',
          data: {},
          success: function (response) {
            $("#ic-notification-block").html(response)
          },
        })
      }
      if (activeSubId) {
        $('#' + activeSubId + ' .panel-black-link').trigger('click');
      }
    }
  });
}

/**
 * This function will render all activity in PAL
 */
function render_pal_activities(data) {
  if (data.modules.length > 0) {
    let i = 1;
    let output = '';
    let activity_count;
    let activity_completed_count;
    let section_id

    $.each(data.modules, function (key, val) {
      activity_count = 0;
      activity_completed_count = 0;
      section_id = val.sec_id;
      if (val.sec_id != 0) {
        if (page.role == 'programofficer' ||
          page.role == 'coursereviewer' ||
          page.role == 'coursecreator'
        ) {
          if (val.sec_groups.length > 0) {
            $.each(val.sec_groups, function (key11, val11) {
              if (val11.activities.length > 0) {
                var indexPosition = 0;
                $.each(val11.activities, function (key1, val1) {
                  var activityName = val1.name;
                  var video_time = "";
                  //Uncommnet below line of code for view video duration
                  if (val1.modname == 'url') {
                    //video_time = "20 Sec";
                    var minutes = Math.round(val1.video_duration / 60);
                    if (minutes > 0)
                      video_time = "<span class='courses_modules_subassign'>Approx runtime: " + minutes + " min</span>";
                  }
                  var viewbtn = (page.role == 'coursereviewer') ? '' : '<a class="faded btn view-disabled-btn" disabled>' + page.lang_view + '</a>';
                  if (val1.modname == 'page' ||
                    val1.modname == 'resource' ||
                    val1.modname == 'scorm' ||
                    val1.modname == 'url' ||
                    val1.modname == 'bigbluebuttonbn' ||
                    val1.modname == 'customcert' ||
                    val1.modname == 'hvp' ||
                    val1.modname == 'vpl' ||
                    val1.modname == 'h5pactivity'
                  ) {
                    activityName = '<a href="javascript:;" class="activity-list ' + val1.availabilityClass + '" type="activity" act_type="' + val1.modname + '" act_id="' + val1.id + '" >' + val1.name + '</a>' + video_time;
                  } else if (
                    val1.modname == 'quiz' ||
                    val1.modname == 'assign' ||
                    val1.modname == 'label' ||
                    val1.modname == 'feedback'
                  ) {
                    //alert(val1.name);
                    activityName = val1.name;
                  }
                  var details = '';
                  if (val1.intro != null) {
                    var shortIntro = val1.intro;
                    if (val1.intro.length > 250) {
                      shortIntro = jQuery.trim(val1.intro).substring(0, 250).split(" ").slice(0, -1).join(" ") + "...";
                    }
                    details = '<p class="courses_modules_subassign" data-toggle="tooltip" title="' + decodeHtml(val1.intro) + '">' + decodeHtml(shortIntro) + '</p>';
                  }
                  var available = '';
                  // If activity is user visible then don't show restriction msg.
                  if (val1.availabilityinfo != '') {
                    available = '<span class="courses_modules_datetime">' + val1.availabilityinfo + '</span>';
                  }
                  // var actions = '';
                  // if(page.role != 'student' && page.role != 'coursereviewer' && page.role != 'editingteacher'){
                  // 	if (val1.completion != 0) {
                  // 		actions += '<li><span class="fas fa-check-circle color-grey"></span></li>';
                  // 	}
                  // 	actions += '<li><a href="javascript:;" class="editActivity mx-1" data-id="'+val1.id+'" data-module="'+val.sec_id+'"><span class="fas fa-edit"></span></a></li>';
                  // 	actions += '<li><a href="javascript:;" class="deleteActivity" data-act_name="'+val1.name+'" data-id="'+val1.id+'" data-module="'+val.sec_id+'"><span class="fas fa-trash"></span></a></li>';

                  // 	if(page.is_del_allowed == 1){
                  // 		actions += '<li><a href="javascript:;" class="deleteActivity" data-id="'+val1.id+'" data-module="'+val.sec_id+'" data-act_name="'+val1.name+'"><span class="fas fa-trash-alt"></span></a></li>';
                  // 	}
                  // 	actions += '<li><img src="'+page.url+'/'+page.prod_root+'/assets/img/drag-icon.svg" alt="drag" class="icon-move" data-id="'+val1.id+'" data-position="'+indexPosition+'"> </li>';
                  // }else{
                  // 	// Added by Shiuli.
                  // 	if (val1.completion != 0) {
                  // 		actions += '<li>';
                  // 		var prog_class = '';
                  // 		var titleA = '';
                  // 		if (val1.modname == 'url') {
                  // 			var titleA = val1.progress + '%';
                  // 		} else {
                  // 			if (val1.progress == 0) {
                  // 				titleA = 'Not Started';
                  // 			} else if (val1.progress > 0 && val1.progress < 100) {
                  // 				titleA = 'In-Progress';
                  // 			} else {
                  // 				titleA = 'Completed';
                  // 			}
                  // 		}
                  // 		if (val1.progress <= 25 && val1.progress > 0) {
                  // 			prog_class = 'yellow-bar';
                  // 		} else if (val1.progress > 50){
                  // 			prog_class = 'green-bar';
                  // 		}
                  // 		actions += '<div class="module-progress-pie">';
                  // 		actions += '<div data-toggle="tooltip" title="'+ titleA +'" class="c100 p'+val1.progress+' center">';
                  // 		actions += '<div class="slice '+prog_class+'"><div class="bar"></div><div class="fill "></div></div>';
                  // 		actions += '</div>';
                  // 		actions += '</div>';
                  // 		actions += '</li>';
                  // 	}
                  // 	actions += '<li>'+viewbtn+'</li>';
                  // }

                  let tag = '';
                  tag = val1.tags.length !== 0 ? val1.tags.map(tag => tag.replace(/\s+/g, "_")).join(" ") : 'learning_material';

                  extraClass = '';
                  if (val1.modname === 'label') {
                    extraClass += ' panel-title d-block ';
                  }

                  if ((page.role == 'coursereviewer') ||
                    ((page.role == 'coursecreator' || page.role == 'programofficer')
                      // &&(val1.modname != 'quiz' && val1.modname != 'assign')
                    )
                  ) {
                    output = '';
                    output += '<div class="col-md-12 modules_accordian_content draggable-item no-move ' + extraClass + '" data-tag="' + tag + '" id="drag-item' + val1.id + '" data-id="' + val1.id + '" data-course="' + page.courseid + '"  data-section="' + val11.id + '" data-position="' + indexPosition + '">';
                    output += '<div class="courses_modules_desc d-flex align-items-center">';
                    // output += '<span class="cmn-activity-icon"><i class="'+ val1.icon +'"></i></span>';
                    output += '<span class="cmn-activity-icon"><span class="material-symbols-outlined ' + val1.icon + '"></span></span>';
                    // output += '<img src="'+val1.icon+'">';
                    output += '<h6 class="courses_modules_body_text d-inline-block d-inline-block">';
                    output += activityName;
                    if (page.role == 'coursecreator') {
                      if (val1.lo_mapping && val1.modname != 'customcert' && val1.modname != 'label') {
                        output += '<a class="btn btn-primary btn-sm mx-2 float-right" style="max-width:fit-content" href="javascript:void(0)" onclick="return activityWiseLO(' + val1.lo_mapping.cm_id + ')"> Edit Learning Outcome</a> ';
                      } else {
                        if (val1.modname != 'customcert' && val1.modname != 'quiz' && val1.modname != 'assign' && val1.modname != 'label' && val1.modname != 'feedback') {
                          output += ' <button style="max-width:fit-content" id="new-btn-learning-outcome" class="btn btn-primary btn-sm mx-2 float-right new-btn-learning-outcome_class" data-toggle="modal" learning-outcome="' + val1.id + '" data-target="#addLearningOutcomeModal" data-activity-name="' + val1.name + '" >Add Learning Outcome</button>';
                        }
                      }
                    }
                    output += details;
                    output += available;
                    output += '</h6>';

                    var actions = '';
                    if (page.role != 'student' && page.role != 'coursereviewer' && page.role != 'editingteacher') {
                      if (val1.modname == 'url' && val1.isoraclevideo) {
                        actions += '<li><a href="javascript:;" class="viewcaptiondetails" data-id="' + val1.id + '" data-bs-toggle="modal" data-bs-target="#captionmodal"><span class="fas fa-headphones" data-toggle="tooltip" title="Caption Details"></span></a></li>';
                      }
                      if (data.caneditcourse) {
                        actions += '<li><a href="javascript:;" class="editActivity mx-1" data-id="' + val1.id + '" data-module="' + val.sec_id + '"><span class="fas fa-edit"></span></a></li>';
                      }
                      if (page.role == 'evaluator') {
                        var visibility_class = '';
                      } else {
                        var visibility_class = '<span class="icon-icl-eye-black activity_show_hide_eye"></span>';
                      }
                      if (val.cmvisible == 0) {
                        hidden_card = 'hidden-card';
                        visibility_class = '<span class="icon-icm-eye-gray-slash activity_show_hide_eye"></span>';
                      }
                      actions += '<li><a href="javascript:;" class="showHideActivity mx-1" data-id="' + val1.id + '" data-current_visibility="' + val1.visibility + '" data-module="' + val.sec_id + '"> ' + visibility_class + ' </a></li>';
                      if (data.caneditcourse) {
                        actions += '<li><a href="javascript:;" class="deleteActivity" data-act_name="' + val1.name + '" data-id="' + val1.id + '" data-module="' + val.sec_id + '"><span class="fas fa-trash"></span></a></li>';
                      }
                      actions += '<li><img src="' + page.url + '/' + page.prod_root + '/assets/img/drag-icon.svg" alt="drag" class="icon-move" data-id="' + val1.id + '" data-position="' + indexPosition + '"> </li>';
                    } else {
                      // Added by Shiuli.
                      if (val1.completion != 0) {
                        actions += '<li>';
                        var prog_class = '';
                        var titleA = '';
                        if (val1.modname == 'url') {
                          var titleA = val1.progress + '%';
                        } else {
                          if (val1.progress == 0) {
                            titleA = 'Not Started';
                          } else if (val1.progress > 0 && val1.progress < 100) {
                            titleA = 'In-Progress';
                          } else {
                            titleA = 'Completed';
                          }
                        }
                        if (val1.progress <= 25 && val1.progress > 0) {
                          prog_class = 'yellow-bar';
                        } else if (val1.progress > 50) {
                          prog_class = 'green-bar';
                        }
                        actions += '<div class="module-progress-pie">';
                        actions += '<div data-toggle="tooltip" title="' + titleA + '" class="c100 p' + val1.progress + ' center">';
                        actions += '<div class="slice ' + prog_class + '"><div class="bar"></div><div class="fill "></div></div>';
                        actions += '</div>';
                        actions += '</div>';
                        actions += '</li>';
                      }
                      actions += '<li>' + viewbtn + '</li>';
                    }
                    if (val1.modname == 'quiz' || val1.modname == 'assign' || val1.modname == 'feedback') {
                      actions = '<li><img src="' + page.url + '/' + page.prod_root + '/assets/img/drag-icon.svg" alt="drag" class="icon-move" data-id="' + val1.id + '" data-position="' + indexPosition + '"> </li>';
                      output += '<ul class="module-action-btns">' + actions + '</ul>';
                    } else {
                      output += '<ul class="module-action-btns">' + actions + '</ul>';
                    }
                    output += '</div>';
                    output += '</div>';

                    let activityTags = val1.tags.length !== 0 ? val1.tags : ['learning_material'];
                    let selector = null;
                    switch (true) {
                      // prerequisites learning_material assignment additional_content exercises
                      case activityTags.includes('prerequisites'):
                        selector = $('#dropAreaPrerequisite' + i);
                        break;
                      case activityTags.includes('additional content'):
                        selector = $('#dropAreaAdditionalContent' + i);
                        break;
                      default:
                        selector = $('#dropAreaLearningMaterial' + i);
                        break;
                    }
                    selector.append(output);
                  }
                })
              }
            });
          }
        } else {
          if (val.sec_modules.length > 0) {
            $.each(val.sec_modules, function (key1, val1) {
              // Count the total of all activites by adding 100 for each activity
              if (val1.modname !== 'label') {
                activity_count += 100;
              }
              let activityName = val1.name;
              let video_time = "";
              if (val1.modname == 'url') {
                var minutes = Math.round(val1.video_duration / 60);
                if (minutes > 0)
                  video_time = "<span class='courses_modules_subassign'>Approx runtime: " + minutes + " min</span>";
              }
              var viewbtn = '<a class="faded btn view-disabled-btn" disabled>' + page.lang_view + '</a>';
              if (val1.modname == 'page' ||
                val1.modname == 'resource' ||
                val1.modname == 'scorm' ||
                val1.modname == 'url' ||
                val1.modname == 'bigbluebuttonbn' ||
                val1.modname == 'quiz' ||
                val1.modname == 'assign' ||
                val1.modname == 'customcert' ||
                val1.modname == 'hvp' ||
                val1.modname == 'vpl' ||
                val1.modname == 'h5pactivity' ||
                val1.modname == 'feedback'
              ) {
                if (page.role == 'student') {
                  // If activity is user visible then don't show restriction msg.
                  viewbtn = '<h1>' + ((val1.isAvailable != 1 && val1.availabilityinfo != '') || !val1.isModuleAvailable) + '</h1>';
                  if ((val1.isAvailable != 1 && val1.availabilityinfo != '') || !val1.isModuleAvailable) {
                    activityName = '<span class="faded" act_type="' + val1.modname + '" faded_id="' + val1.id + '">' + val1.name + '</span>' + video_time;
                    viewbtn = '<a class="faded btn view-disabled-btn" disabled>' + page.lang_view + '</a>';
                  } else {
                    if (val1.modname == 'customcert') {
                      activityName = '<a href="' + val1.url + '" class="activity-list" type="activity" act_type="' + val1.modname + '" act_id="' + val1.id + '" >' + val1.name + '</a>';
                      viewbtn = '<a href="' + val1.url + '" target="_blanck" class="btn btn-primary module-view-btn activity-list" type="activity" act_type="' + val1.modname + '" act_id="' + val1.id + '">' + page.lang_view + '</a>';
                    } else if (val1.modname == 'assign') {
                      activityName = '<a href="javascript:;" class="view_assignment" type="activity" data-id="' + val1.id + '">' + val1.name + '</a>' + video_time;
                      viewbtn = '<a href="javascript:;" class="btn btn-primary module-view-btn view_assignment" type="activity" data-id="' + val1.id + '">' + page.lang_view + '</a>';
                    } else if (val1.modname == 'feedback') {
                      activityName = '<a href="javascript:;" class="activity-feedback" type="activity" act_type="' + val1.modname + '" act_id="' + val1.id + '" >' + val1.name + '</a>' + video_time;
                      viewbtn = '<a href="javascript:;" class="btn btn-primary module-view-btn activity-feedback" type="activity" act_type="' + val1.modname + '" act_id="' + val1.id + '">' + page.lang_view + '</a>';
                    } else {
                      activityName = '<a href="javascript:;" class="activity-list" type="activity" act_type="' + val1.modname + '" act_id="' + val1.id + '" >' + val1.name + '</a>' + video_time;
                      viewbtn = '<a href="javascript:;" class="btn btn-primary module-view-btn activity-list" type="activity" act_type="' + val1.modname + '" act_id="' + val1.id + '">' + page.lang_view + '</a>';
                    }
                  }
                } else {
                  activityName = '<a href="javascript:;" class="activity-list ' + val1.availabilityClass + '" type="activity" act_type="' + val1.modname + '" act_id="' + val1.id + '" >' + val1.name + '</a>' + video_time;
                }
              }
              var details = '';
              if (val1.intro != null) {
                var shortIntro = val1.intro;
                if (val1.intro.length > 250) {
                  shortIntro = jQuery.trim(val1.intro).substring(0, 250).split(" ").slice(0, -1).join(" ") + "...";
                }
                details = '<p class="courses_modules_subassign" data-toggle="tooltip" title="' + decodeHtml(val1.intro) + '">' + decodeHtml(shortIntro) + '</p>';
              }
              var available = '';
              // If activity is user visible then don't show restriction msg.
              if (val1.isAvailable != 1 && val1.availabilityinfo != '') {
                available = '<span class="courses_modules_datetime">' + val1.availabilityinfo + '</span>';
              }
              var actions = '';
              if (page.role != 'student') {
                if (val1.completion != 0) {
                  actions += '<li><span class="fas fa-check-circle color-grey"></span></li>';
                }
                if (page.role != 'editingteacher') {
                  actions += '<li><a href="javascript:;" class="editActivity" data-id="' + val1.id + '" data-module="' + val.sec_id + '"><span class="fas fa-edit"></span></a></li>';
                  if (page.is_del_allowed == 1) {
                    actions += '<li><a href="javascript:;" class="deleteActivity" data-id="' + val1.id + '" data-module="' + val.sec_id + '" data-act_name="' + val1.name + '"><span class="fas fa-trash-alt"></span></a></li>';
                  }
                }
              } else {
                // Added by Shiuli.
                if (val1.completion != 0) {
                  // Count the total progress of all completed activites
                  activity_completed_count += val1.progress;
                  actions += '<li>';
                  var prog_class = '';
                  var titleA = '';
                  if (val1.modname == 'url') {
                    var titleA = val1.progress + '%';
                  } else {
                    if (val1.progress == 0) {
                      titleA = 'Not Started';
                    } else if (val1.progress > 0 && val1.progress < 100) {
                      titleA = 'In-Progress';
                    } else {
                      titleA = 'Completed';
                    }
                  }
                  if (val1.progress <= 25 && val1.progress > 0) {
                    prog_class = 'yellow-bar';
                  } else if (val1.progress > 50) {
                    prog_class = 'green-bar';
                  }
                  actions += '<div class="module-progress-pie">';
                  actions += '<div data-toggle="tooltip" title="' + titleA + '" class="c100 p' + val1.progress + ' center">';
                  if (val1.progress == 100) {
                    actions += '<span><i class="fas fa-check"></i></span>';
                  } else {
                    actions += '<span> ' + val1.progress + '%</span>';
                  }
                  actions += '<div class="slice ' + prog_class + '"><div class="bar"></div><div class="fill "></div></div>';
                  actions += '</div>';
                  actions += '</div>';
                  actions += '</li>';
                }
                if (val1.modname != 'label') {
                  actions += '<li class="action123">' + viewbtn + '</li>'
                }
              }
              if ((page.role != 'editingteacher') ||
                ((val1.modname != 'quiz' && val1.modname != 'assign') &&
                  page.role == 'editingteacher'
                )) // this code added By KD for assessment visiable for Teacher role under assessment only
              {
                let tag = '';
                tag = val1.tags.length !== 0 ? val1.tags.map(tag => tag.replace(/\s+/g, "_")).join(" ") : 'learning_material';

                extraClass = '';
                if (val1.modname === 'label') {
                  extraClass += ' panel-title d-block ';
                }

                output = '';
                output += '<div class="col-md-12 modules_accordian_content ' + extraClass + '" data-tag="' + tag + '" >';
                output += '<div class="courses_modules_desc d-flex align-items-center">';
                output += '<span class="cmn-activity-icon"><span class="material-symbols-outlined ' + val1.icon + '"></span></span>';
                // output += '<img src="'+val1.icon+'">';
                output += '<h6 class="courses_modules_body_text">';
                output += activityName;
                output += details;
                output += available;
                output += '</h6>';
                output += '<ul class="module-action-btns">' + actions + '</ul>';
                if (val1.modname != 'customcert') {
                  output += '<ul class="module-action-btns">' + actions + '</ul>';
                } else {
                  if (page.role == 'editingteacher') {
                    if (val1.completion != 0) {
                      actions += '<li><span class="fas fa-check-circle color-grey"></span></li>';
                    }
                  } else {
                    if (val1.modname != 'label') {
                      output += '<ul class="module-action-btns"><li class="action123">' + viewbtn + '</li></ul>';
                    }
                  }
                }
                output += '</div>';
                output += '</div>';

                let activityTags = val1.tags.length !== 0 ? val1.tags : ['learning_material'];
                let selector = null;
                switch (true) {
                  // prerequisites learning_material assignment additional_content exercises
                  case activityTags.includes('prerequisites'):
                    selector = $('#dropAreaPrerequisite' + i);
                    break;
                  case activityTags.includes('additional content'):
                    selector = $('#dropAreaAdditionalContent' + i);
                    break;
                  default:
                    selector = $('#dropAreaLearningMaterial' + i);
                    break;
                }

                selector.append(output);
              }
            })
          }
        }
        i++;
      }
      var module_percentage = 0;
      if (activity_completed_count > 0) {
        module_percentage = Math.round((activity_completed_count / activity_count) * 100);//.toFixed(2);
      }
      var module_class = "";
      if (module_percentage <= 25 && module_percentage > 0) {
        module_class = 'brown-small-bar';
      } else if (module_percentage > 50) {
        module_class = 'brown-bar';
      }

      module_progress = '<div class="c100 p' + module_percentage + ' center">';
      if (module_percentage == 100) {
        module_progress += '<span><i class="fas fa-check"></i></span>';
      } else {
        module_progress += '<span>' + module_percentage + '%</span>';
      }
      module_progress += '<div class="slice ' + module_class + '">';
      module_progress += '<div class="bar"></div>';
      module_progress += '<div class="fill"></div>';
      module_progress += ' </div>';
      module_progress += '</div>';
      var progress = '.SECTION-PROGRESS-' + section_id;
      $(progress).html(module_progress);
    });

    $('.sub-accordion .modules_full_accordian_div').each(function (idx, val) {
      output = '';
      if ($(val).find('.modules_accordian_content').length == 0) {
        output += '<div class="col-md-12 modules_accordian_content">';
        output += '<div class="courses_modules_desc d-flex align-items-center">';
        output += '<i class="fas fa-ellipsis-v courses_module_threedots_icon_left"></i>';
        output += '<i class="fas fa-ellipsis-v courses_module_threedots_icon_left"></i>';
        output += '<h6 class="courses_modules_body_text">';
        output += page.lang_no_activity_found;
        output += '</h6>';
        output += '</div>';
        output += '</div>';

        $(val).find('.panel-body').html(output);
      }
    });

  } else {
    var output = '';
    output += '<div class="row no-gutters">';
    output += '<span>' + page.lang_no_course_summary_available + '</span>';
    output += '</div>';
    $('#module').append(output);
  }
}


/*
// function render_assignment(){
// 	$.ajax({
// 		type: "POST",
// 		url: page.courseurl,
// 		data: {
// 			function: 'get_course_assignment_data'
// 		},
// 		dataType: "json",
// 		success: function(data) {
// 			console.log(data.assignment);
// 			$('#assignment').empty();
// 			if(data.assignment.length>0){
// 				var i=1;
// 				var output='';
// 				if(page.role == 'parent'){
// 					output += '<div class="row">';
//                 }else{
//                 	output += '<ul class="assignments-block">';
//                 }
// 				$.each( data.assignment, function( key, val ) {
// 					var shortTopic=val.topic_name;
// 						if (val.topic_name.length > 20) {
// 							shortTopic = jQuery.trim(val.topic_name).substring(0, 20).split(" ").slice(0, -1).join(" ") + "...";
// 						}
// 						var short_name=val.cmname;
// 						if (val.cmname.length > 30) {
// 							short_name = jQuery.trim(val.cmname).substring(0, 30).split(" ").slice(0, -1).join(" ") + "...";
// 						}
//                     if(page.role == 'parent'){
//                         output += '<div class="col-md-12">';
//                         output += '<div class="pr-assignment-strip">'; 
//                         output += '<div class="card shadow mb-3 p-3">'; 
//                         output += '<div class="row pr-assignment-strip-head">'; 
//                         output += '<div class="col-md-4"><h5 class="parent_subject mb-0" data-toggle="tooltip" title="'+val.cmname+'">'+short_name+'</h5></div>'; 
//                         output += '<div class="col-md-4"><p class="parent_status"><span>Status:</span><span class="status-submited"> '+val.substatus+'</span></p></div>'; 
//                         output += '<div class="col-md-4"><a href="#" class="sm-view-btn" > View </a></div>'; 
//                         output += '</div>'; 
//                         output += '<div class="row">'; 
//                         output += '<div class="col-lg-12">'; 
//                         output += '<hr>'; 
//                         output += '</div>'; 
//                         output += '<div class="col-lg-12">'; 
//                         output += '<div class="row pr-assignment-strip-content">'; 
//                         output += '<div class="col-md-4 student-info1">'; 
//                         output += '<h6 data-toggle="tooltip" title="'+val.topic_name+'">'+shortTopic+'</h6>';
//                         // output += '<div class="pic-sec">'; 
//                         // output += '<img src="./img/topic1_7.png"  class="img-fluid">'; 
//                         // output += '</div>'; 
//                         // output += '<div class="info-sec">'; 
//                         // output += '<h4>Carolyn Martin</h4>'; 
//                         // output += '<span>Class 8A</span>'; 
//                         // output += '</div>'; 
//                         output += '</div>'; 
//                         output += '<div class="col-md-4"><p class="assignee-info"> Assigned by Rachel Green</p> </div>'; 
//                         output += '<div class="col-md-4"><p class="assignment-info">Due on '+val.duedate+' </p> </div>'; 
//                         output += '</div>'; 
//                         output += '</div>'; 
//                         output += '</div>'; 
//                         output += '</div>'; 
//                         output += '</div>'; 
//                         output += '</div>'; 
//                     }else{
//                     	var completion_icon='';
// 						if (page.role == 'student') {
// 							if (val.status != '') {
// 								if (val.status.state == 1) {
// 									completion_icon = '<span class="fas fa-check-circle green-color"></span>';
// 								} else {
// 									completion_icon = '<span class="fas fa-check-circle grey-color"></span>';
// 								}
// 							} else {
// 								completion_icon = '<span class="fas fa-check-circle grey-color"></span>';
// 							}
// 							//var edit_icon = '<li><i class="fa fa-ellipsis-v" aria-hidden="true"></i></li>';
// 							var edit_icon ='<li class="assignment-actions">';
// 							edit_icon += '<a href="javascript:;" class="actions-trigger" data-id="'+val.cmid+'"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>';
// 							edit_icon +='<div class="action-list" id="action-list'+val.cmid+'">';
// 							edit_icon +='<a href="javascript:;" class="view_assignment" data-id="'+val.cmid+'">View</a>';
// 							//console.log(val.max_attempts);
// 							// console.log(val.no_of_attempt);
// 						   	if(val.max_attempts > val.no_of_attempt){
// 						   		edit_icon +='<a href="javascript:;" class="submit_assignment" data-id="'+val.cmid+'">Submit Assignment</a>';
// 							}
// 							else{
// 								edit_icon +='<a href="javascript:;" class="disabled" data-id="'+val.cmid+'" data-toggle="tooltip" title="This assignment is already been attempted upto max limit">Submit Assignment</a>';
// 							}
// 							edit_icon += '</div>';
// 							edit_icon += '</li>';
// 						} else if (page.role == 'editingteacher') {
// 							if(val.completion != 0){
// 								completion_icon += '<span class="fas fa-check-circle grey-color"></span>';
// 							}
// 							var edit_url = page.url+'/'+page.prod_root+'/assignment.php?course='+page.courseid+'&section='+page.section+'&id='+val.cmid;
// 						    //var edit_icon = '<li><a href="'+edit_url+'"><i class="fas fa-edit"></i></a></li>';
// 						    var edit_icon ='<li class="assignment-actions" >';
// 						    edit_icon += '<a href="javascript:;" class="actions-trigger" data-id="'+val.cmid+'"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>';
// 						    edit_icon +='<div class="action-list" id="action-list'+val.cmid+'">';
// 						    edit_icon +='<a href="'+edit_url+'" class="">Edit</a>';
// 						   	edit_icon +='<a href="javascript:;" class="view_submission" data-id="'+val.cmid+'" data-name="'+val.cmname+'">View</a>';
// 	 						edit_icon += '</div>';
// 						    edit_icon += '</li>';
// 						}else{
// 							var edit_url = page.url+'/'+page.prod_root+'/assignment.php?course='+page.courseid+'&id='+val.cmid;
// 						    //var edit_icon = '<li><a href="'+edit_url+'"><i class="fas fa-edit"></i></a></li>';
// 						    var edit_icon ='<li class="assignment-actions" >';
// 						    edit_icon += '<a href="javascript:;" class="actions-trigger" data-id="'+val.cmid+'"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>';
// 						    edit_icon +='<div class="action-list" id="action-list'+val.cmid+'">';
// 						    edit_icon +='<a href="'+edit_url+'" class="">Edit</a>';
// 						    edit_icon +='<a href="javascript:;" class="view_assignment" data-id="'+val.cmid+'">View</a>';
// 						    edit_icon += '</div>';
// 						    edit_icon += '</li>';
// 						}
// 						//console.log(edit_icon);
          	
// 						output += '<li>';
// 						output += '<div>';
// 						output += '<ul class="assign-header">';
// 						output += '<li>';
// 						output += '<p data-toggle="tooltip" title="'+val.cmname+'" >'+short_name+'</p>';
// 						output += '</li>';
// 						output += '<li>';
// 						output += completion_icon;
// 						output += '</li>';
// 						//output += '<li><i class="fa fa-ellipsis-v" aria-hidden="true"></i></li>';
// 						output += edit_icon;
// 						output += '</ul>';
// 						output += '</div>';
// 						output += '<div class="icon blue">';
// 						output += '<img src="'+page.url+'/'+page.prod_root+'/assets/img/topic1_7.png" />';
// 						output += '</div>';
// 						output += '<div class="topic">';
// 						output += '<h6 data-toggle="tooltip" title="'+val.topic_name+'">'+shortTopic+'</h6>';
// 						output += '<p>Group Assignment Assigned to Group 1</p>';
// 						output += '</div>';
// 						output += '</li>';
//                     }
        	

// 				});
// 			if(page.role == 'parent'){
// 					output += '</div>';
//             }else{
//             	output += '</ul>';
//             }
	
// 	$('#assignment').append(output);
// }else{
// 	var output = '';
// 	output += '<div class="row no-gutters">';
// 	output += '<p>'+page.lang_no_assignments+'</p>';
// 	output += '</div>';
// 	$('#assignment').append(output);
// }

// },
// beforeSend: function() {
//             // Code to display spinner
//             $('.loader_assignment').html("<img src='"+ page.img +"' style='padding-top:20%;'/>");
//         },
//         complete: function() {
//             // Code to hide spinner.
//             $('.loader_assignment').empty();
//         }
//     });
// }
// function render_quiz(){
// 	$.ajax({
// 		type: "POST",
// 		url: page.courseurl,
// 		data: {
// 			function: 'get_course_quiz_data'
// 		},
// 		dataType: "json",
// 		success: function(data) {
// 			console.log(data.quiz);
// 			$('#quiz').empty();
// 			if(data.quiz.length>0){
// 				var i=1;
// 				var output='';
// 				output += '<ul class="assignments-block">';
// 				$.each( data.quiz, function( key, val ) {

// 					var completion_icon='';
// 					if(page.role == 'programofficer'){
// 						var edit_url = page.url+'/'+page.prod_root+'/quiz.php?course='+page.courseid+'&topic='+val.topic_id+'&id='+val.cmid+'&act=edit';
// 						var view_url = page.url+'/'+page.prod_root+'/quiz.php?course='+page.courseid+'&topic='+val.topic_id+'&id='+val.cmid+'&act=view';
// 						var edit_quiz_url = page.url+'/'+page.prod_root+'/quiz.php?course='+page.courseid+'&topic='+val.topic_id+'&id='+val.cmid+'&act=edit_quiz';
// 					}else{
// 						var edit_url = page.url+'/'+page.prod_root+'/quiz.php?course='+page.courseid+'&section='+page.section+'&topic='+val.topic_id+'&id='+val.cmid+'&act=edit';
// 						var view_url = page.url+'/'+page.prod_root+'/quiz.php?course='+page.courseid+'&section='+page.section+'&topic='+val.topic_id+'&id='+val.cmid+'&act=view';
// 						var edit_quiz_url = page.url+'/'+page.prod_root+'/quiz.php?course='+page.courseid+'&section='+page.section+'&topic='+val.topic_id+'&id='+val.cmid+'&act=edit_quiz';
// 					}
// 					//var edit_icon = '<li><a href="'+edit_url+'"><i class="fas fa-edit"></i></a></li>';
// 					var edit_icon ='<li class="assignment-actions" >';
// 					edit_icon += '<a href="javascript:;" class="actions-trigger" data-id="'+val.cmid+'"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>';
// 					edit_icon +='<div class="action-list" id="action-list'+val.cmid+'">';
// 					edit_icon +='<a href="'+view_url+'" >View</a>';
// 					edit_icon +='<a href="'+edit_url+'" >Edit</a>';
// 					edit_icon +='<a href="'+edit_quiz_url+'" >Edit Quiz</a>';
// 					edit_icon += '</div>';
// 					edit_icon += '</li>';
// 					var shortTopic=val.topic_name;
// 					if (val.topic_name.length > 20) {
// 						shortTopic = jQuery.trim(val.topic_name).substring(0, 20).split(" ").slice(0, -1).join(" ") + "...";
// 					}
// 					var short_name=val.cmname;
// 					if (val.cmname.length > 60) {
// 						short_name = jQuery.trim(val.cmname).substring(0, 60).split(" ").slice(0, -1).join(" ") + "...";
// 					}
// 					output += '<li>';
// 					output += '<div>';
// 					output += '<ul class="assign-header">';
// 					output += '<li>';
// 					output += '<p data-toggle="tooltip" title="'+val.cmname+'" >'+short_name+'</p>';
// 					output += '</li>';
// 					output += '<li>';
// 					output += completion_icon;
// 					output += '</li>';
// 					//output += '<li><i class="fa fa-ellipsis-v" aria-hidden="true"></i></li>';
// 					output += edit_icon;
// 					output += '</ul>';
// 					output += '</div>';
// 					output += '<div class="icon blue">';
// 					output += '<img src="'+page.url+'/'+page.prod_root+'/assets/img/topic1_7.png" />';
// 					output += '</div>';
// 					output += '<div class="topic">';
// 					output += '<h6 data-toggle="tooltip" title="'+val.topic_name+'">'+shortTopic+'</h6>';
// 					output += '<p>Group assessment -- assessment to Group 1</p>';
// 					output += '</div>';
// 					output += '</li>';

// 				});
// 				output += '</ul>';
// 				$('#quiz').append(output);
// 			}else{
// 				var output = '';
// 				output += '<div class="row no-gutters">';
// 				output += '<p>'+page.lang_no_quiz+'</p>';
// 				output += '</div>';
// 				$('#quiz').append(output);
// 			}
    	
// 		}
// 	});
// }
// function render_assignment(){
// 	$.ajax({
// 		type: "POST",
// 		url: page.courseurl,
// 		data: {
// 			function: 'get_course_assignment_data'
// 		},
// 		dataType: "json",
// 		success: function(data) {
// 			console.log(data.assignment);
// 			$('#assignment').empty();
// 			if(data.assignment.length>0){
// 				var i=1;
// 				var output='';
// 				// if(page.role == 'parent'){
// 				// 	output += '<div class="row">';
//     //             }else{
//     //             	output += '<ul class="assignments-block">';
//     //             }
//                 output += '<div class="row">';
// 				$.each( data.assignment, function( key, val ) {
// 					var shortTopic=val.topic_name;
// 						if (val.topic_name.length > 20) {
// 							shortTopic = jQuery.trim(val.topic_name).substring(0, 20).split(" ").slice(0, -1).join(" ") + "...";
// 						}
// 						var short_name=val.cmname;
// 						if (val.cmname.length > 30) {
// 							short_name = jQuery.trim(val.cmname).substring(0, 30).split(" ").slice(0, -1).join(" ") + "...";
// 						}
//    //                  if(page.role == 'parent'){
//    //                      output += '<div class="col-md-12">';
//    //                      output += '<div class="pr-assignment-strip">'; 
//    //                      output += '<div class="card shadow mb-3 p-3">'; 
//    //                      output += '<div class="row pr-assignment-strip-head">'; 
//    //                      output += '<div class="col-md-4"><h5 class="parent_subject mb-0" data-toggle="tooltip" title="'+val.cmname+'">'+short_name+'</h5></div>'; 
//    //                      output += '<div class="col-md-4"><p class="parent_status"><span>Status:</span><span class="status-submited"> '+val.substatus+'</span></p></div>'; 
//    //                      output += '<div class="col-md-4"><a href="#" class="sm-view-btn" > View </a></div>'; 
//    //                      output += '</div>'; 
//    //                      output += '<div class="row">'; 
//    //                      output += '<div class="col-lg-12">'; 
//    //                      output += '<hr>'; 
//    //                      output += '</div>'; 
//    //                      output += '<div class="col-lg-12">'; 
//    //                      output += '<div class="row pr-assignment-strip-content">'; 
//    //                      output += '<div class="col-md-4 student-info1">'; 
//    //                      output += '<h6 data-toggle="tooltip" title="'+val.topic_name+'">'+shortTopic+'</h6>';
//    //                      // output += '<div class="pic-sec">'; 
//    //                      // output += '<img src="./img/topic1_7.png"  class="img-fluid">'; 
//    //                      // output += '</div>'; 
//    //                      // output += '<div class="info-sec">'; 
//    //                      // output += '<h4>Carolyn Martin</h4>'; 
//    //                      // output += '<span>Class 8A</span>'; 
//    //                      // output += '</div>'; 
//    //                      output += '</div>'; 
//    //                      output += '<div class="col-md-4"><p class="assignee-info"> Assigned by Rachel Green</p> </div>'; 
//    //                      output += '<div class="col-md-4"><p class="assignment-info">Due on '+val.duedate+' </p> </div>'; 
//    //                      output += '</div>'; 
//    //                      output += '</div>'; 
//    //                      output += '</div>'; 
//    //                      output += '</div>'; 
//    //                      output += '</div>'; 
//    //                      output += '</div>'; 
//    //                  }else{
//    //                  	var completion_icon='';
// 			// 			if (page.role == 'student') {
// 			// 				if (val.status != '') {
// 			// 					if (val.status.state == 1) {
// 			// 						completion_icon = '<span class="fas fa-check-circle green-color"></span>';
// 			// 					} else {
// 			// 						completion_icon = '<span class="fas fa-check-circle grey-color"></span>';
// 			// 					}
// 			// 				} else {
// 			// 					completion_icon = '<span class="fas fa-check-circle grey-color"></span>';
// 			// 				}
// 			// 				//var edit_icon = '<li><i class="fa fa-ellipsis-v" aria-hidden="true"></i></li>';
// 			// 				var edit_icon ='<li class="assignment-actions">';
// 			// 				edit_icon += '<a href="javascript:;" class="actions-trigger" data-id="'+val.cmid+'"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>';
// 			// 				edit_icon +='<div class="action-list" id="action-list'+val.cmid+'">';
// 			// 				edit_icon +='<a href="javascript:;" class="view_assignment" data-id="'+val.cmid+'">View</a>';
// 			// 				//console.log(val.max_attempts);
// 			// 				// console.log(val.no_of_attempt);
// 			// 			   	if(val.max_attempts > val.no_of_attempt){
// 			// 			   		edit_icon +='<a href="javascript:;" class="submit_assignment" data-id="'+val.cmid+'">Submit Assignment</a>';
// 			// 				}
// 			// 				else{
// 			// 					edit_icon +='<a href="javascript:;" class="disabled" data-id="'+val.cmid+'" data-toggle="tooltip" title="This assignment is already been attempted upto max limit">Submit Assignment</a>';
// 			// 				}
// 			// 				edit_icon += '</div>';
// 			// 				edit_icon += '</li>';
// 			// 			} else if (page.role == 'editingteacher') {
// 			// 				if(val.completion != 0){
// 			// 					completion_icon += '<span class="fas fa-check-circle grey-color"></span>';
// 			// 				}
// 			// 				var edit_url = page.url+'/'+page.prod_root+'/assignment.php?course='+page.courseid+'&section='+page.section+'&id='+val.cmid;
// 			// 			    //var edit_icon = '<li><a href="'+edit_url+'"><i class="fas fa-edit"></i></a></li>';
// 			// 			    var edit_icon ='<li class="assignment-actions" >';
// 			// 			    edit_icon += '<a href="javascript:;" class="actions-trigger" data-id="'+val.cmid+'"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>';
// 			// 			    edit_icon +='<div class="action-list" id="action-list'+val.cmid+'">';
// 			// 			    edit_icon +='<a href="'+edit_url+'" class="">Edit</a>';
// 			// 			   	edit_icon +='<a href="javascript:;" class="view_submission" data-id="'+val.cmid+'" data-name="'+val.cmname+'">View</a>';
// 	 	// 					edit_icon += '</div>';
// 			// 			    edit_icon += '</li>';
// 			// 			}else{
// 			// 				var edit_url = page.url+'/'+page.prod_root+'/assignment.php?course='+page.courseid+'&id='+val.cmid;
// 			// 			    //var edit_icon = '<li><a href="'+edit_url+'"><i class="fas fa-edit"></i></a></li>';
// 			// 			    var edit_icon ='<li class="assignment-actions" >';
// 			// 			    edit_icon += '<a href="javascript:;" class="actions-trigger" data-id="'+val.cmid+'"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>';
// 			// 			    edit_icon +='<div class="action-list" id="action-list'+val.cmid+'">';
// 			// 			    edit_icon +='<a href="'+edit_url+'" class="">Edit</a>';
// 			// 			    edit_icon +='<a href="javascript:;" class="view_assignment" data-id="'+val.cmid+'">View</a>';
// 			// 			    edit_icon += '</div>';
// 			// 			    edit_icon += '</li>';
// 			// 			}
// 			// 			//console.log(edit_icon);
          	
// 			// 			output += '<li>';
// 			// 			output += '<div>';
// 			// 			output += '<ul class="assign-header">';
// 			// 			output += '<li>';
// 			// 			output += '<p data-toggle="tooltip" title="'+val.cmname+'" >'+short_name+'</p>';
// 			// 			output += '</li>';
// 			// 			output += '<li>';
// 			// 			output += completion_icon;
// 			// 			output += '</li>';
// 			// 			//output += '<li><i class="fa fa-ellipsis-v" aria-hidden="true"></i></li>';
// 			// 			output += edit_icon;
// 			// 			output += '</ul>';
// 			// 			output += '</div>';
// 			// 			output += '<div class="icon blue">';
// 			// 			output += '<img src="'+page.url+'/'+page.prod_root+'/assets/img/topic1_7.png" />';
// 			// 			output += '</div>';
// 			// 			output += '<div class="topic">';
// 			// 			output += '<h6 data-toggle="tooltip" title="'+val.topic_name+'">'+shortTopic+'</h6>';
// 			// 			output += '<p>Group Assignment Assigned to Group 1</p>';
// 			// 			output += '</div>';
// 			// 			output += '</li>';
//    //                  }
//    		output += '<div class="col-md-4">';
//         output += '<ul class="cm-assignment-block">';
// 		output += '<li class="cm-assignment-blocklist">';
//         output += '<div class="cm-assignment-statusbar typ-green"></div>'; 
//         output += '<div class="cm-assignment-card">'; 
//         output += '<div class="cm-assignment-panal">'; 
//         output += '<div class="tab-content " id="nav-tabContent'+val.cmid+'">'; 
//         output += '<div class="tab-pane fade show active " id="nav-assign-1-'+val.cmid+'" role="tabpanel" aria-labelledby="nav-assign1">';
//         output += '<div class="cm-assignment-info">'; 
//         output += '<div class="cm-assignment-namewrap mb-4">'; 
//         output += '<h4 class="cm-assignment-name" data-toggle="tooltip" title="'+val.cmname+'" >'+short_name+'</h4>';
//         output += '<p class="cm-assignment-subname" data-toggle="tooltip" title="'+val.topic_name+'">'+shortTopic+'</p>'; 
//         output += '</div>'; 
//         output += '<div class="cm-assignment-type mb-2"><i class="icon-icl-assignment-merge" aria-hidden="true"></i> Group Assignment</div>';
//         output += '<div class="cm-assignment-date mb-2"><i class="icon-icl-assignment-calender" aria-hidden="true"></i> 20/01/2022 - 31/01/2022 </div>';
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '<div class="tab-pane fade  " id="nav-assign-2-'+val.cmid+'" role="tabpanel" aria-labelledby="nav-assign2">'; 
//         output += '<div class="cm-assignment-status">'; 
//         if(page.role == 'editingteacher' || page.role == 'programofficer'){
// 			output += '<div class="row">'; 
// 	        output += '<div class="col-md-6 col-sm-6 col-xs-6">'; 
// 	        output += '<div class="cm-status-wrap">'; 
// 	        output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-ab-true "></i> 12</h3>'; 
// 	        if(page.role == 'editingteacher'){
// 				output += '<a  href="javascript:;" class="cm-status-link view_submission" data-id="'+val.cmid+'" data-name="'+val.cmname+'">Submissions</a>'; 
// 	        }else{
// 	        	output += '<a  href="javascript:;" class="cm-status-link " >Submissions</a>'; 
// 	        }
// 	        output += '</div>'; 
// 	        output += '</div>'; 
// 	        output += '<div class="col-md-6 col-sm-6 col-xs-6">'; 
// 	        output += '<div class="cm-status-wrap">'; 
// 	        output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-star "></i> 12</h3>'; 
// 	        output += '<a class="cm-status-link" href="javascript:;">Evaluated</a>'; 
// 	        output += '</div>'; 
// 	        output += '</div>'; 
// 	        output += '</div>'; 
// 	        output += '<div class="row">'; 
// 	        output += '<div class="col-md-12">'; 
// 	        output += '<div class="cm-status-wrap">'; 
// 	        output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-ab-false "></i> 12</h3>'; 
// 	        output += '<a class="cm-status-link" href="javascript:;" >Pending Submissions</a>'; 
// 	        output += '</div>'; 
// 	        output += '</div>'; 
// 	        output += '</div>'; 
// 	        output += '<div class="row">'; 
// 	        output += '<div class="col-md-12">'; 
// 	        output += '<div class="cm-status-wrap mb-0">'; 
// 	        output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-star-half "></i> 12</h3>'; 
// 	        output += '<a class="cm-status-link" href="javascript:;">Pending Evaluations</a>'; 
// 	        output += '</div>'; 
// 	        output += '</div>'; 
// 	        output += '</div>'; 
//     	}else if(page.role == 'student'){
//     		output += '<div class="row">'; 
// 	        output += '<div class="col-md-12">'; 
// 	        output += '<div class="cm-status-wrap">'; 
// 	        output += '<h3 class="cm-status-label"><i class="icon-icl-eye-black"></i></h3>'; 
// 	        output += '<a class="cm-status-link view_assignment" href="javascript:;" data-id="'+val.cmid+'">View Assignment</a>'; 
// 	        output += '</div>'; 
// 	        output += '</div>'; 
// 	        output += '</div>'; 
// 	        if(val.max_attempts > val.no_of_attempt){
// 		        output += '<div class="row">'; 
// 		        output += '<div class="col-md-12">'; 
// 		        output += '<div class="cm-status-wrap mb-0">'; 
// 		        output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-star-half "></i></h3>'; 
// 		        output += '<a class="cm-status-link submit_assignment" href="javascript:;" data-id="'+val.cmid+'">Submit Assignment</a>'; 
// 		        output += '</div>'; 
// 		        output += '</div>'; 
// 		        output += '</div>';
// 	    	}
//     	}
//         output += '</div>'; 
//         output += '</div>'; 
//         if(page.role == 'editingteacher' || page.role == 'programofficer'){
// 	        if (page.role == 'editingteacher') {
// 					var edit_url = page.url+'/'+page.prod_root+'/assignment.php?course='+page.courseid+'&section='+page.section+'&id='+val.cmid;
// 	        }else {
// 	        	var edit_url = page.url+'/'+page.prod_root+'/assignment.php?course='+page.courseid+'&id='+val.cmid;
// 	        }
// 	        output += '<div class="tab-pane fade  " id="nav-assign-3-'+val.cmid+'" role="tabpanel" aria-labelledby="nav-assign3">'; 
// 	        output += '<div class="cm-assignment-report">'; 
// 	        output += '<div class="row">'; 
// 	        output += '<div class="col-md-12">'; 
// 	        output += '<div class="cm-status-wrap">'; 
// 	        output += '<h3 class="cm-status-label"><i class="icon-icl-download-icon "></i> 12</h3>'; 
// 	        output += '<a class="cm-status-link" href="#">Download Report</a>'; 
// 	        output += '</div>'; 
// 	        output += '</div>'; 
// 	        output += '</div>'; 
// 	        output += '<div class="row">'; 
// 	        output += '<div class="col-md-12">'; 
// 	        output += '<div class="cm-status-wrap">'; 
// 	        output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-edit "></i> 12</h3>'; 
// 	        output += '<a class="cm-status-link" href="'+edit_url+'">Edit Assignment</a>'; 
// 	        output += '</div>'; 
// 	        output += '</div>'; 
// 	        output += '</div>'; 
// 	        output += '</div>'; 
// 	        output += '</div>';
//     	}
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '<div class="cm-assignment-tasklist">'; 
//         output += '<ul class="nav nav-pills flex-column bg-strip" roll="tablist">'; 
//         output += '<li class="nav-item">'; 
//         output += '<a class="nav-link active" id="nav-assign-01-'+val.cmid+'" data-toggle="tab" href="#nav-assign-1-'+val.cmid+'" role="tab" aria-controls="nav-assign01" aria-selected="true"> <i class="icon-icl-assignment-tab1 "></i></a>'; 
//         output += '</li>'; 
//         output += '<li class="nav-item">'; 
//         output += '<a class="nav-link" id="nav-assign-02-'+val.cmid+'" data-toggle="tab" href="#nav-assign-2-'+val.cmid+'" role="tab" aria-controls="nav-assign02" aria-selected="true"> <i class="icon-icl-assignment-tab2 "></i></a>'; 
//         output += '</li>';
//         if(page.role == 'programofficer' || page.role == 'editingteacher'){
//         	output += '<li class="nav-item">'; 
//         	output += '<a class="nav-link" id="nav-assign-03-'+val.cmid+'" data-toggle="tab" href="#nav-assign-3-'+val.cmid+'" role="tab" aria-controls="nav-assign03" aria-selected="true"> <i class="icon-icl-assignment-tab3 "></i></a>'; 
//         	output += '</li>'; 
//         } 
        
//         output += '</ul>'; 
//         output += '</div>'; 
//         output += '</div>'; 
//      	output += '</li>';
//      	output += '</div>';
//      	//output += '</div>';
// 		});
// 		output += '</div>';  
// 			// if(page.role == 'parent'){
// 			// 		output += '</div>';
//    //          }else{
//    //          	output += '</ul>';
//    //          }


        
	
// 	$('#assignment').append(output);
// }else{
// 	var output = '';
// 	output += '<div class="row no-gutters">';
// 	output += '<p>'+page.lang_no_assignments+'</p>';
// 	output += '</div>';
// 	$('#assignment').append(output);
// }

// },
// beforeSend: function() {
//             // Code to display spinner
//             $('.loader_assignment').html("<img src='"+ page.img +"' style='padding-top:20%;'/>");
//         },
//         complete: function() {
//             // Code to hide spinner.
//             $('.loader_assignment').empty();
//         }
//     });
// }
// function render_quiz(){
// 	$.ajax({
// 		type: "POST",
// 		url: page.courseurl,
// 		data: {
// 			function: 'get_course_quiz_data'
// 		},
// 		dataType: "json",
// 		success: function(data) {
// 			console.log(data.quiz);
// 			$('#quiz').empty();
// 			if(data.quiz.length>0){
// 				var i=1;
// 				var output='';
// 				//output += '<ul class="assignments-block">';
// 				output += '<div class="row">';

// 				$.each( data.quiz, function( key, val ) {

// 					var completion_icon='';
// 					if(page.role == 'programofficer'){
// 						var edit_url = page.url+'/'+page.prod_root+'/quiz.php?course='+page.courseid+'&topic='+val.topic_id+'&id='+val.cmid+'&act=edit';
// 						var view_url = page.url+'/'+page.prod_root+'/quiz.php?course='+page.courseid+'&topic='+val.topic_id+'&id='+val.cmid+'&act=view';
// 						var edit_quiz_url = page.url+'/'+page.prod_root+'/quiz.php?course='+page.courseid+'&topic='+val.topic_id+'&id='+val.cmid+'&act=edit_quiz';
// 					}else{
// 						var edit_url = page.url+'/'+page.prod_root+'/quiz.php?course='+page.courseid+'&section='+page.section+'&topic='+val.topic_id+'&id='+val.cmid+'&act=edit';
// 						var view_url = page.url+'/'+page.prod_root+'/quiz.php?course='+page.courseid+'&section='+page.section+'&topic='+val.topic_id+'&id='+val.cmid+'&act=view';
// 						var edit_quiz_url = page.url+'/'+page.prod_root+'/quiz.php?course='+page.courseid+'&section='+page.section+'&topic='+val.topic_id+'&id='+val.cmid+'&act=edit_quiz';
// 					}
// 					//var edit_icon = '<li><a href="'+edit_url+'"><i class="fas fa-edit"></i></a></li>';
// 					// var edit_icon ='<li class="assignment-actions" >';
// 					// edit_icon += '<a href="javascript:;" class="actions-trigger" data-id="'+val.cmid+'"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>';
// 					// edit_icon +='<div class="action-list" id="action-list'+val.cmid+'">';
// 					// edit_icon +='<a href="'+view_url+'" >View</a>';
// 					// edit_icon +='<a href="'+edit_url+'" >Edit</a>';
// 					// edit_icon +='<a href="'+edit_quiz_url+'" >Edit Quiz</a>';
// 					// edit_icon += '</div>';
// 					// edit_icon += '</li>';
// 					// var shortTopic=val.topic_name;
// 					// if (val.topic_name.length > 20) {
// 					// 	shortTopic = jQuery.trim(val.topic_name).substring(0, 20).split(" ").slice(0, -1).join(" ") + "...";
// 					// }
// 					// var short_name=val.cmname;
// 					// if (val.cmname.length > 60) {
// 					// 	short_name = jQuery.trim(val.cmname).substring(0, 60).split(" ").slice(0, -1).join(" ") + "...";
// 					// }
// 					// output += '<li>';
// 					// output += '<div>';
// 					// output += '<ul class="assign-header">';
// 					// output += '<li>';
// 					// output += '<p data-toggle="tooltip" title="'+val.cmname+'" >'+short_name+'</p>';
// 					// output += '</li>';
// 					// output += '<li>';
// 					// output += completion_icon;
// 					// output += '</li>';
// 					// //output += '<li><i class="fa fa-ellipsis-v" aria-hidden="true"></i></li>';
// 					// output += edit_icon;
// 					// output += '</ul>';
// 					// output += '</div>';
// 					// output += '<div class="icon blue">';
// 					// output += '<img src="'+page.url+'/'+page.prod_root+'/assets/img/topic1_7.png" />';
// 					// output += '</div>';
// 					// output += '<div class="topic">';
// 					// output += '<h6 data-toggle="tooltip" title="'+val.topic_name+'">'+shortTopic+'</h6>';
// 					// output += '<p>Group assessment -- assessment to Group 1</p>';
// 					// output += '</div>';
// 					// output += '</li>';
// 					var shortTopic=val.topic_name;
// 					if (val.topic_name.length > 20) {
// 						shortTopic = jQuery.trim(val.topic_name).substring(0, 20).split(" ").slice(0, -1).join(" ") + "...";
// 					}
// 					var short_name=val.cmname;
// 					if (val.cmname.length > 60) {
// 						short_name = jQuery.trim(val.cmname).substring(0, 60).split(" ").slice(0, -1).join(" ") + "...";
// 					}
//    		output += '<div class="col-md-4">';
//         output += '<ul class="cm-assignment-block">';
// 		output += '<li class="cm-assignment-blocklist">';
//         output += '<div class="cm-assignment-statusbar typ-green"></div>'; 
//         output += '<div class="cm-assignment-card">'; 
//         output += '<div class="cm-assignment-panal">'; 
//         output += '<div class="tab-content " id="nav-quiztabContent'+val.cmid+'">'; 
//         output += '<div class="tab-pane fade show active " id="nav-quiz-1-'+val.cmid+'" role="tabpanel" aria-labelledby="nav-assign1">';
//         output += '<div class="cm-assignment-info">'; 
//         output += '<div class="cm-assignment-namewrap mb-4">'; 
//         output += '<h4 class="cm-assignment-name" data-toggle="tooltip" title="'+val.cmname+'" >'+short_name+'</h4>';
//         output += '<p class="cm-assignment-subname" data-toggle="tooltip" title="'+val.topic_name+'">'+shortTopic+'</p>'; 
//         output += '</div>'; 
//         output += '<div class="cm-assignment-type mb-2"><i class="icon-icl-assignment-merge" aria-hidden="true"></i> Group Assignment</div>';
//         output += '<div class="cm-assignment-date mb-2"><i class="icon-icl-assignment-calender" aria-hidden="true"></i> 20/01/2022 - 31/01/2022 </div>';
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '<div class="tab-pane fade  " id="nav-quiz-2-'+val.cmid+'" role="tabpanel" aria-labelledby="nav-assign2">'; 
//         output += '<div class="cm-assignment-status">'; 
// 		output += '<div class="row">'; 
//         output += '<div class="col-md-6 col-sm-6 col-xs-6">'; 
//         output += '<div class="cm-status-wrap">'; 
//         output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-ab-true "></i> 12</h3>'; 
//        	output += '<a  href="javascript:;" class="cm-status-link">Submissions</a>'; 
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '<div class="col-md-6 col-sm-6 col-xs-6">'; 
//         output += '<div class="cm-status-wrap">'; 
//         output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-star "></i> 12</h3>'; 
//         output += '<a class="cm-status-link" href="javascript:;">Evaluated</a>'; 
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '<div class="row">'; 
//         output += '<div class="col-md-12">'; 
//         output += '<div class="cm-status-wrap">'; 
//         output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-ab-false "></i> 12</h3>'; 
//         output += '<a class="cm-status-link" href="javascript:;" >Pending Submissions</a>'; 
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '<div class="row">'; 
//         output += '<div class="col-md-12">'; 
//         output += '<div class="cm-status-wrap mb-0">'; 
//         output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-star-half "></i> 12</h3>'; 
//         output += '<a class="cm-status-link" href="javascript:;">Pending Evaluations</a>'; 
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '<div class="tab-pane fade" id="nav-quiz-3-'+val.cmid+'" role="tabpanel" aria-labelledby="nav-quiz3">'; 
//         output += '<div class="cm-assignment-report">'; 
//         output += '<div class="row">'; 
//         output += '<div class="col-md-12">'; 
//         output += '<div class="cm-status-wrap">'; 
//         output += '<h3 class="cm-status-label"><i class="icon-icl-download-icon "></i> 12</h3>'; 
//         output += '<a class="cm-status-link" href="#">Download Report</a>'; 
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '<div class="row">'; 
//         output += '<div class="col-md-4">'; 
//         output += '<div class="cm-status-wrap">'; 
//         output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-edit"></i></h3>'; 
//         output += '<a class="cm-status-link" href="'+edit_url+'">Edit</a>'; 
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '<div class="col-md-4">'; 
//         output += '<div class="cm-status-wrap">'; 
//         output += '<h3 class="cm-status-label"><i class="icon-icm-eye-gray"></i></h3>'; 
//         output += '<a class="cm-status-link" href="'+view_url+'">View Quiz</a>'; 
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '<div class="col-md-4">'; 
//         output += '<div class="cm-status-wrap">'; 
//         output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-edit"></i></h3>'; 
//         output += '<a class="cm-status-link" href="'+edit_quiz_url+'">Edit Quiz</a>'; 
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '</div>'; 

//         output += '</div>';
//         output += '</div>';
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '<div class="cm-assignment-tasklist">'; 
//         output += '<ul class="nav nav-pills flex-column bg-strip" roll="tablist">'; 
//         output += '<li class="nav-item">'; 
//         output += '<a class="nav-link active" id="nav-quiz-01-'+val.cmid+'" data-toggle="tab" href="#nav-quiz-1-'+val.cmid+'" role="tab" aria-controls="nav-quiz01" aria-selected="true"> <i class="icon-icl-assignment-tab1 "></i></a>'; 
//         output += '</li>'; 
//         output += '<li class="nav-item">'; 
//         output += '<a class="nav-link" id="nav-quiz-02-'+val.cmid+'" data-toggle="tab" href="#nav-quiz-2-'+val.cmid+'" role="tab" aria-controls="nav-quiz02" aria-selected="true"> <i class="icon-icl-assignment-tab2 "></i></a>'; 
//         output += '</li>';
//     	output += '<li class="nav-item">'; 
//     	output += '<a class="nav-link" id="nav-quiz-03-'+val.cmid+'" data-toggle="tab" href="#nav-quiz-3-'+val.cmid+'" role="tab" aria-controls="nav-quiz03" aria-selected="true"> <i class="icon-icl-assignment-tab3 "></i></a>'; 
//     	output += '</li>'; 
        
//         output += '</ul>'; 
//         output += '</div>'; 
//         output += '</div>'; 
//      	output += '</li>';
//      	output += '</div>';
//      	//output += '</div>';
// 		});
// 		output += '</div>';  
// 				$('#quiz').append(output);
// 			}else{
// 				var output = '';
// 				output += '<div class="row no-gutters">';
// 				output += '<p>'+page.lang_no_quiz+'</p>';
// 				output += '</div>';
// 				$('#quiz').append(output);
// 			}
    	
// 		}
// 	});
// }
// function render_assignment(){
// 	$.ajax({
// 		type: "POST",
// 		url: page.courseurl,
// 		data: {
// 			function: 'get_course_assignment_data'
// 		},
// 		dataType: "json",
// 		success: function(data) {
// 			console.log(data.assignment);
// 			$('#assignment').empty();
// 			if(data.assignment.length>0){
// 				var i=1;
// 				var output='';
// 				// if(page.role == 'parent'){
// 				// 	output += '<div class="row">';
//     //             }else{
//     //             	output += '<ul class="assignments-block">';
//     //             }
//                 output += '<div class="row">';
// 				$.each( data.assignment, function( key, val ) {
// 					var shortTopic=val.topic_name;
// 						if (val.topic_name.length > 20) {
// 							shortTopic = jQuery.trim(val.topic_name).substring(0, 20).split(" ").slice(0, -1).join(" ") + "...";
// 						}
// 						var short_name=val.cmname;
// 						if (val.cmname.length > 30) {
// 							short_name = jQuery.trim(val.cmname).substring(0, 30).split(" ").slice(0, -1).join(" ") + "...";
// 						}
//    //                  if(page.role == 'parent'){
//    //                      output += '<div class="col-md-12">';
//    //                      output += '<div class="pr-assignment-strip">'; 
//    //                      output += '<div class="card shadow mb-3 p-3">'; 
//    //                      output += '<div class="row pr-assignment-strip-head">'; 
//    //                      output += '<div class="col-md-4"><h5 class="parent_subject mb-0" data-toggle="tooltip" title="'+val.cmname+'">'+short_name+'</h5></div>'; 
//    //                      output += '<div class="col-md-4"><p class="parent_status"><span>Status:</span><span class="status-submited"> '+val.substatus+'</span></p></div>'; 
//    //                      output += '<div class="col-md-4"><a href="#" class="sm-view-btn" > View </a></div>'; 
//    //                      output += '</div>'; 
//    //                      output += '<div class="row">'; 
//    //                      output += '<div class="col-lg-12">'; 
//    //                      output += '<hr>'; 
//    //                      output += '</div>'; 
//    //                      output += '<div class="col-lg-12">'; 
//    //                      output += '<div class="row pr-assignment-strip-content">'; 
//    //                      output += '<div class="col-md-4 student-info1">'; 
//    //                      output += '<h6 data-toggle="tooltip" title="'+val.topic_name+'">'+shortTopic+'</h6>';
//    //                      // output += '<div class="pic-sec">'; 
//    //                      // output += '<img src="./img/topic1_7.png"  class="img-fluid">'; 
//    //                      // output += '</div>'; 
//    //                      // output += '<div class="info-sec">'; 
//    //                      // output += '<h4>Carolyn Martin</h4>'; 
//    //                      // output += '<span>Class 8A</span>'; 
//    //                      // output += '</div>'; 
//    //                      output += '</div>'; 
//    //                      output += '<div class="col-md-4"><p class="assignee-info"> Assigned by Rachel Green</p> </div>'; 
//    //                      output += '<div class="col-md-4"><p class="assignment-info">Due on '+val.duedate+' </p> </div>'; 
//    //                      output += '</div>'; 
//    //                      output += '</div>'; 
//    //                      output += '</div>'; 
//    //                      output += '</div>'; 
//    //                      output += '</div>'; 
//    //                      output += '</div>'; 
//    //                  }else{
//    //                  	var completion_icon='';
// 			// 			if (page.role == 'student') {
// 			// 				if (val.status != '') {
// 			// 					if (val.status.state == 1) {
// 			// 						completion_icon = '<span class="fas fa-check-circle green-color"></span>';
// 			// 					} else {
// 			// 						completion_icon = '<span class="fas fa-check-circle grey-color"></span>';
// 			// 					}
// 			// 				} else {
// 			// 					completion_icon = '<span class="fas fa-check-circle grey-color"></span>';
// 			// 				}
// 			// 				//var edit_icon = '<li><i class="fa fa-ellipsis-v" aria-hidden="true"></i></li>';
// 			// 				var edit_icon ='<li class="assignment-actions">';
// 			// 				edit_icon += '<a href="javascript:;" class="actions-trigger" data-id="'+val.cmid+'"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>';
// 			// 				edit_icon +='<div class="action-list" id="action-list'+val.cmid+'">';
// 			// 				edit_icon +='<a href="javascript:;" class="view_assignment" data-id="'+val.cmid+'">View</a>';
// 			// 				//console.log(val.max_attempts);
// 			// 				// console.log(val.no_of_attempt);
// 			// 			   	if(val.max_attempts > val.no_of_attempt){
// 			// 			   		edit_icon +='<a href="javascript:;" class="submit_assignment" data-id="'+val.cmid+'">Submit Assignment</a>';
// 			// 				}
// 			// 				else{
// 			// 					edit_icon +='<a href="javascript:;" class="disabled" data-id="'+val.cmid+'" data-toggle="tooltip" title="This assignment is already been attempted upto max limit">Submit Assignment</a>';
// 			// 				}
// 			// 				edit_icon += '</div>';
// 			// 				edit_icon += '</li>';
// 			// 			} else if (page.role == 'editingteacher') {
// 			// 				if(val.completion != 0){
// 			// 					completion_icon += '<span class="fas fa-check-circle grey-color"></span>';
// 			// 				}
// 			// 				var edit_url = page.url+'/'+page.prod_root+'/assignment.php?course='+page.courseid+'&section='+page.section+'&id='+val.cmid;
// 			// 			    //var edit_icon = '<li><a href="'+edit_url+'"><i class="fas fa-edit"></i></a></li>';
// 			// 			    var edit_icon ='<li class="assignment-actions" >';
// 			// 			    edit_icon += '<a href="javascript:;" class="actions-trigger" data-id="'+val.cmid+'"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>';
// 			// 			    edit_icon +='<div class="action-list" id="action-list'+val.cmid+'">';
// 			// 			    edit_icon +='<a href="'+edit_url+'" class="">Edit</a>';
// 			// 			   	edit_icon +='<a href="javascript:;" class="view_submission" data-id="'+val.cmid+'" data-name="'+val.cmname+'">View</a>';
// 	 	// 					edit_icon += '</div>';
// 			// 			    edit_icon += '</li>';
// 			// 			}else{
// 			// 				var edit_url = page.url+'/'+page.prod_root+'/assignment.php?course='+page.courseid+'&id='+val.cmid;
// 			// 			    //var edit_icon = '<li><a href="'+edit_url+'"><i class="fas fa-edit"></i></a></li>';
// 			// 			    var edit_icon ='<li class="assignment-actions" >';
// 			// 			    edit_icon += '<a href="javascript:;" class="actions-trigger" data-id="'+val.cmid+'"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>';
// 			// 			    edit_icon +='<div class="action-list" id="action-list'+val.cmid+'">';
// 			// 			    edit_icon +='<a href="'+edit_url+'" class="">Edit</a>';
// 			// 			    edit_icon +='<a href="javascript:;" class="view_assignment" data-id="'+val.cmid+'">View</a>';
// 			// 			    edit_icon += '</div>';
// 			// 			    edit_icon += '</li>';
// 			// 			}
// 			// 			//console.log(edit_icon);
          	
// 			// 			output += '<li>';
// 			// 			output += '<div>';
// 			// 			output += '<ul class="assign-header">';
// 			// 			output += '<li>';
// 			// 			output += '<p data-toggle="tooltip" title="'+val.cmname+'" >'+short_name+'</p>';
// 			// 			output += '</li>';
// 			// 			output += '<li>';
// 			// 			output += completion_icon;
// 			// 			output += '</li>';
// 			// 			//output += '<li><i class="fa fa-ellipsis-v" aria-hidden="true"></i></li>';
// 			// 			output += edit_icon;
// 			// 			output += '</ul>';
// 			// 			output += '</div>';
// 			// 			output += '<div class="icon blue">';
// 			// 			output += '<img src="'+page.url+'/'+page.prod_root+'/assets/img/topic1_7.png" />';
// 			// 			output += '</div>';
// 			// 			output += '<div class="topic">';
// 			// 			output += '<h6 data-toggle="tooltip" title="'+val.topic_name+'">'+shortTopic+'</h6>';
// 			// 			output += '<p>Group Assignment Assigned to Group 1</p>';
// 			// 			output += '</div>';
// 			// 			output += '</li>';
//    //                  }
// 				if(page.role == 'parent'){
// 			        output += '<div class="col-md-12">';
// 			        output += '<div class="pr-assignment-strip">'; 
// 			        output += '<div class="card shadow mb-3 p-3">'; 
// 			        output += '<div class="row pr-assignment-strip-head">'; 
// 			        output += '<div class="col-md-4"><h5 class="parent_subject mb-0" data-toggle="tooltip" title="'+val.cmname+'">'+short_name+'</h5></div>'; 
// 			        output += '<div class="col-md-4"><p class="parent_status"><span>Status:</span><span class="'+val.class+'"> '+val.substatus+'</span></p></div>'; 
// 			        output += '<div class="col-md-4"><a href="#" class="sm-view-btn" > View </a></div>'; 
// 			        output += '</div>'; 
// 			        output += '<div class="row">'; 
// 			        output += '<div class="col-lg-12">'; 
// 			        output += '<hr>'; 
// 			        output += '</div>'; 
// 			        output += '<div class="col-lg-12">'; 
// 			        output += '<div class="row pr-assignment-strip-content">'; 
// 			        output += '<div class="col-md-4 student-info1">'; 
// 			        output += '<h6 data-toggle="tooltip" title="'+val.topic_name+'">'+shortTopic+'</h6>';
// 			        // output += '<div class="pic-sec">'; 
// 			        // output += '<img src="./img/topic1_7.png"  class="img-fluid">'; 
// 			        // output += '</div>'; 
// 			        // output += '<div class="info-sec">'; 
// 			        // output += '<h4>Carolyn Martin</h4>'; 
// 			        // output += '<span>Class 8A</span>'; 
// 			        // output += '</div>'; 
// 			        output += '</div>'; 
// 			        output += '<div class="col-md-4"><p class="assignee-info"> Assigned by Rachel Green</p> </div>'; 
// 			        output += '<div class="col-md-4"><p class="assignment-info">Due on '+val.duedate+' </p> </div>'; 
// 			        output += '</div>'; 
// 			        output += '</div>'; 
// 			        output += '</div>'; 
// 			        output += '</div>'; 
// 			        output += '</div>'; 
// 			        output += '</div>'; 
// 			    }else{
// 			   		output += '<div class="col-md-4">';
// 			        output += '<ul class="cm-assignment-block">';
// 					output += '<li class="cm-assignment-blocklist">';
// 			        output += '<div class="cm-assignment-statusbar typ-green"></div>'; 
// 			        output += '<div class="cm-assignment-card">'; 
// 			        output += '<div class="cm-assignment-panal">'; 
// 			        output += '<div class="tab-content " id="nav-tabContent'+val.cmid+'">'; 
// 			        output += '<div class="tab-pane fade show active " id="nav-assign-1-'+val.cmid+'" role="tabpanel" aria-labelledby="nav-assign1">';
// 			        output += '<div class="cm-assignment-info">'; 
// 			        output += '<div class="cm-assignment-namewrap mb-4">'; 
// 			        output += '<h4 class="cm-assignment-name" data-toggle="tooltip" title="'+val.cmname+'" >'+short_name+'</h4>';
// 			        output += '<p class="cm-assignment-subname" data-toggle="tooltip" title="'+val.topic_name+'">'+shortTopic+'</p>'; 
// 			        output += '</div>'; 
// 			        if(val.module_status_info[0].is_group_submission == 1){
// 			            var submission_type = 'Group Submission';
// 			        }else{
// 						var submission_type = 'Individual Submission';
// 			        }
// 			        output += '<div class="cm-assignment-type mb-2"><i class="icon-icl-assignment-merge" aria-hidden="true"></i> '+submission_type+'</div>';
// 			        output += '<div class="cm-assignment-date mb-2"><i class="icon-icl-assignment-calender" aria-hidden="true"></i> '+val.module_status_info[0].start_date+' - '+val.module_status_info[0].due_date+'</div>';
// 			        output += '</div>'; 
// 			        output += '</div>'; 
// 			        output += '<div class="tab-pane fade  " id="nav-assign-2-'+val.cmid+'" role="tabpanel" aria-labelledby="nav-assign2">'; 
// 			        output += '<div class="cm-assignment-status">'; 
// 			        if(page.role == 'editingteacher' || page.role == 'programofficer'){
// 						output += '<div class="row">'; 
// 				        output += '<div class="col-md-6 col-sm-6 col-xs-6">'; 
// 				        output += '<div class="cm-status-wrap">'; 
// 				        output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-ab-true "></i> '+val.module_status_info[0].cnt_submitted_assign+'</h3>'; 
// 				        if(page.role == 'editingteacher'){
// 							output += '<a  href="javascript:;" class="cm-status-link view_submission" data-id="'+val.cmid+'" data-name="'+val.cmname+'">Submissions</a>'; 
// 							var new_url = '<a href="'+page.url+'/'+page.prod_root+'/view_submission.php?course='+page.courseid+'&section='+page.section+'&id='+val.cmid+'&type=new">Pending Submissions</a>';
// 							var pending_url = '<a href="'+page.url+'/'+page.prod_root+'/view_submission.php?course='+page.courseid+'&section='+page.section+'&id='+val.cmid+'&type=pending">Pending Evaluations</a>';
// 				            var evaluated_url = '<a href="'+page.url+'/'+page.prod_root+'/view_submission.php?course='+page.courseid+'&section='+page.section+'&id='+val.cmid+'&type=evaluated">Evaluated</a>';
// 				        }else{
// 				        	output += '<a  href="javascript:;" class="cm-status-link ">Submissions</a>';
// 				        	var new_url = '<a  href="javascript:;" class="cm-status-link ">Pending Submissions</a>';  
// 				        	var pending_url = '<a  href="javascript:;" class="cm-status-link ">Pending Evaluations</a>';  
// 				        	var evaluated_url = '<a  href="javascript:;" class="cm-status-link ">Evaluated</a>';  
// 				        }
// 				        output += '</div>'; 
// 				        output += '</div>'; 
// 				        output += '<div class="col-md-6 col-sm-6 col-xs-6">'; 
// 				        output += '<div class="cm-status-wrap">'; 
// 				        output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-star "></i> '+val.module_status_info[0].cnt_graded_assign+'</h3>'; 
// 				        output += evaluated_url; 
// 				        output += '</div>'; 
// 				        output += '</div>'; 
// 				        output += '</div>'; 
// 				        output += '<div class="row">'; 
// 				        output += '<div class="col-md-12">'; 
// 				        output += '<div class="cm-status-wrap">'; 
// 				        output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-ab-false "></i> '+val.module_status_info[0].cnt_pending_submission+'</h3>'; 
// 				        output += new_url; 
// 				        output += '</div>'; 
// 				        output += '</div>'; 
// 				        output += '</div>'; 
// 				        output += '<div class="row">'; 
// 				        output += '<div class="col-md-12">'; 
// 				        output += '<div class="cm-status-wrap mb-0">'; 
// 				        output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-star-half "></i> '+val.module_status_info[0].cnt_pending_grading+'</h3>'; 
// 				        output += pending_url
// 				        output += '</div>'; 
// 				        output += '</div>';
// 				        output += '</div>'; 
// 			    	}else if(page.role == 'student'){
// 			    		if(page.role == 'student'){
// 				    		output += '<div class="row">'; 
// 					        output += '<div class="col-md-6">'; 
// 					        output += '<div class="cm-status-wrap">'; 
// 					        output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-ab-true "></i> '+val.max_attempts+'</h3>'; 
// 					        output += '<a class="cm-status-link" href="javascript:;" data-id="'+val.cmid+'">Max Attempts</a>'; 
// 					        output += '</div>'; 
// 					        output += '</div>'; 
// 					        output += '<div class="col-md-6">'; 
// 					        output += '<div class="cm-status-wrap">'; 
// 					        output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-ab-true "></i> '+val.no_of_attempt+'</h3>'; 
// 					        output += '<a class="cm-status-link" href="javascript:;" data-id="'+val.cmid+'">Attempted</a>'; 
// 					        output += '</div>'; 
// 					        output += '</div>';
// 					        output += '</div>'; 
// 					        if(val.max_attempts > val.no_of_attempt && ((new Date().getTime()/1000) <= val.module_status_info[0].duedate_timestamp)){
// 					        	console.log(new Date().getTime()/1000) ;
// 					        	console.log(val.module_status_info[0].duedate_timestamp);
// 						        output += '<div class="row">'; 
// 						        output += '<div class="col-md-12">'; 
// 						        output += '<div class="cm-status-wrap mb-0">'; 
// 						        output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-ab-true"></i></h3>'; 
// 						        output += '<a class="cm-status-link submit_assignment" href="javascript:;" data-id="'+val.cmid+'">Submit Assignment</a>'; 
// 						        output += '</div>'; 
// 						        output += '</div>'; 
// 						        output += '</div>';
// 					    	}
// 				    	}

// 						output += '<div class="row">'; 
// 				        output += '<div class="col-md-12">'; 
// 				        output += '<div class="cm-status-wrap">'; 
// 				        output += '<h3 class="cm-status-label"><i class="icon-icl-eye-black"></i></h3>'; 
// 				        output += '<a class="cm-status-link view_assignment" href="javascript:;" data-id="'+val.cmid+'">View Assignment</a>'; 
// 				        output += '</div>'; 
// 				        output += '</div>'; 
// 				        output += '</div>';
// 				    }
// 			        output += '</div>'; 
// 			        output += '</div>'; 
// 			        if(page.role == 'editingteacher' || page.role == 'programofficer'){
// 				        if (page.role == 'editingteacher') {
// 								var edit_url = page.url+'/'+page.prod_root+'/assignment.php?course='+page.courseid+'&section='+page.section+'&id='+val.cmid;
// 				        }else {
// 				        	var edit_url = page.url+'/'+page.prod_root+'/assignment.php?course='+page.courseid+'&id='+val.cmid;
// 				        }
// 				        output += '<div class="tab-pane fade  " id="nav-assign-3-'+val.cmid+'" role="tabpanel" aria-labelledby="nav-assign3">'; 
// 				        output += '<div class="cm-assignment-report">'; 
// 				        // output += '<div class="row">'; 
// 				        // output += '<div class="col-md-12">'; 
// 				        // output += '<div class="cm-status-wrap">'; 
// 				        // output += '<h3 class="cm-status-label"><i class="icon-icl-download-icon "></i> 12</h3>'; 
// 				        // output += '<a class="cm-status-link" href="#">Download Report</a>'; 
// 				        // output += '</div>'; 
// 				        // output += '</div>'; 
// 				        // output += '</div>'; 
// 				        output += '<div class="row">'; 
// 				        output += '<div class="col-md-12">'; 
// 				        output += '<div class="cm-status-wrap">'; 
// 				        output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-edit "></i></h3>'; 
// 				        output += '<a class="cm-status-link" href="'+edit_url+'">Edit Assignment</a>'; 
// 				        output += '</div>'; 
// 				        output += '</div>'; 
// 				        output += '</div>'; 
// 				        output += '</div>'; 
// 				        output += '</div>';
// 			    	}
// 			        output += '</div>'; 
// 			        output += '</div>'; 
// 			        output += '<div class="cm-assignment-tasklist">'; 
// 			        output += '<ul class="nav nav-pills flex-column bg-strip" roll="tablist">'; 
// 			        output += '<li class="nav-item">'; 
// 			        output += '<a class="nav-link active" id="nav-assign-01-'+val.cmid+'" data-toggle="tab" href="#nav-assign-1-'+val.cmid+'" role="tab" aria-controls="nav-assign01" aria-selected="true"> <i class="icon-icl-assignment-tab1 "></i></a>'; 
// 			        output += '</li>'; 
// 			        output += '<li class="nav-item">'; 
// 			        output += '<a class="nav-link" id="nav-assign-02-'+val.cmid+'" data-toggle="tab" href="#nav-assign-2-'+val.cmid+'" role="tab" aria-controls="nav-assign02" aria-selected="true"> <i class="icon-icl-assignment-tab2 "></i></a>'; 
// 			        output += '</li>';
// 			        if(page.role == 'programofficer' || page.role == 'editingteacher'){
// 			        	output += '<li class="nav-item">'; 
// 			        	output += '<a class="nav-link" id="nav-assign-03-'+val.cmid+'" data-toggle="tab" href="#nav-assign-3-'+val.cmid+'" role="tab" aria-controls="nav-assign03" aria-selected="true"> <i class="icon-icl-assignment-tab3 "></i></a>'; 
// 			        	output += '</li>'; 
// 			        } 
              
// 			        output += '</ul>'; 
// 			        output += '</div>'; 
// 			        output += '</div>'; 
// 			     	output += '</li>';
// 			     	output += '</div>';
// 			    }
//      	//output += '</div>';
// 		});
// 		output += '</div>';  
// 			// if(page.role == 'parent'){
// 			// 		output += '</div>';
//    //          }else{
//    //          	output += '</ul>';
//    //          }


        
	
// 		$('#assignment').append(output);
// 		}else{
// 			var output = '';
// 			output += '<div class="row no-gutters">';
// 			output += '<p>'+page.lang_no_assignments+'</p>';
// 			output += '</div>';
// 			$('#assignment').append(output);
// 		}

// 		},
// 		beforeSend: function() {
//             // Code to display spinner
//             $('.loader_assignment').html("<div style='display: flex;height: 300px;justify-content: center;align-items: center;'><img src='"+page.book_loader+"' style='width: 150px;margin: 0 auto; vertical-align: middle;'/></div>");
//         	$('#assignment').css('display','none');
//         },
//         complete: function() {
//             // Code to hide spinner.
//             $('.loader_assignment').empty();
//             $('#assignment').css('display','block');
//         }    
//     });
// }
*/
function render_assignment() {
  var filter = '';
  if ($("input[name='assign_filter[]']")) {
    var testval = [];
    $("input[name='assign_filter[]']:checked").each(function () {
      testval.push($(this).val());
    });
    filter = testval;
  }
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: {
      function: 'get_course_assignment_data',
      filter: filter
    },
    dataType: "json",
    success: function (data) {
      $('#assignment').empty();
      if (data.assignment != null) {
        if (data.assignment.length > 0) {
          var i = 1;
          var output = '';
          $.each(data.assignment, function (key, val) {
            if (page.role == 'parent') {
              var shortTopic = val.topic_name;
              if (val.topic_name.length > 20) {
                shortTopic = jQuery.trim(val.topic_name).substring(0, 20).split(" ").slice(0, -1).join(" ") + "...";
              }
              var short_name = val.cmname;
              if (val.cmname.length > 30) {
                short_name = jQuery.trim(val.cmname).substring(0, 30).split(" ").slice(0, -1).join(" ") + "...";
              }
              output += '<div class="col-md-12">';
              output += '<div class="pr-assignment-strip">';
              output += '<div class="card shadow mb-3 p-3">';
              output += '<div class="row pr-assignment-strip-head">';
              output += '<div class="col-md-4"><h5 class="parent_subject mb-0" data-toggle="tooltip" title="' + val.cmname + '">' + short_name + '</h5></div>';
              output += '<div class="col-md-4"><p class="parent_status"><span>Status:</span><span class="' + val.class + '"> ' + val.substatus + '</span></p></div>';
              output += '<div class="col-md-4"><a href="#" class="sm-view-btn" > View </a></div>';
              output += '</div>';
              output += '<div class="row">';
              output += '<div class="col-lg-12">';
              output += '<hr>';
              output += '</div>';
              output += '<div class="col-lg-12">';
              output += '<div class="row pr-assignment-strip-content">';
              output += '<div class="col-md-4 student-info1">';
              output += '<h6 data-toggle="tooltip" title="' + val.topic_name + '">' + shortTopic + '</h6>';
              output += '</div>';
              output += '<div class="col-md-4"><p class="assignee-info"> Assigned by Rachel Green</p> </div>';
              output += '<div class="col-md-4"><p class="assignment-info">Due on ' + val.duedate + ' </p> </div>';
              output += '</div>';
              output += '</div>';
              output += '</div>';
              output += '</div>';
              output += '</div>';
              output += '</div>';

            } else if (page.role == 'editingteacher' || page.role == 'programofficer' || page.role == 'coursecreator' || page.role == "evaluator") {
              let caneditcourse = data.caneditcourse ? data.caneditcourse : false;
              output += render_teacher_assignment(val, caneditcourse);


            } else if (page.role == 'student' || page.role == 'coursereviewer') {
              output += render_student_assignment(val);
            }
          })
          $('#assignment').append(output);
        } else {
          var output = '';
          output += '<div class="row no-gutters">';
          output += '<p>' + page.lang_no_assignments + '</p>';
          output += '</div>';
          $('#assignment').append(output);
        }
      } else {
        var output = '';
        output += '<div class="row no-gutters">';
        output += '<p>' + page.lang_no_assignments + '</p>';
        output += '</div>';
        $('#assignment').append(output);
      }
    },
    beforeSend: function () {
      // Code to display spinner
      $('.loader_assignment').html("<div style='display: flex;height: 300px;justify-content: center;align-items: center;'><img src='" + page.book_loader + "' style='width: 150px;margin: 0 auto; vertical-align: middle;'/></div>");
      $('#assignment').css('display', 'none');
    },
    complete: function () {
      // Code to hide spinner.
      $('.loader_assignment').empty();
      $('#assignment').css('display', 'flex');
    }
  })
}
function render_teacher_assignment(val, caneditcourse = true) {
  var shortTopic = val.topic_name;
  if (val.topic_name.length > 20) {
    shortTopic = jQuery.trim(val.topic_name).substring(0, 20).split(" ").slice(0, -1).join(" ") + "...";
  }
  var short_name = val.cmname;
  if (val.cmname.length > 30) {
    short_name = jQuery.trim(val.cmname).substring(0, 30).split(" ").slice(0, -1).join(" ") + "...";
  }
  if (val.module_status_info[0].is_group_submission == 1) {
    var submission_type = page.lang_group_submission;
  } else {
    var submission_type = page.lang_ind_submission;
  }
  //var submission_url = '<a href="javascript:;" class="cm-status-link view_submission" data-id="'+val.cmid+'" data-name="'+val.cmname+'">Submissions</a>'; 
  var submission_url = '<a href="' + page.url + '/' + page.prod_root + '/view_submission.php?course=' + page.courseid + '&section=' + page.section + '&id=' + val.cmid + '&type=submitted"><button class="btn blue_bordered_btn"><span class="btn_text">' + page.lang_submitted + '</span></button></a>';
  var pending_submission_url = '<a href="' + page.url + '/' + page.prod_root + '/view_submission.php?course=' + page.courseid + '&section=' + page.section + '&id=' + val.cmid + '&type=new"><button class="btn blue_bordered_btn"><span class="btn_text">Not Submitted</span></button></a>';
  var pending_evaluation_url = '<a href="' + page.url + '/' + page.prod_root + '/view_submission.php?course=' + page.courseid + '&section=' + page.section + '&id=' + val.cmid + '&type=pending"><button class="btn blue_bordered_btn"><span class="btn_text">Not Graded</span></button></a>';
  var evaluated_url = '<a href="' + page.url + '/' + page.prod_root + '/view_submission.php?course=' + page.courseid + '&section=' + page.section + '&id=' + val.cmid + '&type=evaluated"><button class="btn blue_bordered_btn"><span class="btn_text">Graded</span></button></a>';
  var edit_url = '<a  href="javascript:;"><button class="btn edit_btn disabled"><span class="btn_text">' + page.lang_edit_assignment + '</span></button></a>';
  var delete_url = '<a href="javascript:;" class="deleteActivitydisabled" data-id="' + val.cmid + '"  data-act_name="' + val.cmname + '"><button class="btn edit_btn disabled"><span class="btn_text">' + page.lang_del_assignment + '</span></button></a>';
  if (val.module_status_info[0].cnt_submitted_assign == 0 && caneditcourse) {
    edit_url = '<a href="' + page.url + '/' + page.prod_root + '/assignment.php?course=' + page.courseid + '&section=' + page.section + '&id=' + val.cmid + '"><button class="btn edit_btn "><span class="btn_text">' + page.lang_edit_assignment + '</span></button></a>';
    delete_url = '<a href="javascript:;" class="deleteActivity" data-id="' + val.cmid + '"  data-act_name="' + val.cmname + '"><button class="btn edit_btn"><span class="btn_text">' + page.lang_del_assignment + '</span></button></a>';
  }
  var output = '';
  var hidden_card = '';
  /** show hide activity condition added by SJ */
  if (page.role == 'evaluator') {
    var visibility_class = '';
  } else {
    var visibility_class = '<span class="icon-icl-eye-black activity_show_hide_eye"></span>';
  }
  if (val.cmvisible == 0) {
    hidden_card = 'hidden-card';
    visibility_class = '<span class="icon-icm-eye-gray-slash activity_show_hide_eye"></span>';
  }
  output += '<div class="col-md-6 col-lg-4 assign_col_padding">';
  output += '<div class="stud_assignment_card ' + hidden_card + ' " >';
  output += '<div class="stud-assignment-statusbar ' + val.module_status_info[0].class + '"></div>';
  output += '<div class="stud_assignment_body">';


  actions = '<a href="javascript:;" id="activity_id_' + val.cmid + '" data-current_visibility="' + val.cmvisible + '" class="showHideActivity mx-1 float-right" data-id="' + val.cmid + '" data-module="' + val.sec_id + '"> ' + visibility_class + ' </a>';

  output += '<div class="stud_assignment_wrap">';
  output += actions;
  output += '</div>';

  output += '<div class="stud_assignment_wrap">';
  output += '<h3 class="assignment_head">' + page.lang_assign_title + '</h3>';

  output += '<p class="assignment_desc" data-toggle="tooltip" title="' + val.cmname + '">' + short_name + '</p>';
  output += '</div>';
  output += '<div class="stud_assignment_wrap">';
  output += '<h3 class="assignment_head">' + page.lang_topic + '</h3>';
  output += '<p class="assignment_desc" data-toggle="tooltip" title="' + val.topic_name + '">' + shortTopic + '</p>';
  output += '</div>';
  output += '<div class="stud_assignment_wrap">';
  output += '<h3 class="assignment_head">' + page.lang_type + '</h3>';
  output += '<p class="assignment_desc">' + submission_type + '</p>';
  output += '</div>';
  output += '<div class="row">';
  output += '<div class="col-6 col-md-6">';
  output += '<div class="stud_assignment_wrap">';
  output += '<h3 class="assignment_head">' + page.lang_start_date + '</h3>';
  output += '<p class="assignment_desc">' + val.module_status_info[0].start_date + '</p>';
  output += '</div>';
  output += '</div>';
  output += '<div class="col-6 col-md-6">';
  output += '<div class="stud_assignment_wrap">';
  output += '<h3 class="assignment_head">' + page.lang_deadline + '</h3>';
  output += '<p class="assignment_desc">' + val.module_status_info[0].due_date + '</p>';
  output += '</div>';
  output += '</div>';
  output += '</div>';
  output += '</div>';
  output += '<div class="teacher_assignment_footer">';
  output += '<div class="footer_div">';
  output += '<div class="footer_btns">';
  output += '<span class="assignment_count">' + val.module_status_info[0].cnt_pending_submission + '</span>' + pending_submission_url;
  output += '</div>';
  output += '<div class="footer_btns">';
  output += '<span class="assignment_count">' + val.module_status_info[0].cnt_submitted_assign + '</span>' + submission_url;
  output += '</div>';
  output += '</div>';
  output += '<div class="footer_div">';
  output += '<div class="footer_btns">';
  output += '<span class="assignment_count">' + val.module_status_info[0].cnt_pending_grading + '</span>' + pending_evaluation_url;
  output += '</div>';
  output += '<div class="footer_btns">';
  output += '<span class="assignment_count">' + val.module_status_info[0].cnt_graded_assign + '</span>' + evaluated_url;
  output += '</div>';
  output += '</div>';
  if (page.role !== 'evaluator') {
    output += '<div class="footer_div">';
    output += '<div class="footer_btns">' + edit_url;
    output += '</div>';
    output += '<div class="footer_btns">' + delete_url;
    output += '</div>';
    output += '</div>';
  }
  // }

  output += '</div>';
  output += '</div>';
  output += '</div>';
  return output;
}
function render_student_assignment(val) {
  var shortTopic = val.topic_name;
  if (val.topic_name.length > 20) {
    shortTopic = jQuery.trim(val.topic_name).substring(0, 20).split(" ").slice(0, -1).join(" ") + "...";
  }
  var short_name = val.cmname;
  if (val.cmname.length > 30) {
    short_name = jQuery.trim(val.cmname).substring(0, 30).split(" ").slice(0, -1).join(" ") + "...";
  }
  if (val.module_status_info[0].is_group_submission == 1) {
    var submission_type = page.lang_group_submission;
  } else {
    var submission_type = page.lang_ind_submission;
  }

  if (val.max_attempts > val.no_of_attempt && ((new Date().getTime() / 1000) <= val.module_status_info[0].duedate_timestamp) && ((new Date().getTime() / 1000) > val.module_status_info[0].startdate_timestamp) && val.attempt_restrict != 1 && val.issubmitted != 1 && (val.isAvailable || val.availabilityinfo == '')) {
    var disable = '';
    var button_color = 'courses_btn_blue';
    if (val.module_status_info[0].isModuleAvailable != 1) {
      disable = 'disabled';
      val.cmid = '';
      button_color = 'courses_btn_grey';
    }
    var submit_button_text = '';
    if (val.no_of_attempt === 0) {
      submit_button_text = page.lang_submit_assig;
    } else {
      submit_button_text = page.lang_re_submit_assig;
    }
    var submit_url = '<button ' + disable + ' class="btn ' + button_color + ' view_btn mt-2 submit_assignment" data-id="' + val.cmid + '">' + submit_button_text + '</button>';
    var view_url = '<button ' + disable + ' class="btn ' + button_color + ' view_btn view_assignment" data-id="' + val.cmid + '"">' + page.lang_view_assign + '</button>';
  }
  else {
    if (val.no_of_attempt >= val.max_attempts) {
      //var submit_url ='<button class="btn courses_btn_grey view_btn mt-2" data-id="'+val.cmid+'" data-toggle="tooltip" title="This assignment is already been attempted upto max limit" disabled>'+page.lang_submit_assig+'</button>';
      var submit_url = '';
      //var view_url ='<button class="btn courses_btn_grey view_btn mt-2" data-id="'+val.cmid+'" data-toggle="tooltip" title="This assignment is already been attempted upto max limit" disabled>'+page.lang_view_assign+'</button>';
      var view_url = '';
    }
    else if (val.issubmitted === 1) {
      var submit_url = '<button data-id="' + val.cmid + '" data-toggle="tooltip" title="Already submitted" class="btn courses_btn_grey view_btn mt-2" disabled>' + page.lang_submit_assig + '</button>';
      var view_url = '<button data-id="' + val.cmid + '" data-toggle="tooltip" title="Already submitted" class="btn courses_btn_grey view_btn mt-2" disabled>' + page.lang_view_assign + '</button>';
    }
    else if (((new Date().getTime() / 1000) > val.module_status_info[0].duedate_timestamp)) {
      var submit_url = '<button class="btn courses_btn_grey view_btn mt-2" data-id="' + val.cmid + '" data-toggle="tooltip" title="This assignment is past due date." disabled>' + page.lang_submit_assig + '</button>';
      var view_url = '<button class="btn courses_btn_grey view_btn mt-2" data-id="' + val.cmid + '" data-toggle="tooltip" title="This assignment is past due date." disabled>' + page.lang_view_assign + '</button>';
    }
    else if (((new Date().getTime() / 1000) < val.module_status_info[0].startdate_timestamp)) {

      var submit_url = '<button class="btn courses_btn_grey view_btn mt-2" data-id="' + val.cmid + '" data-toggle="tooltip" title="This assignment has future start date." disabled>' + page.lang_submit_assig + '</button>';
      var view_url = '<button class="btn courses_btn_grey view_btn mt-2" data-id="' + val.cmid + '" data-toggle="tooltip" title="This assignment has future start date." disabled>' + page.lang_view_assign + '</button>';
    }
    else if (val.attempt_restrict === 1) {
      var submit_url = '<button data-id="' + val.cmid + '" data-toggle="tooltip" title="Further attempts are restricted by Teacher" class="btn courses_btn_grey view_btn mt-2" disabled>' + page.lang_submit_assig + '</button>';
      var view_url = '<button data-id="' + val.cmid + '" data-toggle="tooltip" title="Further attempts are restricted by Teacher" class="btn courses_btn_grey view_btn mt-2" disabled>' + page.lang_view_assign + '</button>';
    }
    else if (!val.isAvailable && val.availabilityinfo != '') {
      var submit_url = '<button data-id="' + val.cmid + '" data-toggle="tooltip" data-html="true" title="<div class=\'text-left\'>' + val.availabilityinfo + '</div>" class="btn courses_btn_grey view_btn mt-2" disabled>' + page.lang_submit_assig + '</button>';
      var view_url = '<button data-id="' + val.cmid + '" data-toggle="tooltip" data-html="true" title="<div class=\'text-left\'>' + val.availabilityinfo + '</div>" class="btn courses_btn_grey view_btn mt-2" disabled>' + page.lang_view_assign + '</button>';
    }
  }
  var output = '';
  output += '<div class="col-md-6 col-lg-4 assign_col_padding">';
  output += '<div class="stud_assignment_card">';
  output += '<div class="stud-assignment-statusbar ' + val.class + '"></div>';
  output += '<div class="stud_assignment_body">';
  output += '<div class="stud_assignment_wrap">';
  output += '<h3 class="assignment_head">' + page.lang_assign_title + '</h3>';
  output += '<p class="assignment_desc" data-toggle="tooltip" title="' + val.cmname + '" >' + short_name + '</p>';
  output += '</div>';
  output += '<div class="stud_assignment_wrap">';
  output += '<h3 class="assignment_head">Topic</h3>';
  output += '<p class="assignment_desc" data-toggle="tooltip" title="' + val.topic_name + '">' + shortTopic + '</p>';
  output += '</div>';
  output += '<div class="stud_assignment_wrap">';
  output += '<h3 class="assignment_head">Submission Type</h3>';
  output += '<p class="assignment_desc">' + submission_type + '</p>';
  output += '</div>';
  output += '<div class="row">';
  output += '<div class="col-6 col-md-6">';
  output += '<div class="stud_assignment_wrap">';
  output += '<h3 class="assignment_head">Available From</h3>';
  output += '<p class="assignment_desc">' + val.module_status_info[0].start_date + '</p>';
  output += '</div>';
  output += '</div>';
  output += '<div class="col-6 col-md-6">';
  output += '<div class="stud_assignment_wrap">';
  output += '<h3 class="assignment_head">Due By</h3>';
  output += '<p class="assignment_desc">' + val.module_status_info[0].due_date + '</p>';
  output += '</div>';
  output += '</div>';
  output += '</div>';

  if (page.role !== 'coursereviewer') {
    output += '<div class="row">';
    output += '<div class="col-6 col-md-6">';
    output += '<div class="stud_assignment_wrap">';
    output += '<h3 class="assignment_head">Attempts</h3>';
    // output += '<p class="assignment_desc">'+val.no_of_attempt+' of '+val.max_attempts+' Attempts</p>';
    output += '<p class="assignment_desc">Attempts Left ' + parseInt(val.max_attempts - val.no_of_attempt) + ' </p>';
    output += '</div>';
    output += '</div>';
    // output += '<div class="col-6 col-md-6">';
    // output += '<div class="stud_assignment_wrap">';
    // output += '<h3 class="assignment_head">Total Marks</h3>';
    // output += '<p class="assignment_desc">20 Marks</p>';
    // output += '</div>';
    // output += '</div>';
    output += '</div>';
  }
  output += '</div>';
  output += '<div class="stud_assignment_footer">';
  // output += '<button class="btn courses_btn_blue view_btn view_assignment" data-id="'+val.cmid+'"">View Assignment</button>';
  if (page.role !== 'coursereviewer') {
    output += view_url;
    output += submit_url;
  } else {
    output += '<button class="btn courses_btn_blue view_btn view_assignment" data-id="' + val.cmid + '"">View Assignment</button>';
  }
  output += '</div>';
  //output += '<div class="stud_assignment_footer">'+submit_url;
  //output += '<button class="btn courses_btn_blue view_btn">Submit Assignment</button>';
  //output += '</div>';
  output += '</div>';
  output += '</div>';
  return output;
}

/*
// function render_quiz(){
// 	$.ajax({
// 		type: "POST",
// 		url: page.courseurl,
// 		data: {
// 			function: 'get_course_quiz_data'
// 		},
// 		dataType: "json",
// 		success: function(data) {
// 			console.log(data.quiz);
// 			$('#quiz').empty();
// 			if(data.quiz.length>0){
// 				var i=1;
// 				var output='';
// 				//output += '<ul class="assignments-block">';
// 				output += '<div class="row">';

// 				$.each( data.quiz, function( key, val ) {

// 					var completion_icon='';
// 					if(page.role == 'programofficer'){
// 						var edit_url = page.url+'/'+page.prod_root+'/quiz.php?course='+page.courseid+'&topic='+val.topic_id+'&id='+val.cmid+'&act=edit';
// 						var view_url = page.url+'/'+page.prod_root+'/quiz.php?course='+page.courseid+'&topic='+val.topic_id+'&id='+val.cmid+'&act=view';
// 						var edit_quiz_url = page.url+'/'+page.prod_root+'/quiz.php?course='+page.courseid+'&topic='+val.topic_id+'&id='+val.cmid+'&act=edit_quiz';
// 					}else{
// 						var edit_url = page.url+'/'+page.prod_root+'/quiz.php?course='+page.courseid+'&section='+page.section+'&topic='+val.topic_id+'&id='+val.cmid+'&act=edit';
// 						var view_url = page.url+'/'+page.prod_root+'/quiz.php?course='+page.courseid+'&section='+page.section+'&topic='+val.topic_id+'&id='+val.cmid+'&act=view';
// 						var edit_quiz_url = page.url+'/'+page.prod_root+'/quiz.php?course='+page.courseid+'&section='+page.section+'&topic='+val.topic_id+'&id='+val.cmid+'&act=edit_quiz';
// 					}
// 					//var edit_icon = '<li><a href="'+edit_url+'"><i class="fas fa-edit"></i></a></li>';
// 					// var edit_icon ='<li class="assignment-actions" >';
// 					// edit_icon += '<a href="javascript:;" class="actions-trigger" data-id="'+val.cmid+'"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>';
// 					// edit_icon +='<div class="action-list" id="action-list'+val.cmid+'">';
// 					// edit_icon +='<a href="'+view_url+'" >View</a>';
// 					// edit_icon +='<a href="'+edit_url+'" >Edit</a>';
// 					// edit_icon +='<a href="'+edit_quiz_url+'" >Edit Quiz</a>';
// 					// edit_icon += '</div>';
// 					// edit_icon += '</li>';
// 					// var shortTopic=val.topic_name;
// 					// if (val.topic_name.length > 20) {
// 					// 	shortTopic = jQuery.trim(val.topic_name).substring(0, 20).split(" ").slice(0, -1).join(" ") + "...";
// 					// }
// 					// var short_name=val.cmname;
// 					// if (val.cmname.length > 60) {
// 					// 	short_name = jQuery.trim(val.cmname).substring(0, 60).split(" ").slice(0, -1).join(" ") + "...";
// 					// }
// 					// output += '<li>';
// 					// output += '<div>';
// 					// output += '<ul class="assign-header">';
// 					// output += '<li>';
// 					// output += '<p data-toggle="tooltip" title="'+val.cmname+'" >'+short_name+'</p>';
// 					// output += '</li>';
// 					// output += '<li>';
// 					// output += completion_icon;
// 					// output += '</li>';
// 					// //output += '<li><i class="fa fa-ellipsis-v" aria-hidden="true"></i></li>';
// 					// output += edit_icon;
// 					// output += '</ul>';
// 					// output += '</div>';
// 					// output += '<div class="icon blue">';
// 					// output += '<img src="'+page.url+'/'+page.prod_root+'/assets/img/topic1_7.png" />';
// 					// output += '</div>';
// 					// output += '<div class="topic">';
// 					// output += '<h6 data-toggle="tooltip" title="'+val.topic_name+'">'+shortTopic+'</h6>';
// 					// output += '<p>Group assessment -- assessment to Group 1</p>';
// 					// output += '</div>';
// 					// output += '</li>';
// 					var shortTopic=val.topic_name;
// 					if (val.topic_name.length > 20) {
// 						shortTopic = jQuery.trim(val.topic_name).substring(0, 20).split(" ").slice(0, -1).join(" ") + "...";
// 					}
// 					var short_name=val.cmname;
// 					if (val.cmname.length > 60) {
// 						short_name = jQuery.trim(val.cmname).substring(0, 60).split(" ").slice(0, -1).join(" ") + "...";
// 					}
// 					var pendingUrl ="javascript:;";
// 					if(page.role == 'editingteacher'){
// 							//output += '<a  href="javascript:;" class="cm-status-link view_submission" data-id="'+val.cmid+'" data-name="'+val.cmname+'">Submissions</a>'; 
// 							var pending_url = '<a href="'+page.url+'/'+page.prod_root+'/view_quiz_submission.php?course='+page.courseid+'&section='+page.section+'&id='+val.cmid+'&type=pending">Pending Submissions</a>';
// 							var attempted_url = '<a href="'+page.url+'/'+page.prod_root+'/view_quiz_submission.php?course='+page.courseid+'&section='+page.section+'&id='+val.cmid+'&type=attempted">Attempted</a>';
// 				            var evaluated_url = '<a href="'+page.url+'/'+page.prod_root+'/view_quiz_submission.php?course='+page.courseid+'&section='+page.section+'&id='+val.cmid+'&type=evaluated">Evaluated</a>';
// 			        		var completed_url = '<a href="'+page.url+'/'+page.prod_root+'/view_quiz_submission.php?course='+page.courseid+'&section='+page.section+'&id='+val.cmid+'&type=finished">Completed</a>';
// 			        }else{
// 			        	//output += '<a  href="javascript:;" class="cm-status-link ">Submissions</a>';
// 			        	var pending_url = '<a  href="javascript:;" class="cm-status-link ">Pending Submissions</a>';  
// 			        	var attempted_url = '<a  href="javascript:;" class="cm-status-link ">Attempted</a>';  
// 			        	var evaluated_url = '<a  href="javascript:;" class="cm-status-link ">Evaluated</a>';
// 			        	var completed_url = '<a  href="javascript:;" class="cm-status-link ">Completed</a>';    
// 				    }
// 					// if(page.role == 'editingteacher'){
// 					// 		//output += '<a  href="javascript:;" class="cm-status-link view_submission" data-id="'+val.cmid+'" data-name="'+val.cmname+'">Submissions</a>'; 
// 				 //        	var pendingUrl = page.url+'/'+page.prod_root+'/view_pending_submission.php?course='+page.courseid+'&section='+page.section+'&id='+val.cmid;
// 			  //       }else{
// 			  //       	//output += '<a  href="javascript:;" class="cm-status-link " >Submissions</a>'; 
// 			  //       	//var pendingUrl = page.url+'/'+page.prod_root+'/view_pending_submission.php?course='+page.courseid+'&id='+val.cmid;
// 			  //       }
//    		output += '<div class="col-md-4">';
//         output += '<ul class="cm-assignment-block">';
// 		output += '<li class="cm-assignment-blocklist">';
//         output += '<div class="cm-assignment-statusbar typ-green"></div>'; 
//         output += '<div class="cm-assignment-card">'; 
//         output += '<div class="cm-assignment-panal">'; 
//         output += '<div class="tab-content " id="nav-quiztabContent'+val.cmid+'">'; 
//         output += '<div class="tab-pane fade show active " id="nav-quiz-1-'+val.cmid+'" role="tabpanel" aria-labelledby="nav-assign1">';
//         output += '<div class="cm-assignment-info">'; 
//         output += '<div class="cm-assignment-namewrap mb-4">'; 
//         output += '<h4 class="cm-assignment-name" data-toggle="tooltip" title="'+val.cmname+'" >'+short_name+'</h4>';
//         output += '<p class="cm-assignment-subname" data-toggle="tooltip" title="'+val.topic_name+'">'+shortTopic+'</p>'; 
//         output += '</div>'; 
//         output += '<div class="row">'; 
//         output += '<div class="col-md-4">'; 
//         output += '<div class="cm-status-wrap">'; 
//         output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-edit"></i><a class="cm-status-link" href="'+edit_url+'">Edit</a></h3>'; 
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '<div class="col-md-4">'; 
//         output += '<div class="cm-status-wrap">'; 
//         output += '<h3 class="cm-status-label"><i class="icon-icm-eye-gray"></i><a class="cm-status-link" href="'+view_url+'">View Quiz</a></h3>'; 
//         //output += '<a class="cm-status-link" href="'+view_url+'">View Quiz</a>'; 
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '<div class="col-md-4">'; 
//         output += '<div class="cm-status-wrap">'; 
//         output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-edit"></i><a class="cm-status-link" href="'+edit_quiz_url+'">Edit Quiz</a></h3>'; 
//         // += '<a class="cm-status-link" href="'+edit_quiz_url+'">Edit Quiz</a>'; 
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '</div>';  
//         //output += '<div class="cm-assignment-type mb-2"><i class="icon-icl-assignment-merge" aria-hidden="true"></i> Group Assignment</div>';
//         //output += '<div class="cm-assignment-date mb-2"><i class="icon-icl-assignment-calender" aria-hidden="true"></i> '+val.module_status_info[0].start_date + '-'+val.module_status_info[0].due_date+'</div>';
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '<div class="tab-pane fade  " id="nav-quiz-2-'+val.cmid+'" role="tabpanel" aria-labelledby="nav-assign2">'; 
//         output += '<div class="cm-assignment-status">'; 
// 		output += '<div class="row">'; 
//         output += '<div class="col-md-6 col-sm-6 col-xs-6">'; 
//         output += '<div class="cm-status-wrap">'; 
//         output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-ab-true "></i> '+val.module_status_info[0].finished+'</h3>'; 
//        	output += completed_url; 
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '<div class="col-md-6 col-sm-6 col-xs-6">'; 
//         output += '<div class="cm-status-wrap">'; 
//         output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-star "></i> '+val.module_status_info[0].graded+'</h3>'; 
//         output += evaluated_url;
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '<div class="row">'; 
//         output += '<div class="col-md-6 col-sm-6 col-xs-6">'; 
//         output += '<div class="cm-status-wrap">'; 
//         output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-ab-false "></i> '+val.module_status_info[0].attempted+'</h3>'; 
//         output += attempted_url;
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '<div class="col-md-6 col-sm-6 col-xs-6">'; 
//         output += '<div class="cm-status-wrap">'; 
//         output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-ab-false "></i> '+val.module_status_info[0].pending+'</h3>'; 
//         //output += '<a class="cm-status-link" href="'+pendingUrl+'" >Pending</a>'; 
//         output += pending_url;
//         output += '</div>'; 
//         output += '</div>';
//         output += '</div>';
//         // output += '<div class="row">'; 
//         // output += '<div class="col-md-4">'; 
//         // output += '<div class="cm-status-wrap">'; 
//         // output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-edit"></i></h3>'; 
//         // output += '<a class="cm-status-link" href="'+edit_url+'">Edit</a>'; 
//         // output += '</div>'; 
//         // output += '</div>'; 
//         // output += '<div class="col-md-4">'; 
//         // output += '<div class="cm-status-wrap">'; 
//         // output += '<h3 class="cm-status-label"><i class="icon-icm-eye-gray"></i></h3>'; 
//         // output += '<a class="cm-status-link" href="'+view_url+'">View Quiz</a>'; 
//         // output += '</div>'; 
//         // output += '</div>'; 
//         // output += '<div class="col-md-4">'; 
//         // output += '<div class="cm-status-wrap">'; 
//         // output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-edit"></i></h3>'; 
//         // output += '<a class="cm-status-link" href="'+edit_quiz_url+'">Edit Quiz</a>'; 
//         // output += '</div>'; 
//         // output += '</div>'; 
//         // output += '</div>';  
//         // output += '<div class="row">'; 
//         // output += '<div class="col-md-12">'; 
//         // output += '<div class="cm-status-wrap mb-0">'; 
//         // output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-star-half "></i> 12</h3>'; 
//         // output += '<a class="cm-status-link" href="javascript:;">Pending Evaluations</a>'; 
//         // output += '</div>'; 
//         // output += '</div>'; 
//         // output += '</div>'; 
//         output += '</div>'; 
//         output += '</div>'; 
//         // output += '<div class="tab-pane fade" id="nav-quiz-3-'+val.cmid+'" role="tabpanel" aria-labelledby="nav-quiz3">'; 
//         // output += '<div class="cm-assignment-report">'; 
//         // // output += '<div class="row">'; 
//         // // output += '<div class="col-md-12">'; 
//         // // output += '<div class="cm-status-wrap">'; 
//         // // output += '<h3 class="cm-status-label"><i class="icon-icl-download-icon "></i> 12</h3>'; 
//         // // output += '<a class="cm-status-link" href="#">Download Report</a>'; 
//         // // output += '</div>'; 
//         // // output += '</div>'; 
//         // // output += '</div>'; 
//         // // output += '<div class="row">'; 
//         // // output += '<div class="col-md-4">'; 
//         // // output += '<div class="cm-status-wrap">'; 
//         // // output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-edit"></i></h3>'; 
//         // // output += '<a class="cm-status-link" href="'+edit_url+'">Edit</a>'; 
//         // // output += '</div>'; 
//         // // output += '</div>'; 
//         // // output += '<div class="col-md-4">'; 
//         // // output += '<div class="cm-status-wrap">'; 
//         // // output += '<h3 class="cm-status-label"><i class="icon-icm-eye-gray"></i></h3>'; 
//         // // output += '<a class="cm-status-link" href="'+view_url+'">View Quiz</a>'; 
//         // // output += '</div>'; 
//         // // output += '</div>'; 
//         // // output += '<div class="col-md-4">'; 
//         // // output += '<div class="cm-status-wrap">'; 
//         // // output += '<h3 class="cm-status-label"><i class="icon-icl-assignment-edit"></i></h3>'; 
//         // // output += '<a class="cm-status-link" href="'+edit_quiz_url+'">Edit Quiz</a>'; 
//         // // output += '</div>'; 
//         // // output += '</div>'; 
//         // // output += '</div>'; 

//         // output += '</div>';
//         // output += '</div>';
//         output += '</div>'; 
//         output += '</div>'; 
//         output += '<div class="cm-assignment-tasklist">'; 
//         output += '<ul class="nav nav-pills flex-column bg-strip" roll="tablist">'; 
//         output += '<li class="nav-item">'; 
//         output += '<a class="nav-link active" id="nav-quiz-01-'+val.cmid+'" data-toggle="tab" href="#nav-quiz-1-'+val.cmid+'" role="tab" aria-controls="nav-quiz01" aria-selected="true"> <i class="icon-icl-assignment-tab1 "></i></a>'; 
//         output += '</li>'; 
//         output += '<li class="nav-item">'; 
//         output += '<a class="nav-link" id="nav-quiz-02-'+val.cmid+'" data-toggle="tab" href="#nav-quiz-2-'+val.cmid+'" role="tab" aria-controls="nav-quiz02" aria-selected="true"> <i class="icon-icl-assignment-tab2 "></i></a>'; 
//         output += '</li>';
//     	// output += '<li class="nav-item">'; 
//     	// output += '<a class="nav-link" id="nav-quiz-03-'+val.cmid+'" data-toggle="tab" href="#nav-quiz-3-'+val.cmid+'" role="tab" aria-controls="nav-quiz03" aria-selected="true"> <i class="icon-icl-assignment-tab3 "></i></a>'; 
//     	// output += '</li>'; 
        
//         output += '</ul>'; 
//         output += '</div>'; 
//         output += '</div>'; 
//      	output += '</li>';
//      	output += '</div>';
//      	//output += '</div>';
// 		});
// 		output += '</div>';  
// 				$('#quiz').append(output);
// 			}else{
// 				var output = '';
// 				output += '<div class="row no-gutters">';
// 				output += '<p>'+page.lang_no_quiz+'</p>';
// 				output += '</div>';
// 				$('#quiz').append(output);
// 			}
    	
// 		},
// 		beforeSend: function() {
//             // Code to display spinner
//             $('.loader_quiz').html("<div style='display: flex;height: 300px;justify-content: center;align-items: center;'><img src='"+page.book_loader+"' style='width: 150px;margin: 0 auto; vertical-align: middle;'/></div>");
//         	$('#quiz').css('display','none');
//         },
//         complete: function() {
//             // Code to hide spinner.
//             $('.loader_quiz').empty();
//             $('#quiz').css('display','block');
//         }    
// 	});
// }
*/

function render_quiz() {
  var filter = '';
  if ($("input[name='quiz_filter[]']")) {
    var testval = [];
    $("input[name='quiz_filter[]']:checked").each(function () {
      testval.push($(this).val());
    });
    filter = testval;
  }
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: {
      function: 'get_course_quiz_data',
      filter: filter
    },
    dataType: "json",
    success: async function (data) {
      // console.log(data.quiz); return false;
      $('#quiz').empty();
      if (data.quiz != null) {
        if (data.quiz.length > 0) {
          var i = 1;
          var output = '';
          //output += '<ul class="assignments-block">';

          output += '<div class="final_assessment_desc mb-3"> ' + page.lang_fa_description + ' </div>';
          output += '<div class="row">';

          // $.each( data.quiz, function( key, val ) {
          for (let key in data.quiz) {
            let val = data.quiz[key];
            var completion_icon = '';
            var shortTopic = val.topic_name;
            if (val.topic_name.length > 20) {
              shortTopic = jQuery.trim(val.topic_name).substring(0, 20).split(" ").slice(0, -1).join(" ") + "...";
            }
            var short_name = val.cmname;
            if (val.cmname.length > 60) {
              short_name = jQuery.trim(val.cmname).substring(0, 60).split(" ").slice(0, -1).join(" ") + "...";
            }
            //var pendingUrl ="javascript:;";

            if (page.role == 'editingteacher') {
              var edit_url = 'javascript:;';
              var edit_quiz_url = 'javascript:;';
              var disabled_class = 'disabled';
              if (val.module_status_info[0].attempted == 0) {
                edit_url = page.url + '/' + page.prod_root + '/quiz.php?course=' + page.courseid + '&section=' + page.section + '&topic=' + val.topic_id + '&id=' + val.cmid + '&act=edit';
                edit_quiz_url = page.url + '/' + page.prod_root + '/quiz.php?course=' + page.courseid + '&section=' + page.section + '&topic=' + val.topic_id + '&id=' + val.cmid + '&act=edit_quiz';
                disabled_class = '';
              }

              //var edit_url = page.url+'/'+page.prod_root+'/quiz.php?course='+page.courseid+'&section='+page.section+'&topic='+val.topic_id+'&id='+val.cmid+'&act=edit';
              var view_url = page.url + '/' + page.prod_root + '/quiz.php?course=' + page.courseid + '&section=' + page.section + '&topic=' + val.topic_id + '&id=' + val.cmid + '&act=view';
              var edit_quiz_url = page.url + '/' + page.prod_root + '/quiz.php?course=' + page.courseid + '&section=' + page.section + '&topic=' + val.topic_id + '&id=' + val.cmid + '&act=edit_quiz';
              var pending_url = '<a href="' + page.url + '/' + page.prod_root + '/view_quiz_submission.php?course=' + page.courseid + '&section=' + page.section + '&id=' + val.cmid + '&type=pending"><button class="btn blue_bordered_btn"><span class="btn_text">' + page.lang_pending + '</span></button></a>';
              var attempted_url = '<a href="' + page.url + '/' + page.prod_root + '/view_quiz_submission.php?course=' + page.courseid + '&section=' + page.section + '&id=' + val.cmid + '&type=attempted"><button class="btn blue_bordered_btn"><span class="btn_text">' + page.lang_attempted + '</span></button></a>';
              var evaluated_url = '<a href="' + page.url + '/' + page.prod_root + '/view_quiz_submission.php?course=' + page.courseid + '&section=' + page.section + '&id=' + val.cmid + '&type=evaluated"><button class="btn blue_bordered_btn"><span class="btn_text">Graded</span></button></a>';
              var completed_url = '<a href="' + page.url + '/' + page.prod_root + '/view_quiz_submission.php?course=' + page.courseid + '&section=' + page.section + '&id=' + val.cmid + '&type=finished"><button class="btn blue_bordered_btn"><span class="btn_text">Completed</span></button></a>';
            } else {

              var edit_url = 'javascript:;';
              var edit_quiz_url = 'javascript:;';
              var disabled_class = 'disabled';
              if (val.module_status_info[0].attempted == 0) {
                edit_url = page.url + '/' + page.prod_root + '/quiz.php?course=' + page.courseid + '&topic=' + val.topic_id + '&id=' + val.cmid + '&act=edit';
                edit_quiz_url = page.url + '/' + page.prod_root + '/quiz.php?course=' + page.courseid + '&topic=' + val.topic_id + '&id=' + val.cmid + '&act=edit_quiz';
                disabled_class = '';
              }

              if (!data.caneditcourse) {
                disabled_class = 'disabled';
              }
              //var edit_url = page.url+'/'+page.prod_root+'/quiz.php?course='+page.courseid+'&topic='+val.topic_id+'&id='+val.cmid+'&act=edit';
              var view_url = page.url + '/' + page.prod_root + '/quiz.php?course=' + page.courseid + '&topic=' + val.topic_id + '&id=' + val.cmid + '&act=view';
              var edit_quiz_url = page.url + '/' + page.prod_root + '/quiz.php?course=' + page.courseid + '&topic=' + val.topic_id + '&id=' + val.cmid + '&act=edit_quiz';
              var pending_url = '<a href="' + page.url + '/' + page.prod_root + '/view_quiz_submission.php?course=' + page.courseid + '&id=' + val.cmid + '&type=pending"><button class="btn blue_bordered_btn"><span class="btn_text">' + page.lang_pending + '</span></button></a>';
              var attempted_url = '<a href="' + page.url + '/' + page.prod_root + '/view_quiz_submission.php?course=' + page.courseid + '&id=' + val.cmid + '&type=attempted"><button class="btn blue_bordered_btn"><span class="btn_text">' + page.lang_attempted + '</span></button></a>';
              var evaluated_url = '<a href="' + page.url + '/' + page.prod_root + '/view_quiz_submission.php?course=' + page.courseid + '&id=' + val.cmid + '&type=evaluated"><button class="btn blue_bordered_btn"><span class="btn_text">Graded</span></button></a>';
              var completed_url = '<a href="' + page.url + '/' + page.prod_root + '/view_quiz_submission.php?course=' + page.courseid + '&id=' + val.cmid + '&type=finished"><button class="btn blue_bordered_btn"><span class="btn_text">Completed</span></button></a>';
            }
            // show hide activity condition added by SJ */

            var visibility_class = '<span class="icon-icl-eye-black activity_show_hide_eye"></span>';
            var hidden_card = '';
            if (val.cmvisible == 0) {
              hidden_card = 'hidden-card';
              visibility_class = '<span class="icon-icm-eye-gray-slash activity_show_hide_eye"></span>';
            }
            output += '<div class="col-md-6 col-lg-4 assign_col_padding">';
            output += '<div class="stud_assignment_card ' + hidden_card + '">';
            output += '<div class="stud-assignment-statusbar ' + val.module_status_info[0].class + '"></div>';
            output += '<div class="stud_assignment_body">';

            actions = '<a href="javascript:;" id="activity_id_' + val.cmid + '" data-current_visibility="' + val.cmvisible + '" class="showHideActivity mx-1 float-right"" data-id="' + val.cmid + '" data-module="' + val.sec_id + '"> ' + visibility_class + ' </a>';
            if (page.role !== 'evaluator') {
              output += '<div class="stud_assignment_wrap">';
              output += actions;

              output += '<div class="final_assessment_class">';

              let final_asssessment_checkbox = '';
              if (val.is_final_assessment) {
                final_asssessment_checkbox = val.is_final_assessment;
              }
              // final_asssessment_checkbox = await call_php_function('FinalAssessment','init',val);
              // console.log(final_asssessment_checkbox);
              output += final_asssessment_checkbox;
              output += '</div>';

              output += '</div>';
            }

            // output += '<div class="final_assessment_class">';


            output += '<div class="stud_assignment_wrap">';
            output += '<h3 class="assignment_head">' + page.lang_assess_title + '</h3>';
            output += '<p class="assignment_desc" data-toggle="tooltip" title="' + val.cmname + '" >' + short_name + '</p>';
            output += '</div>';
            output += '<div class="stud_assignment_wrap">';
            output += '<h3 class="assignment_head">Topic</h3>';
            output += '<p class="assignment_desc" data-toggle="tooltip" title="' + val.topic_name + '">' + shortTopic + '</p>';
            output += '</div>';
            output += '<div class="row">';
            output += '<div class="col-6 col-md-6">';
            output += '<div class="stud_assignment_wrap">';
            output += '<h3 class="assignment_head">Start Date</h3>';
            output += '<p class="assignment_desc">' + val.module_status_info[0].start_date + '</p>';
            output += '</div>';
            output += '</div>';
            output += '<div class="col-6 col-md-6">';
            output += '<div class="stud_assignment_wrap">';
            output += '<h3 class="assignment_head">Deadline</h3>';
            output += '<p class="assignment_desc">' + val.module_status_info[0].due_date + '</p>';
            output += '</div>';
            output += '</div>';
            output += '</div>';
            output += '</div>';
            output += '<div class="teacher_assignment_footer">';
            if (page.role !== 'evaluator') {
              output += '<div class="footer_div">';
              output += '<div class="footer_btns">';

              if (val.allow_pal == 1) {
                if (val.view_quiz_for_pal == true) {
                  // output += '<a href="'+view_url+'"><button class="btn edit_btn">View Quiz</button></a>';
                } else {
                  output += '<a href="javascript:void(0)" onclick="return showMessagePalWithoutQues()"><button class="btn edit_btn">' + page.lang_view_quiz + '</button></a>';
                }
              } else {
                output += '<a href="' + view_url + '"><button class="btn edit_btn">' + page.lang_view_quiz + '</button></a>';
              }
              output += '</div>';

              // if(page.role != 'editingteacher') {					
              if (val.allow_pal == 1) {
                if (val.module_status_info[0].attempted == 0) {
                  output += '<div class="footer_btns">';
                  output += '<a href="javascript:void(0)"><button class="btn edit_btn" onclick="return addPalQeuesDifficultyHtmlDropDown(' + val.instance + ')">' + page.lang_add_ques + '</button></a>';
                  output += '</div>';
                } else {
                  output += '<div class="footer_btns">';
                  output += '<a href="javascript:void(0)"><button class="btn edit_btn" ' + disabled_class + '>' + page.lang_add_ques + '</button></a>';
                  output += '</div>';
                }

              } else {
                output += '<div class="footer_btns">';
                output += '<a href="' + edit_quiz_url + '"><button class="btn edit_btn" ' + disabled_class + '>' + page.lang_edit_quiz + '</button></a>';
                output += '</div>';
              }

              // }
              output += '</div>';
            }
            output += '<div class="footer_div">';
            output += '<div class="footer_btns">';
            output += '<span class="assignment_count">' + val.module_status_info[0].pending + '</span>' + pending_url;
            //output += '<button class="btn blue_bordered_btn"><span class="btn_text">Pending</span></button>';
            output += '</div>';
            output += '<div class="footer_btns">';
            output += '<span class="assignment_count">' + val.module_status_info[0].attempted + '</span>' + attempted_url;
            //output += '<button class="btn blue_bordered_btn"><span class="btn_text">Attempted</span></button>';
            output += '</div>';
            output += '</div>';
            output += '<div class="footer_div">';
            output += '<div class="footer_btns">';
            output += '<span class="assignment_count">' + val.module_status_info[0].finished + '</span>' + completed_url;
            //output += '<button class="btn blue_bordered_btn"><span class="btn_text">Completed</span></button>';
            output += '</div>';
            output += '<div class="footer_btns">';
            output += '<span class="assignment_count">' + val.module_status_info[0].graded + '</span>' + evaluated_url;
            //output += '<button class="btn blue_bordered_btn"><span class="btn_text">Graded</span></button>';
            output += '</div>';
            output += '</div>';
            // if(page.role != 'editingteacher') {
            if (page.role != 'evaluator') {
              output += '<div class="footer_div">';
              output += '<div class="footer_btns">';
              output += '<a href="' + edit_url + '"><button class="btn blue_filled_btn" ' + disabled_class + '>Edit Assessment</button></a>';
              output += '</div>';
              // if(page.is_del_allowed == 1){
              output += '<div class="footer_btns">';
              output += '<a href="javascript:;" class="deleteActivity' + disabled_class + '" data-id="' + val.cmid + '"  data-act_name="' + val.cmname + '"><button class="btn blue_filled_btn ' + disabled_class + '"><span class="btn_text">' + page.lang_del_assessment + '</span></button></a>';
              output += '</div>';
              // }											
              output += '</div>';
            }
            // }
            output += '</div>';
            output += '</div>';
            output += '</div>';

            // });
          }
          output += '</div>';
          $('#quiz').append(output);
        } else {
          var output = '';
          output += '<div class="row no-gutters">';
          output += '<p>' + page.lang_no_quiz + '</p>';
          output += '</div>';
          $('#quiz').append(output);
        }
      } else {
        var output = '';
        output += '<div class="row no-gutters">';
        output += '<p>' + page.lang_no_quiz + '</p>';
        output += '</div>';
        $('#quiz').append(output);
      }

    },
    beforeSend: function () {
      // Code to display spinner
      $('.loader_quiz').html("<div style='display: flex;height: 300px;justify-content: center;align-items: center;'><img src='" + page.book_loader + "' style='width: 150px;margin: 0 auto; vertical-align: middle;'/></div>");
      $('#quiz').css('display', 'none');
    },
    complete: function () {
      // Code to hide spinner.
      $('.loader_quiz').empty();
      $('#quiz').css('display', 'block');
    }
  });
}


// function render_grades(){
// 	$.ajax({
// 		type: "POST",
// 		url: page.courseurl,
// 		data: {
// 			function: 'get_course_grades_data'
// 		},
// 		dataType: "json",
// 		success: function(data) {
// 			// console.log(data.grades.length);
// 			$('#grades').empty();
// 			if(page.role == 'student' || page.role == 'parent'){
// 				render_student_grades(data);
// 			}else{
// 				render_teacher_grades(data);
// 			}
// 		},
//         beforeSend: function() {
//             // Code to display spinner
//             $('.loader_grades').html("<div style='display: flex;height: 300px;justify-content: center;align-items: center;'><img src='"+page.book_loader+"' style='width: 150px;margin: 0 auto; vertical-align: middle;'/></div>");
//         	$('#grades').css('display','none');
//         },
//         complete: function() {
//             // Code to hide spinner.
//             $('.loader_grades').empty();
//             $('#grades').css('display','block');
//         }
//     });
// }
function render_grades() {
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: {
      function: 'get_course_grades_data'
    },
    dataType: "json",
    success: function (data) {
      // console.log(data.grades.length);
      $('#grades').empty();
      if (page.role == 'student' || page.role == 'parent') {
        render_student_grades(data);
      } else {
        render_teacher_grades(data);
      }
    },
    beforeSend: function () {
      // Code to display spinner
      $('.loader_grades').html("<div style='display: flex;height: 300px;justify-content: center;align-items: center;'><img src='" + page.book_loader + "' style='width: 150px;margin: 0 auto; vertical-align: middle;'/></div>");
      $('#grades').css('display', 'none');
    },
    complete: function () {
      // Code to hide spinner.
      $('.loader_grades').empty();
      $('#grades').css('display', 'block');
    }
  });
}
function render_student_grades(data) {
  var output = '';
  // output += '<form>';
  // output += '<div class="row">';
  // output += '<div class="col-lg-3 col-sm-6">';
  // output += '<div class="form-group mb-md-0">';
  // output += '<div class="grade-filter">';
  //	output += '<select class="form-control">';
  //	output += '<option value="" selected disabled hidden>'+data.category+'</option>';
  //	output += '<option>2nd Semester</option>';
  //	output += '<option>3rd Semester</option>';
  //	output += '<option>4th Semester</option>';
  //	output += '<option>5th Semester</option>';
  //	output += '</select>';
  // output += '<span class="student-per student-sem">'+ data.category +'</span>';
  // output += '<span class="student-per">'+ data.grades.avgGrades +'%</span>';
  // output += '</div>';
  // output += '</div>';
  // output += '</div>';
  // output += '</div>';
  // output += '</form>';
  output += '<div class="row">';
  output += '<div class="col-md-12 grade-accordian">';
  //assignment accordian starts here -->
  output += '<div class="courses_side_accordian_wrapper center-block">';
  output += '<div class="panel-group" id="accordion1" role="tablist" aria-multiselectable="true">';
  output += '<div class="panel panel-default modules_full_accordian_div">';
  output += '<div class="panel-heading active" role="tab" id="announce_side_accordian_headingOne">';
  output += '<h4 class="panel-title modules_accordian_titletext">';
  // output += '<span class="header-info"><label> '+ page.lang_course +' :</label>'+ page.course_fullname +'</span>';
  // output += '<span class="header-info"><label> '+ page.lang_progress +' :</label>';
  output += '<span class="header-info">' + page.course_fullname + '</span>';
  output += '<div class="stat-levels">';
  output += '<div class="stat-2 stat-bar" data-toggle="tooltip" title="' + page.course_progress + '%">';
  output += '<span class="stat-bar-rating" role="stat-bar" style="width: ' + page.course_progress + '%;">' + page.course_progress + '%</span>';
  output += '</div>';
  output += '</div>';
  output += '</span>';
  // output += '<span class="header-info"><label>'+ page.lang_course_end_date +' :</label>'+ page.course_end_date +'</span>';
  // output += '<span class="header-info"><label>'+ page.lang_course_grade_percentage +' :</label>'+ data.grades.avgGrades +'%</span>';
  output += '<a role="button" data-toggle="collapse" data-parent="#accordion" href="#announce_side_accordian_collapseOne" aria-expanded="true" aria-controls="announce_side_accordian_collapseOne">';
  output += '</a>';
  output += '</h4>';
  output += '</div>';
  output += '<div id="announce_side_accordian_collapseOne" class="panel-collapse collapse in show" role="tabpanel" aria-labelledby="announce_side_accordian_headingOne">';
  output += '<div class="panel-body">';
  output += '<div class="row">';
  output += '<div class="col-md-12 ">';
  if (data.grades.grades.length > 0) {
    var i = 1;
    output += '<div class="cm-datatable last-col-hide">';
    output += '<table class="table table-striped table-bordered no-sort-col" id="gradesTable" style="width:100%">';
    output += '<thead>';
    output += '<tr>';
    // output += '<th>'+ page.lang_date +'</th>';
    // output += '<th>'+ page.lang_assignment +'</th>';
    output += '<th>' + page.lang_exercises + '</th>';
    output += '<th>' + page.student_status + '</th>';
    output += '<th>' + page.lang_maximum_marks + '</th>';
    output += '<th>' + page.lang_marks_obtained + '</th>';
    // output += '<th>'+ page.lang_equivalent_score +'</th>';
    output += '<th>' + page.lang_comment + '</th>';
    if (page.role != 'student') {
      output += '<th>' + page.lang_uploads_by_you + '</th>';
    }
    // output += '<th>'+ page.lang_uploads +'</th>';

    // output += '<th></th>';
    output += '</tr>';
    output += '</thead>';
    output += '<tbody>';
    $.each(data.grades.grades, function (key, val) {
      var comment = '';
      if (val.comment !== null) {
        var short_comment = val.comment;
        if (val.comment.length > 50) {
          short_comment = jQuery.trim(val.comment).substring(0, 50).split(" ").slice(0, -1).join(" ") + "...";
        }
        var full_comment = val.comment;
        comment = '<span title="' + full_comment + '" data-toggle="tooltip">' + short_comment + '</span>';

      }
      var uploads = '';
      if (val.uploads.length > 0) {
        $.each(val.uploads, function (key1, val1) {
          uploads += '<a href="' + val1.url + '">' + val1.name + '</a></br>';
        });
      } else {
        uploads = 'N/A';
      }
      output += '<tr>';
      // output += '<td>'+val.completiondate+'</td>';
      // output += '<td>'+val.duedate+'</td>';
      output += '<td>' + val.name + '</td>';
      output += '<td>' + val.status + '</td>';
      output += '<td>' + val.maxgrade + '</td>';
      output += '<td>' + val.grade + '</td>';
      // output += '<td>'+val.equivalent+'</td>';
      output += '<td>' + comment + '</td>';
      if (page.role != 'student') {
        output += '<th>' + uploads + '</th>';
      }
      // output += '<td>'+ uploads +'</td>';
      // output += '<td></td>';
      output += '</tr>';

    });
    output += '</tbody>';
    output += '</table>';
    output += '</div>';

  } else {
    output += '<div class="row no-gutters">';
    output += '<p>' + page.lang_no_grades_data_available + '</p>';
    output += '</div>';
  }
  output += '</div>';
  output += '</div>';
  output += '</div>';
  output += '</div>';
  output += '</div>';
  output += '</div>';
  output += '</div>';
  //assignment accordian ends here -->
  output += '</div>';
  output += '</div>';
  $('#grades').append(output);
  setTimeout(function () {
    initializeStudentGradeDatatable('gradesTable');
  }, 200);
}
function render_teacher_grades(data) {
  var output = '';
  output += '<form action="' + page.url + '/' + page.prod_root + '/download_grade.php" method="post">';
  output += '<div class="form-row">';
  output += '<div class="col-md-3">';
  output += '<div class="form-group mb-md-0">';
  output += '<select class="form-control form-control-sm courses_filter_boxes" id="typeFilter" name="type">';
  output += '<option value="" selected >' + page.lang_all_type + '</option>';
  $.each(data.typefilter, function (key, val) {
    output += '<option value="' + val.value + '">' + val.name + '</option>';
  });
  output += '</select>';
  output += '</div>';
  output += '</div>';
  output += '<div class="col-md-3">';
  output += '<div class="form-group mb-md-0">';
  output += ' <span class="search-filter">';
  output += '<select class="js-states form-control form-control-sm courses_filter_boxes" id="studentFilter" name="student">';
  output += '<option value="" selected>' + page.lang_all_student + '</option>';
  $.each(data.students, function (key4, val4) {
    output += '<option value="' + val4.id + '">' + val4.name + '</option>';
  });
  output += '</select>';
  output += '</span>'
  output += '</div>';
  output += '</div>';
  output += '<div class="col-md-3 offset-md-3 courses_button_align">';
  output += '<div class="courses_tabs_btn d-inli">';
  output += '<input type="hidden" name="courseid" value="' + page.courseid + '">'
  output += '<input type="hidden" name="section" value="' + page.section + '">'
  output += '<input type="hidden" name="userid" value="' + page.userid + '">'
  // output += '<button type="submit" class="btn courses_btn_blue">';
  // output += '<i class="fas fa-download"></i>'+ page.lang_download;
  // output += '</button>';
  output += '</div>';
  output += '</div>';
  output += '</div>';
  output += '<hr>';
  output += '</form>';
  output += '<div class="">';
  output += '<div class="grades-by-stud-wrapper">';
  output += '<div class="row">';
  output += '<div class="col-md-12">';
  output += '<div class="cm-datatable stud-grade-tbl last-col-hide">';
  output += '<table class="table table-striped table-bordered  stripe" style="width:100%" id="gradesTable">';
  output += '<thead>';
  output += '<tr>';
  output += '<th>' + page.lang_name + '</th>';
  output += '<th>' + page.lang_overall + '</th>';
  $.each(data.activities, function (key1, val1) {
    output += '<th>';
    var short_cm_name = val1.cm_name;
    if (val1.cm_name.length > 20) {
      short_cm_name = jQuery.trim(val1.cm_name).substring(0, 20).split(" ").slice(0, -1).join(" ") + "...";
    }
    //output += val1.cm_module;  
    output += '<span data-toggle="tooltip" title="' + val1.cm_name + '">' + short_cm_name + '</span>';
    output += '<span class="date">' + val1.cm_duedate + '</span>';
    output += '<span>' + val1.cm_rawgrademax + ' ' + page.lang_points + ' </span>';
    output += '</th>';
  })
  output += '<th></th>';
  output += '</tr>';
  output += '</thead>';
  output += '<tbody>';
  $.each(data.students, function (key2, val2) {
    output += '<tr>';
    output += '<td><a href="' + page.url + '/' + page.prod_root + '/grade-student.php?id=' + page.courseid + '&section=' + page.section + '&user=' + val2.id + '" class="gradeStudent1" data-id="' + val2.id + '">' + val2.name + '</a></td>';
    output += '<td>' + val2.overall + '</td>';
    $.each(val2.activities, function (key3, val3) {
      output += '<td>' + val3.cm_rawgrade + '</td>';
    });
    output += '<td></td>';
    output += '</tr>';
  });
  output += '</tbody>';
  output += '</table>';
  output += '</div>';
  output += '</div>';
  output += '</div>';
  output += '</div>';
  output += '</div>';

  //output += 'Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.';
  $('#grades').append(output);
  initializeSearchSelect();
  setTimeout(function () {
    initializeDatatable('gradesTable');
  }, 200);

}
function render_discussion() {
  var keyword = $('#search_discussion').val();
  $.ajax({
    type: "POST",
    url: page.courseurl,
    // url: page.url + '/'+page.prod_root+'/course.php?id=' + page.courseid,
    data: {
      function: 'search_discussion',
      search: keyword
    },
    success: function (data) {
      // console.log(data);
      var pinned = data.pinned_discussions;
      var general = data.general_discussions;
      var closed = data.closed_discussions;
      $('#pinned_discussions_div').empty();
      $('#general_discussions_div').empty();
      $('#closed_discussions_div').empty();
      render_pinned_discussion(pinned);
      render_general_discussion(general);
      render_closed_discussion(closed);
      // var moodle_root = '<?php echo $urlArr['moodle_root'];?>';
      // var courseid = '<?php echo $courseid;?>';
      // var role = '<?php echo $role;?>';
    }
  })
}
function render_pinned_discussion(pinned) {
  if (pinned != null && pinned.length > 0) {
    var i = 1;
    var output = '';
    $.each(pinned, function (key, val) {
      var name = val.discussion_name;
      var short_desc = decodeHtml(val.discussion_desc);
      var desc = decodeHtml(val.discussion_desc);
      if (val.discussion_desc.length > 150) {
        short_desc = jQuery.trim(val.discussion_desc).substring(0, 150).split(" ").slice(0, -1).join(" ") + "...";
        //desc = jQuery.trim(val.discussion_desc).substring(150, (val.discussion_desc.length)-150).split(" ").slice(0, -1).join(" ");
      }
      var edit = '';
      if (page.role != 'student') {
        //var edit_string="<?php echo trigyn_get_string('edit', 'course', '', $SESSION->lang); ?>";
        edit += '<li><a  href="javascript:;" data-id="' + val.discussion_id + '" class="discussion_edit">';
        edit += '<span class="fas fa-edit" data-toggle="tooltip" title="' + page.lang_edit + '"></span>';
        edit += '</a></li>';
      }
      var due_date = '';
      if (val.discussion_end != '') {
        //var due_string="<?php echo trigyn_get_string('due', 'course', '', $SESSION->lang); ?>";
        var due_date = '<span class="courses_modules_datetime">' + page.lang_due + ' : ' + val.discussion_end + '</span>'
      }
      //var unpin_string="<?php echo trigyn_get_string('unpin', 'course', '', $SESSION->lang); ?>";
      //var view_string="<?php echo trigyn_get_string('view', 'course', '', $SESSION->lang); ?>";
      output += '<div class="col-md-12 modules_accordian_content">';
      output += '<div class="courses_modules_desc d-flex align-items-center">';
      output += '<i class="fas fa-ellipsis-v courses_module_threedots_icon_left"></i>';
      output += '<i class="fas fa-ellipsis-v courses_module_threedots_icon_left"></i>';
      output += '<h6 class="courses_modules_body_text">';
      output += '<a>' + val.discussion_name + '</a>';
      output += '<span class="courses_modules_subassign" data-toggle="tooltip" title="' + trimHTML(desc) + '">' + short_desc + '</span>' + due_date;
      output += '</h6>';
      output += '<ul class="module-action-btns">' + edit;
      output += '<li><a href="javascript:;" data-id="' + val.discussion_id + '" data-type="unpin" class="pin_unpin_discussion ">';
      output += '<span class="fas fa-thumbtack red-color" data-toggle="tooltip" title="' + page.lang_unpin + '"></span>';
      output += '</a></li>';
      if (page.role == 'coursecreator') {
        output += '<li><a href="javascript:;" data-rel="' + val.discussion_name + '" data-id="' + val.discussion_id + '" data-type="delete" class="delete_discussion ">';
        output += '<span class="fas fa-trash " data-toggle="tooltip" title="' + page.lang_delete + '"></span>';
        output += '</a></li>';
      }
      output += '<li><a href="' + page.url + '/' + page.prod_root + '/posts.php?id=' + val.discussion_id + '&course=' + page.courseid + '&section=' + page.section + '" class=""><span class="fas fa-eye" data-toggle="tooltip" title="View Thread"></span></a></li>';
      output += '</div>';
      output += '</div>';
      i++;
    });
    $('#pinned_discussions_div').append(output);
  } else {
    var output = '';
    //var no_pinned_string="<?php echo trigyn_get_string('no_pinned_discussions', 'course', '', $SESSION->lang); ?>";
    output += '<div class="col-md-12 discussion_accordian_content">';
    output += '<div class="discussion_content_wrapper text-center">';
    output += '<i class="fas fa-thumbtack discussion_pin_icon"></i>';
    output += '<h5 class="discuss_text mb-0">' + page.lang_no_pinned_discussions + '</h5>';
    output += '</div>';
    output += '</div>';
    $('#pinned_discussions_div').append(output);
  }
}
function render_general_discussion(general) {
  if (general != null && general.length > 0) {
    var i = 1;
    var output = '';
    $.each(general, function (key, val) {
      var name = val.discussion_name;
      var short_desc = decodeHtml(val.discussion_desc);
      var desc = decodeHtml(val.discussion_desc);
      if (val.discussion_desc.length > 150) {
        // short_desc=jQuery.trim(val.discussion_desc).substring(0, 150).split(" ").slice(0, -1).join(" ") + "...";
        //desc = jQuery.trim(val.discussion_desc).substring(150, (val.discussion_desc.length)-150).split(" ").slice(0, -1).join(" ");
      }
      var edit = '';
      if (page.role != 'student') {
        // var edit_string="<?php echo trigyn_get_string('edit', 'course', '', $SESSION->lang); ?>";
        //var close_for_comment_string="<?php echo trigyn_get_string('closed_for_comments', 'course', '', $SESSION->lang); ?>";
        edit += '<li><a href="javascript:;" data-id="' + val.discussion_id + '" class="discussion_edit ">';
        edit += '<span class="fas fa-edit" title="' + page.lang_edit + '"></span>';
        edit += '</a></li>';
        edit += '<li><a href="javascript:;" data-id="' + val.discussion_id + '" data-type="lock" class="lock_unlock_discussion ">';
        edit += '<span class="fas fa-key" data-toggle="tooltip" title="' + page.lang_closed_for_comments + '"></span>';
        edit += '</a></li>';
      }
      var due_date = '';
      if (val.discussion_end != '') {
        //var due_string="<?php echo trigyn_get_string('due', 'course', '', $SESSION->lang); ?>";
        var due_date = '<span class="courses_modules_datetime">' + page.lang_due + ' : ' + val.discussion_end + '</span>'
      }
      // var pin_string="<?php echo trigyn_get_string('pin', 'course', '', $SESSION->lang); ?>";
      // var view_string="<?php echo trigyn_get_string('view', 'course', '', $SESSION->lang); ?>";
      output += '<div class="col-md-12 modules_accordian_content">';
      output += '<div class="courses_modules_desc d-flex align-items-center">';
      output += '<i class="fas fa-ellipsis-v courses_module_threedots_icon_left"></i>';
      output += '<i class="fas fa-ellipsis-v courses_module_threedots_icon_left"></i>';
      output += '<h6 class="courses_modules_body_text">';
      output += '<a>' + val.discussion_name + '</a>';
      output += '<span class="courses_modules_subassign" data-toggle="tooltip" title="' + trimHTML(desc) + '">' + trimHTML(short_desc) + '</span>' + due_date;
      output += '</h6>';
      output += '<ul class="module-action-btns">' + edit;
      output += '<li><a href="javascript:;" data-id="' + val.discussion_id + '" data-type="pin" class="pin_unpin_discussion">';
      output += '<span class="fas fa-thumbtack" data-toggle="tooltip" title="' + page.lang_pin + '"></span>';
      output += '</a><li>';
      if (page.role == 'coursecreator') {
        output += '<li><a href="javascript:;" data-rel="' + val.discussion_name + '" data-id="' + val.discussion_id + '" data-type="delete" class="delete_discussion ">';
        output += '<span class="fas fa-trash " data-toggle="tooltip" title="' + page.lang_delete + '"></span>';
        output += '</a></li>';
      }
      output += '<li><a href="' + page.url + '/' + page.prod_root + '/posts.php?id=' + val.discussion_id + '&course=' + page.courseid + '&section=' + page.section + '" class=""><span class="fas fa-eye" data-toggle="tooltip" title="View Thread"></span></a></li>';
      output += '</div>';
      output += '</div>';
      i++;
    });
    $('#general_discussions_div').append(output);
  } else {
    //var no_discussion_string="<?php echo trigyn_get_string('no_discussions_to_show', 'course', '', $SESSION->lang); ?>";
    var output = '';
    output += '<div class="col-md-12 discussion_accordian_content">';
    output += '<div class="discussion_content_wrapper text-center">';
    output += '<img src="' + page.url + '/' + page.prod_root + '/assets/img/discussion.png" alt="">';
    output += '<h5 class="discuss_text mb-0">' + page.lang_no_discussions_to_show + '</h5>';
    output += '</div>';
    output += '</div>';
    $('#general_discussions_div').append(output);
  }
}
function render_closed_discussion(closed) {
  if (closed != null && closed.length > 0) {
    var i = 1;
    var output = '';
    $.each(closed, function (key, val) {
      var name = val.discussion_name;
      var short_desc = decodeHtml(val.discussion_desc);
      var desc = decodeHtml(val.discussion_desc);
      if (val.discussion_desc.length > 150) {
        short_desc = jQuery.trim(val.discussion_desc).substring(0, 150).split(" ").slice(0, -1).join(" ") + "...";
        //desc = jQuery.trim(val.discussion_desc).substring(150, (val.discussion_desc.length)-150).split(" ").slice(0, -1).join(" ");
      }
      var edit = '';
      if (page.role != 'student') {
        // /var edit_string="<?php echo trigyn_get_string('edit', 'course', '', $SESSION->lang); ?>";
        //var open_for_comments_string="<?php echo trigyn_get_string('open_for_comments', 'course', '', $SESSION->lang); ?>";
        edit += '<li><a href="javascript:;" data-id="' + val.discussion_id + '" class="discussion_edit">';
        edit += '<span class="fas fa-edit" data-toggle="tooltip" title="' + page.lang_edit + '"></span>';
        edit += '</a></li>';
        edit += '<li><a href="javascript:;" data-id="' + val.discussion_id + '" data-type="unlock" class="lock_unlock_discussion ">';
        edit += '<span class="fas fa-key red-color" data-toggle="tooltip" title="' + page.lang_open_for_comments + '"></span>';
        edit += '</a></li>';
      }
      var due_date = '';
      if (val.discussion_end != '') {
        //var due_string="<?php echo trigyn_get_string('due', 'course', '', $SESSION->lang); ?>";
        var due_date = '<span class="courses_modules_datetime">' + page.lang_due + ' : ' + val.discussion_end + '</span>'
      }
      //var view_string="<?php echo trigyn_get_string('view', 'course', '', $SESSION->lang); ?>";
      output += '<div class="col-md-12 modules_accordian_content">';
      output += '<div class="courses_modules_desc d-flex align-items-center">';
      output += '<i class="fas fa-ellipsis-v courses_module_threedots_icon_left"></i>';
      output += '<i class="fas fa-ellipsis-v courses_module_threedots_icon_left"></i>';
      output += '<h6 class="courses_modules_body_text">';
      output += '<a>' + val.discussion_name + '</a>';
      output += '<span class="courses_modules_subassign" data-toggle="tooltip" title="' + trimHTML(desc) + '">' + short_desc + '</span>' + due_date;
      output += '</h6>';
      output += '<ul class="module-action-btns">' + edit;
      if (page.role == 'coursecreator') {
        output += '<li><a href="javascript:;" data-rel="' + val.discussion_name + '" data-id="' + val.discussion_id + '" data-type="delete" class="delete_discussion ">';
        output += '<span class="fas fa-trash " data-toggle="tooltip" title="' + page.lang_delete + '"></span>';
        output += '</a></li>';
      }
      output += '<li><a href="' + page.url + '/' + page.prod_root + '/posts.php?id=' + val.discussion_id + '&course=' + page.courseid + '&section=' + page.section + '" class=""><span class="fas fa-eye" data-toggle="tooltip" title="View Thread"></span></a></li>';
      output += '</div>';
      output += '</div>';
      i++;
    });
    $('#closed_discussions_div').append(output);
  } else {
    //var no_closed_for_comments_string="<?php echo trigyn_get_string('no_closed_for_comments', 'course', '', $SESSION->lang); ?>";
    var output = '';
    output += '<div class="col-md-12 discussion_accordian_content">';
    output += '<div class="discussion_content_wrapper text-center">';
    output += '<img src="' + page.url + '/' + page.prod_root + '/assets/img/closed-chat.svg" alt="">';
    output += '<h5 class="discuss_text mb-0">' + page.lang_no_closed_for_comments + '</h5>';
    output += '</div>';
    output += '</div>';
    $('#closed_discussions_div').append(output);
  }
}
$(document).on('change', '.courses_filter_boxes', function () {
  filterAndResetGrades();
})
function filterAndResetGrades() {
  var student = $('#studentFilter').val();
  var type = $('#typeFilter').val();
  $('#gradesTable').html('');
  $('#gradesTable').DataTable().clear().destroy();
  console.log(student);
  console.log(type);
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: {
      function: 'get_fitered_course_grades_data',
      type: type,
      student: student,
    },
    dataType: "json",
    success: function (data) {
      // console.log(data);
      var output = '';
      output += '<thead>';
      output += '<tr>';
      output += '<th>' + page.lang_name + '</th>';
      output += '<th>' + page.lang_overall + '</th>';
      $.each(data.activities, function (key1, val1) {
        output += '<th>';
        var short_cm_name = val1.cm_name;
        if (val1.cm_name.length > 40) {
          short_cm_name = jQuery.trim(val1.cm_name).substring(0, 40).split(" ").slice(0, -1).join(" ") + "...";
        }
        //output += '<strong>'+ val1.cm_module +'</strong><br/>';  
        output += '<span data-toggle="tooltip" title="' + val1.cm_name + '">' + short_cm_name + '</span>';
        output += '<span class="date">' + val1.cm_duedate + '</span>';
        output += '<span>' + val1.cm_rawgrademax + ' ' + page.lang_points + '</span>';
        output += '</th>';
      })
      output += '<th></th>';
      output += '</tr>';
      output += '</thead>';
      output += '<tbody>';
      $.each(data.students, function (key2, val2) {
        output += '<tr>';
        output += '<td><a href="' + page.url + '/' + page.prod_root + '/grade-student.php?id=' + page.courseid + '&section=' + page.section + '&user=' + val2.id + '" class="gradeStudent1" data-id="' + val2.id + '">' + val2.name + '</td>';
        output += '<td>' + val2.overall + '</td>';
        $.each(val2.activities, function (key3, val3) {
          output += '<td>' + val3.cm_rawgrade + '</td>';
        });
        output += '<td></td>';
        output += '</tr>';
      });
      output += '</tbody>';
      $('#gradesTable').html(output);
      initializeDatatable('gradesTable');
    }
  });
}
function initializeSearchSelect() {
  $('#studentFilter').select2({
    allowClear: true,
    placeholder: "Select Student",
  });
};
$(document).on('click', '.gradeStudent', function () {
  var id = $(this).attr('data-id');
  $('#studentGradeTable').DataTable().destroy();
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: {
      id: id,
      function: 'get_student_grades'
    },
    dataType: "json", // serializes the form's elements.
    success: function (data) {
      $('#studentName').html(data.gradeActivities.name);
      $('#student_id').val(id);
      $('#student_pic').html(data.student_img);
      $('#studentOverallGrade').html(data.gradeActivities.overall + '%');
      // $('#assignment_activity').empty();
      // $('#other_activity').empty();
      $('#gradeStudentPopup').modal('show');
      $('#studentGradeActivities').html('');
      if (data.gradeActivities.grades.length > 0) {
        var output = '';
        $.each(data.gradeActivities.grades, function (key, val) {
          var comment = '';
          if (val.cm_comment !== null) {
            comment += val.cm_comment;
          }
          var uploads = '';
          if (val.cm_uploads.length > 0) {
            $.each(val.cm_uploads, function (key1, val1) {
              // uploads += '<a href="'+val1+'">'+ (key1+1) +'</a>'
              // uploads += '<p class="mb-0"><a href="'+ val1.url +'">'+ val1.name +'</a></p>';
              uploads += '<a href="' + val1.url + '">' + val1.name + '</a></br>';
            });
          } else {
            uploads = 'N/A';
          }
          var disabled = '';
          if (val.cm_status == 'Not Started') {
            disabled = 'readonly';
          }
          output += '<tr>';
          output += '<td>' + val.cm_duedate + '</td>';
          output += '<td>' + val.cm_name + '</td>';
          output += '<td>' + val.cm_status + '</td>';
          output += '<td>' + val.cm_rawgrademax + ' ' + page.lang_points + '</td>';
          output += '<td>';
          output += '<input type="number" class="form-control mb-0" name="rawgrade[]" value="' + val.cm_rawgrade + '"  min="0" max="' + val.cm_rawgrademax + '" ' + disabled + '>';
          output += '<input type="hidden" class="form-control mb-0" name="itemtype[]" value="mod">';
          output += '<input type="hidden" class="form-control mb-0" name="itemmodule[]" value="' + val.cm_module + '">';
          output += '<input type="hidden" class="form-control mb-0" name="iteminstance[]" value="' + val.cm_instance + '">';
          output += '</td>';
          output += '<td>';
          output += '<input type="text" class="form-control mb-0" name="comment[]" value="' + comment + '" ' + disabled + '>';
          output += '</td>';
          output += '<td>' + uploads + '</td>';
          output += '<td></td>';
          output += '</tr>';
        })
        $('#studentGradeActivities').html(output);
        initializeDatatable('studentGradeTable');

      } else {
        output += '<tr>';
        output += '<td colspan="7">' + page.lang_no_grades_data_available + '</td>';
        output += '</tr>';
      }
    }
  });
})
// $(document).on('submit', '.addGradeForm',function(e){
//     e.preventDefault(); // avoid to execute the actual submit of the form.
//     var fail=false;
//     $(this).find('input,select,textarea').each(function(){
// 	    //console.log($( this ).parent()); 
// 	    var error_element=$("span.errorMsg", $( this ).parent());
// 	    error_element.empty();

// 	    if($(this).prop('required')){
// 		    //console.log($(this));
// 		    var value_empty=isEmptyOrSpaces($( this ).val());
// 		    if (value_empty==true) {
// 		    	fail = true;
// 		        // name = $( this ).attr( 'name' );
// 		        var fail_log ="Please add valid value. \n";
// 		        error_element.html(fail_log);
// 		         //console.log(fail_log);
// 		     }
// 		 }
// 		});
//     if (fail == false) {
//     	$('button[type=submit]').attr('disabled', true);
//     	var form = $(this);
//     	var url = form.attr('action');
//     	$.ajax({
//     		type: "POST",
//     		url: url,
//     		data: form.serialize(),
//     		success: function(data) {
//     			$('button[type=submit]').removeAttr('disabled');
//     			$("#gradeStudentPopup [data-dismiss=modal]").click();
//     			$('#addMessage').html(data.message);
//     			$('#myModal').modal('show');
//     			filterAndResetGrades();
//     		}
//     	});
//     }
// });
// $('#gradeStudentPopup [data-dismiss=modal]').on('click', function (e) {
// 	$('.addGradeForm').trigger('reset');
// 	$('.addGradeForm .cm-error').empty();
// 	$('.addGradeForm .fileMsg').empty();
// 	$('.addGradeForm .errorMsg').empty();
// });

$(document).bind('reset', '.addAjaxTopicForm', function () {
  $(this).find(".errorMsg").text('');
  $(this).find(".error-msg").text('');
  $(this).find(".cm-error").text('');
  $(this).find(".fileMsg").text('');
  $(this).find(".fileName").text('');
  $(this).find('.section').empty().append('<option value="">Select section</option>');
  $(this).find('.form-group').removeClass('with-error');
  //CKupdate();
});

window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('wasRefreshed', 'true');
});

$(document).on('click', '.addActivity', function () {
  //$('#addActivityForm input:visible:enabled:first').focus();
  //$('.courses_addmodules_popup_body').scrollTop(0);
  var id = $(this).attr('data-id');
  var course = $(this).attr('data-course');
  var section = $(this).attr('data-section');
  var act_module = $(this).attr('data-module');
  $('.activity_file_name').html("");
  $('.fileupload-info').addClass('d-none');
  $('.fileupload-info .collapse-file-uploadinfo').collapse('show');
  console.log(id);
  $('#activity_module').val(id);
  $('#activity_course').val(course);
  $('#activity_section').val(section);
  $('#activity_module_id').val(act_module);
  // Check the flag on load
  window.addEventListener('load', () => {
    if (sessionStorage.getItem('wasRefreshed') === 'true') {
      sessionStorage.removeItem('wasRefreshed');
      setTimeout(() => {
        $('#addActivityPrereuisites').empty();
      }, 400);
    } else {
      $('#addActivityPrereuisites').empty();
    }
  });

  $('#addActivityModal').modal('show').scrollTop(0);
  $("#activity_type").val("").trigger('change');
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: { cmid: 0, function: 'get_activity_data' },

    success: function (data) {
      $('#addActivityPrereuisites').html(data.prerequisites);
    }
  });
  //$('#add-activity-content').animate({ scrollTop: 0 }, 'slow');
})

function renderMarkdown(data) {
  const md = window.markdownit();
  const markdown = data;
  const html = md.render(markdown);
  return DOMPurify.sanitize(html);
}

$(document).on('click', '.AISummary', function () {
  var id = $(this).attr('data-id'); // topic or section ID
  var courseid = $(this).attr('data-course'); // get course  ID
  var topic_name = $(this).attr('data-topic-name');
  var course = $(this).attr('data-course-name');
  var category = $(this).attr('data-cat-name');
  var act_module = $(this).attr('data-module');
  $('#AISummaryPopupClose').attr('data-module-id', id);
  $('#AISummaryPopupClose').attr('data-course-id', courseid);
  //alert(page.courseurl);
  // code for check summary avaiable in DB or not 
  var summary_info = (($("#ai_summary_info_" + id).html()).length > 0) ? $("#ai_summary_info_" + id).html() : page.lang_course_sum_not_avail;
  if (($("#ai_summary_info_" + id).html()).length > 0) {
    console.log("Summary from DB");
    var summary_info = (($("#ai_summary_info_" + id).html()).length > 0) ? $("#ai_summary_info_" + id).html() : page.lang_course_sum_not_avail;
    $("#AISummaryInfo").html(decodeHtml(summary_info));
  }
  else { // AI for for get summary
    console.log("Summary from AI");
    //ai_call();
    $("#AISummaryInfo").html("<p style='margin:10px'>" + page.lang_pls_wait_fetch + "</p>");
    $.ajax({
      type: "POST",
      url: page.courseurl,
      data: {
        id: id,
        topic: topic_name,
        course: course,
        category: category,
        function: 'get_topic_summary'
      },
      // enctype:"multipart/form-data",
      // processData: false,
      // contentType: false,
      success: function (data) {
        console.log("AI Summary" + data);
        $("#AISummaryInfo").html(decodeHtml(data));

      }
    });
  }
  //$("#AISummaryInfo").html("<p style='margin:10px'>"+summary_info+"</p>");




  //var summary_info = "Reproduction in animals is essential for the continuation of species, ensuring the survival of similar kinds of individuals across generations. There are two primary modes of reproduction in animals: sexual and asexual reproduction. Sexual reproduction involves the fusion of male and female gametes, resulting in the formation of a zygote, which then develops into an embryo. The reproductive organs in females include ovaries, oviducts, and the uterus, while in males, they include testes, sperm ducts, and the penis. Fertilization can occur internally or externally. Internal fertilization happens in many animals, including humans, cows, dogs, and hens. In cases where women have blocked oviducts and cannot conceive naturally, in vitro fertilization (IVF) is an option. During IVF, eggs and sperms are collected and fertilized outside the body, and the resulting zygote is placed in the mother's uterus after about a week of development. External fertilization is common in aquatic animals such as fish and starfish. This process involves the release of eggs and sperms into the water, where fertilization occurs. Due to environmental factors like water movement and predation, not all eggs get fertilized, which is why these animals release a large number of eggs and sperms to increase the chances of fertilization. The development of an embryo from a single cell into a complex individual involves repeated cell division from the zygote stage. Cloning is another aspect of reproduction in animals, as demonstrated by the creation of Dolly the sheep, the first mammal to be cloned from an adult somatic cell. However, cloning often results in abnormalities and high mortality rates among the cloned animals";
  //var summary_info = (($("#ai_summary_info_"+id).html()).length > 0 ) ? $("#ai_summary_info_"+id).html() : "Course summary not available";
  //alert(($("#ai_summary_info_"+id).html()).length);
  console.log(id);
  // $('#activity_module').val(id);
  // $('#activity_course').val(course);
  // $('#activity_section').val(section);
  // $('#activity_module_id').val(act_module);
  //var summary_url = "https://app-backend-mcmmh5wnzwnu4.azurewebsites.net/?grade=8&course="+course+"&topic=Sound";
  //$("#AISummaryInfo").attr('src',summary_url);
  //$("#AISummaryInfo").html("<p style='margin:10px'>"+summary_info+"</p>");
  // $('#AISummaryPopup').modal('show').scrollTop(0);
  //$('#add-activity-content').animate({ scrollTop: 0 }, 'slow');
})
function ai_call() {
  console.log("AI API CAll");
  var settings = {
    "url": "https://app-backend-mcmmh5wnzwnu4.azurewebsites.net/summarize",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json"
    },
    "data": JSON.stringify({
      "topic": "REPRODUCTION IN ANIMALS",
      "course": "Science",
      "grade": 8,
      "language": "Hindi"
    }),
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });

}
$(document).on('click', '.showHideActivity', function () {
  var id = $(this).attr('data-id');
  var act_module = $(this).attr('data-module');
  var current_visibility = $(this).attr('data-current_visibility');

  var actiity_id = this.id;
  $.ajax({
    type: "POST",
    url: page.url + "/call_api.php",
    url: page.url + "/" + page.prod_root + "/call_api.php?fun=show_hide_activity",
    data: {
      cmid: id,
      act_module: act_module,
      current_visibility: current_visibility
    },
    success: function (data) {
      /**
      * activity visible == 0 == page.tooltip_hide_activity
      * activity visible == 1 == page.tooltip_unide_activity
       */
      // $('.activity_show_hide_eye').tooltip('hide');  // Destroy the existing tooltip
      // $('.activity_show_hide_eye').tooltip();  
      $('.tooltip').remove();
      var visibility_class_update;
      if (data == 1) {
        $("#" + actiity_id).closest('.stud_assignment_card').removeClass('hidden-card');
        visibility_class_update = '<span data-toggle="tooltip" title= "' + page.tooltip_hide_activity + '" class="icon-icl-eye-black activity_show_hide_eye"></span>';
      } else if (data == 0) {
        $("#" + actiity_id).closest('.stud_assignment_card').addClass('hidden-card');
        visibility_class_update = '<span data-toggle="tooltip" title= "' + page.tooltip_unide_activity + '" class="icon-icm-eye-gray-slash activity_show_hide_eye" ></span>';
      } else {
        $('#addMessage').html(data);
        $('#myModal').modal('show');
      }
      $("#" + actiity_id).html(visibility_class_update);
      $("#" + actiity_id).attr('data-current_visibility', data);
    }
  })

})
$(document).on('click', '.editActivity', function () {
  var id = $(this).attr('data-id');
  var act_module = $(this).attr('data-module');
  $('.activity_file_name').html("");
  $('.fileupload-info').addClass('d-none');
  $('.fileupload-info .collapse-file-uploadinfo').collapse('show');
  // var course = $(this).attr('data-course');
  // var section = $(this).attr('data-section');

  console.log(id);
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: { cmid: id, function: 'get_activity_data' },
    // enctype:"multipart/form-data",
    // processData: false,
    // contentType: false,
    success: function (data) {
      console.log(data);
      get_video_duration();
      $('#activityDiv').empty();
      $('.activityDiv').css('display', 'block');
      $("#edit_activity_type").val(data.activity.modname).trigger('change');
      $("#edit_activity_type").val(data.activity.modname).attr("disabled", "disabled");
      $("#edit_activity_name").val(decodeHtml(data.activity.name));

      // Checked existing tag.
      $('input[name="activity_tag"]').each(function () {
        // If the checkbox value is in the selectedTags array, check it
        if ($.inArray($(this).val(), data.activity.tags) !== -1) {
          $(this).prop('checked', true);
        }
      });

      if (data.activity.modname == 'page') {

        $("#edit_activity_desc").val(data.activity.description);
        $("#edit_activity_content").val(data.activity.content);
        CKEDITOR.instances['edit_activity_desc'].setData(decodeHtml(data.activity.description));
        CKEDITOR.instances['edit_activity_content'].setData(decodeHtml(data.activity.content));
        // tinymce.remove('#edit_activity_desc');
        // tinymce.init({
        // 	selector: '#edit_activity_desc',
        // 	init_instance_callback : function(editor) {
        // 		editor.setContent(data.activity.description);
        // 	}
        // });
        // tinymce.remove('#edit_activity_content');
        // tinymce.init({
        // 	selector: '#edit_activity_content',
        // 	init_instance_callback : function(editor) {
        // 		editor.setContent(data.activity.content);
        // 	}
        // });
      }
      else if (data.activity.modname == 'resource') {
        $('.uploadedDiv').css('display', 'block');
        //$('.langDiv').css('display','block');
        //$('.src_lang_type').addClass('check-required');
        //$('.langtype').addClass('check-required');
        //$('.src_lang_type').addClass('check-required');
        $('#uploadedFile').html(data.activity.filename);
        console.log(data.activity.lang_type);
        console.log(data.activity.src_lang_type);
        var src_lang_type = '';

        src_lang_type += '<option value="">' + page.lang_sel_sour_lang + '</option>';
        src_lang_type += '<option value="en">English</option>';
        src_lang_type += '<option value="hi">Hindi</option>';
        src_lang_type += '<option value="mr">Marathi</option>';
        src_lang_type += '<option value="bn">Bengali</option>';
        src_lang_type += '<option value="ta">Tamil</option>';

        $("#edit_src_lang_type").append(src_lang_type);
        $("#edit_src_lang_type").val(data.activity.src_lang_type).trigger('change');

        $("#edit_lang_type").append(data.activity.lang_type);
        $("#edit_lang_type").select2();

        $('#edit_act_keywords').val(data.activity.keywords ? data.activity.keywords : '');
      }
      else if (data.activity.modname == 'scorm') {
        $('.uploadedDiv').css('display', 'block');
        $("#edit_activity_desc").val(data.activity.description);
        CKEDITOR.instances['edit_activity_desc'].setData(decodeHtml(data.activity.description));
        // tinymce.remove('#edit_activity_desc');
        // tinymce.init({
        // 	selector: '#edit_activity_desc',
        // 	init_instance_callback : function(editor) {
        // 		editor.setContent(data.activity.description);
        // 	}
        // });
        $('#uploadedFile').html(data.activity.filename);
      }
      else if (data.activity.modname == 'h5p' || data.activity.modname == 'hvp') {
        $('.descDiv').css('display', 'none');
        $('.uploadedDiv').css('display', 'block');
        $('.h5pDiv').css('display', 'block');

        $('#edit_activity_desc').css('display', 'none');
        //$("#edit_activity_desc").val(data.activity.description);
        //CKEDITOR.instances['edit_activity_desc'].setData(data.activity.description);
        // tinymce.remove('#edit_activity_desc');
        // tinymce.init({
        // 	selector: '#edit_activity_desc',
        // 	init_instance_callback : function(editor) {
        // 		editor.setContent(data.activity.description);
        // 	}
        // });
        $('#uploadedFile').html(data.activity.filename);
      }
      else if (data.activity.modname == 'url') {
        $('.uploadedDiv').css('display', 'none');
        $("#edit_activity_url").val(data.activity.url);
      }
      else if (data.activity.modname == 'video') {
        $('.uploadedDiv').css('display', 'block');
        $('#uploadedFile').html('<a href="' + data.activity.url + '" target="_blank">' + data.activity.name + '</a>');
        $("#edit_activity_url").val(data.activity.url);
        $("#edit_activity_desc").val(data.activity.description);
        if (data.activity.duration) {
          $("#edit_f_du").val(data.activity.duration);
        }

        CKEDITOR.instances['edit_activity_desc'].setData(decodeHtml(data.activity.description));

        if (data.activity.videolang) {
          $("#edit_activity_video_lang").val(data.activity.videolang);
          $("#edit_activity_video_lang").select2().trigger('change');
        }
        // tinymce.remove('#edit_activity_desc');
        // tinymce.init({
        // 	selector: '#edit_activity_desc',
        // 	init_instance_callback : function(editor) {
        // 		editor.setContent(data.activity.description);
        // 	}
        // });
        $('#edit_act_keywords').val(data.activity.keywords ? data.activity.keywords : '');
      }
      else if (data.activity.modname == 'vpl') {
        $("#edit_activity_maxgrade").val(data.activity.maxgrade);
        $("#edit_activity_desc").val(data.activity.description);
        $("#edit_activity_shortdesc").val(data.activity.shortdescription);
        CKEDITOR.instances['edit_activity_desc'].setData(decodeHtml(data.activity.description));
        // tinymce.remove('#edit_activity_desc');
        // tinymce.init({
        // 	selector: '#edit_activity_desc',
        // 	init_instance_callback : function(editor) {
        // 		editor.setContent(data.activity.description);
        // 	}
        // });
        //tinymce.remove('#edit_activity_shortdesc');
        CKEDITOR.instances['edit_activity_shortdesc'].setData(decodeHtml(data.activity.shortdescription));
        // tinymce.init({
        // 	selector: '#edit_activity_shortdesc',
        // 	init_instance_callback : function(editor) {
        // 		editor.setContent(data.activity.shortdescription);
        // 	}
        // });
      } else if (data.activity.modname == 'customcert') {
        $('.due_date').css('display', 'none');
      } else if (data.activity.modname == 'label') {
        CKEDITOR.instances['edit_activity_desc'].setData(decodeHtml(data.activity.description));
      }
      $('#edit_id').val(data.activity.id);
      $('#edit_type').val(data.activity.modname);
      $('#edit_activity_module').val(data.activity.section);
      $('#edit_activity_course').val(data.activity.course);
      $('#edit_activity_section').val(data.activity.groupid);
      $('#edit_due_date').val(data.activity.dueDate);
      //$("#edit_due_date").datepicker('update', data.activity.dueDate)
      $('#activityDiv').append(data.prerequisites);
      $('#edit_activity_module_id').val(act_module);
      $('#editActivityModal').modal('show');
      showActivityDiv(data.activity.modname);
    }
  });
})
function showActivityDiv(type) {
  $('#edit_act_keywords').removeClass('check-required');
  if (type == 'page') {
    $('.descDiv').css('display', 'block');
    $('.contentDiv').css('display', 'block');
    $('.fileDiv').css('display', 'none');
    $('.urlDiv').css('display', 'none');
    $('.scormDiv').css('display', 'none');
    $('.videoDiv').css('display', 'none');
    $('.vplshortdescDiv').css('display', 'none');
    $('.vplmaxgradeDiv').css('display', 'none');
    $('#edit_activity_maxgrade').removeClass('check-required');
    $('#edit_activity_shortdesc').removeClass('check-required');
    $('#edit_activity_desc').addClass('check-required');
    $('#edit_activity_content').addClass('check-required');
    $('#edit_activity_file').removeClass('check-required');
    $('#edit_activity_url').removeClass('check-required');
    $('#edit_activity_scorm').removeClass('check-required');
    $('#edit_activity_video').removeClass('check-required');
  } else if (type == 'resource') {
    $('.fileDiv').css('display', 'block');
    $('.descDiv').css('display', 'none');
    $('.contentDiv').css('display', 'none');
    $('.urlDiv').css('display', 'none');
    $('.scormDiv').css('display', 'none');
    $('.videoDiv').css('display', 'none');
    $('.vplshortdescDiv').css('display', 'none');
    $('.vplmaxgradeDiv').css('display', 'none');
    $('#edit_activity_maxgrade').removeClass('check-required');
    $('#edit_activity_shortdesc').removeClass('check-required');

    $('#edit_activity_desc').removeClass('check-required');
    $('#edit_activity_content').removeClass('check-required');
    $('#edit_activity_file').removeClass('check-required');
    $('#edit_activity_url').removeClass('check-required');
    $('#edit_activity_scorm').removeClass('check-required');
    $('#edit_activity_video').removeClass('check-required');
    $('#edit_act_keywords').addClass('check-required');
  } else if (type == 'scorm') {
    $('.scormDiv').css('display', 'block');
    $('.descDiv').css('display', 'block');
    $('.contentDiv').css('display', 'none');
    $('.fileDiv').css('display', 'none');
    $('.urlDiv').css('display', 'none');
    $('.videoDiv').css('display', 'none');
    $('.vplshortdescDiv').css('display', 'none');
    $('.vplmaxgradeDiv').css('display', 'none');
    $('#edit_activity_maxgrade').removeClass('check-required');
    $('#edit_activity_shortdesc').removeClass('check-required');
    $('#edit_activity_scorm').removeClass('check-required');
    $('#edit_activity_desc').removeClass('check-required');
    $('#edit_activity_content').removeClass('check-required');
    $('#edit_activity_file').removeClass('check-required');
    $('#edit_activity_url').removeClass('check-required');
    $('#edit_activity_video').removeClass('check-required');


  }
  else if (type == 'h5p' || type == 'hvp') {
    $('.scormDiv').css('display', 'none');
    $('.descDiv').css('display', 'none');
    $('.contentDiv').css('display', 'none');
    $('.fileDiv').css('display', 'none');
    $('.urlDiv').css('display', 'none');
    $('.videoDiv').css('display', 'none');
    $('.vplshortdescDiv').css('display', 'none');
    $('.vplmaxgradeDiv').css('display', 'none');
    $('#edit_activity_maxgrade').removeClass('check-required');
    $('#edit_activity_shortdesc').removeClass('check-required');
    $('#edit_activity_scorm').removeClass('check-required');
    $('#edit_activity_desc').removeClass('check-required');
    $('#edit_activity_content').removeClass('check-required');
    $('#edit_activity_file').removeClass('check-required');
    $('#edit_activity_url').removeClass('check-required');
    $('#edit_activity_video').removeClass('check-required');
  }
  else if (type == 'url') {
    $('.urlDiv').css('display', 'block');
    $('.descDiv').css('display', 'none');
    $('.contentDiv').css('display', 'none');
    $('.fileDiv').css('display', 'none');
    $('.scormDiv').css('display', 'none');
    $('.videoDiv').css('display', 'none');
    $('.vplshortdescDiv').css('display', 'none');
    $('.vplmaxgradeDiv').css('display', 'none');
    $('#edit_activity_maxgrade').removeClass('check-required');
    $('#edit_activity_shortdesc').removeClass('check-required');
    $('#edit_activity_desc').removeClass('check-required');;
    $('#edit_activity_content').removeClass('check-required');;
    $('#edit_activity_file').removeClass('check-required');
    $('#edit_activity_url').addClass('check-required');
    $('#edit_activity_scorm').removeClass('check-required');
    $('#edit_activity_video').removeClass('check-required');

  }
  else if (type == 'video') {
    $('.videoDiv').css('display', 'block');
    $('.urlDiv').css('display', 'none');
    $('.descDiv').css('display', 'block');
    $('.contentDiv').css('display', 'none');
    $('.fileDiv').css('display', 'none');
    $('.scormDiv').css('display', 'none');
    $('.vplshortdescDiv').css('display', 'none');
    $('.vplmaxgradeDiv').css('display', 'none');
    $('#edit_activity_maxgrade').removeClass('check-required');
    $('#edit_activity_shortdesc').removeClass('check-required');

    $('#edit_activity_video').removeClass('check-required');;
    $('#edit_activity_desc').removeClass('check-required');;
    $('#edit_activity_content').removeClass('check-required');;
    $('#edit_activity_file').removeClass('check-required');;
    $('#edit_activity_url').removeClass('check-required');;
    $('#edit_activity_scorm').removeClass('check-required');;
    $('#edit_act_keywords').addClass('check-required');
  }
  else if (type == 'vpl') {
    $('.descDiv').css('display', 'block');
    $('.vplshortdescDiv').css('display', 'block');
    $('.vplmaxgradeDiv').css('display', 'block');
    $('.videoDiv').css('display', 'none');
    $('.urlDiv').css('display', 'none');

    $('.contentDiv').css('display', 'none');
    $('.fileDiv').css('display', 'none');
    $('.scormDiv').css('display', 'none');

    $('#edit_activity_maxgrade').addClass('check-required');
    $('#edit_activity_shortdesc').addClass('check-required');
    $('#edit_activity_desc').addClass('check-required');
    $('#edit_activity_video').removeClass('check-required');

    $('#edit_activity_content').removeClass('check-required');
    $('#edit_activity_file').removeClass('check-required');;
    $('#edit_activity_url').removeClass('check-required');;
    $('#edit_activity_scorm').removeClass('check-required');;

  }
}
$(document).on('change', '.activityType', function () {
  var type = $(this).val();
  $('.fileError').html('');
  $('.fileName').html('');
  $('.descDiv').css('display', 'none');
  $('.contentDiv').css('display', 'none');
  $('.urlDiv').css('display', 'none');
  $('.fileDiv').css('display', 'none');
  $('.scormDiv').css('display', 'none');
  $('.h5pDiv').css('display', 'none');
  $('.fileupload-info').addClass('d-none');
  $('.videoDiv').css('display', 'none');
  $('.vplmaxgradeDiv').css('display', 'none');
  $('.vplshortdescDiv').css('display', 'none');
  $('.langDiv').css('display', 'none');
  $('.activity_prerequisite_height_scroll input[type="checkbox"]').prop('disabled', false);
  $('.uploadedDiv').css('display', 'none');
  $('.videoLang').css('display', 'none').find('.video_lang').removeClass('check-required');

  $('.act_keywords').css('display', 'none');
  $('#act_keywords').removeClass('check-required');
  //showActivityDiv(type);
  //$('.descDiv').css('display','none');
  if (type == 'page') {
    $('.descDiv').css('display', 'block');
    $('.contentDiv').css('display', 'block');
    // $('.description').attr('required',false);
    // $('.content').attr('required',false);
    // $('.file').attr('required',false);
    // $('.url').attr('required',false);
    // $('.scorm').attr('required',false);
    // $('.video').attr('required',false);
    $('.h5pDiv').css('display', 'none');
    $('.h5p').removeClass('check-required');
    $('.description').addClass('check-required');
    $('.content').addClass('check-required');
    $('.file').removeClass('check-required');
    $('.url').removeClass('check-required');
    $('.scorm').removeClass('check-required');
    $('.video').removeClass('check-required');
    $('.maxgrade').removeClass('check-required');
    $('.shortdesc').removeClass('check-required');
    $('.langtype').removeClass('check-required');
    $('.src_lang_type').removeClass('check-required');
    $('.fileupload-info').addClass('d-none');
  } else if (type == 'resource') {
    // $('.fileDiv').css('display','block');
    // $('.description').attr('required',false);
    // $('.content').attr('required',false);
    // $('.file').attr('required',true);
    // $('.url').attr('required',false);
    // $('.scorm').attr('required',false);
    // $('.video').attr('required',false);
    $('.fileDiv').css('display', 'block');
    $('.h5pDiv').css('display', 'none');
    //$('.langDiv').css('display','block');
    $('.langtype').addClass('check-required');
    $('.src_lang_type').addClass('check-required');
    $('.description').removeClass('check-required');
    $('.content').removeClass('check-required');
    $('.file').addClass('check-required');
    $('.url').removeClass('check-required');
    $('.scorm').removeClass('check-required');
    $('.video').removeClass('check-required');
    $('.maxgrade').removeClass('check-required');
    $('.shortdesc').removeClass('check-required');
    $('.h5p').removeClass('check-required');
    $('.fileupload-info').removeClass('d-none');
    $('.uploadedDiv').css('display', 'block');
    $('.act_keywords').css('display', 'block');
    $('#act_keywords').addClass('check-required');
  } else if (type == 'scorm') {
    // $('.scormDiv').css('display','block');
    // $('.descDiv').css('display','block');
    // $('.scorm').attr('required',true);
    // $('.description').attr('required',false);
    // $('.content').attr('required',false);
    // $('.file').attr('required',false);
    // $('.url').attr('required',false);
    // $('.video').attr('required',false);
    $('.h5pDiv').css('display', 'none');
    $('.scormDiv').css('display', 'block');
    $('.descDiv').css('display', 'block');
    $('.scorm').addClass('check-required');
    $('.description').addClass('check-required');
    //$('.description').removeClass('check-required');
    $('.content').removeClass('check-required');
    $('.file').removeClass('check-required');
    $('.url').removeClass('check-required');
    $('.video').removeClass('check-required');
    $('.maxgrade').removeClass('check-required');
    $('.shortdesc').removeClass('check-required');
    $('.langtype').removeClass('check-required');
    $('.src_lang_type').removeClass('check-required');
    $('.h5p').removeClass('check-required');
    $('.fileupload-info').removeClass('d-none');
    $('.uploadedDiv').css('display', 'block');
  }
  else if (type == 'h5p' || type == 'hvp') {
    // $('.scormDiv').css('display','block');
    // $('.descDiv').css('display','block');
    // $('.scorm').attr('required',true);
    // $('.description').attr('required',false);
    // $('.content').attr('required',false);
    // $('.file').attr('required',false);
    // $('.url').attr('required',false);
    // $('.video').attr('required',false);
    $('.h5pDiv').css('display', 'block');
    $('.descDiv').css('display', 'none');
    $('.h5p').addClass('check-required');
    $('.description').removeClass('check-required');
    $('.content').removeClass('check-required');
    $('.file').removeClass('check-required');
    $('.url').removeClass('check-required');
    $('.video').removeClass('check-required');
    $('.maxgrade').removeClass('check-required');
    $('.shortdesc').removeClass('check-required');
    $('.langtype').removeClass('check-required');
    $('.src_lang_type').removeClass('check-required');
    $('.fileupload-info').removeClass('d-none');
    $('.uploadedDiv').css('display', 'block');
  }
  else if (type == 'url') {
    // $('.urlDiv').css('display','block');
    // $('.description').attr('required',false);
    // $('.content').attr('required',false);
    // $('.file').attr('required',false);
    // $('.url').attr('required',true);
    // $('.scorm').attr('required',false);
    // $('.video').attr('required',false);
    $('.h5pDiv').css('display', 'none');
    $('.h5p').removeClass('check-required');

    $('.urlDiv').css('display', 'block');
    $('.description').removeClass('check-required');
    $('.content').removeClass('check-required');
    $('.file').removeClass('check-required');
    $('.url').addClass('check-required');
    $('.scorm').removeClass('check-required');
    $('.video').removeClass('check-required');
    $('.maxgrade').removeClass('check-required');
    $('.shortdesc').removeClass('check-required');
    $('.langtype').removeClass('check-required');
    $('.src_lang_type').removeClass('check-required');
    $('.fileupload-info').addClass('d-none');
  }
  else if (type == 'video') {
    // $('.videoDiv').css('display','block');
    // $('.descDiv').css('display','block');
    // $('.description').attr('required',false);
    // $('.content').attr('required',false);
    // $('.file').attr('required',false);
    // $('.url').attr('required',false);
    // $('.scorm').attr('required',false);
    // $('.video').attr('required',true);
    $('.h5pDiv').css('display', 'none');
    $('.h5p').removeClass('check-required');

    $('.videoDiv').css('display', 'block');
    $('.descDiv').css('display', 'block');
    $('.videoLang').css('display', 'block').find('.video_lang').addClass('check-required');
    $('.description').removeClass('check-required');
    $('.content').removeClass('check-required');
    $('.file').removeClass('check-required');
    $('.url').removeClass('check-required');
    $('.scorm').removeClass('check-required');
    $('.video').addClass('check-required');
    $('.maxgrade').removeClass('check-required');
    $('.shortdesc').removeClass('check-required');
    $('.langtype').removeClass('check-required');
    $('.src_lang_type').removeClass('check-required');
    $('.fileupload-info').removeClass('d-none');
    $('.uploadedDiv').css('display', 'block');
    $('.act_keywords').css('display', 'block');
    $('#act_keywords').addClass('check-required');
    get_video_duration();
  }
  else if (type == 'vpl') {
    $('.vplmaxgradeDiv').css('display', 'block');
    $('.maxgrade').addClass('check-required');

    $('.vplshortdescDiv').css('display', 'block');
    $('.shortdesc').addClass('check-required');

    $('.descDiv').css('display', 'block');
    $('.description').addClass('check-required');
    $('.videoDiv').css('display', 'none');

    $('.content').removeClass('check-required');
    $('.file').removeClass('check-required');
    $('.url').removeClass('check-required');
    $('.scorm').removeClass('check-required');
    $('.video').removeClass('check-required');
    $('.langtype').removeClass('check-required');
    $('.src_lang_type').removeClass('check-required');
    $('.h5pDiv').css('display', 'none');
    $('.h5p').removeClass('check-required');
    $('.fileupload-info').removeClass('d-none');
    $('.uploadedDiv').css('display', 'block');
  }
  else if (type == 'label') {
    $('.activity_prerequisite_height_scroll input[type="checkbox"]').prop('disabled', true);
  }

  if (type == 'customcert') {
    $('.due_date').css('display', 'none');
  } else {
    $('.due_date').css('display', 'block');
  }
})
function get_video_duration() {
  //register canplaythrough event to #audio element to can get duration
  var f_duration = 0;  //store duration
  var hms_duration = 0;
  document.getElementById('audio').addEventListener('canplaythrough', function (e) {
    //add duration in the input field #f_du
    //f_duration = Math.round(e.currentTarget.duration);
    f_duration = e.currentTarget.duration;
    document.getElementById('f_du').value = f_duration;
    document.getElementById('edit_f_du').value = f_duration;
    webkitURL.revokeObjectURL(obUrl);
  });
  //when select a file, create an ObjectURL with the file and add it in the #audio element
  var obUrl;
  document.getElementById('activity_video').addEventListener('change', function (e) {
    var file = e.currentTarget.files[0];
    //check file extension for audio/video type
    if (file.name.match(/\.(avi|mp3|mp4|mpeg|ogg)$/i)) {
      obUrl = webkitURL.createObjectURL(file);
      document.getElementById('audio').setAttribute('src', obUrl);
      document.getElementById('edit_audio').setAttribute('src', obUrl);
    }
  });
}
$(document).on('click', '.addPrerequisite', function () {
  $('.activityDiv').css('display', 'block');
})

var ajaxRequest = false;
$(document).on('submit', '.activityForm', function (e) {
  // avoid to execute the actual submit of the form.
  e.preventDefault();
  var fail = false;
  var form_id = $(this).attr('id');
  var modal_id = $(this).attr('modal_id');
  $(this).find('input,select,textarea').each(function () {
    if ($(this).attr('name') != 'lang_type[]') {
      var value_empty = isEmptyOrSpaces($(this).val());
      //console.log(value_empty);
      var error_element = $("span.errorMsg", $(this).parent());
      error_element.empty();
      $(this).parent().removeClass('with-error');
      if (value_empty == true) {
        if ($(this).hasClass('check-required')) {
          if ($(this).attr('type') == 'file') {
            let id = $(this).attr('id');
            if (id == 'edit_activity_scorm' || id == 'edit_activity_h5p') {
              return;
            } else {
              error_element = $('#' + $(this).attr('data-errormsg'));
              fail = true;
              var fail_log = "Please Select file. \n";
              error_element.html(fail_log);
            }
          } else {
            console.log(error_element);
            fail = true;
            // name = $( this ).attr( 'name' );
            $(this).parent().addClass('with-error');
            var fail_log = page.lang_pls_enter_valid_val + " \n";
            error_element.html(fail_log);
            //error_element.css('display','block');
          }
        }

      } else {
        if ($(this).is('input')) { //we are dealing with an input
          if ($(this).attr('type') == 'text') {
            var checkxss = checkXSSAttack($(this).val());
            if (checkxss == true) {
              fail = true;
              error_element.html(page.lang_pls_remove_un_char);
              error_element.css('display', 'block');
              $(this).parent().addClass('with-error');
            }
          } else if ($(this).attr('type') == 'file') {
            let id = $(this).attr('id');
            let accept = $(this).attr('accept').split(',');
            let format = $(this).attr('data-format').split(',')
            if (
              id == 'activity_h5p' ||
              id == 'edit_activity_h5p' ||
              id == 'activity_scorm' ||
              id == 'edit_activity_scorm'
            ) {
              let files = $(this)[0].files;
              $.each(files, function (idx, file) {
                let fileFormat = file.name.split('.').pop()
                let accepted = accept.includes('.' + fileFormat);
                fail = !accepted;
                if (fail) {
                  error_element.html(page.lang_pls_support_content);
                  error_element.css('display', 'block');
                }
                $(this).parent().addClass('with-error');
              })
            }
          }
        } else if ($(this).is('textarea')) { //we are dealing with a textarea
          //code here
          var checkxss = checkXSSAttack($(this).val());
          if (checkxss == true) {
            fail = true;
            error_element.html(page.lang_pls_remove_un_char);
            error_element.css('display', 'block');
            $(this).parent().addClass('with-error');
          }
        }
        //  	if($(this).attr('data-length')){
        //          var char_length = $(this).attr('data-length');
        //          console.log(char_length);
        //          if($(this).val().length > char_length){
        // 	fail = true;
        // 	var fail_log ="Please enter less than "+char_length+" characters. \n";
        // 	error_element.html(fail_log);
        // 	error_element.css('display','block');
        // 	$(this).parent().addClass('with-error');
        // }
        //     	} 
        if ($(this).attr('data-length')) {
          var char_length = $(this).attr('data-length');
          if ($(this).is('textarea')) {
            var textId = $(this).attr('id');
            //var textareaLength = getTextareaLength(textId);
            var textareaLength = $(this).val().length;
            // console.log(textareaLength);
            if (textareaLength > char_length) {
              fail = true;
              var fail_log = page.lang_pls_enter_less + " " + char_length + " characters. \n";
              error_element.html(fail_log);
              error_element.css('display', 'block');
              $(this).parent().addClass('with-error');
            }
          } else {
            //console.log(char_length);
            if ($(this).val().length > char_length) {
              fail = true;
              var fail_log = page.lang_pls_enter_less + " " + char_length + " characters. \n";
              error_element.html(fail_log);
              error_element.css('display', 'block');
              $(this).parent().addClass('with-error');
            }
          }
        }
      }
    } else {

    }

  });
  var today = formattedDate(new Date());
  if (form_id == 'addActivityForm') {
    var due_date_error_element = $("span.errorMsg", $('#due_date').parent());
    due_date_error_element.empty();
    var due_date = $('#due_date').val();
    // var name = $('#activity_name').val();
    // var name_error_element=$("span.errorMsg", $('#activity_name').parent());
    // name_error_element.empty();
    var activity_module_id = $('#activity_module_id').val();
  } else {
    var due_date_error_element = $("span.errorMsg", $('#edit_due_date').parent());
    due_date_error_element.empty();
    var due_date = $('#edit_due_date').val();
    var activity_module_id = $('#edit_activity_module_id').val()
    // var name = $('#edit_activity_name').val();
    // var name_error_element=$("span.errorMsg", $('#edit_activity_name').parent());
    // name_error_element.empty();
  }
  // var startdate =new Date('05/23/2021');
  // var enddate = new Date('05/24/2021');
  //console.log(name);
  var due_date_final = formattedDate(new Date(due_date));
  // if(name.length < 1 || name.length >255){
  // 	name_error_element.append('Please add activity name within 255 characters');
  // 	fail = true;
  // }
  var today_formatted = String(today.getMonth() + 1).padStart(2, '0') + '/' + String(today.getDate()).padStart(2, '0') + '/' + today.getFullYear();
  if (due_date != '') {
    if (due_date_final < today) {
      due_date_error_element.append(page.lang_due_date_cannot_past);
      fail = true;
    }
  }
  if (fail == false) {
    $('button[type=submit]').attr('disabled', true);
    $('.fileupload-info .progress-wrapper .progress-bar-wrapper').removeClass('d-none');
    $('.fileupload-info .progress-wrapper .upload-div').removeClass('d-none');
    $('.all_errormsg').html("");
    $('.progress .progress-bar').css('width', '0%');
    $('.progress .progress-bar').attr('aria-valuenow', 0);
    $('.progress-percentage').text(0);

    var form = $(this);
    var url = form.attr('action');
    var formData = new FormData(this);
    var activity_module_id = 2
    ajaxRequest = $.ajax({
      xhr: function () {
        const xhr = new window.XMLHttpRequest();
        xhr.upload.addEventListener('progress', function (e) {
          if (e.lengthComputable) {
            const percent = Math.round((e.loaded / e.total) * 100);
            $('.progress .progress-bar').css('width', percent + '%');
            $('.progress .progress-bar').attr('aria-valuenow', percent);
            $('.progress-percentage').text(percent);
          }
        });
        return xhr;
      },
      type: "POST",
      url: url,
      data: formData,
      enctype: "multipart/form-data",
      processData: false,
      contentType: false,
      success: function (data) {
        if (data.status == 'fail') {
          $('.all_errormsg').html(data.message);
        } else {
          $("#" + form_id).trigger("reset");
          $("#" + modal_id + " [data-dismiss=modal]").click();
          $('#addMessage').html(data.message);
          $('#myModal').modal('show');
          render_modules(activity_module_id);

          // Render prerequsite
          $('#addActivityPrereuisites').html(data.prerequisites);
          $('#activityDiv').html(data.prerequisites);
        }
      },
      error: function (error) {
        if (error.responseText) {
          response = JSON.parse(error.responseText);
          $('.all_errormsg').html(response.message);
        }
      },
      complete: function () {
        $('button[type=submit]').removeAttr('disabled');
        $('.fileupload-info .progress-wrapper .progress-bar-wrapper').addClass('d-none');
        $('.fileupload-info .progress-wrapper .upload-div').addClass('d-none');
      }
    });
  }
});

$(document).on('click', '.fileupload-info .close-icon', function () {
  if (ajaxRequest) {
    ajaxRequest.abort();
    $('button[type=submit]').removeAttr('disabled');
    $('.fileupload-info .progress-wrapper .progress-bar-wrapper').addClass('d-none');
    $('.fileupload-info .progress-wrapper .upload-div').addClass('d-none');
    $('.all_errormsg').html("");
    $('.progress .progress-bar').css('width', '0%');
    $('.progress .progress-bar').attr('aria-valuenow', 0);
    $('.progress-percentage').text(0);
  }
});

$(document).on('submit', '.announcementForm', function (e) {
  e.preventDefault(); // avoid to execute the actual submit of the form.
  var fail = false;
  var form_id = $(this).attr('id');
  var modal_id = $(this).attr('modal-id');
  //    $(this).find('input,select,textarea').each(function(){
  //   	 	//console.log($( this ).parent()); 
  // 		// var error_element=$("span.errorMsg", $( this ).parent());
  // 		// error_element.empty();
  // 		// if($(this).prop('required')){
  // 		// 	//console.log($(this));
  // 		// 	var value_empty=isEmptyOrSpaces($( this ).val());
  // 		// 	if (value_empty==true) {
  // 		// 	fail = true;
  // 		// 		// name = $( this ).attr( 'name' );
  // 		// 		var fail_log ="Please add valid value. \n";
  // 		// 		error_element.html(fail_log);
  // 		// 		//console.log(fail_log);
  // 		// 	}
  // 		// }
  // 	if($(this).hasClass('check-required')){	 
  // 		var error_element = $("span.errorMsg", $( this ).parent());
  // 		error_element.empty();
  // 		$(this).parent().removeClass('with-error');
  // 		console.log(error_element);
  // 		var value_empty = isEmptyOrSpaces($( this ).val());
  // 		var field_name = $( this ).attr('placeholder');
  // 		if (value_empty == true) {
  // 			fail = true;
  // 			// name = $( this ).attr( 'name' );
  // 			$(this).parent().addClass('with-error');
  // 			var fail_log = "Please enter valid value. \n";
  // 			console.log(fail_log);
  // 			error_element.append(fail_log);
  // 			error_element.css('display','block');
  // 			//$(this).focus();
  // 			//console.log(fail_log);
  // 		}else{
  // 			var char_length = 255;
  // 			if($(this).val().length > char_length){
  // 				fail = true;
  // 				var fail_log ="Please enter less than "+char_length+" characters. \n";
  // 				error_element.html(fail_log);
  // 				error_element.css('display','block');
  // 				$(this).parent().addClass('with-error');
  // 			}
  // 		}
  // 	}
  // });
  $(this).find('input,select,textarea').each(function () {
    var value_empty = isEmptyOrSpaces($(this).val());
    console.log(value_empty);
    var error_element = $("span.errorMsg", $(this).parent());
    error_element.empty();
    $(this).parent().removeClass('with-error');
    //if($(this).prop('required')){
    // if($(this).hasClass('check-required')){
    // 	//console.log($( this ).parent()); 
    //           //console.log(error_element);
    //           var field_name = $( this ).attr('placeholder');
    //           if (value_empty == true) {
    //               fail = true;
    //               // name = $( this ).attr( 'name' );
    // 		$(this).parent().addClass('with-error');
    //               var fail_log = "Please enter valid value. \n";
    //               //console.log(fail_log);
    //               error_element.append(fail_log);
    //           }
    //       }
    if (value_empty == true) {
      if ($(this).hasClass('check-required')) {
        fail = true;
        // name = $( this ).attr( 'name' );
        $(this).parent().addClass('with-error');
        var fail_log = page.lang_pls_enter_valid_val + " \n";
        error_element.html(fail_log);
        //error_element.css('display','block');
      }

    } else {
      if ($(this).is('input')) { //we are dealing with an input
        if ($(this).attr('type') == 'text') {
          var checkxss = checkXSSAttack($(this).val());
          if (checkxss == true) {
            fail = true;
            error_element.html(page.lang_pls_remove_un_char);
            error_element.css('display', 'block');
            $(this).parent().addClass('with-error');
          }
        }
      } else if ($(this).is('textarea')) { //we are dealing with a textarea
        //code here
        var checkxss = checkXSSAttack($(this).val());
        if (checkxss == true) {
          fail = true;
          error_element.html(page.lang_pls_remove_un_char);
          error_element.css('display', 'block');
          $(this).parent().addClass('with-error');
        }
      }
      //  	if($(this).attr('data-length')){
      //          var char_length = $(this).attr('data-length');
      //          console.log(char_length);
      //          if($(this).val().length > char_length){
      // 	fail = true;
      // 	var fail_log ="Please enter less than "+char_length+" characters. \n";
      // 	error_element.html(fail_log);
      // 	error_element.css('display','block');
      // 	$(this).parent().addClass('with-error');
      // }
      //     	} 
      if ($(this).attr('data-length')) {
        var char_length = $(this).attr('data-length');
        if ($(this).is('textarea')) {
          var textId = $(this).attr('id');
          //var textareaLength = getTextareaLength(textId);
          var textareaLength = $(this).val().length;
          console.log(textareaLength);
          if (textareaLength > char_length) {
            fail = true;
            var fail_log = page.lang_pls_enter_less + " " + char_length + " characters. \n";
            error_element.html(fail_log);
            error_element.css('display', 'block');
            $(this).parent().addClass('with-error');
          }
        } else {
          //console.log(char_length);
          if ($(this).val().length > char_length) {
            fail = true;
            var fail_log = page.lang_pls_enter_less + " " + char_length + " characters. \n";
            error_element.html(fail_log);
            error_element.css('display', 'block');
            $(this).parent().addClass('with-error');
          }
        }
      }
    }

  });
  var today = formattedDate(new Date());
  if (form_id == 'addAnnouncementForm') {
    var startdate_parent = $('#startdate').parent();
    startdate_parent.removeClass('with-error');
    var startdate_error_element = $("span.errorMsg", $('#startdate').parent());
    startdate_error_element.empty();
    var enddate_parent = $('#enddate').parent();
    enddate_parent.removeClass('with-error');
    var enddate_error_element = $("span.errorMsg", $('#enddate').parent());
    enddate_error_element.empty();
    var startdate = $('#startdate').val();
    var enddate = $('#enddate').val();
  } else {
    var startdate_parent = $('#edit_startdate').parent();
    startdate_parent.removeClass('with-error');
    var startdate_error_element = $("span.errorMsg", $('#edit_startdate').parent());
    startdate_error_element.empty();
    var enddate_parent = $('#edit_enddate').parent();
    enddate_parent.removeClass('with-error');
    var enddate_error_element = $("span.errorMsg", $('#edit_enddate').parent());
    enddate_error_element.empty();
    var startdate = $('#edit_startdate').val();
    var enddate = $('#edit_enddate').val();
  }

  //var today = formattedDate(new Date());
  var startdate_value_empty = isEmptyOrSpaces(startdate);
  if (startdate_value_empty == true) {
    fail = true;
    // name = $( this ).attr( 'name' );
    startdate_parent.addClass('with-error');
    var fail_log = "Please select valid date. \n";
    console.log(fail_log);
    scrollToBottom(form_id);// modal id
    startdate_error_element.append(fail_log);
    //$(this).focus();
    //console.log(fail_log);
  } else {
    var startdate_date = formattedDate(new Date(startdate));
    if (startdate_date < today) {
      startdate_parent.addClass('with-error');
      startdate_error_element.append(page.lang_start_date_empty);
      scrollToBottom(form_id);// modal id
      fail = true;
    }
  }
  var enddate_value_empty = isEmptyOrSpaces(enddate);
  if (enddate_value_empty == false) {
    var enddate_date = formattedDate(new Date(enddate));
    if (enddate_date < today || enddate_date < startdate_date) {
      enddate_parent.addClass('with-error');
      enddate_error_element.append(page.lang_end_date_empty);
      scrollToBottom(form_id);// modal id
      fail = true;
    }
  }
  // Function to scroll the modal to the bottom
  function scrollToBottom(modalid) {
    $('#' + modalid + ' .modal-body').animate({ scrollTop: $('#' + modalid + ' .modal-body').prop("scrollHeight") }, 'slow');
  }

  validateCoursenavigation(this);
  function validateCoursenavigation(_this) {
    // Get all checkboxes in the group
    let checkboxes = $(_this).find('input[name="linkNavigation[]"]');
    let isChecked = false;

    // Check if at least one checkbox is selected
    for (let checkbox of checkboxes) {
      if (checkbox.checked) {
        isChecked = true;
        break;
      }
    }
    $('.side_accordian_assignmenttab_form').siblings(".errorMsg").html("");
    // Display validation result
    if (isChecked) {
      validateLinkActivity(_this);
    }
  }
  function validateLinkActivity(_this) {
    // Get all radio buttons in the group
    let options = $(_this).find('input[name="linkActivity"]');
    let isValid = false;
    // Check if a selected radio button has a non-empty value
    for (let option of options) {
      if (option.checked && option.value.trim() !== "") {
        isValid = true;
        break;
      }
    }

    // Display validation result
    if (!isValid) {
      $('.side_accordian_assignmenttab_form').siblings(".errorMsg").html("An exercise must be selected in order to link an activity.");
      fail = true;
    }
  }

  if (fail == false) {
    $('button[type=submit]').attr('disabled', true);
    var form = $(this);
    var url = form.attr('action');
    $.ajax({
      type: "POST",
      url: url,
      data: form.serialize(),
      success: function (data) {
        //console.log(data);
        $('button[type=submit]').removeAttr('disabled');
        $("#" + form_id).trigger("reset");
        $("#" + modal_id + " [data-dismiss=modal]").click();
        $('#addMessage').html(data.message);
        $('#myModal').modal('show');
        setTimeout(function () {
          $("#myModal .close").click();
        }, 5000);
        var hash = window.location.hash;
        $('#nav-tab a[href="' + hash + '"]').siblings('.panel-heading').addClass('active');
        // location.reload();
        $('#nav-announcements-tab').click();
      }
    });
  }
});
$(document).on('submit', '.discussionForm', function (e) {
  e.preventDefault(); // avoid to execute the actual submit of the form.
  var fail = false;
  var form_id = $(this).attr('id');
  var modal_id = $(this).attr('modal-id');
  //    $(this).find('input,select,textarea').each(function(){
  //   	 	//console.log($( this ).parent()); 
  //   	 	var error_element=$("span.errorMsg", $( this ).parent());
  //   	 	error_element.empty();
  //   	 	// if($(this).prop('required')){
  //     // //console.log($(this));
  //     // var value_empty=isEmptyOrSpaces($( this ).val());
  //     // if (value_empty==true) {
  //     // 	fail = true;
  // 	//         // name = $( this ).attr( 'name' );
  // 	//         var fail_log ="Please add valid value. \n";
  // 	//         error_element.html(fail_log);
  // 	//          //console.log(fail_log);
  // 	//      }
  // 	//  }
  // 	if($(this).hasClass('check-required')){	 
  // 		var error_element = $("span.errorMsg", $( this ).parent());
  // 		error_element.empty();
  // 		$(this).parent().removeClass('with-error');
  // 		console.log(error_element);
  // 		var value_empty = isEmptyOrSpaces($( this ).val());
  // 		var field_name = $( this ).attr('placeholder');
  // 		if (value_empty == true) {
  // 			fail = true;
  // 			// name = $( this ).attr( 'name' );
  // 			$(this).parent().addClass('with-error');
  // 			var fail_log = "Please enter valid value. \n";
  // 			console.log(fail_log);
  // 			error_element.append(fail_log);
  // 			error_element.css('display','block');

  // 			//$(this).focus();
  // 			//console.log(fail_log);
  // 		}else{
  // 			var char_length = 255;
  // 			if($(this).val().length > char_length){
  // 				fail = true;
  // 				var fail_log ="Please enter less than "+char_length+" characters. \n";
  // 				error_element.html(fail_log);
  // 				error_element.css('display','block');
  // 				$(this).parent().addClass('with-error');
  // 			}
  // 		}
  // 	}
  // });
  $(this).find('input,select,textarea').each(function () {
    var value_empty = isEmptyOrSpaces($(this).val());
    console.log(value_empty);
    var error_element = $("span.errorMsg", $(this).parent());
    error_element.empty();
    $(this).parent().removeClass('with-error');
    //if($(this).prop('required')){
    // if($(this).hasClass('check-required')){
    // 	//console.log($( this ).parent()); 
    //           //console.log(error_element);
    //           var field_name = $( this ).attr('placeholder');
    //           if (value_empty == true) {
    //               fail = true;
    //               // name = $( this ).attr( 'name' );
    // 		$(this).parent().addClass('with-error');
    //               var fail_log = "Please enter valid value. \n";
    //               //console.log(fail_log);
    //               error_element.append(fail_log);
    //           }
    //       }
    if (value_empty == true) {
      if ($(this).hasClass('check-required')) {
        fail = true;
        // name = $( this ).attr( 'name' );
        $(this).parent().addClass('with-error');
        var fail_log = page.lang_pls_enter_valid_val + " \n";
        error_element.html(fail_log);
        //error_element.css('display','block');
      }

    } else {
      if ($(this).is('input')) { //we are dealing with an input
        if ($(this).attr('type') == 'text') {
          var checkxss = checkXSSAttack($(this).val());
          if (checkxss == true) {
            fail = true;
            error_element.html(page.lang_pls_remove_un_char);
            error_element.css('display', 'block');
            $(this).parent().addClass('with-error');
          }
        }
      } else if ($(this).is('textarea')) { //we are dealing with a textarea
        //code here
        var checkxss = checkXSSAttack($(this).val());
        if (checkxss == true) {
          fail = true;
          error_element.html(page.lang_pls_remove_un_char);
          error_element.css('display', 'block');
          $(this).parent().addClass('with-error');
        }
      }
      //  	if($(this).attr('data-length')){
      //          var char_length = $(this).attr('data-length');
      //          console.log(char_length);
      //          if($(this).val().length > char_length){
      // 	fail = true;
      // 	var fail_log ="Please enter less than "+char_length+" characters. \n";
      // 	error_element.html(fail_log);
      // 	error_element.css('display','block');
      // 	$(this).parent().addClass('with-error');
      // }
      //     	} 
      if ($(this).attr('data-length')) {
        var char_length = $(this).attr('data-length');
        if ($(this).is('textarea')) {
          var textId = $(this).attr('id');
          //var textareaLength = getTextareaLength(textId);
          var textareaLength = $(this).val().length;
          console.log(textareaLength);
          if (textareaLength > char_length) {
            fail = true;
            var fail_log = page.lang_pls_enter_less + " " + char_length + " characters. \n";
            error_element.html(fail_log);
            error_element.css('display', 'block');
            $(this).parent().addClass('with-error');
          }
        } else {
          //console.log(char_length);
          if ($(this).val().length > char_length) {
            fail = true;
            var fail_log = page.lang_pls_enter_less + " " + char_length + " characters. \n";
            error_element.html(fail_log);
            error_element.css('display', 'block');
            $(this).parent().addClass('with-error');
          }
        }
      }
    }

  });
  var today = formattedDate(new Date());
  if (form_id == 'addDiscussionForm') {
    var startdate_parent = $('#discussion_startdate').parent();
    startdate_parent.removeClass('with-error');
    var startdate_error_element = $("span.errorMsg", $('#discussion_startdate').parent());
    startdate_error_element.empty();
    var enddate_parent = $('#discussion_enddate').parent();
    enddate_parent.removeClass('with-error');
    var enddate_error_element = $("span.errorMsg", $('#discussion_enddate').parent());
    enddate_error_element.empty();
    var startdate = $('#discussion_startdate').val();
    var enddate = $('#discussion_enddate').val();
  } else {
    var startdate_parent = $('#edit_discussion_startdate').parent();
    startdate_parent.removeClass('with-error');
    var startdate_error_element = $("span.errorMsg", $('#edit_discussion_startdate').parent());
    startdate_error_element.empty();
    var enddate_parent = $('#edit_discussion_enddate').parent();
    enddate_parent.removeClass('with-error');
    var enddate_error_element = $("span.errorMsg", $('#edit_discussion_enddate').parent());
    enddate_error_element.empty();
    var startdate = $('#edit_discussion_startdate').val();
    var enddate = $('#edit_discussion_enddate').val();
  }
  // var startdate_date =formattedDate(new Date(startdate));
  // var enddate_date = formattedDate(new Date(enddate));
  // // var startdate =new Date('05/23/2021');
  // // var enddate = new Date('05/24/2021');
  // //console.log(startdate);
  // var today_formatted =String(today. getMonth() + 1). padStart(2, '0')+'/'+String(today. getDate()). padStart(2, '0')+'/'+today. getFullYear();
  // //console.log(today_formatted);
  // if(startdate_date < today){
  // 	startdate_error_element.append('Start Date cannot be past date.');
  // 	fail = true;
  // }
  // if(enddate != ''){
  // 	if(enddate_date < today_formatted){
  // 	enddate_error_element.append('End Date cannot be past date.');
  // 	fail = true;
  // 	}
  // }
  var startdate_value_empty = isEmptyOrSpaces(startdate);
  if (startdate_value_empty == true) {
    fail = true;
    // name = $( this ).attr( 'name' );
    startdate_parent.addClass('with-error');
    var fail_log = "Please select valid date. \n";
    console.log(fail_log);
    startdate_error_element.append(fail_log);
    //$(this).focus();
    //console.log(fail_log);
  } else {
    var startdate_date = formattedDate(new Date(startdate));
    if (startdate_date < today) {
      startdate_parent.addClass('with-error');
      startdate_error_element.append(page.lang_start_date_empty);
      fail = true;
    }
  }
  var enddate_value_empty = isEmptyOrSpaces(enddate);
  if (enddate_value_empty == false) {
    var enddate_date = formattedDate(new Date(enddate));
    if (enddate_date < today || enddate_date < startdate_date) {
      enddate_parent.addClass('with-error');
      enddate_error_element.append(page.lang_end_date_empty);
      fail = true;
    }
  }

  if (fail == false) {
    $('button[type=submit]').attr('disabled', true);
    var form = $(this);
    var url = form.attr('action');
    $.ajax({
      type: "POST",
      url: url,
      data: form.serialize(),
      success: function (data) {
        //console.log(data);
        $('button[type=submit]').removeAttr('disabled');
        $("#" + form_id).trigger("reset");
        $("#" + modal_id + " [data-dismiss=modal]").click();
        $('#addMessage').html(data.message);
        $('#myModal').modal('show');
        setTimeout(function () {
          $("#myModal .close").click();
        }, 5000);
        var hash = window.location.hash;
        $('#nav-tab a[href="' + hash + '"]').siblings('.panel-heading').addClass('active');
        location.reload();
      }
    });
  }
});
$('#filterAllSyllabus').on('click', function () {
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: {
      function: 'get_course_syllabus_data',
      type: 'all',
    },
    dataType: "json",
    success: function (data) {
      render_syllabus_data(data);

    }
  });
})
$('#resetSyllabusFilter').on('click', function () {
  $('.syl-day').removeClass('selected');
  render_syllabus();
})
$(document).on('click', '.syl-day', function (e) {
  console.log($(this).attr('full-date'));
  var full_date = $(this).attr('full-date');
  $('.syl-day').removeClass('selected');
  $(this).addClass('selected');
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: {
      function: 'get_course_syllabus_data',
      type: 'date',
      date: full_date,
    },
    dataType: "json",
    success: function (data) {
      console.log('done');
      render_syllabus_data(data);

    }
  });
})
$(document).on('click', '.view_assignment', function () {
  console.log('clicked');
  var id = $(this).attr('data-id');
  if (page.role == 'programofficer') {
    var editUrl = page.url + '/' + page.prod_root + '/assignment.php?course=' + page.courseid + '&id=' + id;
  } else {
    var editUrl = page.url + '/' + page.prod_root + '/assignment.php?course=' + page.courseid + '&section=' + page.section + '&id=' + id;
  }
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: { id: id, function: 'get_assignment_info' },
    dataType: "json", // serializes the form's elements.
    success: function (data) {
      $('#assignFileDiv').css('display', 'none');
      $('#assign_edit_url').attr('href', editUrl);
      //console.log(data.assignment.filepath);
      if (data.assignment.files.length > 0) {
        $('#assignFileDiv').css('display', 'block');
        var files = '';
        files += '<label>View/Download Assignment File</label>';
        $.each(data.assignment.files, function (key, val) {
          files += '<span class="list_data"><a target="_blank" href="' + val.filepath + '">' + val.filename + '</a></span>';
        })
        $('#assignFileDiv').html(files);
      }
      if (data.assignment.noOfAttempts > 0) {
        $('#student_submission_div').css('display', 'block');
        var filesOutput = '';
        $.each(data.attempt_history, function (key1, val1) {
          filesOutput += '<div class="col-md-12">' + val1.onlinetext + '</div>';
          $.each(val1.submissionfiles, function (key2, val2) {
            //files += '<li class="list_data"><a target="_blank" href="'+val1.filepath+'">'+val.filename+'</a></li>';
            filesOutput += '<div class="col-md-6 col-lg-5">';
            filesOutput += '<a target="_blank" href="' + val2.url + '" class="assignment_link">' + val2.name + '</a>';
            filesOutput += '<span class="assignment_date">' + val1.timesubmitted + '</span>';
            filesOutput += '</div>';
          })
        })
        $('#student_submission_list').html(filesOutput);
      }
      $('#assign_name').html(data.assignment.name);
      $('#assign_desc').html(data.assignment.description);
      $('#assign_points').html(data.assignment.points + ' ' + page.lang_points);
      $('#assign_noOfAttempts').html(data.assignment.noOfAttempts);
      $('#assign_duedate').html(data.assignment.duedate);
      $('#assign_startdate').html(data.assignment.startdate);
      $('#assign_enddate').html(data.assignment.enddate);
      $('#assign_submission_type').html(data.assignment.submission_type);
      $('#assign_group_assignment').html(data.assignment.group_assignment);
      $('#viewAssignmentPopup').modal('show');

      // Add submit button in veiw assignment page.
      if (page.role == 'student') {
        let submit_url = '';
        if (data.assignment.attemptnumber >= data.assignment.noOfAttempts) {
          submit_url = '<button class="btn courses_btn_grey view_btn mt-2" data-id="' + id + '" data-toggle="tooltip" title="This assignment is already been attempted upto max limit" disabled>' + page.lang_submit_assig + '</button>';
        } else if (data.assignment.issubmitted === 1) {
          submit_url = '<button data-id="' + id + '" data-toggle="tooltip" title="Already submitted" class="btn courses_btn_grey view_btn mt-2" disabled>' + page.lang_submit_assig + '</button>';
        } else if (((new Date().getTime() / 1000) > data.assignment.graceperiod)) {
          submit_url = '<button class="btn courses_btn_grey view_btn mt-2" data-id="' + id + '" data-toggle="tooltip" title="This assignment is past due date." disabled>' + page.lang_submit_assig + '</button>';
        } else if (((new Date().getTime() / 1000) < data.assignment.startdate_timestamp)) {
          submit_url = '<button class="btn courses_btn_grey view_btn mt-2" data-id="' + id + '" data-toggle="tooltip" title="This assignment has future start date." disabled>' + page.lang_submit_assig + '</button>';
        } else if (data.assignment.attempt_restrict === 1) {
          submit_url = '<button data-id="' + id + '" data-toggle="tooltip" title="Further attempts are restricted by Teacher" class="btn courses_btn_grey view_btn mt-2" disabled>' + page.lang_submit_assig + '</button>';
        } else if (!data.assignment.isAvailable && data.assignment.availabilityinfo != '') {
          submit_url = '<button data-id="' + id + '" data-toggle="tooltip" data-html="true" title="<div class=\'text-left\'>' + data.assignment.availabilityinfo + '</div>" class="btn courses_btn_grey view_btn mt-2" disabled>' + page.lang_submit_assig + '</button>';
        } else if (data.assignment.attemptnumber >= 1 && ((new Date().getTime() / 1000) <= data.assignment.graceperiod)) {
          submit_url = '<button class="text-white btn courses_btn_blue view_btn mt-2 submit_assignment" data-id="' + id + '">' + page.lang_re_submit_assig + '</button>';
        } else {
          submit_url = '<button class="text-white btn courses_btn_blue view_btn mt-2 submit_assignment" data-id="' + id + '">' + page.lang_submit_assig + '</button>';
        }

        $('#assign_submit_url_wrapper').html(submit_url);
      }
    }
  });
})
$(document).on('click', '.activity-feedback', function () {
  console.log('clicked');
  var id = $(this).attr('act_id');

  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: { id: id, function: 'feedback' },
    dataType: "json",
    success: function (data) {
      if (data.success) {
        //$('#feedback_title').html(data.name);
        $('#feedback_content').html(data.content);
        $('#viewFeedbackPopup').modal('show');
        $('#token').data('token', data.token);
        // Store feedback ID for completion tracking
        $('#viewFeedbackPopup').data('feedbackid', data.feedbackid);
      }
    }
  });
})

// Handle feedback modal close - mark as viewed and update completion
/*$('#viewFeedbackPopup').on('hidden.bs.modal', function () {
  render_closed_discussion(closed);
  /*var feedbackid = $(this).data('feedbackid');
  var token = $('#token').data('token');
  if (feedbackid) {
    // Call Moodle API to mark feedback as viewed
    $.ajax({
      type: "GET",
      url: page.url + '/webservice/rest/server.php',
      data: {
        wstoken: token,
        moodlewsrestformat: 'json',
        wsfunction: 'mod_feedback_view_feedback',
        feedbackid: feedbackid
      },
      dataType: "json",
      success: function(response) {
        // Refresh page to show updated completion status
        location.reload();
      },
      error: function(xhr, status, error) {
        console.error('Error marking feedback as viewed:', error);
        // Still refresh to show any other changes
        location.reload();
      }
    });
  }
})*/

// Handle feedback form submission
$(document).on('submit', '#feedback-submit-form', function (e) {
  e.preventDefault();

  var form = $(this);
  var fail = false;

  // Clear previous error messages
  $('.error-msg').remove();
  $('.checkbox-group').removeClass('is-invalid');

  // Validate required checkbox groups
  form.find('.checkbox-group[data-required="true"]').each(function () {
    var $group = $(this);
    var groupName = $group.attr('data-field-name');
    var isChecked = $group.find('input[type="checkbox"].checkbox-item:checked').length > 0;

    if (!isChecked) {
      fail = true;
      $group.addClass('is-invalid');
      if (!$group.find('.error-msg').length) {
        $group.append('<span class="error-msg" style="color: red; display: block; margin-top: 5px;">Please select at least one option.</span>');
      }
    }
  });

  // Validate required fields
  form.find('[required]').each(function () {
    var $field = $(this);
    var fieldType = $field.attr('type');

    // Validate short answer (text input)
    if (fieldType === 'text' || $field.is('input[type="text"]')) {
      if ($.trim($field.val()) === '') {
        fail = true;
        $field.css('border-color', 'red');
        if (!$field.parent().find('.error-msg').length) {
          $field.parent().append('<span class="error-msg" style="color: red; display: block; margin-top: 5px;">This field is required.</span>');
        }
      } else {
        $field.css('border-color', '');
      }
    }

    // Validate long answer (textarea)
    else if ($field.is('textarea')) {
      if ($.trim($field.val()) === '') {
        fail = true;
        $field.css('border-color', 'red');
        if (!$field.parent().find('.error-msg').length) {
          $field.parent().append('<span class="error-msg" style="color: red; display: block; margin-top: 5px;">This field is required.</span>');
        }
      } else {
        $field.css('border-color', '');
      }
    }

    // Validate radio buttons
    else if (fieldType === 'radio') {
      var radioName = $field.attr('name');
      var isSelected = $('input[name="' + radioName + '"]:checked').length > 0;

      if (!isSelected) {
        fail = true;
        if (!$('input[name="' + radioName + '"]').last().parent().find('.error-msg').length) {
          $('input[name="' + radioName + '"]').last().parent().append('<span class="error-msg" style="color: red; display: block; margin-top: 5px;">Please select an option.</span>');
        }
      }
    }
  });

  if (fail) {
    return false;
  }

  var formData = form.serialize();
  formData += '&function=submit_feedback';

  // Disable submit button to prevent double submission
  var submitBtn = form.find('button[type="submit"]');
  submitBtn.prop('disabled', true).text('Submitting...');

  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: formData,
    dataType: "json",
    success: function (data) {
      if (data.status === 'success') {
        // Show success message
        $('#addMessage').html(data.message);
        $('#viewFeedbackPopup').modal('hide');
        $('#myModal').modal('show');
        //location.reload();
        // Close feedback modal and reload after delay
        setTimeout(function () {
          $('#viewFeedbackPopup').modal('hide');
          $("#myModal .close").click();
          location.reload();
        }, 1500);
      } else {
        // Show error message
        alert(data.message || 'An error occurred while submitting feedback.');
        submitBtn.prop('disabled', false).text('Submit Feedback');
      }
    },
    error: function (xhr, status, error) {
      console.error('Feedback submission error:', error);
      alert('An error occurred while submitting feedback. Please try again.');
      submitBtn.prop('disabled', false).text('Submit Feedback');
    }
  });

  return false;
});

$(document).on('click', ".assignment-actions .actions-trigger", function () {
  var id = $(this).attr('data-id');
  var toggle_id = "#action-list" + id;
  if ($(".assignment-actions " + toggle_id).css("display") == "block") {
    var toggle_div = 'hide';
  } else {
    var toggle_div = 'show';
  }
  $('.assignment-actions .action-list').hide();
  if (toggle_div == "hide") {
    $(".assignment-actions " + toggle_id).hide();
  } else {
    $(".assignment-actions " + toggle_id).show();
  }

});
$(document).on('click', '.submit_assignment', function () {
  $('#viewAssignmentPopup').modal('hide');
  var id = $(this).attr('data-id');
  if (page.role == 'programofficer') {
    var editUrl = page.url + '/' + page.prod_root + '/assignment.php?course=' + page.courseid + '&id=' + id;
  } else {
    var editUrl = page.url + '/' + page.prod_root + '/assignment.php?course=' + page.courseid + '&section=' + page.section + '&id=' + id;
  }
  $('#text_submission_div').css('display', 'none');
  $('#file_submission_div').css('display', 'none');
  $('#fileToUpload').removeClass('check-required');
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: { id: id, function: 'get_student_assignment_info' },
    dataType: "json", // serializes the form's elements.
    success: function (data) {
      if (data.attempt_history.length > 0) {
        var i = 0;
        var output = '';
        $.each(data.attempt_history, function (key2, val2) {
          output += '<div class="history-strip-card">';
          output += '<div class="card">';
          output += '<div class="card-header history-strip-header" data-toggle="collapse" data-parent="#Submission-History" href="#collapseOne' + i + '" aria-expanded="false" aria-controls="collapseOne' + i + '" role="tab" id="headingOne' + i + '">';
          output += '<h5 class="mb-0 d-flex justify-content-between"><span class="subject">' + val2.timesubmitted + '</span></h5>';
          output += '<span class="icon-angle-down"><i class="fa fa-angle-down rotate-icon"></i></span>';
          output += '</div>';
          output += '<div id="collapseOne0" class="collapse" role="tabpanel" aria-labelledby="headingOne' + i + '" data-parent="#Submission-History" style="">';
          output += '<div class="card-body pt-3 pb-1 history-strip-body">';
          output += '<div class="mdl-submission-bx">';
          output += '<h6 class="mdl-submission-heading">Submission</h6>';
          output += '<div class="row">';
          output += '<div class="col-md-12">' + val2.onlinetext + '</div>'
          if (val2.submissionfiles.length > 0) {
            $.each(val2.submissionfiles, function (key3, val3) {
              output += '<div class="col-md-6">';
              output += '<ul>';
              output += '<li>';
              output += '<a class="mdl-document-bx" target="_blank" href="' + val3.url + '">' + val3.name + '</a>';
              output += '</li>';
              output += '</ul>';
              output += '</div>';
            });

          }
          output += '</div>';
          output += '</div>';
          output += '</div>';
          output += '</div>';
          output += '</div>';
          output += '</div>';
          i++;
        });
      } else {
        var output = page.lang_no_submission_yet
      }
      $('#Submission-History').html(output);
      if (data.assignment.text_submission == 1) {
        $('#text_submission_div').css('display', 'block');
        $('#assignment_text_on').val(1);
      }
      if (data.assignment.file_submission == 1) {
        $('#file_submission_div').css('display', 'block');
        //$('#fileToUpload').prop('required',true);
        $('#fileToUpload').addClass('check-required');
        $('#assignment_file_on').val(1);

        $('#fileToUpload').attr('data-file-maxupload', data.assignment.maxfile_allowed);
        console.log(data.assignment.maxfile_allowed);
        console.log($('#fileToUpload').attr('data-file-maxupload'));
      }
      $('#assignment_id').val(id);
      $('#submitAssignmentPopup').modal('show');
    }
  });
})
$(document).on('submit', '.submitAssignmentForm', function (e) {
  e.preventDefault(); // avoid to execute the actual submit of the form.
  var fail = false;
  var form_id = $(this).attr('id');
  var modal_id = $(this).attr('modal-id');
  var text_error_element = $("span.errorMsg", $('#text').parent());
  text_error_element.empty();
  $('#text').parent().removeClass('with-error');
  var file_error_element = $("span.errorMsg", $('#multiple-fileupload').parent());
  file_error_element.empty();
  $('#multiple-fileupload').parent().removeClass('with-error');
  if ($('#assignment_file_on').val() == 1) {
    //var files = $('#fileToUpload').val();
    var files = $('#fileToUpload')[0].files;
    console.log(files);
    if (files.length == 0) {
      fail = true;
      file_error_element.html(page.lang_pls_att_file);
      $('#multiple-fileupload').parent().addClass('with-error');
    }
  }
  if ($('#assignment_text_on').val() == 1) {
    //console.log(tinymce.get('text').getContent());
    var text = $('#text').val();
    //if(tinymce.get('text').getContent() == ''){
    if (text == '') {
      fail = true;
      text_error_element.html(page.lang_pls_enter_text);
      $('#text').parent().addClass('with-error');
    }
  }
  if (fail == false) {
    $('button[type=submit]').attr('disabled', true);
    var form = $(this);
    var url = form.attr('action');
    var formData = new FormData(this);
    $.ajax({
      type: "POST",
      url: url,
      data: formData,
      enctype: "multipart/form-data",
      processData: false,
      contentType: false,
      success: function (data) {
        $('button[type=submit]').removeAttr('disabled');
        if (data.status == 'fail') {
          $('.all_errormsg').html(data.message);
        }
        else {
          $("#" + form_id).trigger("reset");
          $("#" + modal_id + " [data-dismiss=modal]").click();
          $('#addMessage').html(data.message);
          $('#myModal').modal('show');
          setTimeout(function () {
            $("#myModal .close").click();
          }, 5000);
          let activeID = getUrlParameter('modeActive')
          // render_modules(activeID);
          if ($('#nav-modules-tab').hasClass('active')) {
            $('#nav-modules-tab').trigger('click');
          } else {
            $('#nav-assignments-tab').trigger('click');
          }
          // render_assignment();
        }
        //location.reload();
      }
    });
  }
});
$('#submitAssignmentPopup [data-dismiss=modal]').on('click', function (e) {
  $('.submitAssignmentForm').trigger('reset');
  $(this).find(".fileList").empty();
  $(this).find(".error-msg").text('');
  $(this).find(".fileName").text('');
  $('.submitAssignmentForm .cm-error').empty();
  $('.submitAssignmentForm .fileMsg').empty();
  $('.submitAssignmentForm .errorMsg').empty();
});
$('.announcementPopup [data-dismiss=modal]').on('click', function (e) {
  $('.announcementForm').trigger('reset');
  $(this).find(".fileList").empty();
  $(this).find(".error-msg").text('');
  $(this).find(".fileName").text('');
  $('.announcementForm .cm-error').empty();
  $('.announcementForm .fileMsg').empty();
  $('.announcementForm .errorMsg').empty();
});
$('.syllabusPopup [data-dismiss=modal]').on('click', function (e) {
  $('.syllabusForm').trigger('reset');
  $(this).find(".fileList").empty();
  $(this).find(".error-msg").text('');
  $(this).find(".fileName").text('');
  $('.syllabusForm .cm-error').empty();
  $('.syllabusForm .fileMsg').empty();
  $('.syllabusForm .errorMsg').empty();
});
$('.discussionPopup [data-dismiss=modal]').on('click', function (e) {
  $('.discussionForm').trigger('reset');
  $(this).find(".fileList").empty();
  $(this).find(".error-msg").text('');
  $('.discussionForm .cm-error').empty();
  $('.discussionForm .fileMsg').empty();
  $('.discussionForm .errorMsg').empty();

});
$(document).bind('reset', '.submitAssignmentForm', function () {
  $(this).find(".fileList").empty();
  $(this).find(".error-msg").text('');
  $(this).find(".cm-error").text('');
  $(this).find(".fileMsg").text('');
  $(this).find(".fileName").text('');
  $(this).find('.form-group').removeClass('with-error');
  CKEDITOR.instances['text'].setData('');
  //$(this).find('.section').empty().append('<option value="">Select section</option>');
});
$(document).on('click', '.view_submission', function () {
  //console.log('clicked');
  var id = $(this).attr('data-id');
  var name = $(this).attr('data-name');
  if (page.role == 'programofficer') {
    var editUrl = page.url + '/' + page.prod_root + '/view_submission.php?course=' + page.courseid + '&id=' + id;
  } else {
    var editUrl = page.url + '/' + page.prod_root + '/view_submission.php?course=' + page.courseid + '&section=' + page.section + '&id=' + id;
  }
  //var editUrl = page.url+'/'+page.prod_root+'/view_submission.php?course='+page.courseid+'&section='+page.section+'&id='+id;
  $('#text_submission_div').css('display', 'none');
  $('#file_submission_div').css('display', 'none');
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: { id: id, function: 'get_teacher_assignment_info' },
    dataType: "json", // serializes the form's elements.
    success: function (data) {
      $('#assign_name_text').html(name);
      $('#assign_type').html(data.assignment.teamsubmission);
      $('#assign_publish_status').html(data.assignment.published);
      $('#assign_student_count').html(data.assignment.gradingsummary.participantcount);
      $('#assign_submit_count').html(data.assignment.gradingsummary.submissionssubmittedcount);
      $('#assign_grading_count').html(data.assignment.gradingsummary.submissionsneedgradingcount);
      $('#assign_duedate2').html(data.assignment.duedate);
      $('#assign_time_left').html(data.assignment.time_remaining);
      $('#view_link').attr('href', editUrl);
      $('#assignmentOverview').modal('show');
    }
  });
})
$('#addQuizPopup').on("hidden.bs.modal", function () {
  $('#quiz_topic')
    .closest('.form-group')
    .find('.errorMsg')
    .html('')
});
$(document).on('submit', '#addQuizForm', function (e) {
  e.preventDefault();
  var topic = $('#quiz_topic').val();
  if (!topic) {
    $('#quiz_topic').closest('.form-group').addClass('with-error');
    $('#quiz_topic')
      .closest('.form-group')
      .find('.errorMsg')
      .html('Please select topic.')
    return false;
  }
  if (page.role == 'programofficer') {
    var redirectUrl = page.url + '/' + page.prod_root + '/quiz.php?course=' + page.courseid + '&topic=' + topic;
  } else {
    var redirectUrl = page.url + '/' + page.prod_root + '/quiz.php?course=' + page.courseid + '&section=' + page.section + '&topic=' + topic;
  }
  //var redirectUrl = page.url+'/'+page.prod_root+'/quiz.php?course='+page.courseid+'&section='+page.section+'&topic='+topic;
  location.replace(redirectUrl);
})
$('#addFeedbackPopup').on("hidden.bs.modal", function () {
  $('#feedback_topic')
    .closest('.form-group')
    .find('.errorMsg')
    .html('')
});
$(document).on('submit', '#addFeedbackForm', function (e) {
  e.preventDefault();
  var topic = $('#feedback_topic').val();
  if (!topic) {
    $('#feedback_topic').closest('.form-group').addClass('with-error');
    $('#feedback_topic')
      .closest('.form-group')
      .find('.errorMsg')
      .html('Please select topic.')
    return false;
  }
  if (page.role == 'programofficer') {
    var redirectUrl = page.url + '/' + page.prod_root + '/feedback.php?course=' + page.courseid + '&topic=' + topic;
  } else {
    var redirectUrl = page.url + '/' + page.prod_root + '/feedback.php?course=' + page.courseid + '&section=' + page.section + '&topic=' + topic;
  }
  //var redirectUrl = page.url+'/'+page.prod_root+'/quiz.php?course='+page.courseid+'&section='+page.section+'&topic='+topic;
  location.replace(redirectUrl);
})
// function initializeDatatable(id){
// 	var table = $('#'+id).on( 'draw.dt', function () {
// 		$("#containerexample").attr("id", "container"); $("#loadercontainer").css("display","none");
// 	} ).DataTable( {
// 		lengthChange: false,
//         // buttons: [ 'excel', 'pdf', 'colvis' ],
//         "scrollY": 300,
//         "paging": false,
//           //"order": false,
//           responsive: {
//           	details: {
//           		type: 'column',
//           		target: -1
//           	}
//           },
//           columnDefs: [ {
//           	className: 'control',
//           	orderable: false,
//           	targets:   -1
//           } ]
//       } );

//       // table.buttons().container()
//       //     .appendTo( '#example_wrapper .col-md-6:eq(0)' );
//   }

// //


function initializeDatatable(id) {
  var $window = $(window);
  var screen_width = $window.width();
  var flag = false;
  if (id === 'question-listing') {
    flag = true;
  }
  if (screen_width < 768) {
    $('#' + id).addClass('dt-responsive');
    var table = $('#' + id).on('draw.dt', function () {
      // $("#containerexample").attr("id", "container"); $("#loadercontainer").css("display","none");
    }).DataTable({
      stateSave: true,
      stateSaveCallback: function (settings, data) {
        localStorage.setItem('DataTables_' + settings.sInstance, JSON.stringify(data))
      },
      stateLoadCallback: function (settings) {
        return JSON.parse(localStorage.getItem('DataTables_' + settings.sInstance))
      },
      searching: true,
      lengthChange: false,
      // buttons: [ 'excel', 'pdf', 'colvis' ],
      scrollY: 300,
      paging: true,
      responsive: {
        details: {
          type: 'column',
          target: -1
        }
      },
      columnDefs: [
        {
          className: 'control',
          orderable: flag,
          targets: -1
        },
        // {
        //     orderable: false,
        //     // className: 'select-checkbox',
        //     targets:   [0,1,2]
        // },
        // {
        //     //type: 'natural-nohtml',
        //     orderable: false,
        //     className: 'select-checkbox',
        //     targets:   0
        // },

      ],
      // select: {
      //     style:    'os',
      //     selector: 'td:first-child'
      // },
      order: [[1, 'asc']]
    });
  } else {
    $('#' + id).addClass('stripe');
    $('#' + id).DataTable({
      //renderer: { "header": "bootstrap" },
      stateSave: true,
      stateSaveCallback: function (settings, data) {
        localStorage.setItem('DataTables_' + settings.sInstance, JSON.stringify(data))
      },
      stateLoadCallback: function (settings) {
        return JSON.parse(localStorage.getItem('DataTables_' + settings.sInstance))
      },
      searching: true,
      scrollY: 300,
      scrollX: true,
      scrollCollapse: true,
      paging: true,
      fixedHeader: true,
      columnDefs: [
        {
          "targets": -1,   // Target the last column (use the appropriate index if it's different)
          "orderable": flag  // Disable sorting for the Action column
        }
      ],
      // fixedColumns:   {
      //     leftColumns: 2,
      // //     rightColumns:2
      // },


      // columnDefs: [ 
      //  {
      //      orderable: false,
      //      className: 'select-checkbox',
      //      targets:   0
      //  } 
      // ],
      // select: {
      //     style:    'os',
      //     selector: 'td:first-child'
      // },
      order: [[1, 'asc']]
    });
  }
}
$(document).ready(function () {
  var $this = $(this);
  var $window = $(window);
  var screen_width = $window.width();
  if (screen_width < 768) {
    //$('#gradesTable').addClass('dt-responsive');
    $("<link/>", {
      rel: "stylesheet",
      type: "text/css",
      href: page.url + '/' + page.prod_root + '/assets/datatables/css/jquery.dataTables.min.css'
    }).appendTo("head");
    $("<link/>", {
      rel: "stylesheet",
      type: "text/css",
      href: page.url + '/' + page.prod_root + '/assets/datatables/css/responsive.bootstrap4.min.css'
    }).appendTo("head");
    $("<link/>", {
      rel: "stylesheet",
      type: "text/css",
      href: page.url + '/' + page.prod_root + '/assets/datatables/css/select.dataTables.min.css'
    }).appendTo("head");
    $("<script>", {
      type: "text/javascript",
      src: page.url + '/' + page.prod_root + '/assets/datatables/js/jquery.dataTables.min.js'
    }).appendTo("#scriptDiv");
    $("<script>", {
      type: "text/javascript",
      src: page.url + '/' + page.prod_root + '/assets/datatables/js/dataTables.responsive.min.js'
    }).appendTo("#scriptDiv");
    $("<script>", {
      type: "text/javascript",
      src: page.url + '/' + page.prod_root + '/assets/datatables/js/dataTables.select.min.js'
    }).appendTo("#scriptDiv");
  } else {
    //$('#gradesTable').addClass('stripe');
    $("<link/>", {
      rel: "stylesheet",
      type: "text/css",
      href: page.url + '/' + page.prod_root + '/assets/datatables/css/jquery.dataTables.min.css'
    }).appendTo("head");
    $("<link/>", {
      rel: "stylesheet",
      type: "text/css",
      href: page.url + '/' + page.prod_root + '/assets/datatables/css/fixedColumns.dataTables.min.css'
    }).appendTo("head");
    $("<link/>", {
      rel: "stylesheet",
      type: "text/css",
      href: page.url + '/' + page.prod_root + '/assets/datatables/css/select.dataTables.min.css'
    }).appendTo("head");
    $("<script>", {
      type: "text/javascript",
      src: page.url + '/' + page.prod_root + '/assets/datatables/js/jquery.dataTables.min.js'
    }).appendTo("#scriptDiv");
    $("<script>", {
      type: "text/javascript",
      src: page.url + '/' + page.prod_root + '/assets/datatables/js/dataTables.fixedColumns.min.js'
    }).appendTo("#scriptDiv");
    $("<script>", {
      type: "text/javascript",
      src: page.url + '/' + page.prod_root + '/assets/datatables/js/dataTables.select.min.js'
    }).appendTo("#scriptDiv");
  }
})
$(document).on('click', '.syllabus_accordion', function () {
  var module_id = $(this).attr('data-id');
  let url = document.location.href
  if (getUrlParameter('modeActive') == false) {
    url = url + "&modeActive=" + module_id
  } else {
    let exurl = url.split("&modeActive")
    url = exurl[0] + "&modeActive=" + module_id
  }
  url = url.replace(window.location.origin, "");
  window.history.pushState(null, '', url);
  $('#nav-modules-tab').trigger('click');
  if (page.role != 'student') {
    render_modules(module_id);
  }
})
function initializeStudentGradeDatatable(id) {
  var $window = $(window);
  var screen_width = $window.width();
  var columns = [{ 'width': '25%' }, { 'width': '10%' }, { 'width': '10%' }, { 'width': '15%' }, { 'width': '15%' }, { 'width': '10%', orderable: false }];
  if (page.role != 'student') {
    columns.push({ 'width': '15%' });
  }

  if (screen_width < 768) {
    $('#' + id).addClass('dt-responsive');
    var table = $('#' + id).on('draw.dt', function () {
      // $("#containerexample").attr("id", "container"); $("#loadercontainer").css("display","none");
    }).DataTable({
      stateSave: true,
      stateSaveCallback: function (settings, data) {
        localStorage.setItem('DataTables_' + settings.sInstance, JSON.stringify(data))
      },
      stateLoadCallback: function (settings) {
        return JSON.parse(localStorage.getItem('DataTables_' + settings.sInstance))
      },
      searching: false,
      lengthChange: false,
      // buttons: [ 'excel', 'pdf', 'colvis' ],
      scrollY: 300,
      paging: true,
      responsive: {
        details: {
          type: 'column',
          target: -1
        }
      },
      columnDefs: [
        {
          className: 'control',
          orderable: false,
          targets: -1
        },
        // {
        //     orderable: false,
        //     // className: 'select-checkbox',
        //     targets:   [0,1,2]
        // },
        // {
        //     //type: 'natural-nohtml',
        //     orderable: false,
        //     className: 'select-checkbox',
        //     targets:   0
        // },

      ],
      // select: {
      //     style:    'os',
      //     selector: 'td:first-child'
      // },
      order: [[1, 'asc']]
    });
  } else {
    $('#' + id).addClass('stripe');
    $('#' + id).DataTable({
      //renderer: { "header": "bootstrap" },
      stateSave: true,
      stateSaveCallback: function (settings, data) {
        localStorage.setItem('DataTables_' + settings.sInstance, JSON.stringify(data))
      },
      stateLoadCallback: function (settings) {
        return JSON.parse(localStorage.getItem('DataTables_' + settings.sInstance))
      },
      searching: false,
      scrollY: false,
      scrollX: true,
      scrollCollapse: true,
      paging: true,
      fixedHeader: true,

      "columns": columns,
      // fixedColumns:   {
      //     leftColumns: 2,
      // //     rightColumns:2
      // },


      // columnDefs: [ 
      //  {
      //      orderable: false,
      //      className: 'select-checkbox',
      //      targets:   0
      //  } 
      // ],
      // select: {
      //     style:    'os',
      //     selector: 'td:first-child'
      // },
      order: [[1, 'asc']]
    });
  }
}
$(document).on('submit', '.syllabusForm', function (e) {
  e.preventDefault(); // avoid to execute the actual submit of the form.
  var fail = false;
  var form_id = $(this).attr('id');
  //console.log(form_id);
  var modal_id = $(this).attr('modal-id');
  $(this).find('input,select,textarea').each(function () {
    var value_empty = isEmptyOrSpaces($(this).val());
    console.log(value_empty);
    var error_element = $("span.errorMsg", $(this).parent());
    error_element.empty();
    $(this).parent().removeClass('with-error');
    if (value_empty == true) {
      if ($(this).hasClass('check-required')) {
        fail = true;
        // name = $( this ).attr( 'name' );
        $(this).parent().addClass('with-error');
        var fail_log = page.lang_pls_enter_valid_val + " \n";
        error_element.html(fail_log);
        //error_element.css('display','block');
      }

    } else {
      if ($(this).is('input')) { //we are dealing with an input
        if ($(this).attr('type') == 'text') {
          var checkxss = checkXSSAttack($(this).val());
          if (checkxss == true) {
            fail = true;
            error_element.html(page.lang_pls_remove_un_char);
            error_element.css('display', 'block');
            $(this).parent().addClass('with-error');
          }
        }
      } else if ($(this).is('textarea')) { //we are dealing with a textarea
        //code here
        var checkxss = checkXSSAttack($(this).val());
        if (checkxss == true) {
          fail = true;
          error_element.html(page.lang_pls_remove_un_char);
          error_element.css('display', 'block');
          $(this).parent().addClass('with-error');
        }
      }
      //  	if($(this).attr('data-length')){
      //          var char_length = $(this).attr('data-length');
      //          console.log(char_length);
      //          if($(this).val().length > char_length){
      // 	fail = true;
      // 	var fail_log ="Please enter less than "+char_length+" characters. \n";
      // 	error_element.html(fail_log);
      // 	error_element.css('display','block');
      // 	$(this).parent().addClass('with-error');
      // }
      //     	} 
      if ($(this).attr('data-length')) {
        var char_length = $(this).attr('data-length');
        if ($(this).is('textarea')) {
          var textId = $(this).attr('id');
          //var textareaLength = getTextareaLength(textId);
          var textareaLength = $(this).val().length;
          console.log(textareaLength);
          if (textareaLength > char_length) {
            fail = true;
            var fail_log = page.lang_pls_enter_less + " " + char_length + " characters. \n";
            error_element.html(fail_log);
            error_element.css('display', 'block');
            $(this).parent().addClass('with-error');
          }
        } else {
          //console.log(char_length);
          if ($(this).val().length > char_length) {
            fail = true;
            var fail_log = page.lang_pls_enter_less + " " + char_length + " characters. \n";
            error_element.html(fail_log);
            error_element.css('display', 'block');
            $(this).parent().addClass('with-error');
          }
        }
      }
    }

  });
  if (form_id == 'addSyllabusForm') {
    var topic_classes_parent = $('#add_topic_classes').parent();
    var classes_error_element = $("span.errorMsg", $('#add_topic_classes').parent());
    topic_classes_parent.removeClass('with-error');
    classes_error_element.empty();
    var topic_classes = $('#add_topic_classes').val();

    // Removed by AK because startdate and enddate removed.
    // var startdate_parent = $('#add_topic_startdate').parent();
    // var startdate_error_element=$("span.errorMsg", $('#add_topic_startdate').parent());
    // startdate_parent.removeClass('with-error');
    // startdate_error_element.empty();
    // var enddate_parent = $('#add_topic_enddate').parent();
    // var enddate_error_element=$("span.errorMsg", $('#add_topic_enddate').parent());
    // enddate_parent.removeClass('with-error');
    // enddate_error_element.empty();
    // var startdate = $('#add_topic_startdate').val();
    // var enddate = $('#add_topic_enddate').val();
  } else {
    var topic_classes_parent = $('#edit_topic_classes').parent();
    var classes_error_element = $("span.errorMsg", $('#edit_topic_classes').parent());
    topic_classes_parent.removeClass('with-error');
    classes_error_element.empty();
    var topic_classes = $('#edit_topic_classes').val();

    // Removed by AK because startdate and enddate removed.
    // var startdate_parent = $('#edit_topic_startdate').parent();
    // var startdate_error_element=$("span.errorMsg", $('#edit_topic_startdate').parent());
    // startdate_parent.removeClass('with-error');
    // startdate_error_element.empty();
    // var enddate_parent = $('#edit_topic_enddate').parent();
    // var enddate_error_element=$("span.errorMsg", $('#edit_topic_enddate').parent());
    // enddate_parent.removeClass('with-error');
    // enddate_error_element.empty();
    // var startdate = $('#edit_topic_startdate').val();
    // var enddate = $('#edit_topic_enddate').val();
  }
  // if(isEmptyOrSpaces(topic_classes) == false){
  // if(topic_classes > 50 || topic_classes < 1){
  // 	fail = true;
  // 	topic_classes_parent.addClass('with-error');
  // 	classes_error_element.html('Please add no of days less than 50');
  // }
  // }
  // var today = formattedDate(new Date());
  // var startdate_value_empty = isEmptyOrSpaces(startdate);
  // if (startdate_value_empty == true) {
  // 	fail = true;
  // 	// name = $( this ).attr( 'name' );
  // 	startdate_parent.addClass('with-error');
  // 	var fail_log = "Please select valid date. \n";
  // 	console.log(fail_log);
  // 	startdate_error_element.append(fail_log);
  // 	//$(this).focus();
  // 		//console.log(fail_log);
  // }else{
  // 	var startdate_date =formattedDate(new Date(startdate));
  // 	if(startdate_date < today ){
  // 		startdate_parent.addClass('with-error');
  // 		startdate_error_element.append('Start Date cannot be past date or empty.');
  // 		fail = true;
  // 	}
  // }
  // var enddate_value_empty = isEmptyOrSpaces(enddate);
  // if (enddate_value_empty == true) {
  // 	fail = true;
  // 	// name = $( this ).attr( 'name' );
  // 	enddate_parent.addClass('with-error');
  // 	var fail_log = "Please select valid date. \n";
  // 	console.log(fail_log);
  // 	enddate_error_element.append(fail_log);
  // 	//$(this).focus();
  // 		//console.log(fail_log);
  // }else{
  // 	var enddate_date =formattedDate(new Date(enddate));
  // 	if(enddate_date < today || enddate_date < startdate_date){
  // 		startdate_parent.addClass('with-error');
  // 		enddate_error_element.append('End Date cannot be past date or empty.');
  // 		fail = true;
  // 	}
  // }
  // var enddate_date = formattedDate(new Date(enddate));

  // if(enddate != ''){
  // 	if(enddate_date < today){
  // 		console.log(enddate_date +" is less than today");
  // 		enddate_error_element.append('End Date cannot be past date or empty.');
  // 		fail = true;
  //     }
  // }

  if (fail == false) {
    $('button[type=submit]').attr('disabled', true);
    var form = $(this);
    var url = form.attr('action');
    $.ajax({
      type: "POST",
      url: url,
      data: form.serialize(),
      success: function (data) {
        //console.log(data);
        $('button[type=submit]').removeAttr('disabled');
        $("#" + form_id).trigger("reset");
        $("#" + modal_id + " [data-dismiss=modal]").click();
        $('#addMessage').html(data.message);
        $('#myModal').modal('show');
        setTimeout(function () {
          $("#myModal .close").click();
        }, 5000);
        var hash = window.location.hash;
        $('#nav-tab a[href="' + hash + '"]').siblings('.panel-heading').addClass('active');
        location.reload();
      }
    });
  }
});
$('.activityPopup [data-dismiss=modal]').on('click', function (e) {
  $('.activityForm').trigger('reset');
  $('.activityForm .fileName').empty();
});

$(document).bind('reset', '.activityForm', function () {
  $(this).find(".errorMsg").text('');
  $(this).find(".error-msg").text('');
  $(this).find(".cm-error").text('');
  $(this).find(".fileMsg").text('');
  $(this).find(".fileName").text('');
  $(this).find('.descDiv').css('display', 'none');
  $(this).find('.contentDiv').css('display', 'none');
  $(this).find('.urlDiv').css('display', 'none');
  $(this).find('.fileDiv').css('display', 'none');
  $(this).find('.scormDiv').css('display', 'none');
  $(this).find('.h5pDiv').css('display', 'none');
  $(this).find('.videoDiv').css('display', 'none');
  $(this).find('.form-group').removeClass('with-error');
  $(this).find('.due_date').css('display', 'block');
  CKEDITOR.instances['edit_activity_desc'].setData('');
  CKEDITOR.instances['edit_activity_content'].setData('');
  CKEDITOR.instances['activity_desc'].setData('');
  CKEDITOR.instances['activity_content'].setData('');
});
$(document).bind('reset', '.announcementForm', function () {
  $(this).find(".errorMsg").text('');
  $(this).find(".error-msg").text('');
  $(this).find(".cm-error").text('');
  $(this).find(".fileMsg").text('');
  $(this).find(".fileName").text('');
  $(this).find('.form-group').removeClass('with-error');
  CKEDITOR.instances['announcement_desc'].setData('');
  CKEDITOR.instances['edit_announcement_desc'].setData('');
});
$(document).bind('reset', '.syllabusForm', function () {
  $(this).find(".errorMsg").text('');
  $(this).find(".error-msg").text('');
  $(this).find(".cm-error").text('');
  $(this).find(".fileMsg").text('');
  $(this).find(".fileName").text('');
  $(this).find('.form-group').removeClass('with-error');
  CKEDITOR.instances['add_topic_desc'].setData('');
  CKEDITOR.instances['edit_topic_desc'].setData('');
  // CKupdate();
});
$(document).bind('reset', '.discussionForm', function () {
  $(this).find(".errorMsg").text('');
  $(this).find(".error-msg").text('');
  $(this).find(".cm-error").text('');
  $(this).find(".fileMsg").text('');
  $(this).find(".fileName").text('');
  $(this).find('.form-group').removeClass('with-error');
  CKEDITOR.instances.discussion_desc.setData('');
  CKEDITOR.instances.edit_discussion_desc.setData('');
  //CKupdate();
});
$(document).on('click', '.select-child', function () {
  var child = $(this).attr('data-id');
  var image = $(this).attr('data-image');
  $('#child-image').attr('src', image);
  $('.select-child').removeClass('active');
  $(this).addClass('active');
  $.ajax({
    type: "POST",
    url: page.url + '/' + page.prod_root + '/parent_dashboard_data.php',
    data: {
      function: 'get_dashboard_data',
      child: child
    },
    dataType: "json",
    success: function (data) {
      window.location.href = page.url + '/' + page.prod_root + '/course_listing.php';
    }
  });
})
$('.select2').select2({
  allowClear: true,
  placeholder: "Select",
});
function CKupdate() {
  for (instance in CKEDITOR.instances) {
    //CKEDITOR.instances[instance].updateElement();
    CKEDITOR.instances[instance].setData('');
  }
}

$("#translate_btn").on('click', function () {
  $.ajax({
    type: "GET",
    url: page.url + '/' + page.prod_root + '/cron_param.php?param=send_files_to_translate',

    dataType: "json",
    success: function (data) {

      var output = '';
      output += '<div>' + data.message + '</div>';
      output += '<div><button class="btn courses_btn_blue" id="upload_translated_files">' + page.lang_upload_tran_file + '</button></div>';


      $('#addMessage').html(output);
      $('#myModal').modal('show');
    }
  });

});


$(document).on('click', '#upload_translated_files', function () {
  $.ajax({
    type: "GET",
    url: page.url + '/' + page.prod_root + '/cron_param.php?param=get_translated_files',

    dataType: "json",
    success: function (data) {
      // $("#myModal .close").click();   
      var output = '';
      output += '<div>' + data.message + '</div>';
      $('#addMessage').html(output);
      // $('#myModal').modal('show');
    }
  });

});


$(document).on('click', '.deleteActivity', function () {
  var cmid = $(this).attr('data-id');
  var act_name = $(this).attr('data-act_name');

  // Unset cmid for unwanted delete.
  $('#delete_activity_id').val("");

  $.ajax({
    type: "POST",
    url: page.url + '/' + page.prod_root + '/course.php?id=' + page.courseid,
    data: {
      function: 'get_restricted_modules_by_cmid',
      cmid: cmid
    },
    success: function (response) {
      if (response.status === 'success') {
        if (response.data.length === 0) {
          $('#delete_activity_id').val(cmid);
          $('#delete_activity_name').text(page.lang_you_want_del + " " + act_name + " activity ?");
          $('#deleteActivityModal').find('.modal_footer').removeClass('d-none')
        } else {
          let message = '<div>' + page.lang_cannot_del_act + '</div>';
          message += '<i>' + page.lang_note_pls_delt_str + '</i>';
          message += '<ul class="col-12 pb-2">';
          $.each(response.data, function (key, value) {
            message += '<li style="list-style:circle;">' + value.name + '</li>';
          });
          message += '</ul>';
          $('#delete_activity_name').html(message);
          $('#deleteActivityModal').find('.modal_footer').addClass('d-none');
        }
        $('#deleteActivityModal').modal('show');
      } else {
        $('#deleteActivityModal').find('.modal_footer').addClass('d-none');
        $('#delete_activity_name').html(page.lang_som_went_wrong);
        $('#deleteActivityModal').modal('show');
      }
    }
  });
});

$(document).on('submit', '#deleteActivityForm', function (e) {
  e.preventDefault(); // avoid to execute the actual submit of the form.
  // console.log('here 1'); return false;
  var fail = false;
  var form_id = $(this).attr('id');
  var modal_id = $(this).attr('modal_id');
  $('button[type=submit]').attr('disabled', true);
  var form = $(this);
  var url = form.attr('action');
  $.ajax({
    type: "POST",
    url: url,
    data: form.serialize(),
    success: function (data) {
      //console.log(data);
      $('button[type=submit]').removeAttr('disabled');

      $("#" + modal_id + " [data-dismiss=modal]").click();
      $('#addMessage').html(data.message);
      $('#myModal').modal('show');
      setTimeout(function () {
        $("#myModal .close").click();
      }, 5000);
      var hash = window.location.hash;
      $('#nav-tab a[href="' + hash + '"]').siblings('.panel-heading').addClass('active');
      location.reload();
    }
  });
});

$(document).on('click', '.deleteModule', function () {
  var sectionid = $(this).attr('data-module');
  var mod_name = $(this).attr('data-mod_name');
  // console.log(mod_name+' Abhi');
  $('#deleteModuleModal').modal('show');
  $('#delete_module_id').val(sectionid);
  $('#delete_module_name').text(page.lang_you_want_del + " " + mod_name + " module ?");
});


$(document).on('submit', '#deleteModuleForm', function (e) {
  e.preventDefault(); // avoid to execute the actual submit of the form.

  var modal_id = $(this).attr('modal_id');
  $('button[type=submit]').attr('disabled', true);

  var form = $(this);
  var url = form.attr('action');
  $.ajax({
    type: "POST",
    url: url,
    data: form.serialize(),
    success: function (response) {
      // console.log(response)
      $("#" + modal_id + " [data-dismiss=modal]").click();
      $('#addMessage').html(response.message);
      $('#myModal').modal('show');
      setTimeout(function () {
        $("#myModal .close").click();
        location.reload();
      }, 5000);
      var hash = window.location.hash;
      $('#nav-tab a[href="' + hash + '"]').siblings('.panel-heading').addClass('active');
    }
  });
});


// Ajax request of add LO (Learning Object)  By Yuvraj Singh
$(document).on('submit', '#addLoForm', function (e) {
  e.preventDefault(); // avoid to execute the actual submit of the form.
  var modal_id = $(this).attr('id');
  var selectedOption = $('#cm_id').find(':selected');
  var content_type = selectedOption.data('type');
  var formDataObj = $(this).serializeArray();
  let hasCmId = formDataObj.some(field => field.name === 'cm_id');
  if (!hasCmId) {
    formDataObj.push({
      name: 'cm_id',
      value: $('#cm_id').val()
    });
  }

  formDataObj.push({ name: 'content_type', value: content_type });

  // Preg match vlidation for LO & Desc
  var errId = 'erResponse';
  var allValid = true;

  const values = {};
  let hasDuplicates = false;
  var mlos = losdesc = '';
  const lo_values = {};
  let lo_hasDuplicates = false;

  if ($('#cm_id').val() == null || $('#cm_id').val() == 0) {
    $('#' + errId).text(page.lang_add_lo_alert_5).show(); return false;
  }
  if ($('#add-lo').html() == '') {
    $('#' + errId).text(page.lang_add_lo_alert_1).show(); return false;
  }


  if ($('.outcome').length > 0) {
    $('.outcome').each(function () {
      mlos = $.trim($(this).find('.multi-lo').val());
      losdesc = $.trim($(this).find('.desc-len').val());
      if (mlos == '' && losdesc == '') {
        $('#' + errId).text(page.lang_lo_code_desc_alert).show();
        allValid = false;
        return false;
      }
      if (mlos == '') {
        $('#' + errId).text(page.lang_lo_code_alert).show();
        allValid = false;
        return false;
      }
      if (losdesc == '') {
        $('#' + errId).text(page.lang_lo_desc_alert).show();
        allValid = false;
        return false;
      }

      if (!pregMatchForLoAndCompetency(mlos, errId, 1)) {
        allValid = false; // Mark as invalid if any code fails validation
        return false;
      }

      if (!pregMatchForLoAndCompetency(losdesc, errId, 2)) {
        allValid = false; // Mark as invalid if any code fails validation
        return false;
      }
    })
  }


  if ($('#addLoForm .exist_lo').length > 0) {
    $('#addLoForm .exist_lo').each(function () {
      if ($.trim($(this).val()) == '') {
        $('#' + errId).text(page.lang_add_lo_alert_6).show();
        allValid = false;
        return false;
      }
      const value = $(this).val();
      if (values[value]) {
        hasDuplicates = true;
      } else {
        values[value] = true;
      }
    });
  }


  if (!allValid) {
    return false;
  }

  if ($('.multi_lo').length > 0) {
    $('.multi-lo').each(function () {
      const value = $(this).val();
      if (lo_values[value]) {
        lo_hasDuplicates = true;
      } else {
        lo_values[value] = true;
      }
    });
  }
  // if ($('.exist_lo').length > 0) {
  // 	$('.exist_lo').each(function() {
  // 		const value = $(this).val();
  // 		if (values[value]) {
  // 			hasDuplicates = true;
  // 		} else {
  // 			values[value] = true;
  // 		}
  // 	});
  // }	

  if (hasDuplicates && lo_hasDuplicates) {
    $('#' + errId).text(page.lang_add_lo_alert_2).show(); return false;
  } else if (hasDuplicates) {
    $('#' + errId).text(page.lang_add_compe_alert_1).show(); return false;
  } else if (lo_hasDuplicates) {
    $('#' + errId).text(page.lang_add_lo_alert_4).show(); return false;
  }

  // setTimeout(function(){
  $('#' + errId).text('').hide();
  // },7000)

  // console.log('here'); return false;
  if (allValid) {
    $.ajax({
      type: "POST",
      url: page.courseurl,
      data: formDataObj,
      success: function (response) {
        // console.log(response.returnStatus); return false;
        if (response.returnStatus == true) {
          $("#" + modal_id + " [data-dismiss=modal]").click();
          $('#addMessage').html(response.message);
          $('#myModal').modal('show');
          setTimeout(function () {
            $("#myModal .close").click();
          }, 5000);
          location.reload();
        } else {
          $('#erResponse').text(response.returnMessage).show(); return false;
        }

      }, beforeSend: function () {

      },
    });
  }
});

// Ajax request of add LO (Learning Object)  By Yuvraj Singh
$(document).on('submit', '#editLoForm', function (e) {
  e.preventDefault(); // avoid to execute the actual submit of the form.
  var modal_id = $(this).attr('id');
  // $('button[type=submit]').attr('disabled', true);
  var form = $(this);
  var lo_code = $('#edit_lo_code').val().trim();
  var lo_compe = $('#edit_lo_desc').val().trim();
  var errId = 'erResponseLoEditCase';
  var allValid = true;
  let valueCounts = {};
  let hasDuplicates = false;
  let allSelectedValues = [];

  if (lo_code == '' && lo_compe == '') {
    $('#' + errId).text(page.lang_lo_code_desc_alert).show(); return false;
  }
  if (lo_code == '') {
    $('#' + errId).text(page.lang_lo_code_alert).show(); return false;
  }
  if (lo_compe == '') {
    $('#' + errId).text(page.lang_lo_desc_alert).show(); return false;
  }

  // Check new added Activities ids
  $('.check_exist_lo').each(function () {
    let selectedValues = $(this).val();
    if ($.trim(selectedValues) == '') {
      $('#' + errId).text(page.lang_add_lo_alert_6).show();
      allValid = false; // Mark as invalid if any code fails validation
      return false;
    }
    if (selectedValues) {
      allSelectedValues = allSelectedValues.concat(selectedValues);
    }
  });

  if (!allValid) {
    return false;
  }

  // fetch exiting Activities  IDs
  $('.search_activity').each(function () {
    let selectedValues = $(this).attr('rel');
    if (selectedValues) {
      allSelectedValues = allSelectedValues.concat(selectedValues);
    }
  });

  // console.log(allSelectedValues); 
  allSelectedValues.forEach(function (value) {
    if (valueCounts[value]) {
      valueCounts[value]++;
      hasDuplicates = true;
    } else {
      valueCounts[value] = 1;
    }
  });


  if (hasDuplicates) {
    $('#' + errId).text(page.lang_edit_lo_alert_2).show(); return false;
  } else {
    $('#' + errId).hide();
  }

  // setTimeout(function(){
  $('#' + errId).text('').hide();
  // },7000)


  if (!pregMatchForLoAndCompetency(lo_code, errId, 1)) {
    allValid = false; // Mark as invalid if any code fails validation
    return false;
  }
  if (!pregMatchForLoAndCompetency(lo_compe, errId, 2)) {
    allValid = false; // Mark as invalid if any code fails validation
    return false;
  }

  if (!allValid) {
    return false;
  }

  if (allValid) {
    $.ajax({
      type: "POST",
      url: page.courseurl,
      data: form.serialize(),
      success: function (response) {
        // console.log(response.data.status); return false;
        // alert(response.data.status); return false;
        if (response.data.status == false) {
          $('#addMessage').html(response.data.message);
          $('#myModal').modal('show');
          return false;
        } else {
          $("#" + modal_id + " [data-dismiss=modal]").click();
          $('#addMessage').html(response.message);
          $('#myModal').modal('show');
          setTimeout(function () {
            $("#myModal .close").click();
          }, 5000);
          location.reload();
        }
      }, beforeSend: function () {

      },
    });
  }
});


// Ajax request of add Competency By Yuvraj Singh
$(document).on('submit', '#addCompetencyForm', function (e) {
  e.preventDefault(); // avoid to execute the actual submit of the form.
  var modal_id = $(this).attr('id');
  // $('button[type=submit]').attr('disabled', true);
  var form = $(this);
  var comp_code = $('#add_code').val();
  var comp_desc = $('#add_competency').val();
  var errId = 'erCompResponse';
  var allValid = true;

  if (($('#add_code').val().trim() == '') && ($('#add_competency').val().trim() == '')) {
    $('#' + errId).text(page.lang_lo_code_desc_alert).show(); return false;
  }
  if ($('#add_code').val().trim() == '') {
    $('#' + errId).text(page.lang_lo_code_alert).show(); return false;
  }
  if ($('#add_competency').val().trim() == '') {
    $('#' + errId).text(page.lang_lo_desc_alert).show(); return false;
  }

  $('.exist_competency_lo').each(function () {
    if ($.trim($(this).val()) == '') {
      $('#' + errId).text(page.lang_add_lo_alert_6).show();
      allValid = false;
      return false;
    }
  });

  if (!allValid) {
    return false;
  }

  if (!pregMatchForLoAndCompetency(comp_code, errId, 1)) {
    allValid = false; // Mark as invalid if any code fails validation
    return false;
  }
  if (!pregMatchForLoAndCompetency(comp_desc, errId, 2)) {
    allValid = false; // Mark as invalid if any code fails validation
    return false;
  }

  if (allValid) {
    $.ajax({
      type: "POST",
      url: page.courseurl,
      data: form.serialize(),
      success: function (response) {
        // console.log(response); return false;
        if (response.returnFlag == 1) {
          $('#erCompResponse').text(response.returnMessage).show().css('color', 'red'); return false;
        }
        $("#" + modal_id + " [data-dismiss=modal]").click();
        $('#addMessage').html(response.message);
        $('#myModal').modal('show');
        setTimeout(function () {
          $("#myModal .close").click();
        }, 5000);
        location.reload();
      }, beforeSend: function () {

        const values = {};
        let hasDuplicates = false;

        $('.exist_competency_lo').each(function () {
          const value = $(this).val();
          if (values[value]) {
            hasDuplicates = true;
          } else {
            values[value] = true;
          }
        });

        if (hasDuplicates) {
          $('#' + errId).text(page.lang_add_compe_alert_1).show(); return false;
        }
        // setTimeout(function(){
        $('#' + errId).text('').hide();
        // },7000) 
      },
    });
  }
});


// Ajax request of update competency outcome  By Yuvraj Singh
$(document).on('submit', '#editCompForm', function (e) {
  e.preventDefault(); // avoid to execute the actual submit of the form.
  var modal_id = $(this).attr('id');
  // $('button[type=submit]').attr('disabled', true);
  var form = $(this);

  var comp_code = $('#edit_compe_code').val();
  var comp_desc = $('#edit_compe_desc').val();
  var errId = 'erResponseCompEditCase';
  var allValid = true;

  if (($('#edit_compe_code').val().trim() == '') && ($('#edit_compe_desc').val().trim() == '')) {
    $('#' + errId).text(page.lang_lo_code_desc_alert).show(); return false;
  }
  if ($('#edit_compe_code').val().trim() == '') {
    $('#' + errId).text(page.lang_lo_code_alert).show(); return false;
  }
  if ($('#edit_compe_desc').val().trim() == '') {
    $('#' + errId).text(page.lang_lo_desc_alert).show(); return false;
  }

  $('.exist_competency_lo').each(function () {
    if ($.trim($(this).val()) == '') {
      $('#' + errId).text(page.lang_add_lo_alert_6).show();
      allValid = false;
      return false;
    }
  });

  if (!allValid) {
    return false;
  }

  if (!pregMatchForLoAndCompetency(comp_code, errId, 1)) {
    allValid = false; // Mark as invalid if any code fails validation
    return false;
  }
  if (!pregMatchForLoAndCompetency(comp_desc, errId, 2)) {
    allValid = false; // Mark as invalid if any code fails validation
    return false;
  }

  if (allValid) {
    $.ajax({
      type: "POST",
      url: page.courseurl,
      data: form.serialize(),
      success: function (response) {
        // console.log(response.data.status); return false;
        // alert(response.data.status); return false;
        if (response.data.status == false) {
          $('#addMessage').html(response.data.message);
          $('#myModal').modal('show');
          return false;
        } else {
          $("#" + modal_id + " [data-dismiss=modal]").click();
          $('#addMessage').html(response.message);
          $('#myModal').modal('show');
          setTimeout(function () {
            $("#myModal .close").click();
          }, 5000);
          location.reload();
        }
      }, beforeSend: function () {
        let valueCounts = {};
        let hasDuplicates = false;
        let allSelectedValues = [];
        // Check new added chapter ids
        $('.exist_competency_lo').each(function () {
          let selectedValues = $(this).val();
          if (selectedValues) {
            allSelectedValues = allSelectedValues.concat(selectedValues);
          }
        });

        // console.log(allSelectedValues); 
        allSelectedValues.forEach(function (value) {
          if (valueCounts[value]) {
            valueCounts[value]++;
            hasDuplicates = true;
          } else {
            valueCounts[value] = 1;
          }
        });

        if (hasDuplicates) {
          $('#' + errId).text(page.lang_edit_compe_alert_2).show(); return false;
        } else {
          $('#' + errId).hide();
        }
        // setTimeout(function(){
        $('#' + errId).text('').hide();
        // },7000)
      },
    });
  }
});

// Ajax request of fetch existing LO for Add LO section (Learning Object)  By Yuvraj Singh
$(document).on('click', '#get_existing_outcome, #get_existing_lo_list', function (e) {
  e.preventDefault(); // avoid to execute the actual submit of the form.
  // Get the active tab
  var selectedTab = $('#myTab .nav-link.active');
  // Get the text of the active tab
  // Get the href (target content) of the active tab
  var selectedTabHref = selectedTab.attr('href');
  if (selectedTabHref == '#nav-modules') {
    var clickedId = this.id;
    if (clickedId == 'get_existing_lo_list') {
      var cmid = $("#hidden_cmid").val();
    } else {
      var cmid = '';
    }
  }

  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: {
      function: 'fetch_lo',
      course_id: page.courseid,
      cmid: cmid
    },
    dataType: "json",
    success: function (response) {
      // console.log(response); return false;
      if (typeof response === 'object' && response.data != '') {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '1');
        const milliseconds = String(now.getMilliseconds()).padStart(3, '1');
        var uniqueLoId = hours + '' + milliseconds;

        let formattedResponse = '';
        let html = '';
        html += '<div class="row" id="lo-outcome-title-' + uniqueLoId + '">';
        html += '<div class="mb-2 col-md-11">';
        html += '<label>' + page.lang_select_learning_outcome + '</label>';
        html += '<select class="form-control exist_lo" name="existing_lo[]">';
        // html += '<option disabled="disabled">Select Existing LO</option>';
        html += '<option value="">' + page.lang_sel_lo + '</option>';
        $.each(response.data, function (key, value) {
          html += '<option value="' + key + '">' + value.code + '</option>';
        });
        html += '</select>';
        html += '</div>';
        html += '<div class="mb-2 col-md-1">';
        html += '<label>&nbsp;</label>';
        html += '<a href="javascript:void(0)" onclick="return deleteExistingLo(' + uniqueLoId + ')"><span class="fas fa-trash-alt"></span></a></div>';
        html += '</div></div>';
        $('#add-lo, #moduleEdit-chapter-list').append(html);
        // console.log(html);
      } else {
        $('#erResponse').html(page.lang_no_exist_lo_found).show();
        setTimeout(function () {
          $('#erResponse').html('');
        }, 5000);
        return false;
      }
      return false;
    },
    beforeSend: function () {
      // Code to display spinner           
    },
    complete: function () {
      // Code to hide spinner.  
      let form_id = '';
      if (clickedId == 'get_existing_lo_list') {
        form_id = 'moduleEditLoForm';
      } else {
        form_id = 'addLoForm';
      }
      let select_count = $('#' + form_id + ' .exist_lo').length;
      let option_count = $('#' + form_id + ' .exist_lo').first().find('option').filter(function () {
        return $(this).val().trim() !== '';
      }).length;

      if (option_count <= select_count) {
        $('#moduleEditLoForm #get_existing_lo_list,#addLoForm #get_existing_outcome').addClass('d-none');
      } else {
        $('#moduleEditLoForm #get_existing_lo_list,#addLoForm #get_existing_outcome').removeClass('d-none');
      }
      $('select').select2({ minimumResultsForSearch: 0 });
    }
  });
});


// Ajax request of add LO (Learning Object) By Yuvraj Singh
$(document).on('click', '#get_existing_lo,#get_existing_lo_for_competency', function (e) {
  // alert('here');
  var id = $(this).attr('id');
  // console.log($(this.id)+id); return false;
  e.preventDefault(); // avoid to execute the actual submit of the form.
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: {
      function: 'fetch_lo',
      course_id: page.courseid,
    },
    dataType: "json",
    success: function (response) {
      if (typeof response === 'object' && response.data != '') {

        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '1');
        const milliseconds = String(now.getMilliseconds()).padStart(3, '1');
        var uniqueLoId = hours + '' + milliseconds;

        let formattedResponse = '';
        let html = '';
        html += '<div class="row" id="lo-outcome-competency-title-' + uniqueLoId + '">';
        html += '<div class="mb-2 col-md-11">';
        html += '<label>' + page.lang_select_learning_outcome + '</label>';
        html += '<select class="form-control exist_competency_lo custom-select-2" name="new_competency_lo[]">';
        // html += '<option disabled="disabled">Select Existing LO</option>';
        html += '<option value="">' + page.lang_slt_exist_lo + '</option>';
        $.each(response.data, function (key, value) {
          html += '<option value="' + key + '">' + value.code + '</option>';
        });
        html += '</select>';
        html += '</div>';
        html += '<div class="mb-2 col-md-1">';
        html += '<label>&nbsp;</label>';
        html += '<a href="javascript:void(0)" onclick="return deleteExistingLoCompetency(' + uniqueLoId + ')"><span class="fas fa-trash-alt"></span></a></div>';
        html += '</div></div>';
        if (id == 'get_existing_lo') {
          $('#add-competency').append(html);
        } else {
          $('#edit-comp-lo-list').append(html);
        }
        // console.log(html);
      } else {
        if (id == 'get_existing_lo') {
          $('#erCompResponse').html(page.lang_no_exist_lo_found).show().css('color', 'red');
          setTimeout(function () {
            $('#erCompResponse').html('');
          }, 5000);
          return false;
        } else {
          $('#erResponseCompEditCase').html(page.lang_no_exist_lo_found).show().css('color', 'red');
          setTimeout(function () {
            $('#erResponseCompEditCase').html('');
          }, 5000);
          return false;
        }
      }
      return false;
    },
    beforeSend: function () {
      // Code to display spinner           
    },
    complete: function () {
      $('select').select2({ minimumResultsForSearch: 0 });
      // Code to hide spinner.            
    }
  });
});

// Ajax request of fetch existing LO for Add LO section (Learning Object)  By Yuvraj Singh
$(document).on('click', '#get_existing_activity', function (e) {
  e.preventDefault(); // avoid to execute the actual submit of the form.
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: {
      function: 'fetch_activity',
      course_id: page.courseid
    },
    dataType: "json",
    success: function (response) {
      // console.log(response.data); return false;
      if (response.data) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '1');
        const milliseconds = String(now.getMilliseconds()).padStart(3, '1');
        var uniqueLoId = hours + '' + milliseconds;

        let formattedResponse = '';
        let html = '';
        html += '<div class="row" id="lo-chapter-outcome-title-' + uniqueLoId + '">';
        html += '<div class="mb-2 col-md-11">';
        html += '<div class="d-flex justify-content-between align-items-center">';
        html += '<label>' + page.lang_exist_act + '</label>';
        html += '<div class="custom-control custom-checkbox">';
        html += '<input type="hidden" class="custom-control-input filtercheck" id="is_additional_' + uniqueLoId + '" name="is_additional[' + response.data[0].cmid + ']" value="1"/>';
        //html += '<input type="checkbox" class="custom-control-input filtercheck" id="is_additional_'+uniqueLoId+'" name="is_additional['+response.data[0].cmid+']" value="1"/>';
        //html += '<label class="custom-control-label" for="is_additional_'+uniqueLoId+'">Is additional</label>';
        html += '</div>';
        html += '</div>';
        html += '<select class="form-control check_exist_lo" onchange="return changeIsAdditional(this,' + uniqueLoId + ')" name="new_added_activity[]">';
        // html += '<option disabled="disabled">Select Existing Activities</option>';
        html += '<option value="">' + page.lang_select_existing_act + '</option>';
        $.each(response.data, function (key, value) {
          html += '<option value="' + value.cmid + '-' + value.module + '" data-type="' + value.module + '">' + value.cmname + '-' + value.cmid + '</option>';
        });
        html += '</select>';
        html += '</div>';
        html += '<div class="mb-2 col-md-1">';
        html += '<label>&nbsp;</label>';
        html += '<a href="javascript:void(0)" onclick="return deleteChapter(' + uniqueLoId + ',1)"><span class="fas fa-trash-alt"></span></a></div>';
        html += '</div></div>';
        $('#edit-chapter-list').append(html);
        // console.log(html);
      } else {
        $('#erResponseLoEditCase').css('color', 'red').text('').text(page.lang_no_act_data_found).show();
      }
      return false;
    },
    beforeSend: function () {
      // Code to display spinner           
    },
    complete: function () {
      $('select').select2({ minimumResultsForSearch: 0 });
    }
  });
});

// Function use for Is additional condition on edit learning objective case when change or assign any activities from dropdown then change checkbox nam 
function changeIsAdditional(selectElement, id) {
  var selectedValue = selectElement.value;
  $('#is_additional_' + id).attr('name', "is_additional[" + selectedValue + "]");
}

// Course goal if else for lo / competency data etc
function render_course_goal(type) {

  if (type === 'lo') {
    // setTimeout(function(){	
    get_course_goal_lo_data();
    $("#pills-competency-tab").removeClass("active");
    $("#pills-learning-tab").addClass("active");
    $("#pills-learning").addClass("active").addClass('show');
    $('#btn-competency').hide();
    $('#btn-learning-outcome').show();
    // },500)

  } else if (type === 'competency') {
    // setTimeout(function(){
    get_competency_course_goal_data();
    $("#pills-learning-tab").removeClass("active");
    $("#pills-competency-tab").addClass("active");
    $("#pills-competency").addClass("show active")
    $('#btn-learning-outcome').hide();
    $('#btn-competency').show();
    // },500)

  } else {
    // setTimeout(function(){	
    get_course_goal_lo_data();
    $("#pills-competency-tab").removeClass("active");
    $("#pills-learning-tab").addClass("active");
    $("#pills-learning").addClass("show active");
    $('#btn-competency').hide();
    $('#btn-learning-outcome').show();
    // },500)
  }
}

// Get Compentency Data
function getCompentencyData() {
  $('#btn-learning-outcome').hide();
  $('#btn-competency').show();
  setCookie("selected_sub_tab", "competency");
  setTimeout(function () {
    get_competency_course_goal_data();
  }, 500)
}

// Get Learning Out Come Data
function getLearningOutComeData() {
  $('#btn-competency').hide();
  $('#btn-learning-outcome').show();
  setCookie("selected_sub_tab", "lo");
  setTimeout(function () {
    get_course_goal_lo_data();
  }, 500)
}
// cookie manage
function setCookie(cookieName, cookieValue) {
  document.cookie = cookieName + "=" + cookieValue;
}

// Ajax request to fetch course goal data By Yuvraj Singh
function get_course_goal_lo_data() {
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: {
      function: 'get_course_goal_lo_data',
      type: 'lo',
      course_id: page.courseid,
    },
    dataType: "json",
    success: function (data) {
      // console.log(data); return false;
      render_course_goal_lo_data(data);
    },
    beforeSend: function () {
      // Code to display spinner
      $('.loader_lo').html("<div style='display: flex;height: 300px;justify-content: center;align-items: center;'><img src='" + page.book_loader + "' style='width: 150px;margin: 0 auto; vertical-align: middle;'/></div>");
      // $('.loader_lo').css('display','none');
      // return false;
    },
    complete: function () {
      // Code to hide spinner.
      $('.loader_lo').empty();
      $('.loader_lo').css('display', 'none');
    }
  });
}

// Render course goal data into html after call by  get_course_goal_lo_data function By Yuvraj Singh
function render_course_goal_lo_data(tableData) {
  $('#course-table-data').empty();
  if (tableData.data) {
    var action = '';
    var i = 1;
    var output = '';
    output += '<table id="lo-listing" class="display table" style="width:100%">';
    output += '<thead class="thead-light courses_syllabus_tablehead">';
    output += '<tr>';
    output += '<th>' + page.lang_sr_no + '</th>';
    output += '<th>Code</th>';
    output += '<th>Description</th>';
    output += '<th>Activity Count</th>';
    // if(page.is_pal==1 && page.course_status.toLowerCase()!='published'){
    output += '<th>Action</th>';
    // }
    output += '</tr>';
    output += '</thead>';
    output += '<tbody>';
    // console.log(tableData.data); return false;
    $.each(tableData.data, function (key, val) {
      var increment = i++;
      output += '<tr>';
      output += '<td>' + increment + '</td>';
      // if ($.trim(val.name) ==='') {
      // 	output += '<td>Topic</td>';
      // }
      output += '<td class="code-desc-width">' + val.code + '</td>';
      output += '<td class="code-desc-width">' + val.description + '</td>';
      output += '<td>' + val.chapter_count + '</td>';
      // if(page.is_pal==1 && page.course_status.toLowerCase()!='published'){
      output += '<td><a href="javascript:void(0)" onclick="return editLO(' + val.id + ')"> Edit </a> | <a href="javascript:void(0)" onclick="return deleteLO(' + val.id + ')">Delete</a></td>';
      // }
      output += '</tr>';
    });

    output += '</tbody>';
    output += '</table>';
  }
  // $('#course-table-data').append(output);
  if (output) {
    // console.log(output);
    $('#course-table-data').append(output);
  } else {
    $('#course-table-data').append('<h3 style="text-align:center">' + page.lang_no_lo_data_found + '</h3>');
  }

  setTimeout(function () {
    initializeDatatable('lo-listing');
    // console.log('here');
  }, 1000);
}

// Ajax request to fetch competency course goal data By Yuvraj Singh
function get_competency_course_goal_data() {
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: {
      function: 'fetch_competency_and_lo_data',
      course_id: page.courseid,
    },
    dataType: "json",
    success: function (data) {
      render_competency_course_goal_data(data);
    },
    beforeSend: function () {
      // Code to display spinner
      $('.loader_lo').html("<div style='display: flex;height: 300px;justify-content: center;align-items: center;'><img src='" + page.book_loader + "' style='width: 150px;margin: 0 auto; vertical-align: middle;'/></div>");
      // $('.loader_lo').css('display','none');
      // return false;
    },
    complete: function () {
      // Code to hide spinner.
      $('.loader_lo').empty();
      $('.loader_lo').css('display', 'none');
    }
  });
}

// Render competency course goal data into html after call by  get_competency_course_goal_data function By Yuvraj Singh
function render_competency_course_goal_data(tableData) {
  $('#competency-table-data').empty();
  if (tableData.data) {
    var action = '';
    var i = 1;
    var output = '';
    output += '<table id="co-listing" class="display table" style="width:100%">';
    output += '<thead class="thead-light courses_syllabus_tablehead">';
    output += '<tr>';
    output += '<th>' + page.lang_sr_no + '</th>';
    output += '<th>' + page.lang_code + '</th>';
    output += '<th>' + page.lang_competency + '</th>';
    output += '<th>' + page.lang_lo_count + '</th>';
    // if(page.is_pal==1 && page.course_status.toLowerCase()!='published'){
    output += '<th>Action</th>';
    // }							
    output += '</tr>';
    output += '</thead>';
    output += '<tbody>';
    // console.log(tableData.data); return false;
    $.each(tableData.data, function (key, val) {
      var increment = i++;
      output += '<tr>';
      output += '<td>' + increment + '</td>';
      // if ($.trim(val.name) ==='') {
      // 	output += '<td>Topic</td>';
      // }
      output += '<td class="code-desc-width">' + val.code + '</td>';
      output += '<td class="code-desc-width">' + val.description + '</td>';
      output += '<td>' + val.lo_count + '</td>';
      // output += '<td> Edit | Delete </td>';
      // if(page.is_pal==1 && page.course_status.toLowerCase()!='published'){
      output += '<td><a href="javascript:void(0)" onclick="return editComp(' + val.id + ')"> Edit </a> | <a href="javascript:void(0)" onclick="return deleteCompetency(' + val.id + ')">Delete</a></td>';
      // }
      output += '</tr>';
    });

    output += '</tbody>';
    output += '</table>';
  }

  if (output) {
    // console.log(output);
    $('#competency-table-data').append(output);
  } else {
    $('#competency-table-data').append('<h3 style="text-align:center">No competency found!</h3>');
  }
  setTimeout(function () {
    initializeDatatable('co-listing');
  }, 1000);
}

// Ajax request to get the single LO record by Yuvraj Singh	
function editLO(lo_id) {
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: {
      function: 'get_course_goal_lo_single_data',
      type: 'lo',
      course_id: page.courseid,
      lo_id: lo_id,
    },
    dataType: "json",
    success: function (response) {
      // console.log(data); return false;
      render_course_goal_lo_edit_data(response.data);
    },
    beforeSend: function () {
      // Code to display spinner
      $('.loader_lo').html("<div style='display: flex;height: 300px;justify-content: center;align-items: center;'><img src='" + page.book_loader + "' style='width: 150px;margin: 0 auto; vertical-align: middle;'/></div>");
    },
    complete: function () {
      // Code to hide spinner.
      $('.loader_lo').empty();
      $('.loader_lo').css('display', 'none');
    }
  });
}

// Render Edit LO ajax request return data into html form by Yuvraj Singh
function render_course_goal_lo_edit_data(data) {

  var html = '';
  html += '<div id="edit-outcome">';
  html += '<div class="row">';
  html += '<div class="col-md-4"><label>' + page.lang_code + '</label></div>';
  html += '<div class="col-md-8"><label>' + page.lang_lo + '</label></div>';
  html += '</div>';
  html += '<div class="row">';
  html += '<div class="col-md-4"><input type="text" id="edit_lo_code" placeholder="Enter Lo code" name="code" class="form-control multi-lo" onkeyup="validateInputFieldLO(100,this.value,\'erResponseLoEditCase\',$(this),1)" value="' + data.lo_data.code + '"></div>';
  html += '<div class="col-md-7"><input type="text" id="edit_lo_desc" placeholder="Enter Lo description" name="description" class="form-control" onkeyup="validateInputFieldLO(255,this.value,\'erResponseLoEditCase\',$(this),2)" value="' + data.lo_data.description + '"></div>';
  html += '<div class="col-md-4"><input type="hidden" name="lo_id" class="form-control multi-lo" value="' + data.lo_data.id + '"></div>';
  html += '</div>';

  $.each(data.activity_data, function (key, val) {
    var activityName = '';
    if (val.name == null) {
      activityName = 'Topic';
    } else {
      activityName = val.name;
    }
    html += '<div class="row">';
    html += '<div class="col-md-4"><label><b>Activity</b></label></div>';
    html += '<div class="col-md-7"><input type="hidden" name="existing_activities[]" value="' + val.cm_id + '"><label class="search_activity" rel="' + val.cm_id + '-' + val.module + '">' + activityName + ' - ' + val.cm_id + '</label></div>';
    html += '<div class="col-md-1"><a href="javascript:void(0)" onclick="return deleteChapter(' + val.lo_map_id + ',2)"><span class="fas fa-trash-alt"></span></a></div>';
    html += '</div>';
  });

  html += '</div>';

  $('#edit-add-lo').empty();
  $('#edit-add-lo').append(html);
  $('#editLearningOutcomeModal').modal('show');
}

// Ajax request to get the single Competency record by Yuvraj Singh	
function editComp(comp_id) {
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: {
      function: 'get_course_goal_competency_single_data',
      type: 'comp',
      course_id: page.courseid,
      comp_id: comp_id,
    },
    dataType: "json",
    success: function (response) {
      // console.log(data); return false;
      render_course_goal_comp_lo_edit_data(response.data);
    },
    beforeSend: function () {
      // alert(page.book_loader)

      // Code to display spinner
      $('.loader_lo').html("<div style='display: flex;height: 300px;justify-content: center;align-items: center;'><img src='" + page.book_loader + "' style='width: 150px;margin: 0 auto; vertical-align: middle;'/></div>");
      // $('.loader_lo').css('display','none');
      // return false;
    },
    complete: function () {
      // Code to hide spinner.
      $('.loader_lo').empty();
      $('.loader_lo').css('display', 'none');
    }
  });
  // alert(lo_id);
}

// Render Edit competency ajax request return data into html form by Yuvraj Singh	
function render_course_goal_comp_lo_edit_data(data) {

  var html = '';
  html += '<div id="edit-competency-outcome">';
  html += '<div class="row">';
  html += '<div class="col-md-4"><label>' + page.lang_code + '</label></div>';
  html += '<div class="col-md-8"><label>' + page.lang_lo + '</label></div>';
  html += '</div>';
  html += '<div class="row">';
  html += '<div class="col-md-4"><input type="text"  placeholder="Enter Competency code" id="edit_compe_code" onkeyup="validateInputFieldCompe(100,\'erResponseCompEditCase\',\'edit_compe_code\',1)"  name="code" class="form-control multi-lo" value="' + data.comp_data.code + '"></div>';
  html += '<div class="col-md-7"><input type="text" placeholder="Enter Competency description"  id="edit_compe_desc" onkeyup="validateInputFieldCompe(255,\'erResponseCompEditCase\',\'edit_compe_desc\',2)" name="description" class="form-control" value="' + data.comp_data.description + '"></div>';
  html += '<div class="col-md-4"><input type="hidden" name="comp_id" class="form-control multi-lo" value="' + data.comp_data.id + '"></div>';
  html += '</div>';

  $.each(data.lo_data, function (key, val) {
    html += '<div class="row">';
    html += '<div class="col-md-4"><label><b>' + page.lang_lo + '</b></label></div>';
    html += '<div class="col-md-7"><input type="hidden" name="existing_lo[]" value="' + val.id + '"><label class="search_lo" rel="' + val.id + '">' + val.code + ' - ' + val.description + '</label></div>';
    html += '<div class="col-md-1"><a href="javascript:void(0)" onclick="return deleteLoFromCompetency(' + val.competency_map_id + ')"><span class="fas fa-trash-alt"></span></a></div>';
    html += '</div>';
  });

  html += '</div>';

  $('#edit-comp-lo').empty();
  $('#edit-comp-lo').append(html);
  $('#editCompetencyOutcomeModal').modal('show');
}

// Delete Learning Objective with thier child table data as well by Yuvraj Singh
function deleteLO(id) {
  let isDelLO = confirm(page.lang_delete_lo_alert_1);
  if (isDelLO === false) {
    return false;
  }
  //var url = $('#request_url').val();
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: { lo_id: id, function: 'delete_lo' },
    success: function (response) {
      // console.log(response.data.status); return false;
      // alert(response.data.status); return false;
      if (response.data.status == '') {
        $('#addMessage').html(response.data.message);
        $('#myModal').modal('show');
        return false;
      } else {
        // alert('here');
        // $("#"+modal_id+" [data-dismiss=modal]").click();
        $('#addMessage').html(response.data.message);
        $('#myModal').modal('show');
        setTimeout(function () {
          $("#myModal .close").click();
        }, 5000);
        location.reload();
      }
    }, beforeSend: function () {
    },
  });
}

// Remove Learning Objective from the competency section By Yuvraj Singh
function deleteLoFromCompetency(id) {
  let isDelLO = confirm(page.lang_delete_lo_com_alert_1);
  if (isDelLO === false) {
    return false;
  }
  var modal_id = 'editCompForm';
  // var url = $('#request_url').val();
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: { com_map_id: id, function: 'delete_lo_from_competency' },
    success: function (response) {
      // console.log(response.data.status); return false;
      // alert(response.data.status); return false;
      if (response.data.status == '' || response.data.status == false) {
        $('#addMessage').html(response.data.message);
        $('#myModal').modal('show');
        return false;
      } else {
        $("#" + modal_id + " [data-dismiss=modal]").click();
        // $('#erResponseLoEditCase').css('color','green').html(response.data.message).show();
        $('#addMessage').html(response.data.message);
        $('#myModal').modal('show');
        setTimeout(function () {
          $("#myModal .close").click();
          location.reload();
          // $("#erResponseLoEditCase").hide().css('color','red');
        }, 3000);
        // location.reload();
      }
    }, beforeSend: function () {
    },
  });
}

// Delete whole competency section by Yuvraj Singh
function deleteCompetency(id) {
  let isDelLO = confirm(page.lang_delete_com_alert_1);
  if (isDelLO === false) {
    return false;
  }
  //var url = $('#request_url').val();
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: { com_id: id, function: 'delete_competency' },
    success: function (response) {
      // console.log(response.data.status); return false;
      // alert(response.data.status); return false;
      if (response.data.status == '') {
        $('#addMessage').html(response.data.message);
        $('#myModal').modal('show');
        return false;
      } else {
        $('#addMessage').html(response.data.message);
        $('#myModal').modal('show');
        setTimeout(function () {
          $("#myModal .close").click();
        }, 5000);
        location.reload();
      }
    }, beforeSend: function () {
    },
  });
}

// Delete Activity from the Learning Objective By Yuvraj Singh
function deleteChapter(chap_id, flag) {
  // if Flag is 1 means its run time added Activity where we only need to delete HTML
  if (flag === 1) {
    $('#lo-chapter-outcome-title-' + chap_id).remove();
  } else if (flag === 2) {
    let isChapLO = confirm(page.lang_delete_act_alert_1);
    if (isChapLO === false) {
      return false;
    }
    var modal_id = 'editLoForm';
    // if Flag is 2 means its database stored Activity with LO need to delete both side Database & Html side
    //var url = $('#request_url').val();
    $.ajax({
      type: "POST",
      url: page.courseurl,
      data: { m_id: chap_id, function: 'delete_chapter_from_lo' },
      success: function (response) {
        // console.log(response.data.status); return false;
        // alert(response.data.status); return false;
        if (response.data.status == false) {
          $('#addMessage').html(response.data.message);
          $('#myModal').modal('show');
          return false;
        } else {
          $("#" + modal_id + " [data-dismiss=modal]").click();
          // $('#erResponseLoEditCase').css('color','green').html(response.data.message).show();
          $('#addMessage').html(response.data.message);
          $('#myModal').modal('show');
          setTimeout(function () {
            $("#myModal .close").click();
            location.reload();

            // $("#erResponseLoEditCase").hide().css('color','red');
          }, 3000);
          // location.reload();
        }
      }, beforeSend: function () {
      },
    });
  }
}

// Update course goal content inside the course goal section below the tab by Yuvraj Singh 
$('#update-course-goal').on('click', function () {
  var tData = $.trim($('.text-area').val());
  var goal_id = $('#goal_id').val();
  $('#editCon').text(tData);
  var url = $('#request_url').val();
  var errId = 'erCourseResponse';
  /* if(tData==''){
    $('#'+errId).text('').text(page.lang_course_goal_alert_1).show().css('color', 'red'); return false;
  } */

  var course_goal = $('#course-goal-text-area').val();
  var errId = 'erCourseResponse';
  var allValid = true;

  // if (!pregMatchForLoAndCompetency(course_goal, errId,2)) {
  // 	allValid = false; // Mark as invalid if any code fails validation
  // 	return false;
  // }	


  if (allValid) {
    $.ajax({
      type: "POST",
      url: page.courseurl,
      data: { goal_id: goal_id, course_id: page.courseid, course_data: tData, function: 'update_course_content' },
      success: function (response) {
        // console.log(response.data.status); return false;
        if (response.data.status == false) {
          $('#addMessage').html(response.data.message);
          $('#myModal').modal('show');
          return false;
        } else {
          $('#addMessage').html(response.data.message);
          $('#myModal').modal('show');
          setTimeout(function () {
            $("#myModal .close").click();
            location.reload();
          }, 3000);
          // location.reload();
        }
      }, beforeSend: function () {
      },
    });
  }
})

// Get the interface to edit the course goal content
function editCourseGoalContent() {
  var txt = $('#editCon').text();
  $('.showtext').hide();
  $('.editCon').show();
  $('.text-area').text(txt).show();
}

// Delete run time existing LO after fetch display & delete in Add LO section
function deleteExistingLo(id) {
  // $('#lo-outcome-title-'+id).remove();
  $('[id="lo-outcome-title-' + id + '"]').remove();
  $('#' + id).remove();
  $('#moduleEditLoForm #get_existing_lo_list,#addLoForm #get_existing_outcome').removeClass('d-none');
}

// Delete run time existing LO after fetch display & delete in Add LO section
function deleteExistingChapter(id) {
  $('#lo-chapter-outcome-title-' + id).remove();
}

// Delete run time existing LO after fetch display & delete in Competency section
function deleteExistingLoCompetency(id) {
  $('#lo-outcome-competency-title-' + id).remove();
  $('#' + id).remove();
}

// Ajax request to get list of question which mapped or unmapped with LO by Yuvraj Singh
function render_question_lo_mapping() {
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: {
      function: 'get_questions_list',
      'course_id': page.courseid
    },
    dataType: "json",
    success: function (response) {
      // console.log(data); return false;
      render_question_lo_mapping_data(response.data);
    },
    beforeSend: function () {
      // Code to display spinner
      $('.loader_lo').html("<div style='display: flex;height: 300px;justify-content: center;align-items: center;'><img src='" + page.book_loader + "' style='width: 150px;margin: 0 auto; vertical-align: middle;'/></div>");
      // $('.loader_lo').css('display','none');
      // return false;
    },
    complete: function () {
      // Code to hide spinner.
      $('.loader_lo').empty();
      $('.loader_lo').css('display', 'none');
    }
  });
}

// Function used to render the Questions list into html form for display by Yuvraj Singh
function render_question_lo_mapping_data(tableData) {
  $('#question-lo-mapping-table-data').empty();
  if (tableData) {
    var action = '';
    var i = 1;
    var output = '';
    output += '<table id="question-listing" class="display table" style="width:100%">';
    output += '<thead class="thead-light question_lo_mapping_tablehead">';
    output += '<tr>';
    output += '<th>' + page.lang_sr_no + '</th>';
    output += '<th>' + page.lang_code + '</th>';
    output += '<th>' + page.lang_question + '</th>';
    output += '<th>' + page.lang_complexity + '</th>';
    output += '<th>' + page.lang_actions + '</th>';
    output += '</tr>';
    output += '</thead>';
    output += '<tbody>';
    // console.log(tableData.data); return false;
    $.each(tableData, function (key, val) {
      var increment = i++;
      output += '<tr>';
      output += '<td>' + increment + '</td>';
      output += '<td>' + val.name + '</td>';
      output += '<td>' + val.questiontext + '</td>';
      output += '<td>' + val.category_name + '</td>';
      // output += '<td>0</td>';
      // output += '<td> Edit | Delete </td>';
      let str = val.category_name;
      let firstChar = "'" + $.trim(str.charAt(0)) + "'";

      var conditionalStr = 'Mapped ' + page.lang_learning_objective;
      if (val.question_id == null) {
        conditionalStr = 'Not Mapped ' + page.lang_learning_objective;
      }
      // if(page.is_pal==1 && page.course_status.toLowerCase()!='published'){
      // 	output += '<td><a class="btn btn-primary" href="javascript:void(0)" onclick="return addQeuestionLoMap('+val.id+','+val.category_id+','+firstChar+')">'+conditionalStr+'</a></td>';
      // } else {
      // 	output += '<td><a class="btn btn-primary" href="javascript:void(0)">'+conditionalStr+'</a></td>';
      // }
      output += '<td><a class="btn btn-primary" href="javascript:void(0)" onclick="return addQeuestionLoMap(' + val.id + ',' + val.category_id + ',' + firstChar + ')">' + conditionalStr + '</a></td>';
      output += '</tr>';
    });

    output += '</tbody>';
    output += '</table>';
  }

  if (output) {
    // console.log(output);
    $('#question-lo-mapping-table-data').append(output);
  } else {
    $('#question-lo-mapping-table-data').append('<h3 style="text-align:center">' + page.lang_no_ques_data_found + '</h3>');
  }
  setTimeout(function () {
    initializeDatatable('question-listing');
  }, 1000);
}

// Ajax request to add new lo to question by Yuvraj Singh
function addQeuestionLoMap(ques_id, difficulty_id, difficulty) {
  $('#addLearningOutcomeMapModal').modal('show');
  $('#question_id').val(ques_id);
  $('#difficulty_id').val(difficulty_id);
  $('#difficulty').val(difficulty);
  $('#display-lo').html('');
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: { 'question_id': ques_id, 'function': 'fetch_lo_of_question' },
    success: function (response) {
      if (response.status == 'success' && response.data != '') {
        var html = '';
        html += '<div class="row">';
        html += '<div class="mb-2 col-md-3">';
        html += '<label>' + page.lang_mapped_lo + ' :-</label>';
        html += '</div>';
        html += '<div class="mb-2 col-md-7">';
        html += '<label>' + response.data.code + '</label>';
        html += '</div>';
        html += '<div class="mb-2 col-md-2">';
        html += '<a href="javascript:void(0)" onclick="return deleteMappedLo(' + response.data.mapped_id + ')"><span class="fas fa-trash-alt"></span></a></div>';
        html += '</div></div>';
        $('#display-lo').append(html);
      };
    }, beforeSend: function () {
      if ($('#lo_id').val() == '') {
        $('#erloMapResponse').text(page.lang_pls_select_lo).show(); return false;
      }
    },
  });
}

// Ajax request of add LO (Learning Object)  By Yuvraj Singh
$(document).on('submit', '#LoMapForm', function (e) {
  e.preventDefault(); // avoid to execute the actual submit of the form.
  var modal_id = $(this).attr('id');
  // $('button[type=submit]').attr('disabled', true);
  var form = $(this);
  // console.log(form); return false;
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: form.serialize(),
    success: function (response) {
      // console.log(response); return false;
      if (response.status == 'fail') {
        setTimeout(function () {
          $('#erloMapResponse').hide();
        }, 5000);
        $('#erloMapResponse').text(response.returnMessage).show();
        // $('button[type=submit]').attr('disabled', false);
        return false;
      }
      $("#" + modal_id + " [data-dismiss=modal]").click();
      $('#addMessage').html(response.message);
      $('#myModal').modal('show');
      setTimeout(function () {
        $("#myModal .close").click();
        location.reload();
      }, 3000);
    }, beforeSend: function () {
      if ($('#lo_id').val() == '') {
        $('#erloMapResponse').text(page.lang_pls_select_lo).show();
        // $('button[type=submit]').attr('disabled', false);
        return false;
      }
    },
  });
});

// Ajax request to delete mapped LO (Learning Object) from question & lo mapping table  By Yuvraj Singh
function deleteMappedLo(id) {
  let isDelLO = confirm(page.lang_delete_mapped_alert_1);
  if (isDelLO === false) {
    return false;
  }
  var modal_id = $('#LoMapForm').attr('id');
  if (id != '' || id != 'null') {
    $.ajax({
      type: "POST",
      url: page.courseurl,
      data: { 'id': id, 'function': 'delete_mapped_question_lo' },
      success: function (response) {
        // console.log('hahah ' +response);
        if (response.status == true) {
          $("#" + modal_id + " [data-dismiss=modal]").click();
          $('#addMessage').html(response.message);
          $('#myModal').modal('show');
          setTimeout(function () {
            $("#myModal .close").click();
            location.reload();
          }, 5000);
        } else {
          $('#erloMapResponse').text(response.returnMessage).show(); return false;
        }
      }, beforeSend: function () {
        if ($('#lo_id').val() == '') {
          $('#erloMapResponse').text(page.lang_pls_select_lo).show(); return false;
        }
      },
    });
  }
}

// Function used to add html Dropdown for Question, Difficulty Level and Learning Objective etc by Yuvraj Singh
// var storeObjectForAddQuestion = '';
var moduleData = {};
function addPalQeuesDifficultyHtmlDropDown(assessment_id) {
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: { 'course_id': page.courseid, 'assessment_id': assessment_id, 'function': 'fetch_lo_and_question_category' },
    success: function (response) {
      // console.log(response); return false; 		
      if (response.status == 'success' && response.data != '') {

        if (response.inserted_count == 0 || response.inserted_count == '') {
          addNewPalDifficulty(assessment_id, 1);
          return false;
        }
        var html = '';
        var loObject = [];
        moduleData = response.data.module_data;

        $.each(response.inserted_data, function (indx, i_val) {
          var timestamp = Date.now();
          var uniqId = uniqIdVar();

          html += '<tr id=' + uniqId + '>';
          html += '<input type="hidden" name="' + uniqId + '_id[assessment_info_id]" value="' + i_val.id + '">';

          //Module (Topic) Box preparation
          html += '<td id="module-' + uniqId + '"><select name="' + uniqId + '_id[section_id]" onchange="return getLoList(this.value,' + uniqId + ')"  class="form-control module-lo">';
          $.each(response.data.module_data, function (key, val) {
            // console.log('Module Name   ------'+val.section_name);
            var sum = 0;
            var optionArr = [];
            if (key === i_val.section_id) {
              html += '<option selected="selected" value="' + key + '">' + val.section_name + '</option>';
            } else {
              html += '<option value="' + key + '">' + val.section_name + '</option>';
            }


          });
          html += '</select></td>';

          let modDataList = moduleData[i_val.section_id];
          let loList = Object.keys(response.data);
          console.log(modDataList);
          if (modDataList != null) {
            var mdList = modDataList.lo_ids;
            loList = mdList.split(',');
          }

          // Lo select box preparation
          html += '<td id="los-' + uniqId + '"><select name="' + uniqId + '_id[question_lo]" onchange="return changeLoList(event,' + uniqId + ')" class="form-control cl-lo">';
          $.each(loList, function (listkey, listval) {
            var sum = 0;
            let val = response.data[listval];
            let key = listval;
            var optionArr = [];
            if (key !== 'module_data') {
              $.each(val.difficulty_arr, function (k, v) {
                if ($.isNumeric(v.count)) {
                  sum += +parseFloat(v.count); // Convert value to number and add to sum
                }
                optionArr.push({ 'id': k, 'val': v.difficulty, 'diff_code': v.diff_code, 'count': v.count })
              });
              if (key === i_val.lo_id) {
                html += '<option selected="selected" value="' + key + '" data-attr=' + JSON.stringify(optionArr) + '>' + val.code + ' -- (' + sum + ')</option>';
              } else {
                html += '<option value="' + key + '" data-attr=' + JSON.stringify(optionArr) + '>' + val.code + ' -- (' + sum + ')</option>';
              }
            }
          });
          html += '</select></td>';

          // Difficlty select box preparation				
          html += '<td id="difficulty-' + uniqId + '"><select name="' + uniqId + '_id[question_toughness]" onchange="return changeCount(event,' + uniqId + ')" id="get_tough_' + uniqId + '" class="form-control cl-tough">';
          var countVal = 0;
          $.each(response.data, function (key1, val1) {
            // console.log('sadi key==='+key1+'===='+i_val.lo_id);
            // console.log('sadi key==='+i_val.lo_id+'====');
            if (countVal === 0) {
              if (key1 == i_val.lo_id) {
                $.each(val1.difficulty_arr, function (k1, v1) {
                  // console.log(k1+'==='+i_val.difficulty_id);
                  if (k1 === i_val.difficulty_id) {
                    // console.log(k1+'==='+i_val.difficulty_id);
                    html += '<option selected="selected" value="' + k1 + '-' + v1.difficulty + '"  data-diff=\'' + v1.count + '\'>' + v1.diff_code + ' -- (' + v1.count + ')</option>';
                  } else {
                    html += '<option value="' + k1 + '-' + v1.difficulty + '"  data-diff=\'' + v1.count + '\'>' + v1.diff_code + ' -- (' + v1.count + ')</option>';
                  }
                  countVal++;
                });
              }

            }
          });

          html += '</select></td>';

          // Count select box preparation				
          var countValSec = 0;
          html += '<td id="count-' + uniqId + '"><select name="' + uniqId + '_id[question_count]" id="get_count_' + uniqId + '" class="form-control cl-count">';
          $.each(response.data, function (key2, val2) {
            if (countValSec === 0) {
              if (key2 == i_val.lo_id) {
                // console.log('+++'+JSON.stringify(val2));
                $.each(val2.difficulty_arr, function (k2, v2) {
                  // console.log(v2.difficulty+'==='+i_val.difficulty);								
                  if (v2.difficulty === i_val.difficulty) {
                    for (i = 1; i <= v2.count; i++) {
                      // console.log(i+'==='+i_val.no_of_questions);
                      if (i == i_val.no_of_questions) {
                        html += '<option selected="selected" value="' + i + '">' + i + '</option>';
                      } else {
                        html += '<option value="' + i + '">' + i + '</option>';
                      }
                    }
                  }
                  countValSec++;
                });

              }
            }
          });

          html += '</select></td>';
          html += '<td class="text-right"><a onclick="return deleteAddPalQuesDifficulHtml(' + uniqId + ',' + i_val.id + ')" href="javascript:void(0)">' + page.lang_delete + '</a></td>';
          html += '</tr>';
        });

        $('#append-pal-popup-html').html('');
        $('#append-pal-popup-html').append(html);
        $('#assessment_id').remove();
        $('#add-function-run-time').html('').append('<a href="javascript:void(0)" onclick="return addNewPalDifficulty(' + assessment_id + ',2)">+ ' + page.lang_add_more_ques + '</a>')
        $('#addPalQuestionForm').append('<input type="hidden" id="assessment_id" name="assessment_id" value="' + assessment_id + '">');
        $('#generatePalQuesModal').modal('show');
        $('.cl-count').trigger('change');
        $('#change-button-text').text('').text('Update');
      } else if (response.status == 'success' && response.data == '') {
        $('#addMessage').html(page.lang_add_ques_form_alert_2);
        $('#myModal').modal('show');
        // setTimeout(function(){
        // 	$("#myModal .close").click();
        // 	location.reload();
        // }, 3000);					
      } else {
        $('#addMessage').html(page.lang_som_went_wrong);
        $('#myModal').modal('show');
        // setTimeout(function(){
        // 	$("#myModal .close").click();
        // 	location.reload();
        // }, 3000)
      }

    }, beforeSend: function () {
      // if($('#lo_id').val()==''){
      // 	$('#erloMapResponse').text(' Please select a LO').show(); return false;
      // }				
    },
    complete: function () {
      setTimeout(function () {
        $('select').select2({ minimumResultsForSearch: 0 });
      }, 500);
    }
  });
}


// On Learning Objective dropdown from add pal question then Change the difficulty level dropdown options  by yuvraj. 
function changeLoList(event, id) {
  const selectElement = event.target;
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  // Get the custom data attribute from the selected option
  data = JSON.parse(selectedOption.getAttribute('data-attr'));
  // console.log(data);
  // return false;
  var html = '';
  $.each(data, function (index, obj) {
    // console.log(data[0].count);
    html += '<option value="' + obj.id + '-' + obj.val + '"  data-diff=\'' + obj.count + '\'>' + obj.diff_code + ' -- (' + obj.count + ')</option>';
  });

  var countHtml = '';
  if (data[0].count >= 0) {
    for (i = 1; i <= data[0].count; i++) {
      countHtml += '<option value="' + i + '">' + i + '</option>';
    }
  } else {
    countHtml += '<option value="1">1</option>';
  }
  $('#get_count_' + id).html('').html(countHtml).css({
    'border': '2px solid red',
    'transition': 'border 0.5s ease-in-out'  // For smooth transition
  });

  $('#get_tough_' + id).html('').html(html).css({
    'border': '2px solid red',
    'transition': 'border 0.5s ease-in-out'  // For smooth transition
  });
  setTimeout(function () {
    $('#get_count_' + id + ',#get_tough_' + id).css({
      'border': '',  // Revert back to the original border
      'transition': ''
    });
  }, 1000);

  $('.cl-count').trigger('change');
}


// Change the question count of the select option for pal. When lo dropdown or difficulty dropdown change the then this function work.  by yuvraj. 
function changeCount(event, id) {
  const selectElement = event.target;
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  // Get the custom data attribute from the selected option
  const count = selectedOption.getAttribute('data-diff');
  var html = '';
  if (count >= 0) {
    for (i = 1; i <= count; i++) {
      html += '<option value="' + i + '">' + i + '</option>';
    }
  } else {
    html += '<option value="1">1</option>';
  }
  $('#get_count_' + id).html('').html(html).css({
    'border': '2px solid red',
    'transition': 'border 0.5s ease-in-out'  // For smooth transition
  });
  setTimeout(function () {
    $('#get_count_' + id).css({
      'border': '',  // Revert back to the original border
      'transition': ''
    });
  }, 1000);

  $('.cl-count').trigger('change');
}




// Function used to add html on Add More Questions function on Add Question from Question Bank POP UP by Yuvraj Singh
function addNewPalDifficulty(assessment_id, flag) {
  // alert('Here again');
  // const unique_id ='id_del_html_'+timestamp;
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: { 'course_id': page.courseid, 'assessment_id': assessment_id, 'function': 'fetch_lo_and_question_category' },
    success: function (response) {
      // console.log(response); return false; 	
      if (response.status == 'success' && response.data != '') {
        var html = '';
        var uniqId = uniqIdVar();
        var timestamp = Date.now();
        // console.log(uniqId); 													
        html += '<tr id=' + uniqId + '>';


        //Module (Topic) Box preparation
        html += '<td id="module-' + uniqId + '"><select name="' + uniqId + '_id[section_id]" onchange="return getLoList(this.value,' + uniqId + ')" class="form-control module-lo">';
        html += '<option value="">Select Module</option>';
        $.each(response.data.module_data, function (key, val) {
          console.log('Module Name   ------' + val.section_name);
          var sum = 0;
          var optionArr = [];
          // if(key===i_val.lo_id){
          // 	html += '<option selected="selected" value="'+key+'" data-attr='+JSON.stringify(optionArr)+'>'+val.section_name+'</option>';
          // } else {
          // 	html += '<option value="'+key+'" data-attr='+JSON.stringify(optionArr)+'>'+val.section_name+'</option>';
          // }

          html += '<option value="' + key + '"  data-attr=' + JSON.stringify(optionArr) + '>' + val.section_name + '</option>';
        });
        html += '</select></td>';

        // Select LOs
        html += '<td id="los-' + uniqId + '"><select name="' + uniqId + '_id[question_lo]" onchange="return changeLoList(event,' + uniqId + ')" class="form-control cl-lo">';
        html += '<option  data-attr="">Select LOs</option>';
        html += '</select></td>';

        // Select Difficulty Level
        html += '<td id="difficulty-' + uniqId + '"><select name="' + uniqId + '_id[question_toughness]" onchange="return changeCount(event,' + uniqId + ')" id="get_tough_' + uniqId + '" class="form-control cl-tough">';
        html += '<option value="" >Select Difficulty Level</option>';
        html += '</select></td>';

        // Select Question Count
        html += '<td id="count-' + uniqId + '"><select name="' + uniqId + '_id[question_count]" id="get_count_' + uniqId + '" class="form-control cl-count">';
        html += '<option value="">Select Question Count</option>';
        html += '</select></td>';

        html += '<td class="text-right"><a onclick="return deleteAddPalQuesDifficulHtml(' + uniqId + ',0)" href="javascript:void(0)">' + page.lang_delete + '</a></td>';
        html += '</tr>';

        if (flag == 1) {
          $('#append-pal-popup-html').empty('');
        }
        $('#append-pal-popup-html').append(html);
        $('#add-function-run-time').html('').append('<a href="javascript:void(0)" onclick="return addNewPalDifficulty(' + assessment_id + ',2)">+ ' + page.lang_add_more_ques + '</a>')
        // $('#assessment_id').remove();
        $('#addPalQuestionForm').append('<input type="hidden" id="assessment_id" name="assessment_id" value="' + assessment_id + '">');
        $('#generatePalQuesModal').modal('show');
        $('.cl-count').trigger('change');


        // if(flag==1){ 	}
      } else if (response.status == 'success' && response.data == '') {
        $('#addMessage').html(page.lang_add_ques_form_alert_2);
        $('#myModal').modal('show');
        // setTimeout(function(){
        // 	$("#myModal .close").click();
        // 	location.reload();
        // }, 3000);		

      }
    }, beforeSend: function () {
      // if($('#lo_id').val()==''){
      // 	$('#erloMapResponse').text(' Please select a LO').show(); return false;
      // }				
    },
    complete: function () {
      $('select').select2({ minimumResultsForSearch: 0 });
    },
  });
}

// Get LO (Learning Outcomes) list on behalf of the Module ID (Topic Id) inside assessment section
function getLoList(id, uniqId) {
  if (id) {
    $.ajax({
      type: "POST",
      url: page.courseurl,
      data: { 'section_id': id, 'course_id': page.courseid, 'function': 'get_module_base_lo_list' },
      success: function (response) {
        if (response.status == 1 && response.data != '') {
          var html = '';
          var timestamp = Date.now();

          html += '<select name="' + uniqId + '_id[question_lo]" onchange="return changeLoList(event,' + uniqId + ')" class="form-control cl-lo">';
          html += '<option  data-attr="">' + page.lang_select_learning_outcome + '</option>';
          $.each(response.data, function (key, val) {
            var sum = 0;
            var optionArr = [];

            $.each(val, function (k, v) {
              if ($.isNumeric(v.difficulty_count)) {
                sum += +parseFloat(v.difficulty_count); // Convert value to number and add to sum
              }
              // optionArr.push({'id': k, 'val': v.difficulty,'diff_code':v.diff_code,'count':v.count})						
              optionArr.push({ 'id': v.difficulty_id, 'val': v.difficulty, 'diff_code': v.diff_code, 'count': v.difficulty_count })
            });


            html += '<option value="' + val[0].lo_id + '" data-attr=' + JSON.stringify(optionArr) + '>' + val[0].code + ' -- (' + sum + ')</option>';
          });
          html += '</select>';

          $('#los-' + uniqId).html(html);

          // console.log(response.data); 

          // 	html += '<td><select name="'+uniqId+'_id[question_toughness]" onchange="return changeCount(event,'+uniqId+')" id="get_tough_'+uniqId+'" class="form-control cl-tough">';
          // 	var countVal = 0;
          // 	$.each( response.data, function( key, val ) {
          // 		if(countVal===0){
          // 			$.each( val.difficulty_arr, function( k, v1 ) {					
          // 				html += '<option value="'+k+'-'+v1.difficulty+'"  data-diff=\''+v1.count+'\'>'+v1.diff_code+' -- ('+v1.count+')</option>';
          // 			});
          // 			countVal++;
          // 		}					
          // 	});
          // 	html += '</select></td>';

          // 	// console.log(intVal);
          // 	var countValSec = 0;
          // 	html += '<td><select name="'+uniqId+'_id[question_count]" id="get_count_'+uniqId+'" class="form-control cl-count">';
          // 	$.each( response.data, function( index, val ) {
          // 		if(countValSec===0){
          // 			$.each( val.difficulty_arr, function( k, v1 ) {	
          // 				if(countValSec===0){	
          // 					console.log(v1.count);
          // 					for(i=1;i<=v1.count;i++){
          // 						html += '<option value="'+i+'">'+i+'</option>';
          // 					} 
          // 					countValSec++;
          // 				}	
          // 			});
          // 			countValSec++;
          // 		}
          // 	});			


          // 	html += '</select></td>';

          // 	html += '<td class="text-right"><a onclick="return deleteAddPalQuesDifficulHtml('+uniqId+',0)" href="javascript:void(0)">'+page.lang_delete+'</a></td>';
          // 	html += '</tr>';

          // //    if(flag==1){
          // 	$('#append-pal-popup-html').empty('');
          // //    }
          // 	$('#append-pal-popup-html').append(html);
          // 	$('#add-function-run-time').html('').append('<a href="javascript:void(0)" onclick="return addNewPalDifficulty('+assessment_id+',2)">+ '+page.lang_add_more_ques+'</a>')
          // 	// $('#assessment_id').remove();
          // 	$('#addPalQuestionForm').append('<input type="hidden" id="assessment_id" name="assessment_id" value="'+assessment_id+'">');
          // 	$('#generatePalQuesModal').modal('show');
          $('.cl-count').trigger('change');


        } else if (response.status == 'success' && response.data == '') {
          // $('#addMessage').html(page.lang_add_ques_form_alert_2);
          // $('#myModal').modal('show');
        }
      }, beforeSend: function () {

      }, complete: function () {
        $('select').select2({ minimumResultsForSearch: 0 });
      }

    });
  }
}


// On change of quiz question add set the count of total questions by Yuvraj Singh
// $('body').on('select2:select','.cl-count',function(){
$('body').on('change select2:select', '.cl-count', function () {
  var sum = 0;
  $('.cl-count').each(function () {
    var val = parseInt($(this).val(), 10);
    sum += isNaN(val) ? 0 : val;
  });
  $('#add-count').text(sum);
})

// Ajax request of add pal question toughness  By Yuvraj Singh
$(document).on('submit', '#addPalQuestionForm', function (e) {
  e.preventDefault(); // avoid to execute the actual submit of the form.
  var modal_id = $(this).attr('modal-id');
  // $('button[type=submit]').attr('disabled', true);
  var form = $(this);
  // console.log(form); return false;
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: form.serialize(),
    success: function (response) {
      // console.log(response); return false;
      if (response.data.status == 'fail') {
        setTimeout(function () {
          $('#erResponseAssess').hide();
        }, 5000);
        $('#erResponseAssess').text(response.data.message).show();
        // $('button[type=submit]').attr('disabled', false);
        return false;
      }
      $("#" + modal_id + " [data-dismiss=modal]").click();
      $('#addMessage').html(response.data.message);
      $('#myModal').modal('show');
      setTimeout(function () {
        $("#myModal .close").click();
        location.reload();
      }, 3000);
    }, beforeSend: function () {

      // Check Question count validation
      var cCount = [];
      var allSelectedCount = true;
      $(".cl-count option:selected").each(function () {
        if (isPositiveInteger($.trim($(this).val())) == "" || $(this).val() === null) {
          allSelectedCount = false;
        } else {
          cCount.push($(this).val());
        }
      });

      // Check Difficulty Level validation
      var tough = [];
      var allSelectedDifficul = true;
      $(".cl-tough option:selected").each(function () {
        // if (isPositiveInteger($.trim($(this).val())) =="" || $(this).val() === null) {
        if ($(this).val() === null) {
          allSelectedDifficul = false;
        } else {
          tough.push($(this).val());
        }
      });

      // Check LO validation
      var allSelectedLo = true;
      var lo = [];
      $(".cl-lo option:selected").each(function () {
        if (isPositiveInteger($.trim($(this).val())) == "" || $(this).val() === null) {
          allSelectedLo = false;
        } else {
          lo.push($(this).val());
        }
      });

      // var allSelectedModule = true;
      // var module = [];
      // $(".module-lo option:selected").each(function() {
      //     if (isPositiveInteger($.trim($(this).val())) =="" || $(this).val() === null) {
      //         allSelectedModule = false;
      //     }else {
      // 		module.push($(this).val());
      // 	}
      // });	



      // console.log(allSelectedCount+'=='+allSelectedDifficul+'=='+allSelectedLo+'=='+allSelectedModule+'==')

      // return false;
      if (allSelectedCount == false || allSelectedDifficul == false || allSelectedLo == false) {
        $('#erResponseAssess').text('All fields are required').show();
        // $('button[type=submit]').attr('disabled', false);
        return false;
      } else {

        var newArr = [];
        for (let i = 0; i < tough.length; i++) {
          newArr.push(module[i] + '_' + tough[i] + '_' + lo[i])
        }
        let uniqueElements = new Set(newArr);
        if (uniqueElements.size !== newArr.length) {
          $('#erResponseAssess').text(page.lang_add_ques_form_alert_1).show();
          // $('button[type=submit]').attr('disabled', false);
          setTimeout(function () {
            $('#erResponseAssess').hide();
          }, 5000);
          return false;
        } else {
          $('#erResponseAssess').text('').hide();
        }
      }

      setTimeout(function () {
        $('#erResponseAssess').hide();
      }, 5000);
    },

  });

});

// Check number is positive 
function isPositiveInteger(value) {
  var regex = /^[1-9]\d*$/;
  return regex.test(value);
}
// create new unique numeric number 
function uniqIdVar() {
  return Date.now() + Math.floor(Math.random() * 1000);
}

// This function used to delete the run time created HTML for PAL add question difficult system by Yuvraj Singh
function deleteAddPalQuesDifficulHtml(id, updateId) {
  if (updateId === 0) {
    var selectedValues = $('#get_count_' + id + ' option:selected').text();
    var oldcounts = $("#add-count").text();
    if (!isNaN($.trim(oldcounts))) {
      var newVal = parseFloat(oldcounts) - parseFloat(selectedValues);
      $("#add-count").text(newVal);
      $('#' + id).remove();
    }
  } else {
    var formDataObj = $('#addPalQuestionForm').serializeArray();
    formDataObj.push({ name: 'id', value: updateId });
    formDataObj.push({ name: 'function', value: 'delete_pal_added_question' });
    $.ajax({
      type: "POST",
      url: page.courseurl,
      data: formDataObj,
      success: function (response) {
        // console.log(response); return false;
        if (response.status == 'success') {
          var selectedValue = $('#get_count_' + id + ' option:selected').text();
          var oldcount = $("#add-count").text();
          if (!isNaN($.trim(oldcount))) {
            var newVal = parseFloat(oldcount) - parseFloat(selectedValue);
            $("#add-count").text(newVal);
            $('#' + id).remove();
          }
          $('#erResponseAssess').text(response.message).show();

        } else {
          $('#erResponseAssess').text(response.message).show();
        }
        setTimeout(function () {
          $('#erResponseAssess').hide();
        }, 5000);
      }, beforeSend: function () {

      },

    });
  }
}

// This function used to show the message if course is pal included but questions not added for assessment by Yuvraj Singh
function showMessagePalWithoutQues() {
  $('#addMessage').html(page.lang_add_diff_ques_alert_1);
  $('#myModal').modal('show');
  return false;
}




// Only allow alpha numeric and . - # rest of special character not allowed for lo & competency by Yuvraj Singh
function pregMatchForLoAndCompetency(inputValue, errId, flag) {

  if (flag == 1) { // for code section
    // Only allow alphanumeric characters, dot (.), hyphen (-), and hash (#)
    // var BLIDRegExpression = /^[a-zA-Z0-9.\-#]+$/;     
    // var BLIDRegExpression = /^[a-zA-Z0-9.\-#\u0900-\u097F]+$/u;
    var BLIDRegExpression = /^[\p{L}\p{M}0-9.\-#\s]+$/u;

    if (!BLIDRegExpression.test(inputValue)) {
      $('#' + errId).text('').text(page.lang_preg_match_code_alert_1).show().css('color', 'red');
      return false;
    }
  } else if (flag == 2) {
    // var BLIDRegExpression = /^[a-zA-Z0-9.\-#,\/? ]+$/; 
    // var BLIDRegExpression = /^[a-zA-Z0-9.\-#\u0900-\u097F]+$/u; 
    var BLIDRegExpression = /^[\p{L}\p{M}0-9.\-#\s]+$/u;
    if (!BLIDRegExpression.test(inputValue)) {
      $('#' + errId).text('').text(page.lang_preg_match_desc_alert_2).show().css('color', 'red');
      return false;
    }
  }

  return true; // Return true if the input passes validation
}


// Validate learning objective input fields by yuvraj singh
function validateInputFieldLO(maxLength, inputValue, errId, target, flag) {
  // Bind keyup event on input fields with the class 'max-length-input'
  var inputLength = inputValue.length;
  if (inputLength > 0) {
    // Validate text // if flag is 1 means its code if flag 2 means description
    if (!pregMatchForLoAndCompetency(inputValue, errId, flag)) {
      return false;
    }
  }

  // Show error if input exceeds maxLength
  if (inputLength > maxLength) {
    inputValue.substring(0, maxLength); // Limit the characters			
    $('#' + errId).text('').text(page.lang_char_val_alert_1 + ' ' + maxLength + ' ' + page.lang_char_val_alert_2).show();
    $(target).val(inputValue.substring(0, maxLength));
    clearTimeout(hideErrorTimeout);
    return false;
  } else {
    // // setTimeout(function(){
    // 	$('#'+errId).hide();
    // // },4000);

    clearTimeout(hideErrorTimeout);
    hideErrorTimeout = setTimeout(function () {
      $('#' + errId).hide();
    }, 2000)
  }
}

// Validate competency input fields by yuvraj singh
function validateInputFieldCompe(maxLength, errId, target, flag) {
  // Bind keyup event on input fields with the class 'max-length-input'
  var inputValue = $('#' + target).val();
  var inputLength = inputValue.length;
  // Validate text		
  if (inputLength > 0) {
    if (target != 'course-goal-text-area') {
      if (!pregMatchForLoAndCompetency(inputValue, errId, flag)) {
        return false;
      }
    }
  }
  // Show error if input exceeds maxLength
  if (inputLength > maxLength) {
    inputValue = inputValue.substring(0, maxLength);
    const $target = $('#' + target);
    $('#' + errId).text(page.lang_char_val_alert_1 + ' ' + maxLength + ' ' + page.lang_char_val_alert_2).show().css('color', 'red');
    $target.off('keyup');
    $target.val(inputValue);
    clearTimeout(hideErrorTimeout);
    return false;
    // inputValue.substring(0, maxLength); // Limit the characters
    // $('#'+errId).text('').text('Maximum input length of '+maxLength+' characters is being exceeded.').show().css('color','red');	
    // const $target = $('#' + target);
    // $target.off('keyup');
    // $target.val(inputValue.substring(0, maxLength));	
    // // $target.on('keyup');
    // return false;
  } else {

    clearTimeout(hideErrorTimeout);
    hideErrorTimeout = setTimeout(function () {
      $('#' + errId).hide();
    }, 2000)


    // // setTimeout(function(){
    // 	$('#'+errId).hide();
    // // },4000);			
  }
}


// Empty course goal pop up on close buttton click by Yuvraj Singh
function emptyCourseGoalPopUp() {
  $('#cm_id').prop('selectedIndex', 1);
  $('#add-lo').html('');
  $('#is_additional_1').prop('checked', false);
  $('#erResponse').hide();
}

// Empty competency pop up on close buttton click by Yuvraj Singh
function emptyCompetencyPopUp() {
  $('#add_code,#add_competency').val('');
  $('#add-competency').html('');
  $('#erCompResponse').hide();
}



$('#container-popup [data-dismiss=modal]').on('click', function (e) {
  let activeID = getUrlParameter('modeActive')
  // render_modules(activeID);

  if (window.videoPlayerSocket) {
    window.videoPlayerSocket.disconnect();
    window.videoPlayerSocket.close();
    window.videoPlayerSocket.destroy();
  }

  if (window.videoPlayer) {
    window.videoPlayer.dispose();
    clearInterval(emitInterval);
    clearInterval(window.videoComplteInterval);
    clearInterval(window.videoInterval);
  }
});



function changeTabForModule(module_tab, type) {
  var id = $(module_tab).attr('id');
  var sub_class = $(module_tab).attr('data-filter');

  var value_of_i = $(module_tab).attr('data-rel');
  $(module_tab).closest('.module-panel').find('.panel-body').removeClass('prerequisites learning_material assignment additional_content exercises');
  $(module_tab).closest('.module-panel').find('.panel-body').addClass(sub_class);

  if ($(module_tab).closest('.module-panel').find('.panel-body .' + sub_class).length == 0) {
    var val_name = sub_class.split('_');
    var text = ''
    if (type == 1) {
      text = page.lang_no_prerequisites_text;
    } else if (type == 2) {
      text = page.lang_no_learning_text;
    } else if (type == 3) {
      text = page.lang_no_assignment_text;
    } else if (type == 4) {
      text = page.lang_no_additional_text;
    } else {
      text = page.lang_no_activity_found;
    }
    $('#no-content-found-' + value_of_i).html(text).show();
    // console.log(val_name+' -- No data found');
  } else {
    $('#no-content-found-' + value_of_i).html(page.lang_no_activity_found).hide();
  }
}


function openFirstAccordionTab(id) {
  $('#prerequisite-tab-' + id).trigger('click');
}

$(window).on("load", function () {
  setTimeout(() => {
    var element = $('.on-load-case-student.active');
    if (element.length > 0) {
      // Fetch the 'rel' attribute if the element is found
      var relAttr = element.attr('data-rel');
      openFirstAccordionTab(relAttr);
      // Perform additional actions if needed
    }
  }, 2500);
});

$('#close-map-lo-popup').click(function () {
  $('#erloMapResponse').empty();
})

function call_php_function(modulename, init, param = null) {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "POST",
      url: page.url + '/' + page.prod_root + '/' + 'module/' + modulename + '/' + modulename + '.php',
      data: {
        load_class: modulename,
        fa_fun: init,
        param: param
      },
      success: function (data) {
        resolve(data); // Resolve the promise when successful
      },
      error: function (error) {
        reject(error); // Reject the promise if there's an error
      }
    });
  });
}

$(document).on('change', ".final_assessment_class", function (e) {  // Use 'change' instead of 'click'
  e.preventDefault();
  if ($(this).prop("checked")) {
    let final_assessment_selected_value = $(this).val();
    if (confirm(page.lang_fa_confirmation)) {
      final_asssessment_checkbox = call_php_function('FinalAssessment', 'save_final_assessment', final_assessment_selected_value);
      final_asssessment_checkbox.then(
        (result) => {
          // This runs if the Promise is resolved
          // $(".final_assessment_class").prop("disabled", true);
          $("#btn_question_bank").addClass('d-none');
          $("#btn_add_assessment").addClass('d-none');
          $("#nav-quiz-tab").trigger("click");
          $('#final_assessment_id_' + final_assessment_selected_value).after(result);
        },
        (error) => {
          console.log(error);  // This runs if the Promise is rejected
        }
      );
    }
    else {
      $(this).prop("checked", false);
    }
  }
});

/**
 * erase final assessment condition 
 */
$(document).on('click', ".erase_final_assesment", function (e) {
  e.preventDefault();
  let final_assessment_selected_value = $(this).attr('data-value');
  if (confirm(page.lang_fa_erase_confirmation)) {
    final_asssessment_checkbox = call_php_function('FinalAssessment', 'erase_final_assessment', final_assessment_selected_value);
    final_asssessment_checkbox.then(
      (result) => {
        // This runs if the Promise is resolved
        $("#btn_question_bank").removeClass('d-none');
        $("#btn_add_assessment").removeClass('d-none');
        $("#nav-quiz-tab").trigger("click");
        $('#final_assessment_id_' + final_assessment_selected_value).after(result);
      },
      (error) => {
        console.log(error);  // This runs if the Promise is rejected
      }
    );
  }
  else {
    $(this).prop("checked", false);
  }
});
// Edit Activity case for video inside the modules tab By Yuvraj singh
document.getElementById('edit_activity_video').addEventListener('change', edit_video_activity());
function edit_video_activity(e) {
  var f_duration = 0;  //store duration
  var hms_duration = 0;
  document.getElementById('edit_audio').addEventListener('canplaythrough', function (e) {
    //add duration in the input field #edit_f_du
    f_duration = e.currentTarget.duration;
    document.getElementById('edit_f_du').value = f_duration;
    // webkitURL.revokeObjectURL(obUrl);
  });
  //when select a file, create an ObjectURL with the file and add it in the #audio element
  document.getElementById('edit_activity_video').addEventListener('change', function (e) {
    var file = e.currentTarget.files[0];
    //check file extension for audio/video type
    if (file.name.match(/\.(avi|mp3|mp4|mpeg|ogg)$/i)) {
      obUrl = webkitURL.createObjectURL(file);
      document.getElementById('edit_audio').setAttribute('src', obUrl);
    }
  });
}

$(document).on('click', '.copy_module', function (e) {
  $('.copy_module_course_list').html('');
  $('#master_copy_module_popup').modal('show');

  let modulenum = $(e.currentTarget).attr('data-modulenum');
  $('#master-copy-module-form input[name="modulenum"]').val(modulenum);

  let moduleid = $(e.currentTarget).attr('data-moduleid');
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: {
      function: 'course_list_for_copymodule',
      moduleid: moduleid
    },
    dataType: "json",
    success: function (response) {
      let html = '';
      html += '<div class="col-12 px-0">' + page.lang_copy_module + ': ' + response.sectionname + '</h5>'
      html += '<div class="form-check">';
      html += '<input class="form-check-input custom-checkbox" type="checkbox" id="copy-module-select-all">';
      html += '<label class="form-check-label courses_syllabus_actions" for="copy-module-select-all">' + page.lang_select_all + '</label>';
      html += '</div>';
      $.each(response.courselist, function (idx, val) {
        html += '<div class="form-check">';
        html += '<input type="checkbox" id="copy-course-' + val.courseid + '" class="form-check-input custom-checkbox" name="courseids[]" value="' + val.courseid + '"/>';
        html += '<label class="form-check-label result-info" for="copy-course-' + val.courseid + '">' + val.fullname + ': ' + val.programname + '</label>';
        html += '</div>';
      });
      html += '</div>';
      html += '</div>';
      $('.copy_module_course_list').removeClass('d-none');
      $('.copy_module_course_list').html(html);
    },
    beforeSend: function () {
      // Code to display spinner
      $('.loader_copymodule').html(CONSTANTS.loader);
    },
    complete: function () {
      // Code to hide spinner.
      $('.loader_copymodule').empty();
    }
  });
});

$(document).on('click', '#copy-module-select-all', function () {
  $('.copy_module_course_list .form-check-input').prop('checked', this.checked);
});

$(document).on('submit', '#master-copy-module-form', function (e) {
  e.preventDefault();

  $('button[type=submit]').attr('disabled', true);
  $('.loader_copymodule').html(CONSTANTS.loader);
  $('.copy_module_course_list').addClass('d-none');

  var form = $(this);
  var url = form.attr('action');
  $.ajax({
    type: "POST",
    url: url,
    data: form.serialize(),
    success: function (response) {
      if (response.status == 'success') {
        $('.copy_module_course_list').html('');
      }
      $('#addMessage').empty();
      $('#addMessage').append('<ul>');
      $.each(response.data, function (idx, val) {
        $('#addMessage').append('<li>' + val + '</li>');
      });
      $('#addMessage').append('</ul>');
      $('#myModal').modal('show');
      setTimeout(function () {
        $("#myModal .close").click();
      }, 5000);
    },
    complete: function () {
      $('#master_copy_module_popup').modal('hide');
      $('#nav-syllabus-tab').trigger('click');
      $('button[type=submit]').attr('disabled', false);
    }
  });
});

$(document).on('click', '.show-hide-section', function () {
  let sectionid = $(this).attr('data-module');
  let visibility = $(this).attr('data-visibility');
  let courseid = $(this).attr('data-course');

  $.ajax({
    type: "POST",
    url: page.url + "/" + page.prod_root + "/call_api.php?fun=trigyn_section_visibility",
    mathod: 'POST',
    data: {
      sectionid: sectionid,
      visibility: visibility,
      courseid: courseid
    },
    success: function (response) {
      response = JSON.parse(response);
      if (response.status == 'success') {
        $('#nav-modules-tab').trigger('click');
      }
      $('#addMessage').html(response.message);
    },
    complete: function () {
      $('#myModal').modal('show');
      setTimeout(function () {
        $("#myModal").modal('hide');
      }, 5000);
    }
  })
});

$(document).on('click', '#btn-learning-outcome', function () {
  $('.uploadLoForm #cm_id').prop('disabled', false);
});
// When the button is clicked
$(document).on('click', '.new-btn-learning-outcome_class', function () {
  $('#add-lo').empty();
  $('#moduleEditLoForm #get_existing_lo_list,#addLoForm #get_existing_outcome').removeClass('d-none');
  $('.uploadLoForm #cm_id').prop('disabled', false);
  // Get the value from the button's data attribute (or any other value you need)
  var learningOutcome = $(this).attr('learning-outcome');

  let select = $('#cm_id');
  console.log(select.find(`option[value="${learningOutcome}"]`));
  if (select.find(`option[value="${learningOutcome}"]`).length) {
    select.val(learningOutcome).trigger('change');
  }
  else {
    var activityname = $(this).attr('data-activity-name');
    var cmid = $(this).attr('learning-outcome');
    let newOption = new Option(activityname, cmid, true, true);
    select.append(newOption).trigger('change');
  }

  // Pass the value to the modal input field (or any other element in the modal)
  //   $('#cm_id').val(learningOutcome).trigger('change');

  $('.uploadLoForm #cm_id').select2('enable', false);
  //   $('.uploadLoForm #cm_id').prop('disabled', true);
  // Optional: You can also log it for debugging purposes
});

// $(document).on('click','#btn-learning-outcome', function() {
// 	$('#cm_id').val(0).trigger('change');
//   });

// Ajax request to get the single LO record by Yuvraj Singh	
// Render Edit LO ajax request return data into html form by Yuvraj Singh
function render_activity_lo(data) {
  var html = '';
  html += '<div class="activity_lo_list_class">';
  html += '<div class="row">';
  html += '<div class="col-md-12"><label>Activity Name:- ' + data.activity_name + '</label></div>';
  html += '</div>';
  // html+= '<div class="col-md-8"><label>'+page.lang_lo+'</label></div>';
  $.each(data.lo_records, function (lokey, lo_value) {
    // var activityName = '';
    // if(val.name==null){
    // 	activityName = 'Topic';
    // } else {
    // 	activityName =val.name;
    // }
    html += '<div class="row" id="row_lo_' + lo_value.lo_id + '">';
    html += '<div class="col-md-2"><label><b>LO code</b></label></div>';
    html += '<div class="col-md-4">' + lo_value.lo_code + '</div>';
    html += '<input type="hidden" id="hidden_cmid" class="hidden_cmid" value="' + lo_value.cmid + '">';
    html += '<div class="col-md-4">' + lo_value.lo_description + '</div>';

    // html+= '<div class="col-md-7"><input type="hidden" name="existing_activities[]" value="'+val.cm_id+'"><label class="search_activity" rel="'+val.cm_id+'-'+val.module+'">'+activityName+' - '+val.cm_id+'</label></div>';
    html += '<div class="col-md-1"><a href="javascript:void(0)" onclick="return unlink_lo(' + lo_value.lo_id + ',' + lo_value.cmid + ',2)"><span class="fas fa-trash-alt"></span></a></div>';
    html += '</div>';
  });

  html += '</div>';

  $('#moduleEdit-add-lo').empty();
  $('#moduleEdit-add-lo').append(html);
  $('#moduleEditLearningOutcomeModal').modal('show');
}

function activityWiseLO(cm_id) {
  $('#moduleEditLoForm #get_existing_lo_list,#addLoForm #get_existing_outcome').removeClass('d-none');
  $('#moduleEdit-chapter-list').empty();
  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: {
      function: 'get_course_goal_lo_activity_wise',
      type: 'lo',
      course_id: page.courseid,
      cm_id: cm_id,
    },
    dataType: "json",
    success: function (response) {
      // console.log(response); return false;
      render_activity_lo(response.data);
    },
    beforeSend: function () {
      // Code to display spinner
      $('.loader_lo').html("<div style='display: flex;height: 300px;justify-content: center;align-items: center;'><img src='" + page.book_loader + "' style='width: 150px;margin: 0 auto; vertical-align: middle;'/></div>");
    },
    complete: function () {
      // Code to hide spinner.
      $('.loader_lo').empty();
      $('.loader_lo').css('display', 'none');
    }
  });
}

// Delete Activity from the Learning Objective By Yuvraj Singh
function unlink_lo(lo_id, cm_id, flag) {
  // if Flag is 1 means its run time added Activity where we only need to delete HTML
  if (flag === 1) {
    $('#lo-chapter-outcome-title-' + chap_id).remove();
  } else if (flag === 2) {
    let isChapLO = confirm(page.lang_delete_act_alert_1);
    if (isChapLO === false) {
      return false;
    }
    var modal_id = 'editLoForm';
    $.ajax({
      type: "POST",
      url: page.courseurl,
      data: { lo_id: lo_id, cm_id: cm_id, function: 'delete_lo_from_activity' },
      success: function (response) {
        if (!response.data.message) {
          console.log('#row_lo_' + lo_id);
          $('#row_lo_' + lo_id).remove();
          $('#addMessage').html(response.data.message);
          $('#myModal').modal('show');
          return false;
        } else {
          console.log('#row_lo_' + lo_id);
          if (response.data.status == 0) { } else {
            $('#row_lo_' + lo_id).remove();
          }
          $("#" + modal_id + " [data-dismiss=modal]").click();
          $('#addMessage').html(response.data.message);
          $('#myModal').modal('show');
          setTimeout(function () {
            $("#myModal .close").click();
            $("#nav-modules-tab").trigger('click');
          }, 3000);
        }
      }, beforeSend: function () {
      }, complete: function () {
        $('#moduleEditLoForm #get_existing_lo_list,#addLoForm #get_existing_outcome').removeClass('d-none');
      }
    });
  }
}


$(document).on('submit', '#moduleEditLoForm', function (e) {
  e.preventDefault(); // avoid to execute the actual submit of the form.
  var modal_id = $(this).attr('id');
  // $('button[type=submit]').attr('disabled', true);
  var form = $(this);
  var hasDuplicates;
  const lo_values = {};
  if ($('#moduleEditLoForm .exist_lo').length > 0) {
    $('#moduleEditLoForm .exist_lo').each(function () {
      if ($.trim($(this).val()) == '') {
        return false;
      }
      const value = $(this).val();
      if (lo_values[value]) {
        hasDuplicates = true;
      } else {
        lo_values[value] = true;
      }
    });
  }
  if (hasDuplicates) {
    $('#erResponseLomoduleEditCase').text(page.lang_add_compe_alert_1).show(); return false;
  }

  var selectedValues = [];
  $("#moduleEditLoForm .exist_lo").each(function () {
    var val = $.trim($(this).val());
    if (val !== "") {
      selectedValues.push(val);
    }
  });

  if ($('#moduleEdit-chapter-list').html().trim() !== '') {
    if (selectedValues.length === 0) {
      $('#erResponseLomoduleEditCase').text('Please select Learning Outcome first').show();
      setTimeout(function () {
        $('#erResponseLomoduleEditCase').text('').hide();
      }, 5000);
      return false;
    }
  }


  // Log or use the selected values
  var cm_id = $('.hidden_cmid').val();

  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: { lo_id: JSON.stringify(selectedValues), cm_id: cm_id, course_id: page.courseid, function: 'mapped_lo_to_activity' },
    success: function (response) {
      if (!response.data.message) {
        $('#addMessage').html(response.data.message);
        $('#myModal').modal('show');
        return false;
      } else {
        $("#" + modal_id + " [data-dismiss=modal]").click();
        $('#addMessage').html(response.data.message);
        $('#myModal').modal('show');
        setTimeout(function () {
          $("#myModal .close").click();
          $("#nav-modules-tab").trigger('click');
        }, 2000);
      }
    },
    beforeSend: function () {
    },
  });
  $('#erResponseLomoduleEditCase').text('').hide();
});



// Bulk upload question bank using CSV start here

(function () {
  // Variables
  let selectedFile = null;

  const dropArea = document.getElementById("drop-area");
  const fileElem = document.getElementById("fileElem");
  const fileNameDisplay = document.getElementById("file-name");
  const uploadForm = document.getElementById("csv-upload-form");
  const messageBox = document.getElementById("upload-message");

  // Button click to show modal
  $('#btn_bulk_upload').on('click', function () {
    $('#generateBulkQuesModal').modal('show');
  });

  // Drop area styling
  const highlightEvents = ["dragenter", "dragover"];
  const unhighlightEvents = ["dragleave", "drop"];

  highlightEvents.forEach(event => {
    dropArea.addEventListener(event, e => {
      e.preventDefault();
      dropArea.style.borderColor = "green";
    });
  });

  unhighlightEvents.forEach(event => {
    dropArea.addEventListener(event, e => {
      e.preventDefault();
      dropArea.style.borderColor = "#ccc";
    });
  });

  // Drop handler
  dropArea.addEventListener("drop", e => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length !== 1) {
      showMessage("Only one CSV files are allowed.", "error");
      return;
    }
    handleFile(files[0]);
  });

  // File input handler
  fileElem.addEventListener("change", e => {
    const files = e.target.files;
    if (files.length !== 1) {
      showMessage("Only one CSV files are allowed.", "error");
      fileElem.value = "";  // Reset input
      return;
    }
    handleFile(files[0]);
  });

  // File validation
  function handleFile(file) {
    if (file && file.name.endsWith(".csv")) {
      selectedFile = file;
      fileNameDisplay.textContent = `Selected: ${file.name}`;
    } else {
      //   alert("Only CSV files are allowed.");
      selectedFile = null;
      fileNameDisplay.textContent = "";
      showMessage("Only CSV files are allowed.", "error");
    }
  }

  // Form submission via AJAX
  uploadForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!selectedFile) {
      showMessage("Please select a CSV file first.", "error");
      return;
    }

    $('#submit-csv-file').empty().html('Uploading CSV....');

    const formData = new FormData();
    formData.append("csv_file", selectedFile);
    formData.append("function", "question_bank_bulk_upload");

    $.ajax({
      url: page.courseurl, // Ensure this is defined in your context
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (data) {
        if (data.status == 'success') {
          showMessage(data.message, "success");
          selectedFile = null;
          fileElem.value = ""; // Clear file input
          fileNameDisplay.textContent = ""; // Clear displayed name
        } else {
          alert(data.message);
        }
        $('#submit-csv-file').empty().html('Upload CSV');
      },
      error: function (xhr, status, error) {
        showMessage(xhr.responseText || "An error occurred.", "error");
        $('#submit-csv-file').empty().html('Upload CSV');
      }
    });

  });

  function showMessage(msg, type) {
    messageBox.textContent = msg;
    messageBox.style.color = type === "success" ? "green" : "red";
    messageBox.style.fontWeight = "bold";
    setTimeout(function () {
      $('#upload-message').empty();
    }, 2000)
  }


})();

// Bulk upload question bank using WORD start here
(function () {
  // Variables
  let selectedFile = null;

  const dropArea = document.getElementById("drop-area-1");
  const fileElem = document.getElementById("fileElem-1");
  const fileNameDisplay = document.getElementById("file-name-1");
  const uploadForm = document.getElementById("word-upload-form-1");
  const messageBox = document.getElementById("upload-message-1");

  // Button click to show modal
  $('#btn_word_bulk_upload').on('click', function () {
    $('#generateBulkWordQuesModal').modal('show');
  });

  // Drop area styling
  const highlightEvents = ["dragenter", "dragover"];
  const unhighlightEvents = ["dragleave", "drop"];

  highlightEvents.forEach(event => {
    dropArea.addEventListener(event, e => {
      e.preventDefault();
      dropArea.style.borderColor = "green";
    });
  });

  unhighlightEvents.forEach(event => {
    dropArea.addEventListener(event, e => {
      e.preventDefault();
      dropArea.style.borderColor = "#ccc";
    });
  });

  // Drop handler
  dropArea.addEventListener("drop", e => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length !== 1) {
      showMessage("Only one word files are allowed.", "error");
      return;
    }
    handleFile(files[0]);
  });

  // File input handler
  fileElem.addEventListener("change", e => {
    const files = e.target.files;
    if (files.length !== 1) {
      showMessage("Only one word files are allowed.", "error");
      fileElem.value = "";  // Reset input
      return;
    }
    handleFile(files[0]);
  });

  // File validation
  function handleFile(file) {
    if (file && (file.name.endsWith(".doc") || file.name.endsWith(".docx"))) {
      selectedFile = file;
      fileNameDisplay.textContent = `Selected: ${file.name}`;
    } else {
      //   alert("Only word files are allowed.");
      selectedFile = null;
      fileNameDisplay.textContent = "";
      showMessage("Only word files are allowed.", "error");
    }
  }

  // Form submission via AJAX
  uploadForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!selectedFile) {
      showMessage("Please select a word file first.", "error");
      return;
    }

    $('#submit-word-file').empty().html('Uploading WORD....');



    // var form = new FormData();
    // form.append("file", fileInput.files[0], "");

    // var settings = {
    // "url": "https://uploaddocx.diksha.gov.in/upload",
    // "method": "POST",
    // "timeout": 0,
    // "processData": false,
    // "mimeType": "multipart/form-data",
    // "contentType": false,
    // "data": form
    // };

    // $.ajax(settings).done(function (response) {
    // console.log(response);
    // });





    const formData = new FormData();
    formData.append("file", selectedFile);
    // formData.append("function", "question_bank_word_bulk_upload");

    $.ajax({
      url: "https://uploaddocx.diksha.gov.in/v2/upload", // Ensure this is defined in your context
      type: "POST",
      data: formData,
      timeout: 0,
      processData: false,
      mimeType: "multipart/form-data",
      contentType: false,
      success: function (data, status_code, xhr) {
        // console.log(xhr);
        if (xhr.status === 200 || xhr.status === 201) {
          // Create a Blob with XML content
          const blob = new Blob([data], { type: 'application/xml' });
          // Create a download link
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = 'downloaded.xml';
          document.body.appendChild(link);
          link.click();

          // Clean up
          document.body.removeChild(link);
          window.URL.revokeObjectURL(link.href);

          showMessage('File successfully converted into XML file.', "success");
          selectedFile = null;
          fileElem.value = ""; // Clear file input
          fileNameDisplay.textContent = ""; // Clear displayed name

        }
        $('#submit-word-file').empty().html('Upload WORD');
      },
      error: function (xhr, status, error) {
        var res = JSON.parse(xhr.responseText);
        showMessage(res.error || "An error occurred.", "error");
        selectedFile = null;
        fileElem.value = ""; // Clear file input
        fileNameDisplay.textContent = ""; // Clear displayed name
        $('#submit-word-file').empty().html('Upload WORD');
      }
    });

  });

  function showMessage(msg, type) {
    messageBox.textContent = msg;
    messageBox.style.color = type === "success" ? "green" : "red";
    messageBox.style.fontWeight = "bold";
    setTimeout(function () {
      $('#upload-message-1').empty();
    }, 2000)
  }

})();

// Announcement Delete popup trigger here
$(document).on('click', '.delete_announcement', function () {
  // var cmid = $('.delete_announcement').attr('data-id');
  var cmid = $(this).attr('data-id');
  var announce_name = $(this).attr('data-rel');
  // alert(announce_name);
  $('#delete_announcement_id').val(cmid);
  $('#delete_announcement_name').html(page.lang_delete_announce_alert_1 + " <b>" + " ( " + announce_name + " ) " + "</b>");
  // $('#delete_announcement_name').html(page.lang_delete_announce_alert_1);
  $('#deleteAnnouncementModal #gridModalLabel').text('Delete Announcement');
  $('#deleteAnnouncementModal').find('.modal_footer').removeClass('d-none')
  $('#deleteAnnouncementModal').modal('show');
});

// Announcement delete ajax request hit here 
$(document).on('submit', '#deleteAnnouncementForm', function (e) {
  e.preventDefault(); // avoid to execute the actual submit of the form.
  var fail = false;
  var form_id = $(this).attr('id');
  var modal_id = $(this).attr('modal_id');
  $('button[type=submit]').attr('disabled', true);
  var form = $(this);
  var url = form.attr('action');
  $.ajax({
    type: "POST",
    url: url,
    data: form.serialize(),
    success: function (data) {
      // console.log(data);
      $('button[type=submit]').removeAttr('disabled');
      $("#" + modal_id + " [data-dismiss=modal]").click();
      $('#addMessage').html(data.message);
      $('#myModal').modal('show');
      setTimeout(function () {
        $("#myModal .close").click();
      }, 5000);
      var hash = window.location.hash;
      $('#nav-tab a[href="' + hash + '"]').siblings('.panel-heading').addClass('active');
      location.reload();
    }
  });
});


/**
 * Function 1: Get File URLs from section_id
 * This function fetches file URLs (PDF, MP4, PPTX, DOCX) for a given section
 */
function getFileUrls(section_id, course_id, userid) {
  return new Promise(function (resolve, reject) {
    console.log('Fetching file URLs for section_id:', section_id);

    $.ajax({
      type: "POST",
      url: page.courseurl,
      data: {
        section_id: section_id,
        course_id: course_id,
        userid: userid,
        function: 'generate_audio'
      },
      success: function (data) {
        try {
          var resData = JSON.parse(data);
          console.log('File URLs received:', resData);

          // Check if we got valid file URLs
          if (resData && Array.isArray(resData) && resData.length > 0) {
            // Validate that each item has a url property
            var validUrls = resData.filter(function (item) {
              return item && item.url;
            });

            if (validUrls.length > 0) {
              resolve(validUrls);
            } else {
              reject(new Error('No valid file URLs found in response'));
            }
          } else {
            reject(new Error('No file URLs found for this section'));
          }
        } catch (e) {
          console.error('Error parsing file URLs response:', e);
          reject(new Error('Failed to parse file URLs response'));
        }
      },
      error: function (xhr, status, error) {
        console.error('Error fetching file URLs:', status, error);
        reject(new Error('Failed to fetch file URLs: ' + (error || 'Request failed')));
      }
    });
  });
}

/**
 * Function 2: Generate Podcast Audio from File URLs
 * This function takes file URLs (PDF, MP4, PPTX, DOCX) and generates podcast audio
 * Uses new ingestion API with polling approach
 */
function generatePodcastFromUrls(fileUrls, section_id) {
  // Reset UI state
  $('#podcastLoadingSection').show();
  $('#podcastPlayerSection').hide();
  $('#podcastAudio').attr('src', '');
  // Disable Join Conversation button when resetting
  $('#joinConversationBtn').prop('disabled', true).css({ cursor: 'not-allowed', opacity: '0.6' });

  // HARDCODED URL FOR LOCAL TESTING - Chapter Podcast
  // TODO: Remove this hardcoded URL after testing
  // fileUrls = [
  // 	{
  // 		"url": "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/bmzbbujw9kal/b/Diksha-Dev-Learning-Source-Bucket/o/680600b3a1d5d_1745223859_43_Matter.mp4"
  // 	  },
  // 	  {
  // 		"url": "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/bmzbbujw9kal/b/Diksha-Dev-Learning-Source-Bucket/o/680601aa0ded2_1745224106_43_Explain the composition of matter and their properties .mp4"
  // 	  },
  // 	  {
  // 		"url": "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/bmzbbujw9kal/b/Diksha-Dev-Learning-Source-Bucket/o/68062504e8d50_1745233156_43_Illustrate the concept of interparticle space in matter.mp4"
  // 	  },
  // 	  {
  // 		"url": "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/bmzbbujw9kal/b/Diksha-Dev-Learning-Source-Bucket/o/68062c03cf39d_1745234947_43_Illustrate the concept of diffusion.mp4"
  // 	  },
  // 	  {
  // 		"url": "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/bmzbbujw9kal/b/Diksha-Dev-Learning-Source-Bucket/o/68062e08e768a_1745235464_43_Factors affecting particles motion in  matter   (1).mp4"
  // 	  },
  // 	  {
  // 		"url": "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/bmzbbujw9kal/b/Diksha-Dev-Learning-Source-Bucket/o/67e7ccae36204_1743244462_43_T8_Transformation between different states of matter.mp4"
  // 	  },
  // 	  {
  // 		"url": "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/bmzbbujw9kal/b/Diksha-Dev-Learning-Source-Bucket/o/67e7cd10a31da_1743244560_43_T9_Sublimation.mp4"
  // 	  },
  // 	  {
  // 		"url": "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/bmzbbujw9kal/b/Diksha-Dev-Learning-Source-Bucket/o/67e7ce4b371aa_1743244875_43_T10_Latent heat of fusion and vaporisation.mp4"
  // 	  },
  // 	  {
  // 		"url": "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/bmzbbujw9kal/b/Diksha-Dev-Learning-Source-Bucket/o/67e7d118be160_1743245592_43_T12_Factors affecting change of state of matter.mp4"
  // 	  },
  // 	  {
  // 		"url": "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/bmzbbujw9kal/b/Diksha-Dev-Learning-Source-Bucket/o/67e7d1ad0b847_1743245741_43_T13_Evapoartion and factors affecting rate of evaporation.mp4"
  // 	  },
  // 	  {
  // 		"url": "https://objectstorage.ap-hyderabad-1.oraclecloud.com/n/bmzbbujw9kal/b/Diksha-Dev-Learning-Source-Bucket/o/680722abc9ff7_1745298091_43_Classification of solids, liquids and gases based on their properties.mp4"
  // 	},
  // ];

  // Podcast API configuration - Base URL for ingestion API
  var apiBaseUrl = 'https://capps-backend-czeetkay2qris.delightfulcliff-bc4308b6.centralindia.azurecontainerapps.io';

  // Polling configuration
  var POLL_CONFIG = {
    INITIAL_DELAY_MS: 2000,      // Wait 2s before first poll
    POLL_INTERVAL_MS: 3000,       // Poll every 3 seconds
    MAX_POLL_ATTEMPTS: 200,       // Max ~10 minutes of polling
    READY_STATUSES: ['ready'],
    FAILED_STATUSES: ['failed'],
    PROCESSING_STATUSES: ['pending', 'processing', 'outdated']
  };

  var pollAttempts = 0;
  var pollTimer = null;
  // Track whether we've already tried a regenerate for this module
  var hasAttemptedRegenerate = false;

  // Helper function to remove version parameter from URL
  function removeVersionFromUrl(url) {
    if (!url) return url;

    // Remove version parameter (&v=digits) from anywhere in the URL
    // Handles cases like:
    // - &v=1770275843 (at end)
    // - &v=1770275843&other=value (in middle)
    // Uses case-insensitive matching to handle &V= as well
    var cleanedUrl = url.replace(/&v=\d+/gi, '');

    // Also handle ?v=digits at the start of query string (less common but possible)
    cleanedUrl = cleanedUrl.replace(/\?v=\d+(&|$)/gi, function (match, p1) {
      // If followed by &, replace with ?, otherwise remove entirely
      return p1 === '&' ? '?' : '';
    });

    return cleanedUrl;
  }

  // Helper function to check if URL has supported extension
  // Handles: direct URLs (e.g. .../file.pdf?token=), and encoded query (e.g. ...file=...%2Ffile.pdf%3Ftoken)
  function hasSupportedExtension(url) {
    if (!url) return false;
    var urlLower = url.toLowerCase();
    // .pdf/.mp4/.pptx/.docx followed by ? & end, or URL-encoded %3F (?), %26 (&)
    if (/\.(mp4|pdf|pptx|docx)(\?|&|$|%3f|%26)/i.test(urlLower)) return true;
    // Viewer-style URL (e.g. viewer.html?file=ENCODED_URL): check decoded file= value
    var fileMatch = urlLower.match(/[?&]file=([^&]+)/);
    if (fileMatch) {
      try {
        var decoded = decodeURIComponent(fileMatch[1]);
        return /\.(mp4|pdf|pptx|docx)(\?|&|$)/i.test(decoded);
      } catch (e) {
        return false;
      }
    }
    return false;
  }

  // Resolve URL for API: if viewer URL (viewer.html?file=...), extract and decode the inner file URL
  function resolveFileUrlForApi(url) {
    if (!url) return url;
    // Match file= parameter (value may be URL-encoded)
    var fileMatch = url.match(/[?&]file=([^&]+)/i);
    if (fileMatch) {
      try {
        var innerUrl = decodeURIComponent(fileMatch[1]);
        return removeVersionFromUrl(innerUrl);
      } catch (e) {
        console.warn('Could not decode file= parameter, using original URL');
      }
    }
    return removeVersionFromUrl(url);
  }

  // Build files array from file URLs - filter for supported extensions and remove version
  var filesArray = [];
  for (var i = 0; i < fileUrls.length; i++) {
    if (fileUrls[i] && fileUrls[i].url) {
      var originalUrl = fileUrls[i].url;

      // Only include URLs with supported extensions (.mp4, .pdf, .pptx, .docx)
      if (hasSupportedExtension(originalUrl)) {
        var cleanedUrl = resolveFileUrlForApi(originalUrl);
        console.log('Original URL:', originalUrl);
        console.log('Cleaned URL (version removed):', cleanedUrl);
        filesArray.push({
          url: cleanedUrl
        });
      } else {
        console.log('Skipping unsupported file type:', originalUrl);
      }
    }
  }

  // Validate we have at least one supported file URL
  if (filesArray.length === 0) {
    showPodcastError('No supported files found (PDF, MP4, PPTX, or DOCX) to generate podcast');
    return;
  }

  // Create module_id from section_id
  var module_id = 'audio-section-' + section_id;

  // Store module_id in global Q&A state for interactive Q&A
  if (typeof qaState !== 'undefined') {
    qaState.currentModuleId = module_id;
  }
  // Also store in window for easy access
  window.currentSectionId = section_id;
  window.currentModuleId = module_id;

  // Request data for ingestion API
  var requestData = {
    module_id: module_id,
    files: filesArray,
    voice_config: {
      language_preset: "indian_english"
    },
    auto_regenerate: true,
    force_regenerate: false
  };

  console.log('Submitting ingestion request with', filesArray.length, 'file(s)...');
  console.log('API Base URL:', apiBaseUrl);
  console.log('Module ID:', module_id);
  console.log('Request data:', JSON.stringify(requestData, null, 2));
  console.log('Files array:', filesArray);

  // Step 1: Submit ingestion request
  $.ajax({
    url: apiBaseUrl + '/api/module/ingest',
    method: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(requestData),
    success: function (ingestData, textStatus, xhr) {
      console.log('Ingestion response received:', xhr.status, textStatus);
      console.log('Ingestion data:', ingestData);

      // Check if ingestion returned an error status
      if (ingestData.status === 'error') {
        var errorMsg = (ingestData.error && ingestData.error.message) || 'Ingestion failed';
        console.error('Ingestion error:', errorMsg);
        showPodcastError(errorMsg);
        return;
      }

      // Check if already ready (cached)
      var moduleStatus = ingestData.status || ingestData.module_status;
      if (moduleStatus === 'ready') {
        console.log('Module already ready, fetching audio directly');
        fetchAndPlayAudio(module_id, apiBaseUrl);
        return;
      }

      // Step 2: Start polling for status
      console.log('Starting polling for module status...');
      pollModuleStatus(module_id, apiBaseUrl, POLL_CONFIG);
    },
    error: function (xhr, status, error) {
      console.error('Error submitting ingestion request:', status, error);
      console.error('Response status:', xhr.status);
      console.error('Response:', xhr.responseText);

      var errorMessage = 'Failed to submit ingestion request';

      // Try to parse error response
      if (xhr.responseText) {
        try {
          var errorData = JSON.parse(xhr.responseText);
          errorMessage = (errorData.error && errorData.error.message) ||
            errorData.detail ||
            errorData.message ||
            errorData.error ||
            errorMessage;
          console.error('Parsed error data:', errorData);
        } catch (e) {
          console.error('Failed to parse error response:', e);
          errorMessage = xhr.responseText || errorMessage;
        }
      }

      // Add status code information
      if (xhr.status === 422) {
        errorMessage = 'Request failed: No content could be extracted in this file';
      } else if (xhr.status) {
        errorMessage = 'HTTP ' + xhr.status + ': ' + (errorMessage || error || 'Request failed');
      }

      showPodcastError(errorMessage);
    }
  });

  // Function to poll module status
  function pollModuleStatus(moduleId, baseUrl, config) {
    // Wait before first poll
    setTimeout(function () {
      performPoll(moduleId, baseUrl, config);
    }, config.INITIAL_DELAY_MS);
  }

  // Function to perform a single poll
  function performPoll(moduleId, baseUrl, config) {
    pollAttempts++;

    if (pollAttempts > config.MAX_POLL_ATTEMPTS) {
      console.error('Polling timeout after', pollAttempts, 'attempts');
      showPodcastError('Timeout - generation is taking too long. Please check module status later.');
      return;
    }

    console.log('Polling attempt #' + pollAttempts + ' for module:', moduleId);

    $.ajax({
      url: baseUrl + '/api/module/ingest/' + encodeURIComponent(moduleId),
      method: 'GET',
      success: function (statusData, textStatus, xhr) {
        console.log('Poll #' + pollAttempts + ' - Status response:', statusData);

        // Determine the status field (different response formats)
        var moduleStatus = statusData.status || statusData.module_status;
        console.log('Module status:', moduleStatus);

        if (config.READY_STATUSES.indexOf(moduleStatus) !== -1) {
          // Generation complete - fetch audio
          console.log('Module is ready, fetching audio...');
          fetchAndPlayAudio(moduleId, baseUrl);
          return;
        }

        if (config.FAILED_STATUSES.indexOf(moduleStatus) !== -1) {
          var errorMsg = statusData.last_error || statusData.error || 'Generation failed';
          console.error('Generation failed:', errorMsg);

          // If this is the first failure, try to regenerate once
          if (!hasAttemptedRegenerate) {
            hasAttemptedRegenerate = true;
            console.log('Module status failed for the first time. Attempting regenerate for module:', moduleId);

            $.ajax({
              url: baseUrl + '/api/module/ingest/' + encodeURIComponent(moduleId) + '/regenerate',
              method: 'POST',
              contentType: 'application/json',
              data: JSON.stringify({ module_id: moduleId }),
              success: function () {
                console.log('Regenerate request submitted successfully. Restarting polling...');
                // Reset attempts and start polling again
                pollAttempts = 0;
                pollModuleStatus(moduleId, baseUrl, config);
              },
              error: function (xhr, status, error) {
                console.error('Regenerate request failed:', status, error);
                console.error('Regenerate response status:', xhr.status);
                console.error('Regenerate response:', xhr.responseText);

                var regenError = 'Generation failed and regenerate request could not be submitted';
                if (xhr.responseText) {
                  try {
                    var regenData = JSON.parse(xhr.responseText);
                    regenError = regenData.error || regenData.detail || regenData.message || regenError;
                  } catch (e) {
                    console.error('Failed to parse regenerate error response:', e);
                  }
                }

                showPodcastError(regenError);
              }
            });
          } else {
            // Already tried regenerate once, show final error to user
            showPodcastError(errorMsg);
          }
          return;
        }

        // Still processing - continue polling
        if (config.PROCESSING_STATUSES.indexOf(moduleStatus) !== -1 || !moduleStatus) {
          console.log('Module still processing, will poll again in', config.POLL_INTERVAL_MS, 'ms');
          pollTimer = setTimeout(function () {
            performPoll(moduleId, baseUrl, config);
          }, config.POLL_INTERVAL_MS);
        } else {
          console.warn('Unknown status:', moduleStatus, '- continuing to poll');
          pollTimer = setTimeout(function () {
            performPoll(moduleId, baseUrl, config);
          }, config.POLL_INTERVAL_MS);
        }
      },
      error: function (xhr, status, error) {
        console.error('Status check failed:', status, error);
        console.error('Response status:', xhr.status);
        console.error('Response:', xhr.responseText);

        var errorMessage = 'Failed to check module status';

        // Try to parse error response
        if (xhr.responseText) {
          try {
            var errorData = JSON.parse(xhr.responseText);
            errorMessage = (errorData.error && errorData.error.message) ||
              errorData.detail ||
              errorData.message ||
              errorMessage;
          } catch (e) {
            console.error('Failed to parse error response:', e);
          }
        }

        showPodcastError(errorMessage);
      }
    });
  }

  // Function to set podcast streaming URL and play when ready (no download, stream from API)
  function fetchAndPlayAudio(moduleId, baseUrl) {
    console.log('Setting podcast streaming URL for module:', moduleId);
    // Podcast streaming URL - same base as ingest API: /api/module/podcast/audio/{moduleId}
    var streamUrl = baseUrl + '/api/module/podcast/audio/' + encodeURIComponent(moduleId);
    console.log('Stream URL:', streamUrl);

    // Close the popup modal
    $('#podcastModal').modal('hide');

    // Get module name from the chapter name in popup
    var moduleName = $('#add-chapter-name').text() || 'Chapter Podcast';

    // Get the new design section elements - using simple IDs
    var podcastPopup = $('#podcast-features-popup');
    var audioElement = document.getElementById('podcastAudio');

    if (!audioElement) {
      console.error('Audio element not found. Looking for: podcastAudio');
      showPodcastError('Audio player element not found');
      return;
    }

    console.log('Found audio element:', audioElement);

    // Revoke previous blob URL if it was a blob (from old flow)
    if (audioElement.src && audioElement.src.indexOf('blob:') === 0) {
      URL.revokeObjectURL(audioElement.src);
    }

    // Set streaming URL on audio element (browser will stream, no download)
    audioElement.src = streamUrl;
    audioElement.volume = 1;
    audioElement.muted = false;
    audioElement.load();

    // Update module name in new design section
    $('#podcast-module-name').text(moduleName);

    // Set up audio event listeners for new design section
    audioElement.addEventListener('loadedmetadata', function () {
      // Update total time display
      var totalTime = formatTime(audioElement.duration);
      $('.podcast-total-time').text(totalTime);
      // Do NOT call initAudioContext() here: it uses createMediaElementSource() which
      // routes audio through Web Audio API and triggers CORS - cross-origin stream
      // would then output zeroes and no sound. Keep playback via the element only.
    }, { once: true });

    // Handle stream load error
    // audioElement.addEventListener('error', function() {
    // 	console.error('Podcast stream load error');
    // 	showPodcastError('Failed to load podcast audio. Please reload the page and try again.');
    // }, { once: true });

    // Update progress bar and time display (played / remaining) - fires ~4x/sec
    audioElement.addEventListener('timeupdate', function () {
      if (audioElement.duration && !isNaN(audioElement.duration)) {
        var current = audioElement.currentTime;
        var total = audioElement.duration;
        var percent = (current / total) * 100;

        $('.podcast-progress-fill').css('width', percent + '%');
        $('.podcast-current-time').text(formatTime(current));
        $('.podcast-total-time').text(formatTime(total - current));
      }
    });

    // Enable Join Conversation button when podcast is playing (only if visible)
    audioElement.addEventListener('play', function () {
      if ($('#joinConversationBtn').is(':visible')) {
        $('#joinConversationBtn').prop('disabled', false).css({ cursor: 'pointer', opacity: '1' });
      }
      // Update play button icon
      $('#playBtn span').removeClass('micon-play').addClass('micon-pause');
      // Start waveform animation
      $('#podcastWaveform').addClass('playing');
    });

    // Disable Join Conversation button when podcast is paused (only if visible)
    audioElement.addEventListener('pause', function () {
      if ($('#joinConversationBtn').is(':visible')) {
        $('#joinConversationBtn').prop('disabled', true).css({ cursor: 'not-allowed', opacity: '0.6' });
      }
      // Update play button icon
      $('#playBtn span').removeClass('micon-pause').addClass('micon-play');
      // Stop waveform animation
      $('#podcastWaveform').removeClass('playing');
    });

    // Disable Join Conversation button when podcast ends (only if visible)
    audioElement.addEventListener('ended', function () {
      if ($('#joinConversationBtn').is(':visible')) {
        $('#joinConversationBtn').prop('disabled', true).css({ cursor: 'not-allowed', opacity: '0.6' });
      }
      // Update play button icon
      $('#playBtn span').removeClass('micon-pause').addClass('micon-play');
      // Stop waveform animation
      $('#podcastWaveform').removeClass('playing');
    });

    // Show the new design section
    podcastPopup.show();

    // Join Conversation button remains hidden by default (only shown when user clicks "Join the Conversation" feature button)
    // If visible, disable it initially (will be enabled when audio plays)
    if ($('#joinConversationBtn').is(':visible')) {
      $('#joinConversationBtn').prop('disabled', true).css({ cursor: 'not-allowed', opacity: '0.6' });
    }

    // Sync Replay button state (disabled when Q&A active, enabled when idle)
    if (typeof updateReplayButtonState === 'function') {
      updateReplayButtonState();
    }

    console.log('Podcast streaming URL set, ready to play in new design section');
  }
}

/**
 * Helper function to format time in MM:SS format
 */
function formatTime(seconds) {
  if (isNaN(seconds) || seconds < 0) return '0:00';
  var mins = Math.floor(seconds / 60);
  var secs = Math.floor(seconds % 60);
  return mins + ':' + secs.toString().padStart(2, '0');
}

/**
 * Event handlers for new design section podcast controls
 * Using simple IDs: playBtn, muteBtn, replayBtn, joinConversationBtn, podcastAudio
 */
console.log('=== Registering podcast button event handlers ===');

// Register handlers for AI feature buttons (Podcast and Join Conversation)
console.log('=== Registering AI feature button handlers ===');

// Test function to verify handlers are registered and buttons exist
function testPodcastButtons() {
  console.log('=== TESTING PODCAST BUTTONS ===');

  var playBtn = $('#playBtn');
  var muteBtn = $('#muteBtn');
  var replayBtn = $('#replayBtn');
  var joinBtn = $('#joinConversationBtn');
  var audioElement = document.getElementById('podcastAudio');

  console.log('Play button found:', playBtn.length > 0, playBtn.length > 0 ? playBtn.attr('id') : 'NOT FOUND');
  console.log('Mute button found:', muteBtn.length > 0, muteBtn.length > 0 ? muteBtn.attr('id') : 'NOT FOUND');
  console.log('Replay button found:', replayBtn.length > 0, replayBtn.length > 0 ? replayBtn.attr('id') : 'NOT FOUND');
  console.log('Join button found:', joinBtn.length > 0, joinBtn.length > 0 ? joinBtn.attr('id') : 'NOT FOUND');
  console.log('Audio element found:', audioElement !== null, audioElement ? audioElement.id : 'NOT FOUND');

  if (audioElement) {
    console.log('Audio src:', audioElement.src);
    console.log('Audio paused:', audioElement.paused);
  }

  console.log('=== END TEST ===');
}

// Register handlers when document is ready
$(document).ready(function () {
  console.log('Document ready - registering podcast handlers');
  setTimeout(testPodcastButtons, 500);
});

// Play/Pause button handler - using simple ID
$(document).on('click', '#playBtn, #playBtn *', function (e) {
  console.log('=== PLAY BUTTON CLICKED ===');
  console.log('Event target:', e.target);
  console.log('Current target:', e.currentTarget);

  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();

  var audioElement = document.getElementById('podcastAudio');

  if (!audioElement) {
    console.error('Audio element not found (ID: podcastAudio)');
    return false;
  }

  if (!audioElement.src) {
    console.log('Audio not loaded yet. Audio src:', audioElement.src);
    return false;
  }

  console.log('Audio element found, src:', audioElement.src, 'paused:', audioElement.paused);

  // Always pause Join Conversation audio when play button is clicked
  if (typeof qaState !== 'undefined' && qaState.qaAudioElement) {
    var currentMode = qaState.mode;
    qaState.qaAudioElement.pause();

    if (qaState.recognizer && (currentMode === 'listening' || currentMode === 'listening_waiting' || currentMode === 'listening_active')) {
      try {
        qaState.recognizer.stopContinuousRecognitionAsync();
      } catch (e) {
        console.log('Error stopping recognition:', e);
      }
    }

    if (currentMode === 'playing' || currentMode === 'playing_intro' || currentMode === 'listening' || currentMode === 'listening_waiting' || currentMode === 'listening_active') {
      qaState.mode = 'idle';
      if (typeof updateJoinConversationButtonState === 'function') {
        updateJoinConversationButtonState('idle');
      }
    }
    console.log('Join Conversation audio paused');
  }

  if (audioElement.paused) {
    // Ensure audio is audible (some browsers ignore sound when element was hidden with display:none)
    audioElement.volume = 1;
    audioElement.muted = false;
    audioElement.play().then(function () {
      $('#playBtn span').removeClass('micon-play').addClass('micon-pause');
      console.log('✓ Audio playing');
    }).catch(function (error) {
      console.error('✗ Error playing audio:', error);
      alert('Error playing audio: ' + error.message);
    });
  } else {
    audioElement.pause();
    $('#playBtn span').removeClass('micon-pause').addClass('micon-play');
    console.log('✓ Audio paused');
  }

  return false;
});

// Mute/Unmute button handler - using simple ID
$(document).on('click', '#muteBtn, #muteBtn *', function (e) {
  console.log('=== MUTE BUTTON CLICKED ===');
  console.log('Event target:', e.target);

  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();

  var audioElement = document.getElementById('podcastAudio');

  if (!audioElement) {
    console.error('Audio element not found (ID: podcastAudio)');
    return false;
  }

  if (!audioElement.src) {
    console.log('Audio not loaded yet');
    return false;
  }

  var icon = $('#muteBtn span');
  var isMuted = audioElement.muted;

  audioElement.muted = !isMuted;

  if (typeof qaState !== 'undefined' && qaState.qaAudioElement) {
    qaState.qaAudioElement.muted = !isMuted;
  }

  if (!isMuted) {
    // When muting, change to no_sound icon
    icon.removeClass('micon-volume_up micon-volume_off').addClass('micon-no_sound');
    icon.attr('title', 'Unmute');
    console.log('✓ Audio muted');
  } else {
    // When unmuting, change back to volume_up icon
    icon.removeClass('micon-volume_off micon-no_sound').addClass('micon-volume_up');
    icon.attr('title', 'Mute');
    console.log('✓ Audio unmuted');
  }

  return false;
});

// Replay button handler - using simple ID
// When Join Conversation audio is playing, Replay is disabled so only one audio plays at a time
$(document).on('click', '#replayBtn, #replayBtn *', function (e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();

  // Do not replay while Join Conversation is active (listening/processing/playing)
  if (typeof qaState !== 'undefined' && qaState.mode !== 'idle') {
    console.log('Replay ignored - Join Conversation is active:', qaState.mode);
    return false;
  }

  console.log('=== REPLAY BUTTON CLICKED ===');

  var audioElement = document.getElementById('podcastAudio');

  if (!audioElement) {
    console.error('Audio element not found (ID: podcastAudio)');
    return false;
  }

  if (!audioElement.src) {
    console.log('Audio not loaded yet');
    return false;
  }

  audioElement.currentTime = 0;
  audioElement.volume = 1;
  audioElement.muted = false;
  audioElement.play().then(function () {
    $('#playBtn span').removeClass('micon-play').addClass('micon-pause');
    $('#podcastWaveform').addClass('playing');
    console.log('✓ Audio replayed');
  }).catch(function (error) {
    console.error('✗ Error replaying audio:', error);
    alert('Error replaying audio: ' + error.message);
  });

  return false;
});

// Join Conversation button handler - using simple ID
// Note: The main handler is in course.html which calls startQAListening(), stopQAListening(), etc.
// This handler ensures the audio element reference is set correctly for the new design section
// We use a lower priority by registering it first, so the course.html handler runs after
$(document).on('click', '#joinConversationBtn', function (e) {
  console.log('=== JOIN CONVERSATION BUTTON CLICKED (new design setup) ===');
  console.log('Event target:', e.target);

  // Ensure audio element reference is set for Q&A functions
  var audioElement = document.getElementById('podcastAudio');
  if (audioElement && typeof qaState !== 'undefined') {
    qaState.podcastAudioElement = audioElement;
    console.log('Audio element reference set for Q&A:', audioElement.id);
  }

  // Don't prevent default or stop propagation - let the course.html handler run
  // This just ensures the audio reference is correct before the main handler executes
});

// Global function for podcast close button (inline onclick)
function handlePodcastCloseClick(e) {
  console.log('=== PODCAST CLOSE BUTTON CLICKED ===');
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  // Pause Podcast audio
  var audioElement = document.getElementById('podcastAudio');
  if (audioElement) {
    audioElement.pause();
    audioElement.currentTime = 0;
    console.log('Podcast audio paused and reset');
  }

  // Pause Join Conversation audio and stop speech recognition
  if (typeof qaState !== 'undefined') {
    if (qaState.qaAudioElement) {
      qaState.qaAudioElement.pause();
      qaState.qaAudioElement.currentTime = 0;
      console.log('Join Conversation audio paused');
    }
    if (qaState.recognizer && (qaState.mode === 'listening' || qaState.mode === 'listening_waiting' || qaState.mode === 'listening_active')) {
      try {
        qaState.recognizer.stopContinuousRecognitionAsync();
      } catch (err) {
        console.log('Error stopping recognition:', err);
      }
      qaState.recognizer = null;
    }
    if (qaState.silenceTimer) {
      clearInterval(qaState.silenceTimer);
      qaState.silenceTimer = null;
    }
    qaState.mode = 'idle';
    qaState.savedPosition = null;
    qaState.accumulatedText = '';
    qaState.hasSpoken = false;
    qaState.lastSpeechTime = null;
    if (typeof updateJoinConversationButtonState === 'function') {
      updateJoinConversationButtonState('idle');
    }
  }

  $('#podcastWaveform').removeClass('playing');

  // Find and hide popup
  var btn = e && e.target ? $(e.target).closest('#podcastCloseBtn, .close-icon') : $('#podcastCloseBtn');
  var popup = btn.length ? btn.closest('.podcast-features-popup') : $('.podcast-features-popup:visible');
  if (!popup.length) {
    popup = $('#podcast-features-popup');
  }
  popup.hide();
  console.log('Podcast popup hidden');
  return false;
}

// Fallback: event delegation for podcast close button
$(document).on('click', '#podcastCloseBtn, .podcast-features-popup .close-icon', function (e) {
  console.log('=== PODCAST CLOSE (event delegation) ===');
  handlePodcastCloseClick(e);
});

// Progress bar click handler for new design section
$(document).on('click', '.np-bar', function (e) {
  var audioElement = document.getElementById('podcastAudio');

  if (!audioElement || !audioElement.src || !audioElement.duration) {
    return;
  }

  var bar = $(this);
  var offsetX = e.offsetX || (e.pageX - bar.offset().left);
  var percent = offsetX / bar.width();
  audioElement.currentTime = percent * audioElement.duration;
  console.log('Progress bar clicked, seeking to:', percent * 100 + '%');
});

// Global functions for inline onclick handlers (called from dynamically generated HTML)
function handlePodcastFeatureClick(element) {
  console.log('=== PODCAST FEATURE BUTTON CLICKED (inline onclick) ===');
  console.log('Element:', element);

  var $btn = $(element);
  var section_id = $btn.data('module-id');
  var course_id = $btn.data('course-id');
  var user_id = $btn.data('user-id');
  var module_rel = $btn.data('module-rel');

  $('#podcastModalClose').attr('data-module-id', section_id);
  $('#podcastModalClose').attr('data-course-id', course_id);

  console.log('Section ID:', section_id);
  console.log('Course ID:', course_id);
  console.log('User ID:', user_id);
  console.log('Module Rel:', module_rel);

  if (!section_id || !course_id || !user_id) {
    console.error('Missing required data attributes');
    console.error('Section ID:', section_id);
    console.error('Course ID:', course_id);
    console.error('User ID:', user_id);
    return false;
  }

  // Set module name in popup
  $('#add-chapter-name').text(module_rel || 'Chapter Podcast');
  console.log('Module name set in popup:', module_rel || 'Chapter Podcast');

  // Open the popup modal (Bootstrap modal will handle this via data-toggle/data-target, but we ensure it's called)
  console.log('Opening podcast modal...');
  $('#podcastModal').modal('show');

  // Generate audio (same as Chapter Podcast button)
  console.log('Calling generateAudio with:', section_id, course_id, user_id);
  generateAudio(section_id, course_id, user_id);

  // Hide Join Conversation button when opened via Podcast button
  $('#joinConversationBtn').hide();
  console.log('Join Conversation button hidden');

  return false;
}

function handleJoinConversationFeatureClick(element) {
  console.log('=== JOIN THE CONVERSATION FEATURE BUTTON CLICKED (inline onclick) ===');
  console.log('Element:', element);

  var $btn = $(element);
  var section_id = $btn.data('module-id');
  var course_id = $btn.data('course-id');
  var user_id = $btn.data('user-id');
  var module_rel = $btn.data('module-rel');

  console.log('Section ID:', section_id);
  console.log('Course ID:', course_id);
  console.log('User ID:', user_id);

  if (!section_id || !course_id || !user_id) {
    console.error('Missing required data attributes');
    return false;
  }

  // Same behavior as Podcast button: open modal, call generateAudio (API calls)
  $('#add-chapter-name').text(module_rel || 'Chapter Podcast');
  $('#podcastModal').modal('show');
  generateAudio(section_id, course_id, user_id);

  // Only change: SHOW Join Conversation button (Podcast button hides it)
  $('#joinConversationBtn').show();
  console.log('Join Conversation button shown');

  return false;
}

// Also keep event delegation handlers as backup (in case inline onclick doesn't work)
$(document).on('click', '.podcast-feature-btn, .podcast-feature-btn *', function (e) {
  // Only handle if inline onclick didn't work
  if (!e.isDefaultPrevented()) {
    console.log('=== PODCAST FEATURE BUTTON CLICKED (event delegation fallback) ===');
    var $btn = $(this).closest('.podcast-feature-btn');
    if ($btn.length === 0) {
      $btn = $(this);
    }
    handlePodcastFeatureClick($btn[0]);
  }
});

$(document).on('click', '.join-conversation-feature-btn, .join-conversation-feature-btn *', function (e) {
  // Only handle if inline onclick didn't work
  if (!e.isDefaultPrevented()) {
    console.log('=== JOIN CONVERSATION FEATURE BUTTON CLICKED (event delegation fallback) ===');
    var $btn = $(this).closest('.join-conversation-feature-btn');
    if ($btn.length === 0) {
      $btn = $(this);
    }
    handleJoinConversationFeatureClick($btn[0]);
  }
});

// Log confirmation that handlers are registered
console.log('=== AI Feature Button Handlers Registered ===');
console.log('Podcast button handler: .podcast-feature-btn');
console.log('Join Conversation button handler: .join-conversation-feature-btn');

// Test function to check if buttons exist in DOM
function testAIFeatureButtons() {
  console.log('=== TESTING AI FEATURE BUTTONS ===');
  var podcastBtns = $('.podcast-feature-btn');
  var joinConvBtns = $('.join-conversation-feature-btn');

  console.log('Podcast feature buttons found:', podcastBtns.length);
  podcastBtns.each(function (index) {
    console.log('  Button ' + (index + 1) + ':', {
      element: this,
      moduleId: $(this).data('module-id'),
      courseId: $(this).data('course-id'),
      userId: $(this).data('user-id'),
      moduleRel: $(this).data('module-rel')
    });
  });

  console.log('Join Conversation feature buttons found:', joinConvBtns.length);
  joinConvBtns.each(function (index) {
    console.log('  Button ' + (index + 1) + ':', {
      element: this,
      moduleId: $(this).data('module-id')
    });
  });
}

// Run test after a short delay to ensure DOM is ready
setTimeout(function () {
  testAIFeatureButtons();
}, 2000);

/**
 * Main function: Generate Audio
 * This function orchestrates the process: first get PDF URLs, then generate podcast
 */
function generateAudio(section_id, course_id, user_id) {
  console.log('generateAudio called with section_id:', section_id);
  let relValue = $('[data-module-id="' + section_id + '"]').data('module-rel');
  $('#add-chapter-name').text(relValue);

  // Reset loading section to spinner (remove any previous error)
  $('#podcastLoadingSection').html(
    '<div class="spinner-container" style="margin-bottom: 20px;">' +
    '<div class="spinner" style="width: 50px; height: 50px; border: 4px solid #e0e0e0; border-top-color: #7f4202; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto;"></div>' +
    '</div>' +
    '<h6 class="mb-0 text-black" style="color: #333; margin-bottom: 10px;"><strong>Generating Podcast</strong></h6>' +
    '<small style="color: #666;">This may take a few minutes...</small>'
  ).show();
  $('#podcastPlayerSection').hide();
  $('#podcastAudio').attr('src', '');
  // Disable Join Conversation button when resetting
  $('#joinConversationBtn').prop('disabled', true).css({ cursor: 'not-allowed', opacity: '0.6' });

  // Step 1: Get file URLs (PDF, MP4, PPTX, DOCX)
  getFileUrls(section_id, course_id, user_id)
    .then(function (fileUrls) {
      console.log('File URLs retrieved successfully:', fileUrls.length, 'file(s)');

      // Step 2: Generate podcast from file URLs
      generatePodcastFromUrls(fileUrls, section_id);
    })
    .catch(function (error) {
      console.error('Error in generateAudio process:', error);
      showPodcastError(error.message || 'Failed to generate podcast audio');
    });
}

/**
 * Function to show error message in podcast modal
 */
function showPodcastError(message) {
  console.error('Podcast Error:', message);
  $('#podcastLoadingSection').html(
    '<div style="text-align: center; padding: 40px 20px; color: #dc3545;">' +
    '<h4 style="color: #dc3545; margin-bottom: 10px;">Error</h4>' +
    '<p>' + message + '</p>' +
    '</div>'
  );
}

// Handler for "Check Your Knowledge" feature button click (inline onclick)
function handleCheckYourKnowledgeFeatureClick(event) {
  var moduleId = $(event).data('module-id');
  var courseId = $(event).data('course-id');

  localStorage.setItem('currentUrl', window.location.href);

  $.ajax({
    type: "POST",
    url: page.courseurl,
    data: {
      function: 'check_your_knowledge_feature',
      section_id: moduleId,
      course_id: courseId
    },
    dataType: "json",
    success: function (data) {
      //console.log(data);
      if (data.status == 1) {
        redirectUrl = page.url + '/' + page.prod_root + '/check_your_knowledge.php?id=' + courseId + '&section=' + moduleId;
        window.location.href = redirectUrl;
      } else {
        alert(data.message);
        return false;
      }
    },
    beforeSend: function () {
    },
    complete: function () {
    }
  });
}