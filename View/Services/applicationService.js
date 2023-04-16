


$(document).ready(function() {
    $('#applicationForm').submit(function(event) {
      event.preventDefault(); 
      const jobId = $('#jobId').val();
      const userId = $('#userId').val();
      const coverDesc = $('#coverDesc').val();
      const resume = $('#resume')[0].files[0];
  
      const formData = new FormData();
      formData.append('jobId', jobId);
      formData.append('userId', userId);
      formData.append('coverDesc', coverDesc);
      formData.append('resume', resume);
  
      $.ajax({
        url: 'http://localhost:3000/api/application/upload/',
        type: 'POST',
        data: formData,
        processData: false, // prevent jQuery from converting the formData to a query string
        contentType: false, // let the browser set the contentType automatically
        success: function(response) {
          console.log(response);
        },
        error: function(xhr, status, error) {
          console.log(error);
        }
      });
    });
  });
  