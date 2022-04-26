
const fs = require("fs");


function writeCSS() {
    let strToWrite = 
`
* {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
`;
    fs.writeFile('./dist/style.css', strToWrite, (err) =>
        {if (err) {console.log(err)};}
    );
}



function writeHTMLTop() {
    let strToWrite = 
`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.2.0/tailwind.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Portfolio</title>
</head>

<body>
    <main class="m-0">
        <div class="bg-white block py-10">
            <div class="w-full mx-auto">
                <div class="flex justify-center text-center">
                    <div class="w-full align-middle bg-red-500 h-48 rounded-t-lg">
                        <h1 class="w-full font-semibold text-3xl text-white mt-20">My Team</h1>
                    </div>
                </div>
            </div>
        </div>
        <section class="h-screen w-screen bg-gradient-to-br from-pink-50 to-indigo-100 p-8">
            <div class="grid justify-center md:grid-cols-3 lg:grid-cols-3 gap-10 my-10">
\n
`;
    fs.writeFile('./dist/index.html', strToWrite, (err) =>
        {if (err) {console.log(err)};}
    );
}



// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
function appendHTMLCard(name, title, id, email, info) {
    let strToWrite = 
`
                <div class="shadow-lg">
                    <div class="bg-blue-500 rounded-t-lg p-5">
                        <h2 class="font-semibold text-2xl text-white p-3">${name}</h2>
                        <h2 class="font-semibold text-2xl text-white p-3">${title}</h2>
                    </div>
                    <div class="bg-gray-100 rounded-b-lg p-5">
                        <p class="text-sm text-primary border border-primary bg-white p-3">${id}</p>
                        <p class="text-sm text-primary border border-primary bg-white p-3"><a href="mailto:${email}" target="_blank">${email}</a></p>
                        <p class="text-sm text-primary border border-primary bg-white p-3">${info}</p>
                    </div>
                </div>
\n
`;
    fs.appendFile('./dist/index.html', strToWrite, (err) =>
        {if (err) {console.log(err)};}
    );
}


// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
function appendHTMLEngineerCard(name, title, id, email, info) {
    let strToWrite = 
`
                <div class="shadow-lg">
                    <div class="bg-blue-500 rounded-t-lg p-5">
                        <h2 class="font-semibold text-2xl text-white p-3">${name}</h2>
                        <h2 class="font-semibold text-2xl text-white p-3">${title}</h2>
                    </div>
                    <div class="bg-gray-100 rounded-b-lg p-5">
                        <p class="text-sm text-primary border border-primary bg-white p-3">${id}</p>
                        <p class="text-sm text-primary border border-primary bg-white p-3"><a href="mailto:${email}" target="_blank">${email}</a></p>
                        <p class="text-sm text-primary border border-primary bg-white p-3"><a href="https://github.com/${info}" target="_blank">${info}</a></p>
                    </div>
                </div>\n
\n
`;
    fs.appendFile('./dist/index.html', strToWrite, (err) =>
        {if (err) {console.log(err)};}
    );
}


function appendHTMLBot() {
    let strToWrite = 
`
            </div>
        </section>
    </main>
</body>

</html>
`;
    fs.appendFile('./dist/index.html', strToWrite, (err) =>
        {if (err) {console.log(err)};}
    );
}

module.exports = {writeHTMLTop, appendHTMLCard, appendHTMLBot, appendHTMLEngineerCard, writeCSS};