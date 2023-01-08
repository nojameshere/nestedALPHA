const joinAlpha = document.querySelector('.joinAlphaBtn');
const sheetID = '153RHExI5NX9t_WNqnr6aEikRaccEIXI6k50Wnsgwuqk';
const emailRow = 'Sheet1!A:A';
const apiCall = ``;
const apiKey = 'AIzaSyAJj_4wvkFcLuh4yk8_LlJfaWz4F1VyHDA';
const clientID = '212120861590-8gvckcmhhbe9h7ovav94chp3ed877pfq.apps.googleusercontent.com';

console.log(joinAlpha);


joinAlpha.addEventListener('click', e => {
    //shit goes here about sending the emails to the spreadsheet
    e.preventDefault();
    var email = document.querySelector('.emailInput');
    makeApiCall(email.value);
});

//This was copied from the google sheets API I don't really know what it does//
function makeApiCall(emailInput) {
    var params = {
        spreadsheetId: sheetID,
        range: emailRow,
        valueInputOption: emailInput
    };
    var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
    request.then(function(response) {
    // TODO: Change code below to process the `response` object:
    console.log(response.result);
    }, function(reason) {
    console.error('error: ' + reason.result.error.message);
    });
}//^^ this is copied from the google sheets API I don't really know what it does ^^//

//I gave up at this point. I couldn't be bothered to figure out how the google API functioned.
//TL;DR, I didn't feel like reading.