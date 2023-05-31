import { createServer} from "miragejs";
import server from "../../services/server"

describe("server", () => {
    let mirageServer;
  
    beforeAll(() => {
      mirageServer = createServer();
      server(mirageServer);
    });
  
    afterAll(() => {
      mirageServer.shutdown();
    });
  
    it("should return education data when GET /api/educations is called", async () => {
      const response = await fetch("/api/educations");
      expect(response.status).toBe(200);
    });
  
    it("should return skills data when GET /api/skills is called", async () => {
      const response = await fetch("/api/skills");
      expect(response.status).toBe(200);  
    });
  
    it("should create a new skill when POST /api/skills is called", async () => {
      const newSkill = { name: "New Skill", range: 50 };
      const response = await fetch("/api/skills", {
        method: "POST",
        body: JSON.stringify(newSkill),
      });
  
      expect(response.status).toBe(201);
    });
});