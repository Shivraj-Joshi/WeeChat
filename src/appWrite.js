import { Client, Account, Storage } from 'appwrite';


//setting-up the client
export const client = new Client();
client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject('67e2bbec00325403890d');


// setting-up authentication
export const account = new Account(client);

// setting-up storage
export const storage = new Storage();