document.getElementById("generateStack").addEventListener("click", function() {
    const input = document.getElementById("stackLetters").value.toUpperCase();
    const output = document.getElementById("stackOutput");
  
    if (!input || !/^[A-Z, ]+$/.test(input)) {
      output.textContent = "Please enter valid letters only!";
      return;
    }
  
    // Mappings for all letters in different stack categories
    const techMap = {
      frontend: {
        A: "Angular",
        B: "Bootstrap",
        C: "CSS",
        D: "D3.js",
        E: "Elm",
        F: "Flutter",
        G: "Gatsby",
        H: "HTML5",
        I: "Ionic",
        J: "jQuery",
        K: "Knockout.js",
        L: "Lit",
        M: "Material UI",
        N: "Next.js",
        O: "OpenUI5",
        P: "Preact",
        Q: "Quasar",
        R: "React",
        S: "Svelte",
        T: "Tailwind CSS",
        U: "UIKit",
        V: "Vue.js",
        W: "Webpack",
        X: "Xamarin",
        Y: "Yew",
        Z: "Zurb Foundation"
      },
      backend: {
        A: "ASP.NET",
        B: "Bottle",
        C: "CakePHP",
        D: "Django",
        E: "Express.js",
        F: "FastAPI",
        G: "Gin",
        H: "Hapi.js",
        I: "Iris",
        J: "Java Spring",
        K: "Koa.js",
        L: "Laravel",
        M: "Meteor",
        N: "Node.js",
        O: "OpenResty",
        P: "PHP",
        Q: "Qutrunk",
        R: "Ruby on Rails",
        S: "Spring Boot",
        T: "Tornado",
        U: "Uvicorn",
        V: "Vapor",
        W: "Web2py",
        X: "Xojo",
        Y: "Yii",
        Z: "Zope"
      },
      database: {
        A: "Amazon DynamoDB",
        B: "BigQuery",
        C: "Cassandra",
        D: "Dgraph",
        E: "Elasticsearch",
        F: "Firebase",
        G: "Google Firestore",
        H: "HBase",
        I: "InfluxDB",
        J: "JanusGraph",
        K: "KeyDB",
        L: "LevelDB",
        M: "MongoDB",
        N: "Neo4j",
        O: "Oracle Database",
        P: "PostgreSQL",
        Q: "QlikView",
        R: "Redis",
        S: "SQLite",
        T: "TimescaleDB",
        U: "UpscaleDB",
        V: "VoltDB",
        W: "Wildfly",
        X: "Xapian",
        Y: "YugabyteDB",
        Z: "ZooKeeper"
      },
      environment: {
        A: "AWS",
        B: "Bitbucket",
        C: "CircleCI",
        D: "Docker",
        E: "Eclipse IDE",
        F: "Firebase Hosting",
        G: "GitHub Actions",
        H: "Heroku",
        I: "IntelliJ IDEA",
        J: "Jenkins",
        K: "Kubernetes",
        L: "Linux",
        M: "MacOS",
        N: "Netlify",
        O: "OpenShift",
        P: "Pulumi",
        Q: "QEMU",
        R: "Raspberry Pi OS",
        S: "Serverless Framework",
        T: "Terraform",
        U: "Ubuntu",
        V: "Vercel",
        W: "Windows Server",
        X: "Xcode",
        Y: "Yarn",
        Z: "Zeek"
      }
    };
  
    // Generate the stack by selecting matches for the input letters
    const letters = input.replace(/[^A-Z]/g, "").split("");
    const frontend = techMap.frontend[letters[0]] || "Custom Frontend";
    const backend = techMap.backend[letters[1]] || "Custom Backend";
    const database = techMap.database[letters[2]] || "Custom Database";
    const environment = techMap.environment[letters[3]] || "Custom Environment";
  
    const stack = `Frontend: ${frontend}, Backend: ${backend}, Database: ${database}, Environment: ${environment}`;
    output.textContent = `Your stack: ${stack}`;
  });
  