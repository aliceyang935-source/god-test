const SHEET_NAME = "submissions";
const HEADERS = [
  "submittedAt",
  "userId",
  "birthDate",
  "birthHour",
  "usefulGod",
  "harmfulGod",
  "usefulGroup",
  "harmfulGroup",
  "testVersion"
];

function doPost(e) {
  const payload = JSON.parse((e && e.postData && e.postData.contents) || "{}");
  const sheet = getSubmissionSheet_();

  sheet.appendRow(HEADERS.map((key) => payload[key] || ""));

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getSubmissionSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  }

  return sheet;
}
