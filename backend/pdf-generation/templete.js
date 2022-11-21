module.exports = (
  s1,
  s2,
  s3,
  s4,
  s5,
  s6,
  s7,
  s8,
  cgpa,
  status,
  branch,
  sem,
  rno,
  enrno,
  name
) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
      .App {
  text-align: center;
  list-style-type: none;
}

.head{
 background-color: greenyellow;
 padding: 15px;
 margin-top: 0px;
 font-size: 2.0em;
 
}

.list2{
  border: 1px solid rgb(44, 44, 44);
  padding: 5px;
  display: flex;
  align-items: flex-start;

  font-family: 'Times New Roman', Times, serif;
  font-weight: 500;
  font-size: 120%;
  color: blue;
  width: 180px;
}
#cg {
  background-color: rgb(33, 13, 251);
  font-size: 1.8em;
  margin-top: 15px;
width: 54.5%;
  padding-left: 45%;
  border: 1px solid black;
  color: rgb(253, 253, 253);
 
}
.list{
  list-style-type: none;
border: 5px solid gray;
border-radius: 10px;
  text-align: center;
  padding: 0;
  
}
.list li{
  
    /* padding: 5px; */
    width: 97.3vw;
}
.list1 {
  list-style-type: none;
  /* border: 2px solid grey; */
  margin-left: 140px;
  display: flex;
  flex-direction: row;
  
  
}
.list12 {
  list-style-type: none;
  /* border: 2px solid grey; */
  margin-left: 140px;
  display: flex;
  flex-direction: row;
 
  
}

.list3{
  margin-top: 20px;
}

.list1 li{
  border: 1px solid rgb(44, 44, 44);
  padding: 5px;
  width: 240px;
  
}
.list12 li {
  border: 1px solid rgb(44, 44, 44);
  padding: 5px;
  width: 240px;
  background-color: blue;
}

.list5{
  background-color: green;
  font-size: 1.2em;
  font-weight: 500;
}

.btn{
  background-color: rgb(59, 129, 251);
  color: white;
  border-radius: 30px;
  padding: 8px;
  border: 0px;
  margin-left: 20px;
  font-size: 1.1em;
  
}

.fin{
  margin-top:100px;
}

.btn:hover{
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(59, 129, 251);
  color: rgb(59, 129, 251);
  box-sizing: border-box;
  cursor: pointer;
  ;
}

.inp{
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgb(59, 129, 251);
}

.inp:focus{
  border: 1px solid green;
}

.list6{
  list-style-type: none;
  display: flex;
  width: 70%;
  padding: 0px;
}

.li1{
  color: black;
}


#st {
  background-color: rgb(79, 62, 255);
  font-size: 1.8em;

width: 54.5%;
  padding-left: 45%;
  border: 1px solid black;
  color: white;

}

.img{
  height: 120px;
  margin-left: 70px;
  margin-bottom: 20px;
  margin-top: 00px;
}

@media print{

  .head,.inp,.btn{
    visibility: hidden;
  }

  .list{
    margin-top: -120px;
    
  }

  .list1,.list12{
    margin-left: -28px;
  }
  
  #cg,#st{
    color: blue;
  }


  .list{
    margin-top: 0px;
  }

  .img{
    margin-top:-35px
    height:20px;
  }

  p{
    margin-top:-80px;
    padding-top:-20px
  }
}
    </style>
</head>
<body>
    <div class="App" isPrintable="true">
      <h2 class="head">View Result</h2>


        <p>
          <ul class="list">
            <li>
            <br>
            <br>
            <br>
              <img class="img" src="https://upload.wikimedia.org/wikipedia/en/a/ae/Devi_Ahilya_Vishwavidyalaya_Logo.png" ></img>
            </li>
            <li class="list2">
              <ul class="list6">
                <li class="li1">Name:</li>
                <li>${name}</li>
              </ul>
            </li>
            <li class="list2">
              <ul class="list6">
                <li class="li1">Roll Number: </li>
                <li>${rno}</li>
              </ul>
            </li>
            <li class="list2">
              <ul class="list6">
                <li class="li1"> Enrollment Number: </li>
                <li>${enrno}</li>
              </ul>
            </li>
            <li class="list2">
              <ul class="list6">
                <li class="li1"> Semester: </li>
                <li> ${sem}</li>
              </ul>
            </li>
            <li class="list2">
              <ul class="list6">
                <li class="li1">Branch: </li>
                <li> ${branch}</li>
              </ul>
            </li>

            <li class="list3">
              <ul class="list1">
                <li class="list5">Subject Name</li>
                <li class="list5">Subject Code</li>
                <li class="list5">Subject Theory Grade</li>
                <li class="list5">Subject Practical Garde</li>
              </ul>
            </li>
            <li>
              <ul class="list1">
                <li>${s1[0]}</li>
                <li>${s1[1]}</li>
                <li>${s1[2]}</li>
                <li>${s1[3]}</li>
              </ul>
            </li>

            <li>
              <ul class="list12">
                <li>${s2[0]}</li>
                <li>${s2[1]}</li>
                <li>${s2[2]}</li>
                <li>${s2[3]}</li>
              </ul>
            </li>
            <li>
              <ul class="list1">
                <li>${s3[0]}</li>
                <li>${s3[1]}</li>
                <li>${s3[2]}</li>
                <li>${s3[3]}</li>
              </ul>
            </li>
            <li>
              <ul class="list12">
                <li>${s4[0]}</li>
                <li>${s4[1]}</li>
                <li>${s4[2]}</li>
                <li>${s4[3]}</li>
              </ul>
            </li>
            <li>
              <ul class="list1">
                <li>${s5[0]}</li>
                <li>${s5[1]}</li>
                <li>${s5[2]}</li>
                <li>${s5[3]}</li>
              </ul>
            </li>
            <li>
              <ul class="list12">
                <li>${s6[0]}</li>
                <li>${s6[1]}</li>
                <li>${s6[2]}</li>
                <li>${s6[3]}</li>
              </ul>
            </li>
            <li>
              <ul class="list1">
                <li>${s7[0]}</li>
                <li>${s7[1]}</li>
                <li>${s7[2]}</li>
                <li>${s7[3]}</li>
              </ul>
            </li>
            <li>
              <ul class="list12">
                <li>${s8[0]}</li>
                <li>${s8[1]}</li>

                <li>${s8[2]}</li>
                <li>${s8[3]}</li>
              </ul>
            </li>

            <li class="list2" id="cg">
              CGPA: ${cgpa}
            </li>
            <li class="list2" id="st">
              Status: ${status}
            </li>
          </ul>
        </p>

        <img src="https://indorestudents.com/wp-content/uploads/2018/03/anna-university-cbcs-grading-system-2017.png" height="230px" class="fin"/>
    </div>
</body>
</html>`;
};
