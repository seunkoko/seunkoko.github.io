
var account_name = document.getElementById('text_box').value;

$('#perform_submit').click(function (){
    console.log("clicked");

    //Code to get the value from the text box with id=text_box
    account_name = document.getElementById('text_box').value

    //variables declared to hold the data set gotten from https://api.github.com/users/account_name
    var avatar_url_use;
    var public_repos_use;
    var public_gists_use;
    var followers_use;
    var following_use;
    var feed_back;
    var error_message;

    //var xhr declares your xmlhttprequest for https://api.github.com/users/account_name
    //function done is for succesful execution
    //function fail is to handle failed execution
    //function always is for waiting till the request is complete
    console.log(account_name);
    var xhr = $.get( "https://api.github.com/users/" + account_name, function() {
      //alert( "getting from https://api.github.com/users/account_name );
    })
      .done(function(data) {
        //console.log(data)
        for(var o in data)
        {
            console.log(data.avatar_url);
            console.log(data.public_repos);
            console.log(data.public_gists);
            console.log(data.followers);
            console.log(data.following);
            console.log(data.message);
    
            //assigning the variables to the desired outputs
            avatar_url_use = data.avatar_url;
            public_repos_use = data.public_repos;
            public_gists_use = data.public_gists;
            following_use = data.following;
            followers_use = data.followers;
            error_message = data.message;
        }

        //the data gotten from the request are put into an array
        var values_to_check = ["followers", "following", "repos", "gists"];

        //functions to display my css manipulators for my feedback
        function display_feedback(value, string_value){
            if(value === 0){
                if(string_value === "following"){
                    $('#feed_back_following').html("<p class='lead text-center' style='color:#330000; font-size:13px'>Following: You no wan follow person?</p>");
                }else if(string_value === "followers"){
                    $('#feed_back_followers').html("<p class='lead text-center' style='color:#330000; font-size:13px'>Followers: People no like you?</p>");
                }else if(string_value === "repos"){
                    $('#feed_back_repos').html("<p class='lead text-center' style='color:#330000; font-size:13px'>Repositories: You no wan create projects at all?</p>");
                }else if(string_value === "gists"){
                    $('#feed_back_gists').html("<p class='lead text-center' style='color:#330000; font-size:13px'>Gist: You no dey yan at all?</p>");
                }           
            }else if(value <= 20){
                if(string_value === "following"){
                    $('#feed_back_following').html("<p class='lead text-center' style='color:#330099; font-size:14px'>Following: Try follow more people and f**k more projects</p>");
                }else if(string_value === "followers"){
                    $('#feed_back_followers').html("<p class='lead text-center' style='color:#330099; font-size:14px'>Followers: ummmm, you try small</p>");
                }else if(string_value === "repos"){
                    $('#feed_back_repos').html("<p class='lead text-center' style='color:#330099; font-size:14px'>Repositories: You don try no be small</p>");
                }else if(string_value === "gists"){
                    $('#feed_back_gists').html("<p class='lead text-center' style='color:#330099; font-size:14px'>Gist: Confirm! i like your style, you no dey talk too much</p>");
                }    
            }else if(value > 20){
                if(string_value === "following"){
                    $('#feed_back_following').html("<p class='lead text-center' style='color:#000099; font-size:15px'>Following: You go dey f**k people code gannn</p>");
                }else if(string_value === "followers"){
                    $('#feed_back_followers').html("<p class='lead text-center' style='color:#000099; font-size:15px'>Followers: Oh boy!, people like you wella</p>");
                }else if(string_value === "repos"){
                    $('#feed_back_repos').html("<p class='lead text-center' style='color:#000099; font-size:15px'>Repositories: Correct Programmer!</p>");
                }else if(string_value === "gists"){
                    $('#feed_back_gists').html("<p class='lead text-center' style='color:#000099; font-size:15px'>Gist: You be broadcaster?</p>");
                }  
            }
        }

        //Performing calculations using the data from data.followers and data.following which uses the function call to manipulate the css of the outputed value
        display_feedback(followers_use, values_to_check[0]);
        display_feedback(following_use, values_to_check[1]);
        display_feedback(public_repos_use, values_to_check[2]);
        display_feedback(public_gists_use, values_to_check[3]);


        //manipulating the outputed values in html
        $('#avatar_url').html("<p class='lead' style='font-size:15px'>" + account_name +"'s profile picture: &nbsp</p><img src=" + avatar_url_use + " style = 'height:45px;width:70px'></img>");
        $('#public_repos').html("Public Repositories: " + public_repos_use);
        $('#public_gists').html("public gists: " + public_gists_use);
        $('#followers').html("Followers: " + followers_use);
        $('#following').html("Following: " + following_use);
    })
          .fail(function(data) {
            //alert( "error" );
                console.log("not found");
                $('#public_gists').html("<p class='lead text-center' style='color:#800000; margin-top:10px; margin-bottom:10px'>User does not exist<p>");
                $('#avatar_url').empty("");
                $('#public_repos').html("");
                $('#followers').html("");
                $('#following').html("");
                $('#feed_back_followers').html("");
                $('#feed_back_following').html("");
                $('#feed_back_repos').html("");
                $('#feed_back_gists').html("");
          })
            .always(function() {
              //alert( "finished" );
      });
     
     
    // Perform other work here ...
     
    // Set another completion function for the request above
    // xhr.always(function() {
    //   //alert( "second finished" );
    // });
});

