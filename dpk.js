// const crypto = require("crypto");

// exports.deterministicPartitionKey = (event) => {
//   const TRIVIAL_PARTITION_KEY = "0";
//   const MAX_PARTITION_KEY_LENGTH = 256;
//   let candidate;

//   if (event) {
//     if (event.partitionKey) {
//       candidate = event.partitionKey;
//     } else {
//       const data = JSON.stringify(event);
//       candidate = crypto.createHash("sha3-512").update(data).digest("hex");
//     }
//   }

//   if (candidate) {
//     if (typeof candidate !== "string") {
//       candidate = JSON.stringify(candidate);
//     }
//   } else {
//     candidate = TRIVIAL_PARTITION_KEY;
//   }
//   if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
//     candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
//   }
//   return candidate;
// };

const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
// MAX_PARTITION_KEY_LENGTH and MAX_PARTITION_KEY_LENGTH  is not necesary to make a variable and use memory
// make hexType constant so no need to re-type
// use ternary 
// create crytoCreate  to avoid long line
// if event is not valid, candidate is not assigned anyway so return "0";

  let candidate;
  const hexType = "hex";
  const crytoCreate = crypto.createHash("sha3-512");
  
  if (!event) {
  	return "0";
  };
  
  candidate = event.partitionKey ? event.partitionKey : crytoCreate.update(JSON.stringify(event)).digest(hexType);
  
  candidate = candidate && typeof candidate !== "string" ? JSON.stringify(candidate) : "0";
  
  if (candidate.length > 256) {
    candidate = crytoCreate.update(candidate).digest(hexType);
  }
 
  return candidate;
};