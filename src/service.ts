import * as dgram from "dgram";

const BUILB_ADDRESS = "192.168.1.100";
const BUILB_PORT = 55443;

const client = dgram.createSocket("udp4");

export async function turnOnBulb() {
    const message = JSON.stringify({
        "method": "set_power",
        "params": {
            state: true,
        },
    });

    client.send(message, BUILB_PORT, BUILB_ADDRESS);
}

export async function turnOffBulb() {
    const message = JSON.stringify({
        "method": "set_power",
        "params": {
            state: false,
        },
    });

    client.send(message, BUILB_PORT, BUILB_ADDRESS);
    client.close();
}
  