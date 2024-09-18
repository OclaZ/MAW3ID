import * as sdk from "node-appwrite";

// Log to see if the environment variables are correctly loaded
console.log("NEXT_PUBLIC_ENDPOINT:", process.env.NEXT_PUBLIC_ENDPOINT);
console.log("PROJECT_ID:", process.env.PROJECT_ID);
console.log("API_KEY:", process.env.API_KEY);

// Extract environment variables
export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client();

// Ensure the endpoint and project ID are valid
client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
