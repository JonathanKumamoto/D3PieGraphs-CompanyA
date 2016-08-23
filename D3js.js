/*
Copyright by Jonathan Simeon Kumamoto 2016

********************************Purpose*********************************
This file's purpose is to:
1. Parse data from a .csv file
2. Map that data and assign as an object
3. Display that data while determining the layout needed to correctly display the data.
************************************************************************

********************************Future**********************************
While not preferred, currently the file combines layout + behavior + content. 
For a future reference, I will need to seperate behavior to another .js file
as well as content to another file and have only this file render what needs to be displayed.
************************************************************************
*/

var standing = new Map(); //variable to store mapped strings to interate through

//Adds a field for the "standing" Map()
d3.csv("Data.csv", function(data) {
    data.forEach(function(d) {
    standing[d["Standing"]] =0;
    });
  });

/***********************************************************************
This particular section looks to display people's current standing in terms of official positions
*/
d3.csv("Data.csv", function(data) {
    data.forEach(function(d) {
    standing[d["Standing"]] += 1;
  });
    //Assign content for behavior purposesd
    var integerFreshman = parseInt(standing["Freshman"]);
    var integerSophomore = parseInt(standing["Sophomore"]);
    var integerJunior = parseInt(standing["Junior"]);
    var integerSenior = parseInt(standing["Senior"]);
    
    //below creates graph based on data for Standing
    var pie = new d3pie("pieChart1", {
    "header": {
          "title": {
            "text": "Company experience standing for all employees",
            "fontSize": 15,
            "font": "verdana"
          },
        },size: {
            canvasHeight: 400,
            canvasWidth: 500,
            pieInnerRadius: 0,
            pieOuterRadius: null
        },"data": {
        "content": [
            {"label":"Freshman","value":integerFreshman},
            {"label":"Sophomore","value":integerSophomore},
            {"label":"Junior","value":integerJunior},
            {"label":"Senior","value":integerSenior}
          ]
     }, "labels": {
		"outer": {
			"pieDistance": 32
		},
		"inner": {
			"format": "value"
		},
		"mainLabel": {
			"font": "verdana"
		},
		"percentage": {
			"color": "#e1e1e1",
			"font": "verdana",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#e1e1e1",
			"font": "verdana"
		},
		"lines": {
			"enabled": true,
			"color": "#cccccc"
		},
		"truncation": {
			"enabled": true
		}
	}});
});
//*****************************************************END of "standings"

var major = new Map();

/***********************************************************************
This particular section looks to display people's major
*/
d3.csv("Data.csv", function(data) {
    data.forEach(function(d) {
    major[d["Major"]] =0;
    });
  });

d3.csv("Data.csv", function(data) {
    data.forEach(function(d) {
    major[d["Major"]] += 1;
  });
    //magic happens here
    var integerArt = parseInt(major["Art"]);
    var integerBiology = parseInt(major["Biology"]);
    var integerChemistry = parseInt(major["Chemistry"]);
    var integerComputerScience = parseInt(major["Computer Science"]);
    var integerEconomics = parseInt(major["Economics"]);
    var integerMedievalHistory = parseInt(major["Medieval History"]);
    var integerPhysics = parseInt(major["Physics"]);
    var integerSocialScience = parseInt(major["Social Science"]);
    
    //below creates graph based on data for Standing
    var pie = new d3pie("pieChart2", {
    "header": {
          "title": {
            "text": "Company's collective majors",
            "fontSize": 15,
            "font": "verdana"
          },
        },size: {
            canvasHeight: 400,
            canvasWidth: 500,
            pieInnerRadius: 0,
            pieOuterRadius: null
        },"data": {
        "content": [
            {"label":"Art","value":integerArt},
            {"label":"Biology","value":integerBiology},
            {"label":"Chemistry","value":integerChemistry},
            {"label":"Computer Science","value":integerComputerScience},
            {"label":"Economics","value":integerEconomics},
            {"label":"Medieval History","value":integerMedievalHistory},
            {"label":"Physics","value":integerPhysics},
            {"label":"Social Science","value":integerSocialScience},
          ]
     }, "labels": {
		"outer": {
			"pieDistance": 32
		},
		"inner": {
			"format": "value"
		},
		"mainLabel": {
			"font": "verdana"
		},
		"percentage": {
			"color": "#e1e1e1",
			"font": "verdana",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#e1e1e1",
			"font": "verdana"
		},
		"lines": {
			"enabled": true,
			"color": "#cccccc"
		},
		"truncation": {
			"enabled": true
		}
	}});
    console.log(major);
});
//***************************End of code for finding major related items

var prerequisites = new Map();

/***********************************************************************
This particular section looks to display people's current standing in terms of being an intern or not
*/
d3.csv("Data.csv", function(data) {
    data.forEach(function(d) {
    prerequisites[d["Intern"]] =0;
    });
  });

d3.csv("Data.csv", function(data) {
    data.forEach(function(d) {
    prerequisites[d["Intern"]] += 1;
  });
    //magic happens here
    var integerY = parseInt(prerequisites["Y"]);
    var integerN = parseInt(prerequisites["N"]);
    //below creates graph based on data for prereqs
    var pie = new d3pie("pieChart3", {
    "header": {
          "title": {
            "text": "Company data for interns and non-interns",
            "fontSize": 15,
            "font": "verdana"
          },
        },size: {
            canvasHeight: 400,
            canvasWidth: 500,
            pieInnerRadius: 0,
            pieOuterRadius: null
        },"data": {
        "content": [
            {"label":"Intern","value":integerY},
            {"label":"Non-Intern","value":integerN},
          ]
     }, "labels": {
		"outer": {
			"pieDistance": 32
		},
		"inner": {
			"format": "value"
		},
		"mainLabel": {
			"font": "verdana"
		},
		"percentage": {
			"color": "#e1e1e1",
			"font": "verdana",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#e1e1e1",
			"font": "verdana"
		},
		"lines": {
			"enabled": true,
			"color": "#cccccc"
		},
		"truncation": {
			"enabled": true
		}
	}});
});
//*************************End of code for finding interns prerequisites

var letter = new Map();

/***********************************************************************
This particular section looks to display people's current standing in terms of department positon
*/
d3.csv("Data.csv", function(data) {
    data.forEach(function(d) {
    letter[d["Department"]] =0;
    });
  });

d3.csv("Data.csv", function(data) {
    data.forEach(function(d) {
    letter[d["Department"]] += 1;
  });
    //magic happens here
    var integerA = parseInt(letter["A"]);
    var integerB = parseInt(letter["B"]);
    var integerC = parseInt(letter["C"]);
    var integerD = parseInt(letter["D"]);

    //below creates graph based on data for letters
    var pie = new d3pie("pieChart4", {
    "header": {
          "title": {
            "text": "Employee assignment for departments inside company",
            "fontSize": 15,
            "font": "verdana"
          },
        },size: {
            canvasHeight: 400,
            canvasWidth: 500,
            pieInnerRadius: 0,
            pieOuterRadius: null
        },"data": {
        "content": [
            {"label":"A","value":integerA},
            {"label":"B","value":integerB},
            {"label":"C","value":integerC},
            {"label":"D","value":integerD},
          ]
     }, "labels": {
		"outer": {
			"pieDistance": 32
		},
		"inner": {
			"format": "value"
		},
		"mainLabel": {
			"font": "verdana"
		},
		"percentage": {
			"color": "#e1e1e1",
			"font": "verdana",
			"decimalPlaces": 0
		},
		"value": {
			"color": "#e1e1e1",
			"font": "verdana"
		},
		"lines": {
			"enabled": true,
			"color": "#cccccc"
		},
		"truncation": {
			"enabled": true
		}
	}});
});

//*************************End of code for finding department standings


/*
/opyright 2016 Jonathan Simeon Kumamoto

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
