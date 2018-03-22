$(function() {

  // your code will go here
  $.ajax({
      url: 'https://www.codeschool.com/users/4577578.json',
      dataType: 'jsonp',
      success: function(response) {
        addCourses(response.courses.completed);
      }
  });

  function addCourses(courses) {

      var $badges = $('#badges');

      courses.forEach(function(course) {

          var $course = $('<div />', {
              'class': 'course'
          }).appendTo($badges);

          $('<h3 />', {
              text: course.title
          }).appendTo($course);

          var $image = $('<img />', {
              src: course.badge
          }).appendTo($course);

          $('<a />', {
              'class': 'btn btn-prmary',
              target: '_blank',
              href: course.url,
              text: 'See Course'
          }).appendTo($course);

          $($image).wrap($("<a>").attr("href",course.url));

      })

  }
});
