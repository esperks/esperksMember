import { fileURLToPath } from "url";
import { dirname } from "path";
import * as fs from "fs";

// import statements
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packagePath = `${__dirname}/../package.json`;

// Function to update lastUpdated field in package.json
const updateLastUpdated = () => {
  const currentDate = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    month: "2-digit", // Two-digit format for month
    day: "2-digit", // Two-digit format for day
    year: "numeric", // Numeric format for year
    hour12: true, // Set to false for 24-hour format
    hour: "2-digit", // Two-digit format for hours
    minute: "2-digit", // Two-digit format for minutes
    second: "2-digit", // Two-digit format for seconds
  }); // Get current date and time in IST
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8")); // Read package.json
  packageJson.lastUpdated = currentDate; // Update lastUpdated field
  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2)); // Write updated package.json
  console.log("Last updated time:", currentDate); // Log updated time
};

updateLastUpdated(); // Call the function to update lastUpdated field
