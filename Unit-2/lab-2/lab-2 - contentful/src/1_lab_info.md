---
layout: layouts/default.ejs
---

# **_Exploring Static Site Generators and Template Engines_**

---

## **1. Template Engines: Pros and Cons**

Static site generators (SSGs) often rely on template engines to dynamically render content.  
I researched three different template engines commonly used in web development: **Nunjucks**, **Handlebars**, and **Pug**.

### *[Nunjucks](https://mozilla.github.io/nunjucks/templating.html "Getting started with templating using nunjucks")*

- **Pros:**
  - Based on Jinja, making it familiar to those who have worked with Python’s Jinja2 template engine.
  - Offers a rich templating syntax and supports reusable components, layouts, and filters.
  - Extensive documentation and good support in the static site generator ecosystem, including Eleventy (11ty).
  - Fast and optimized for performance.
  
- **Cons:**
  - Slightly wordy compared to simpler template engines like Handlebars.
  - The templating syntax can seem complex for those unfamiliar with Python or Jinja2.

- **Example:**
  !["Example of template inheritance in nunjucks"](../img/nunjucks.jpg "Example of template inheritance in nunjucks")
  - [Image Reference](https://mozilla.github.io/nunjucks/templating.html "Image Reference")

### *[Handlebars](https://handlebarsjs.com/guide/#what-is-handlebars "Introduction to Handlebars Templating.")*

- **Pros:**
  - Simple and straightforward syntax that is easy to learn for beginners.
  - Logic-less philosophy keeps HTML and JavaScript separation clean, reducing complexity.
  - Great for small projects that don't require complex templating structures.
  
- **Cons:**
  - Lacks the advanced features that Nunjucks or Pug offers, such as powerful filters or dynamic logic.
  - Less performant for large-scale, dynamic content sites due to its simplicity.

- **Example:**
  !["Example of templating in Handlebars"](../img/handlebars.jpg "Example of templating in Handlebars")
  - [Image Reference](https://handlebarsjs.com/guide/#simple-expressions "Image Reference")

### *[Pug](https://pugjs.org/api/getting-started.html "Getting started with templating using pug")*

- **Pros:**
  - Minimalistic and concise syntax that reduces HTML boilerplate.
  - Highly readable, especially for those who prefer clean, whitespace-sensitive coding environments.
  - Ideal for developers who value speed in writing templates and focus on indentation.

- **Cons:**
  - The syntax may be challenging for beginners to grasp quickly due to its significant departure from standard HTML.
  - Debugging Pug templates can be difficult because of its abstract nature.
  - Can become unreadable when working on complex pages.  

- **Example:**
  !["Example of template inheritance in nunjucks"](../img/pug.jpg "Example of templating using pug.")
  - [Image Reference](https://pugjs.org/api/getting-started.html "Image Reference")

---

## **2. Chosen Template Engine: Nunjucks**

I chose Nunjucks for this assignment because it strikes a good balance between power and simplicity. It allows for advanced features like filters and includes,   
which are useful for complex templating. At the same time, it's not overly complicated like Pug, making it approachable. Nunjucks' extensive  
documentation and compatibility with 11ty make it an excellent choice for building static websites.

---

## **3. Popular Static Site Generators (SSGs)**

Beyond **Eleventy (11ty)**, several other popular SSGs are worth mentioning:

### *[Hugo](https://gohugo.io/templates/introduction/ "Introduction to Hugo")*

- **Pros:**
  - Written in Go, making it extremely fast and efficient at building sites.
  - Offers a vast array of themes and a well-maintained ecosystem.
  - Supports multilingual websites out of the box.

- **Cons:**
  - The templating system can be challenging for beginners due to its complexity and reliance on Go templates.
  - Less flexible than some other SSGs when it comes to customization.

### *[Jekyll](https://jekyllrb.com/docs/liquid/ "Introduction to Jekyll")*

- **Pros:**
  - One of the oldest and most popular SSGs, with extensive community support.
  - Easy to set up with GitHub Pages for free hosting.
  - Wide range of plugins and themes available for customization.

- **Cons:**
  - Slow build times for large sites.
  - Written in Ruby, which may be a downside for developers not familiar with the language.

### *[Gatsby](https://www.gatsbyjs.com/docs/ "Introduction to Gatsby")*
- **Pros:**
  - Built with React, allowing for highly dynamic and interactive websites.
  - Rich ecosystem of plugins and integrations with popular CMS platforms.
  - Optimized for performance, with features like image optimization and lazy loading.

- **Cons:**
  - Steeper learning curve due to the React ecosystem.
  - Overkill for simpler static sites, as it’s designed for complex, dynamic web apps.
  
---

## **4. Eleventy [(11ty)](https://www.11ty.dev "Getting started with 11ty/eleventy") Configuration**

Eleventy is highly configurable, and while it provides sane defaults, you can adjust settings based on your project’s needs. Some of the key configuration options available in 11ty include:

### Settings We Are Using
- **Template Formats**: This allows us to define which template formats we want 11ty to process, such as Nunjucks, Markdown, or HTML. We’re using Nunjucks for our templating needs.
- **Passthrough File Copy**: This setting lets us specify which files (e.g., images, CSS, or JavaScript) should be passed through directly to the output folder without processing.

### Other Notable Settings
- **Directory Input/Output**: You can configure which folders 11ty reads from (input) and writes to (output). This is useful for organizing your project structure.
- **Markdown Template Engine**: You can customize how 11ty processes Markdown files by specifying a template engine (e.g., Nunjucks) to wrap around the Markdown content.
- **Data Cascade**: You can define data globally (e.g., in a JSON file) or at the template/page level, making it easier to share content between pages.

---

## **5. What is Front Matter?**

Front matter is metadata added to the top of content files (such as Markdown or HTML). It usually appears between `---` markers and contains key-value  
pairs that can specify various properties like title, layout, or tags. Here’s an example:

```yaml
---
title: "My Lab-1 Blog Post"
date: 2024-09-18
tags: ["blog", "11ty/eleventy"]
layout: layouts/default.njk
---

```

---

## **6. Resources.**

- [StaticGen](https://www.staticgen.com/) – A comprehensive list of static site generators with rankings, descriptions, and links to official documentation.
- [Jamstack](https://jamstack.org/generators/) – A directory of static site generators that are part of the Jamstack architecture.
Template Engines

- [Nunjucks Documentation](https://mozilla.github.io/nunjucks/): Nunjucks Templating Engine – Official documentation for Nunjucks, including how to get started, syntax, and advanced features.
- [Handlebars Documentation](https://handlebarsjs.com): Handlebars.js – Official documentation for the Handlebars templating engine.
- [Pug Documentation](https://pugjs.org/api/getting-started.html): Pug (formerly Jade) – Official Pug documentation with examples and API references.
Popular Static Site Generators

- [Hugo](https://gohugo.io/templates/introduction/): Hugo Documentation – Official documentation for Hugo, a popular static site generator known for its speed.
- [Jekyll](https://jekyllrb.com/docs/liquid/): Jekyll Documentation – Official site for Jekyll, one of the most widely used static site generators.
- [Gatsby](https://www.gatsbyjs.com/docs/): Gatsby Documentation – Official Gatsby documentation covering setup, templating, and more.
Eleventy (11ty) Documentation

- [11ty Official Documentation](https://www.11ty.dev/docs/) – Eleventy’s documentation with detailed explanations of configuration, usage, and features like data cascading and front matter.
Markdown Syntax & Features

- [Markdown Guide](https://www.markdownguide.org/basic-syntax/) – A complete guide to Markdown syntax, including front matter, tables, and other advanced formatting.
- [CommonMark](https://commonmark.org) – A detailed guide on Markdown’s standard features and implementation.
Front Matter Explanation

- [Jekyll Front Matter](https://jekyllrb.com/docs/front-matter/) – Overview of front matter, its use cases, and its format in Jekyll (applicable to many SSGs).
- [11ty Front Matter](https://www.11ty.dev/docs/data-frontmatter/) – Explanation of front matter in the context of Eleventy.


