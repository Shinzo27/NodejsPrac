const ping = require("ping");

function pingSweep(start, end) {
  let results = [];

  // Loop through the IP range
  for (let i = start; i <= end; i++) {
    let ip = `192.168.0.${i}`; // Change this to match your network's IP range
    ping.promise.probe(ip)
      .then((res) => {
        if (res.alive) {
          results.push(ip); 
        }
      })
      .catch((err) => {
        console.log(`Error pinging ${ip}: ${err}`);
      });
  }

  // Wait for all promises to resolve
  Promise.all(results)
    .then(() => {
      console.log("Ping sweep results:");
      console.log(results);
    })
    .catch((err) => {
      console.log("Error:", err);
    });
}

// Start and end of IP range to scan
const startIP = 1;
const endIP = 255;

pingSweep(startIP, endIP);