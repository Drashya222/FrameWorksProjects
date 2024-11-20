    
    const fs = require("fs");
    const path = require("path");


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
