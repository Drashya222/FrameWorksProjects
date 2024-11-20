    const contentful = require("contentful");
    const fs = require("fs");
    const path = require("path");

    const client = contentful.createClient({
        space: "79zsydyqh9gk",                                          // Contentful Space ID
        accessToken: "95T_9zM2VfEGeFlLmhIYT74g4JkL0nAriS7mOx7PIQY"    //Contentful Access Token
    })


    module.exports = function(eleventyConfig)
    {
        
        eleventyConfig.addPassthroughCopy("src/css");
        eleventyConfig.addPassthroughCopy("src/img");
        eleventyConfig.addWatchTarget("./src/css/");

        eleventyConfig.on("eleventy.before", async ({ dir }) => {
            const outputDir = path.resolve(__dirname, dir.output);
            if (fs.existsSync(outputDir)) {
                console.log(`Deleting folder: ${outputDir}`);
                fs.rmSync(outputDir, { recursive: true, force: true });
            } else {
                console.log(`Folder not found: ${outputDir}`);
            }
        });

        eleventyConfig.setBrowserSyncConfig({
            callbacks: {
                ready: function(err, browserSync){
                    const content404 = fs.readFileSync("404.html");
                    browserSync.addMiddleware("*", (req,res) => {
                        res.write(content404);
                        res.end();
                    });
                }
            }
            
        });

        eleventyConfig.addGlobalData("animalData", async () => {
            try {
                const entries = await client.getEntries({
                    content_type: "animal",
                });
                return entries.items.map((entry) => ({
                    animal: entry.fields.animal,
                    breed: entry.fields.breed,
                    legs: entry.fields.legs,
                    head: entry.fields.head,
                    sound: entry.fields.sound
                }));
            } catch (error) {
                console.error("Error fetching data from Contentful:", error);
                return [];
            }
        });

        return{
            dir:{
            output: "dist",
            input: "src"
            },
            templateFormats: ["md", "ejs"],
            htmlTemplateEngine: "ejs",
            dataTemplateEngine: "ejs"
        };


    };
