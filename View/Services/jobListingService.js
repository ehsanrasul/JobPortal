const jobs = [];

var url = "http://localhost:3000/api/job/";

$(document).ready(function () {

    axios.get(url)
        .then((response) => {
                 response.data.forEach((item) => {
                 jobs.push(item)   
                $('#Records').find('tbody').append([
                    '<tr data-id="' + item.jobId + '">',
                    '<td>' + item.jobId + '</td>',
                    '<td>' + item.jobTitle + '</td>',
                    '<td>' + item.jobDescription + '</td>',
                    '<td>' + item.ExpReq + '</td>',
                    '<td>' + item.location + '</td>',
                    '<td>',
                    '<div style="display:inline; align-items:left">',
                    '<button  id="apply" class="btn btn-danger btn-sm-8" style="margin-right: 5px;">Apply</button>',
                    '</div>',
                    '</td>',
                    '</tr>'
                ].join(''));
            })
        })
        .catch((error) => {
            console.log("Not Found");
        })


        //Getting the Jobs for which User Has Applied
        //const sessionId = localStorage.getItem("sessionId")
        axios.get("http://localhost:3000/api/application/"+"ali519")
        .then((response) => {
                 response.data.forEach((item) => {  
                    console.log(item.jobId)

            })
        })
        .catch((error) => {
            console.log("D");
        })
        


        //Searching
        $('#searchButton').click((e) => {
            e.preventDefault()

            var searchItem = $("#searchItem").val();

            $('#tableBody').empty()
            var flag = false;
            jobs.forEach(item => {
                if(item.jobTitle.toLowerCase().startsWith(searchItem.toLowerCase())){
                    $('#Records').find('tbody').append([
                        '<tr data-id="' + item.jobId + '">',
                        '<td>' + item.jobId + '</td>',
                        '<td>' + item.jobTitle + '</td>',
                        '<td>' + item.jobDescription + '</td>',
                        '<td>' + item.ExpReq + '</td>',
                        '<td>' + item.location + '</td>',
                        '<td>',
                        '<div style="display:inline; align-items:left">',
                        '<button  id="apply" class="btn btn-danger btn-sm-8" style="margin-right: 5px;">Apply</button>',
                        '</div>',
                        '</td>',
                        '</tr>'
                    ].join(''));

                    flag = true;
                }
            });
            
            if(flag == false){

                $('#Records').find('tbody').append([

                    '<h3 class="text-center" style="margin: auto;"> <i>No Such Record Found</i></h3>'

                ].join(''));
            } 
        })




        $('#Records').on('click', '#apply', function () {

            window.location.replace("http://127.0.0.1:5500/View/Application.html");

        });

    })



