import { MockDbClient } from "@/core/server/mockDbClient";


const db = new MockDbClient();


export async function dbConnect() {
  if (!db.isConnected()) {
    console.log("connecting to db");
    await db.connect();
  } else {
    console.log("already connected to db");
  }

  return db;
}