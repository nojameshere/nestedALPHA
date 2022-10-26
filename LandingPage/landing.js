const joinAlpha = document.querySelector('.joinAlphaBtn');
const sheetID = '1cAfHNTFB3LbxqgwsVSQYL3o0suQF_5Hg64kZV1s7jGk';
const emailRow = 'Sheet1!A:A';
const apiCall = ``

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