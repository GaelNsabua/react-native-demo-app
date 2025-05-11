import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("6812c43e00202a6a4a91")
  .setPlatform("com.example.react-demo");

export const account = new Account(client);
export const avatars = new Avatars(client);
