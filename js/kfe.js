/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function externalLinks() {

    $('a.new-window').bind('click', function(e) {
        var location = $(this).attr('href');
        window.open(location);
        e.preventDefault();
    });

}

function IamHere() {

    /*$('ul li a').bind('click', function(e){    
        $('ul li a.current').removeClass('current');    
        var id = $(this).parent().parent().attr("id");    
        if (id == "nav"){        
             $(this).parent().addClass('current');        
        } else {        
             $(this).parent().parent().parent().addClass('current');                
        }
    })*/
    
    var id = $(this).parent().parent().attr("id");
    if (id == "nav"){        
        $(this).parent().addClass('current');        
    } else {        
        $(this).parent().parent().parent().addClass('current');                
    }
}

var mainMenuClicked;

function infosInsfrastructure(){
    
        alert(navigator.appVersion.toString());
        alert(navigator.appCodeName.toString());
        alert(navigator.appName.toString()); 
        alert(navigator.vendor.toString());

        alert(jQuery("window").width());
        alert(jQuery("window").height());

}

function extractQParamFromURL() {
    
    //alert(location.search.toString());
    
    var t = location.search.substring(1).split('&');
    var f = [];
    for (var i = 0; i < t.length; i++) {
        var x = t[i].split('=');
    }
    //alert(x[1]);
    return x[1];
}

$(document).ready(function() {
    $('#nav li').hover(
            function() {
                $('ul', this).stop(true, true).delay(150).slideDown(500);
            },
            function() {
                // nascondi sottomenu
                $('ul', this).stop(true, true).slideUp(200);
            }
    );
       
    /*('#nav li a').bind('click', function(e){    
        $('#nav li a.current').removeClass('current');    
        var id = $(this).parent().parent().attr("id");

        if (id == "nav"){        
             $(this).parent().addClass('current');        
        } else {        
             $(this).parent().parent().parent().addClass('current');                
        }
        e.preventDefault;
    })        */
       
});

function setWhereYouAre() {
    //alert('in setWhereYouAre:');

    var menuToPutInBurgundy = extractQParamFromURL();

    switch (menuToPutInBurgundy)
    {
        case "Home":

            //alert('innerHTML ' + document.getElementById("home").innerHTML);
            
            document.getElementById("Home").innerHTML = '<a href="index.html?q=Home" style="color:white;background-color: #660000;">Home</a>';
                      
            //alert('passe dfkn,mfg');
            
            break;
        case "ATK":
                
            document.getElementById("AboutTheKarmapa").innerHTML =
            '<a href="karmapa.html?q=ATK" style="color:white;background-color: #660000;">About the Karmapa</a> \
                <ul style="display: none;"> \
                  <li id="aboutthekarmapasub" style="width: 160px;" onclick="setWhereAreYou(this)"><a href="karmapas.html?q=ATK">About the KARMAPAs</a> </li> \
                  <li id="aboutthekarmapasub" style="width: 160px;" onclick="setWhereAreYou(this)"><a href="previous-karmapas.html?q=ATK">The previous KARMAPAs</a> </li> \
                  <li id="aboutthekarmapasub" style="width: 160px;"  onclick="setWhereAreYou(this)"><a href="17th-karmapa.html?q=ATK">The 17th KARMAPA </a> </li> \
                </ul>';
           
            break;
        case "K":

            document.getElementById("KFE").innerHTML =
            '<a href="kfe.html?q=K" style="color:white;background-color: #660000;">KFE</a> \
                <ul style="display: none;"> \
                    <li style="width: 160px;"><a href="kfe-board-of-trustees.html?q=K">Board of Trustees</a> </li> \
                    <li style="width: 160px;"><a href="kfe-objectives.html?q=K">Objectives</a> </li> \
                    <li style="width: 160px;"><a href="kfe-contact-details.html?q=K">Contact details</a> </li> \
                    <li style="width: 160px;"><a href="kfe-acknowledgements.html?q=K">Acknowledgements</a> </li> \
                    <li style="width: 160px;"><a href="kfe-copyrights.html?q=K">Copyright</a> </li> \
                </ul>';

            break;
        case "D":

            document.getElementById("Donations").innerHTML = 
                    '<a href="karmapa-donations.html?q=D" style="color:white;background-color: #660000;">Donations</a>';

            break;
        case "A":


            document.getElementById("Activities").innerHTML =
                '<a href="karmapa-activities.html?q=A" style="color:white;background-color: #660000;">MajorActivities</a> \
                    <ul style="display: none;"> \
                        <li style="width: 130px;"><a href="karmapa-activities-visits.html?q=A">Visits</a> </li> \
                        <li style="width: 130px;"><a href="karmapa-activities-teachings.html?q=A">Teachings</a> </li> \
                        <li style="width: 130px;"><a href="karmapa-activities-projects.html?q=A">Projects</a> </li> \
                    </ul>';

            break;
        case "W":

            document.getElementById("videos").innerHTML = 
                    '<a href="karmapa-videos-webcasts.html?q=W" style="color:white;background-color: #660000;">Webcasts</a>';

            break;
        case "L":

            document.getElementById("Links").innerHTML =
            '<a href="kagyu-links.html?q=L" style="color:white;background-color: #660000;">Kagyu & Other Links</a> \
                <ul style="display: none;"> \
                    <li style="width: 155px;"><a href="kagyu-links-centres-europe.html?q=L">Centres in Europe</a> \
                    </li> \
                    <li style="width: 155px;"><a href="kagyu-links-other.html?q=L">Others</a> \
                    </li> \
                    <li class="class155" ><a href="follow-karmapa.html?q=L">"Follow Karmapa"</a> \
                    </li> \
                </ul>';

            break;
        case "C":

            document.getElementById("Community").innerHTML = 
                    '<a href="kfe-community.html?q=C" style="color:white;background-color: #660000;">KFE Community</a>';

            break;
        default:
            break;
    }

};