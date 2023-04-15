

const jobs = '';


var url = "http://localhost:3000/api/job/";

$(document).ready(function () {

    axios.get(url)
        .then((response) => {
                 jobs = response.data.map((item) => {
                $('#Records').find('tbody').append([
                    '<tr data-id="' + item.jobId + '">',
                    '<td>' + item.jobId + '</td>',
                    '<td>' + item.jobTitle + '</td>',
                    '<td>' + item.jobDescription + '</td>',
                    '<td>' + item.ExpReq + '</td>',
                    '<td>' + item.location + '</td>',
                    '<td>',
                    '<div style="display:inline; align-items:left">',
                    '<button  id="edit" class="btn btn-danger btn-sm-8" style="margin-right: 5px;">Apply</button>',
                    '</div>',
                    '</td>',
                    '</tr>'
                ].join(''));
            })
        })
        .catch((error) => {
            console.log("Not Found");
        })

    })

