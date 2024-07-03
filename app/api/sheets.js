import { google } from 'googleapis';

const sheets = google.sheets({ version: 'v4' });

const credentialsJsonString = Buffer.from(
  process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64,
  'base64',
).toString('utf-8');

const credentials = JSON.parse(credentialsJsonString);

export async function getSheetData(spreadsheetId, range) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const authClient = await auth.getClient();
    google.options({ auth: authClient });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    return response.data.values;
  } catch (error) {
    console.error('The API returned an error: ' + error);
    throw error;
  }
}
