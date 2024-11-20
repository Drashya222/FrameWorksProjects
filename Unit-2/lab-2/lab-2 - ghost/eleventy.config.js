    const ghostContentAPI = require("@tryghost/content-api");
    const fs = require("fs");
    const path = require("path");
//create a new ghost integration and use that key again below
    const api = new ghostContentAPI({
        url: "http://localhost:2368",
        key: "f10ec5a4ee2e44981544d99007",
        version: "v5.0",
      });

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

        //ghost connection
        eleventyConfig.addGlobalData("ghost-content", async () => {
            try{
                const s = await api.posts.browse({ filter: "tag:ghost-content" })
                console.log("POSTS");
                console.log(s);
                return s;
            }
            catch(err){
                console.error("ERROR");
                return [];
            }
            }
        );
    
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
