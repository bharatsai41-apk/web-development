var index=0;
function toggle(){
    var users=[
        {
            "name":"John Doe",
            "gender":"Male",
            "image":"john.png"
        },
        {
            "name":"Jane Doe",
            "gender":"Female",
            "image":"jane.png"
        }
    ];


    if(index==0){
        index=1;
    }
    else{
        index=0;
    }

    document.getElementById("user-name").innerText=users[index].name;
    document.getElementById("user-gender").innerText=users[index].gender;
    document.getElementById("user-image").src=users[index].image;
}
function random(){
    fetch("https://randomuser.me/api").then(function(rawData){
        return rawData.json();
    }).then(function(jsonData){
            var userData=jsonData.results[0];
            var name=userData.name.title+" "+userData.name.first+" "+userData.name.last;
            var gender=userData.gender;
            var img=userData.picture.large;
            document.getElementById("user-name").innerText=name;
            document.getElementById("user-gender").innerText=gender;
            document.getElementById("user-image").src=img;
    });
}