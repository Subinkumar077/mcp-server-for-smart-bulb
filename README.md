# Phiphis Smart Bulb MCP Server

A Model Context Protocol (MCP) server that enables AI assistants to control a smart bulb over UDP communication. This project provides a bridge between AI models and smart home devices, specifically designed for Yeelight smart bulbs.

## 🚀 Features

- **MCP Integration**: Implements the Model Context Protocol for seamless AI assistant integration
- **UDP Communication**: Controls smart bulbs via UDP packets for reliable network communication
- **TypeScript Support**: Built with TypeScript for type safety and better development experience
- **Simple API**: Easy-to-use functions for turning bulbs on and off
- **Modular Design**: Clean separation between MCP server logic and device communication

## 📋 Prerequisites

- Node.js (v18 or higher)
- pnpm package manager
- A Yeelight smart bulb on your local network
- Network access to the smart bulb's IP address

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd trafficCongestion-mapIntegrated
```

2. Install dependencies:
```bash
pnpm install
```

3. Build the project:
```bash
pnpm run build
```

## ⚙️ Configuration

Before running the server, you need to configure the smart bulb's network details in `src/service.ts`:

```typescript
const BUILB_ADDRESS = "192.168.1.100";  // Replace with your bulb's IP
const BUILB_PORT = 55443;               // Default Yeelight port
```

### Finding Your Bulb's IP Address

1. **Yeelight App Method**:
   - Open the Yeelight app
   - Go to device settings
   - Check the device information for the IP address

2. **Network Scanner Method**:
   - Use tools like `nmap` or network scanning apps
   - Look for devices on port 55443

3. **Router Admin Panel**:
   - Check your router's connected devices list
   - Look for devices with "Yeelight" in the name

## 🚀 Usage

### Running the Server

```bash
# Development mode (build + run)
pnpm run dev

# Production mode
pnpm run build
pnpm start
```

### Available Tools

The MCP server exposes two tools:

1. **turn-on-bulb**: Turns the smart bulb on
2. **turn-off-bulb**: Turns the smart bulb off

### Integration with AI Assistants

This server can be integrated with AI assistants that support MCP, such as:

- Claude Desktop
- Other MCP-compatible clients

The server communicates via stdio, making it compatible with various AI assistant frameworks.

## 🏗️ Project Structure

```
├── src/
│   ├── index.ts          # MCP server implementation
│   └── service.ts        # UDP communication service
├── dist/                 # Compiled JavaScript output
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## 🔧 Development

### Scripts

- `pnpm run build`: Compiles TypeScript to JavaScript
- `pnpm run start`: Runs the compiled server
- `pnpm run dev`: Builds and runs the server in development mode
- `pnpm test`: Runs tests (currently not implemented)

### TypeScript Configuration

The project uses strict TypeScript settings with:
- ES2022 target
- Node.js modules
- Source maps enabled
- Declaration files generated

## 🌐 Network Protocol

The server communicates with Yeelight bulbs using UDP packets with the following format:

```json
{
  "method": "set_power",
  "params": {
    "state": true  // or false for off
  }
}
```

### Port Information

- **Default Port**: 55443 (Yeelight standard)
- **Protocol**: UDP
- **Address**: Configurable IP address

## 🔒 Security Considerations

- The server communicates over your local network
- Ensure your smart bulb is on a trusted network
- Consider firewall rules if needed
- The bulb's IP address is hardcoded - consider using environment variables for production

## 🐛 Troubleshooting

### Common Issues

1. **Bulb not responding**:
   - Verify the IP address is correct
   - Ensure the bulb is on the same network
   - Check if the bulb supports developer mode

2. **Connection refused**:
   - Verify the port number (default: 55443)
   - Check firewall settings
   - Ensure the bulb is powered on

3. **MCP server not starting**:
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript compilation errors

### Debug Mode

To enable debug logging, you can modify the server to include more verbose output:

```typescript
console.log(`Sending message to ${BUILB_ADDRESS}:${BUILB_PORT}`);
console.log(`Message: ${message}`);
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License - see the package.json file for details.

## 🔗 Related Links

- [Model Context Protocol Documentation](https://modelcontextprotocol.io/)
- [Yeelight Developer Documentation](https://www.yeelight.com/en_US/developer)
- [Node.js UDP Documentation](https://nodejs.org/api/dgram.html)

## 📞 Support

For issues and questions:
1. Check the troubleshooting section above
2. Open an issue on GitHub
3. Review the Yeelight documentation for bulb-specific issues

---

**Note**: This project is designed for educational and development purposes. Always ensure you have permission to control devices on your network and follow local regulations regarding smart home devices.
