const dns = require("dns");

const hostname = "www.miu.edu";

dns.resolve4(hostname, (err, addresses) => {
    if (err) throw err;

    const be = addresses.length > 1 ? "are" : "is";
    const add = addresses.length > 1 ? "addresses" : "address";
    console.log(`The ${add} of "${hostname}" ${be} "${addresses.join(", ")}"`);
});