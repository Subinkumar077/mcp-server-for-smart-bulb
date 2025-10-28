import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { turnOnBulb, turnOffBulb } from "./service.js";



// Create server instance
const server = new McpServer({
    name: "Phiphis Smart Bulb",
    version: "1.0.0",
    capabilities: {
      resources: {},
      tools: {},
    },
  });

server.tool("turn-on-bulb", async () => {
  await turnOnBulb();
  return {
    content: [
      {
        type: "text",
        text: "Bulb turned on successfully"
      }
    ]
  };
});

server.tool("turn-off-bulb", async () => {
  await turnOffBulb();
  return {
    content: [
      {
        type: "text",
        text: "Bulb turned off successfully"
      }
    ]
  };
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.log("Smart Bulb MCP Server running on stdio");
}

main().catch(console.error);