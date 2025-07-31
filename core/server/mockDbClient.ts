import fs from "fs";
import os from "os";
import path from "path";
const fsPromises = fs.promises;

// DATA STORE
// In a real project this belongs to the db server code
// We simulate a distant db by storing data in a file
const filePath = path.resolve(os.homedir(), ".mockdb");
async function updateData<TData=any>(data:TData) {
  // NOTE: we don't account for concurrent operations, this is just a basic mock
  console.log("Updating content of file ", filePath);
  await fsPromises.writeFile(filePath, JSON.stringify(data, null, 2), {
    encoding: "utf8",
  });
}
async function loadData() {
  let data: { [key: string]: number | string };
  // NOTE: we don't account for concurrent operations, this is just a basic mock
  console.log("Initializaing database from file ", filePath);
  try {
    const dataStr = (
      await fsPromises.readFile(filePath, { encoding: "utf-8", flag: "a+" })
    ).toString();
    data = dataStr ? JSON.parse(dataStr) : {};
  } catch (err) {
    console.warn("Could not read an parse", filePath, ", will reset data");
    data = {};
  }
  return data;
}

// CONNECTIONS
// In a real project this is handled by the database server
// /!\ You wan't the number of connections to be minimized, but it can be confusing
// in a serverless architecture
//
// Note: in this fake demo, we count connections per instance, so it's not a real count,
// just a way to understand that calling db connections needs some careful thinking in a serverless architecture.
// We would need to store connections in a file to really track them down but "disconnect" are hard to detect
// with this file-based mock implementation
const connections: Array<any> = [];

/**
 * A mock database client that helps counting the number of connections
 *
 * It doesn't connect to a real distant server, instead it uses a shared file
 */
export class MockDbClient {
  connected: boolean;
  constructor() {
    this.connected = false;
  }
  /**
   * Check this flag to avoid connecting to the client multiple times
   *
   * NOTE: in a real-life scenarios, watch out for intermediate states as well
   * (starting to connect but not yet done for instance)
   */
  isConnected() {
    return this.connected;
  }
  /**
   * Initialize a persistent connection to the db
   * /!\ Don't call more often than necessary
   */
  async connect() {
    // simulate connection to a running DB
    // /!\ if you call connect more than once per client, you'll create additional connections,
    // like it would happen with a real db
    connections.push({
      pid: process.pid,
    });
    console.log(`There are now ${connections.length} connections open`);
    this.connected = true;
  }
  checkConnection() {
    if (!this.connected) throw new Error(`Not yet connected`);
  }

  // server API (mocks a real database)
  // in a real DB this would be a distant call
  /**
   * Increment a field (set to 0 if not yet done/contains non number data)
   * @param fieldName
   */
  async increment(fieldName: string) {
    this.checkConnection();
    const data = await loadData();
    const currentValue = data[fieldName];
    if (typeof currentValue !== "number" || isNaN(currentValue)) {
      data[fieldName] = 0;
    }
    data[fieldName] = (data[fieldName] as number) + 1;
    await updateData(data);
  }
  /**
   * Get current value for a field
   * @param fieldName
   */
  async get(fieldName: string) {
    const data = await loadData();
    this.checkConnection();
    return data[fieldName];
  }

  // debug
  toString() {
    console.log(`There are now ${connections.length} connections open`);
    console.log(
      `Active connections:\n ${JSON.stringify(connections, null, 2)}`
    );
  }
}
