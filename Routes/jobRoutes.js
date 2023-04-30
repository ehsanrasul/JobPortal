const express = require('express')
const app = express()
require('dotenv').config()
const jwt = require('jsonwebtoken')
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Job = require('../Model/jobModel')


app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())



const verifyToken = (req, res, next) => {

  const token  = localStorage.getItem('token');
  if(!token) {
    res.status(200).json({
        success: false,
        message: "Error Token was not Provieded"
    })
  }

  try{
      const decodedToken = jwt.verify(token, process.env.SECRET);
      req.token = decodedToken;
      next();
  }catch(err){
    res.status(401).json({
      success: false,
      message: err.message
    })
  }
}



//Fetching all Jobs
app.get('/'  ,async (req , res)=>{
    var decodedToken = req.token
    try {
    const jobs = await Job.find()
    res.json(jobs)
    }
    catch(err) {
        res.status.json({message: err.message})
    }
})



app.post('/addJobs', (req, res) => {

    Job.insertMany(jobs)
      .then((result) => {
        console.log(`Inserted ${result.length} jobs into the database`);
        res.send(`Inserted ${result.length} jobs into the database`);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error inserting jobs into the database');
      });
  });
  
  
module.exports = verifyToken;
module.exports = app;



const jobs = [
    {
      "jobId": "J001",
      "jobTitle": "Software Engineer",
      "jobDescription": "Develop and maintain software applications.",
      "ExpReq": "3+ years",
      "location": "San Francisco, CA"
    },
    {
      "jobId": "J002",
      "jobTitle": "Product Manager",
      "jobDescription": "Oversee the development and launch of new products.",
      "ExpReq": "5+ years",
      "location": "New York, NY"
    },
    {
      "jobId": "J003",
      "jobTitle": "Sales Associate",
      "jobDescription": "Sell products and services to customers.",
      "ExpReq": "1+ years",
      "location": "Chicago, IL"
    },
    {
      "jobId": "J004",
      "jobTitle": "Graphic Designer",
      "jobDescription": "Create visual designs for print and digital media.",
      "ExpReq": "2+ years",
      "location": "Los Angeles, CA"
    },
    {
      "jobId": "J005",
      "jobTitle": "Marketing Manager",
      "jobDescription": "Develop and implement marketing strategies to promote products and services.",
      "ExpReq": "5+ years",
      "location": "Seattle, WA"
    },
    {
      "jobId": "J006",
      "jobTitle": "Financial Analyst",
      "jobDescription": "Analyze financial data to identify trends and make recommendations.",
      "ExpReq": "3+ years",
      "location": "Houston, TX"
    },
    {
      "jobId": "J007",
      "jobTitle": "Human Resources Coordinator",
      "jobDescription": "Provide administrative support to the HR department.",
      "ExpReq": "1+ years",
      "location": "Boston, MA"
    },
    {
      "jobId": "J008",
      "jobTitle": "Data Scientist",
      "jobDescription": "Analyze and interpret large datasets to identify insights and trends.",
      "ExpReq": "5+ years",
      "location": "Washington, D.C."
    },
    {
      "jobId": "J009",
      "jobTitle": "Account Manager",
      "jobDescription": "Manage and develop relationships with clients.",
      "ExpReq": "3+ years",
      "location": "Atlanta, GA"
    },
    {
      "jobId": "J010",
      "jobTitle": "Project Manager",
      "jobDescription": "Plan, execute, and monitor projects to ensure successful completion.",
      "ExpReq": "5+ years",
      "location": "Dallas, TX"
    },
    {
      "jobId": "J011",
      "jobTitle": "Customer Service Representative",
      "jobDescription": "Assist customers with inquiries and provide support.",
      "ExpReq": "1+ years",
      "location": "Denver, CO"
    },
    {
      "jobId": "J012",
      "jobTitle": "Web Developer",
      "jobDescription": "Design and develop websites and web applications.",
      "ExpReq": "3+ years",
      "location": "San Diego, CA"
    },
    {
      "jobId": "J013",
      "jobTitle": "Operations Manager",
      "jobDescription": "Oversee the day-to-day operations of a business or organization.",
      "ExpReq": "5+ years",
      "location": "Miami, FL"
    },
        {
          "jobId": "J014",
          "jobTitle": "Content Writer",
          "jobDescription": "Create written content for websites, blogs, and other media.",
          "ExpReq": "2+ years",
          "location": "Austin, TX"
        },
        {
          "jobId": "J015",
          "jobTitle": "Quality Assurance Engineer",
          "jobDescription": "Ensure software and products meet quality standards.",
          "ExpReq": "3+ years",
          "location": "Philadelphia, PA"
        },
        {
          "jobId": "J016",
          "jobTitle": "Business Analyst",
          "jobDescription": "Analyze business processes and make recommendations for improvement.",
          "ExpReq": "2+ years",
          "location": "Portland, OR"
        },
        {
          "jobId": "J017",
          "jobTitle": "Network Engineer",
          "jobDescription": "Design and maintain computer networks.",
          "ExpReq": "5+ years",
          "location": "Phoenix, AZ"
        },
        {
          "jobId": "J018",
          "jobTitle": "Customer Success Manager",
          "jobDescription": "Manage relationships with customers to ensure satisfaction and retention.",
          "ExpReq": "3+ years",
          "location": "San Antonio, TX"
        },
        {
          "jobId": "J019",
          "jobTitle": "UI/UX Designer",
          "jobDescription": "Design user interfaces and user experiences for websites and software applications.",
          "ExpReq": "3+ years",
          "location": "San Jose, CA"
        },
        {
          "jobId": "J020",
          "jobTitle": "Technical Writer",
          "jobDescription": "Create technical documentation and manuals.",
          "ExpReq": "2+ years",
          "location": "Salt Lake City, UT"
        },
        {
          "jobId": "J021",
          "jobTitle": "Sales Manager",
          "jobDescription": "Lead a sales team and develop sales strategies.",
          "ExpReq": "5+ years",
          "location": "Tampa, FL"
        },
        {
          "jobId": "J022",
          "jobTitle": "Data Analyst",
          "jobDescription": "Analyze data to identify patterns and insights.",
          "ExpReq": "2+ years",
          "location": "Seattle, WA"
        },
        {
          "jobId": "J023",
          "jobTitle": "IT Support Specialist",
          "jobDescription": "Provide technical support to end-users.",
          "ExpReq": "1+ years",
          "location": "Orlando, FL"
        },
        {
          "jobId": "J024",
          "jobTitle": "Digital Marketing Specialist",
          "jobDescription": "Develop and execute digital marketing campaigns.",
          "ExpReq": "3+ years",
          "location": "Nashville, TN"
        },
        {
          "jobId": "J025",
          "jobTitle": "Software Architect",
          "jobDescription": "Design and oversee the development of software systems.",
          "ExpReq": "8+ years",
          "location": "Mountain View, CA"
        },
        {
          "jobId": "J026",
          "jobTitle": "Data Entry Clerk",
          "jobDescription": "Enter data into computer systems.",
          "ExpReq": "1+ years",
          "location": "Louisville, KY"
        },
            {
              "jobId": "J027",
              "jobTitle": "DevOps Engineer",
              "jobDescription": "Develop and maintain the infrastructure and automation tools to support software development and deployment.",
              "ExpReq": "3+ years",
              "location": "New York, NY"
            },
            {
              "jobId": "J028",
              "jobTitle": "Human Resources Coordinator",
              "jobDescription": "Provide support to HR team in areas such as recruitment, onboarding, and employee relations.",
              "ExpReq": "2+ years",
              "location": "Chicago, IL"
            },
            {
              "jobId": "J029",
              "jobTitle": "Graphic Designer",
              "jobDescription": "Create visual concepts using computer software.",
              "ExpReq": "2+ years",
              "location": "Los Angeles, CA"
            },
            {
              "jobId": "J030",
              "jobTitle": "Project Manager",
              "jobDescription": "Plan and execute projects within scope, timeline, and budget.",
              "ExpReq": "5+ years",
              "location": "Boston, MA"
            },
            {
              "jobId": "J031",
              "jobTitle": "Social Media Manager",
              "jobDescription": "Develop and execute social media strategies.",
              "ExpReq": "3+ years",
              "location": "Atlanta, GA"
            },
            {
              "jobId": "J032",
              "jobTitle": "Cybersecurity Analyst",
              "jobDescription": "Protect computer networks and systems from cyber attacks.",
              "ExpReq": "3+ years",
              "location": "Houston, TX"
            },
            {
              "jobId": "J033",
              "jobTitle": "Front-end Developer",
              "jobDescription": "Develop user interfaces for websites and software applications.",
              "ExpReq": "2+ years",
              "location": "San Francisco, CA"
            },
            {
              "jobId": "J034",
              "jobTitle": "Accountant",
              "jobDescription": "Manage financial records and prepare financial reports.",
              "ExpReq": "4+ years",
              "location": "Washington, DC"
            },
            {
              "jobId": "J035",
              "jobTitle": "Product Manager",
              "jobDescription": "Oversee the development and launch of new products.",
              "ExpReq": "5+ years",
              "location": "Dallas, TX"
            },
            {
              "jobId": "J036",
              "jobTitle": "Database Administrator",
              "jobDescription": "Maintain and manage computer databases.",
              "ExpReq": "3+ years",
              "location": "Miami, FL"
            },
            {
              "jobId": "J037",
              "jobTitle": "Copywriter",
              "jobDescription": "Write promotional and marketing materials.",
              "ExpReq": "2+ years",
              "location": "Denver, CO"
            },
            {
              "jobId": "J038",
              "jobTitle": "IT Project Manager",
              "jobDescription": "Manage IT projects and teams.",
              "ExpReq": "6+ years",
              "location": "Seattle, WA"
            },
            {
              "jobId": "J039",
              "jobTitle": "Medical Assistant",
              "jobDescription": "Assist physicians and nurses in providing patient care.",
              "ExpReq": "1+ years",
              "location": "Phoenix, AZ"
            }

        ];
           
                
