import { createServer, Response } from "miragejs"

const server = () => {
  createServer({
    seeds(server) {
      server.db.loadData({
        educations: [
          { 
            date: '2011',
            title: 'Bachelor of Science',
            description: 'Computer Science', 
          },
          { 
            date: '2015',
            title: 'Master of Technical Science',
            description: 'Data science',
          },
          { 
            date: '2017',
            title: 'PhD of Computer science',
            description: 'Computer science',
          },
        ],
        skills: [
         
        ]
      })
    },
    routes() {
      this.namespace = 'api';
  
      this.get('/educations', (schema, request) => {
        const shouldError = false; //show error message
      
        if (shouldError) {
          return new Response(500, {}, { error: 'Failed to fetch educations' });
        } else {
          return new Response(200, {}, schema.db.educations);
        }
      }, { timing: 3000 });
      
      this.get('/skills', (schema, request) => {
        return new Response(200, {}, schema.db.skills);
      });

      this.post('/skills', (schema, request) => {
        const { name, range } = JSON.parse(request.requestBody);
        const newSkill = schema.db.skills.insert({ name, range });
        return new Response(201, {}, newSkill);
      });
    },
  });
}

export default server;





