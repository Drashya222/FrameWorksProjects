---
layout: layouts/default.ejs
---

# **_Exploring and Researching the technologies of_**

---

## **What is a CMS?**

A Content Management System (CMS) is a software application that allows users to create, edit, and manage cotent on a website without needing the knowledge to code or technicatilies. There are various CMS such as Strapi, Ghost, Contentful, WordPress, Prismic, Sanity, etc.; With a CMS, someone can build a webpage from start, design it, edit it, organize the data and publish contents. 

#### **CMS platforms are important for:**
- **Work-Flow Automation:** Builtin or third-party tools streamline publication and management.
- **Content Organization:** Easy to use interface for non-technial person, tagging, and searching of content.
- **Multiplatform content distribution:** After creating once share and distribute across different platforms like web, mobile. 
- **Decoupling:** Headless CMS gives ability to developers to use modem frameworks such as react, vue etc.;

---

## **Ghost CMS**
Ghost is a simple, open-source, and free CMS that is primarily used for blogging. It is created for writers and creators focusing on speed and performance. Ghost uses Node.js which helps in scalability and performance combined with Ghost. 

#### **Key features**
- **Simple and minimalistic interface:** Easy to use and navigate.
- **Membership and Subscription Support:** Allows monetizing content via memberships. 
- **Node.js Backend:** Ghost's backend runs on Node.js, offers non-blocking I/O operations, which makes it responsive and effective.  
- **Nunjucks Templating:** Uses Nunjucks for rendering templates, enabling a straightforward way to structure page layouts.
  
#### **Pros of Ghost CMS**
- **Efficient Performance:** Node.js as backend make it very responsive, lightweight, and designed to handle concurrency with minimal resource usage. 
- **Self-Hosting option:** Complete control over hosting environment and server configuration for advanced customizations.
- **Free and Open-Source:** No licensing fees, and the community contributes to its development and maintenance.
- **Pre-Built SEO and Subscription Features:** Developed for publishing, with built-in SEO and membership capabilities, reducing plugin dependency.

#### **Cons of Ghost CMS**
- **Limited API Options:** API support is minimal, making complex integrations harder.
- **Less Flexible for Developers:** Limited support for custom frontend frameworks, not completely headless.
- **Node.js Knowledge Required:** Self-hosting or custom development requires familiarity with Node.js and server management.
  
#### **Implementation and Explaination**

- **"Connecting the ghost using content API"**  

!["Connecting the ghost using content API"](../img/ghost1.png)

- **"Adding the data to the page"**  
  
!["Adding the data to the page"](../img/ghost2.png)

- **"Getting the ghost data from post tag"**  
  
!["Getting the ghost data from post tag"](../img/ghost3.png)

- **"Getting the values from the post according to the data structure in ghost"**  
  
!["Getting the values from the post according to the data structure in ghost."](../img/ghost4.png)

- **"Blog posts added on the ghost cms."**  

!["Blog posts added on the ghost cms."](../img/ghost5.png)

- **"Each post with title, body and other content in excerpt. Also assigning each post a tag "ghost-content"**  
  
!["Each post with title, body and other content in excerpt. Also assigning each post a tag "ghost-content"](../img/ghost6.png)  

!["Each post with title, body and other content in excerpt. Also assigning each post a tag "ghost-content"](../img/ghost7.png)  

!["Each post with title, body and other content in excerpt. Also assigning each post a tag "ghost-content"](../img/ghost8.png)  

- **This is how the Zoo page is looking, the content is from the posts on the ghost cms and not from .json. By the adding the posts on Ghost CMS, this page will fetch the added posts and display it accordingly.**  
!["MyZoo page with Ghost CMS and Posts"](../img/zoopageghost.png)

### **[Implementation video link](https://youtu.be/RHuKDycsRfQ)**


---

## **Contentful CMS** 
Contentful is a headless CMS with an API-firt design, which is focusing on content as a service. As a backend solution, Contentful prodivs complete control over where and how content is showed, with multi-platform compatibility, and supporting complex applications. 

#### **Key Features**
- **Headless CMS:** API-first design, allowing developers to use any frontend framework. Allows developers to use any frontend stack such as React, Vue, Angular.
- **Webhook Support:** Enables seamless integration of CI/CD and other services. Also, enables automation of content deplyoment on the page workflow. 
- **API-First:** Its primary interaction model is through APIs. 
- **Environment Support:** Multiple environments for managing content in different lifecycle stages. 
- **Integrations and Extensibility:** Straightforward and direct integrations with systems such as SHopify, Algolia, and AWS, while also allowign customized app development to increase the functionality. 
- **Content Modeling:** Allows users to define custom content types and fields, creating a flexible and highly customizable data structure.

#### **Contentful's API System**
- **REST API:** Gives access to all the content data with strong query capabilities, designed for performance and flexibility.
- **GraphQL API:** Ideal for frontend frameworks, offering more efficient data retrieval, and reducing over-fetching.
- **Management API:** Enables programmable access to content management features, automating tasks like content creation, and update.

#### **Pros of Contentful CMS**
- **API-First, headless design:** Decoupling supports multi-platform usability, allowing advance forntend frameworks. 
- **Versioning Control and Environment Control:** Development, staging, and production environments streamline release management and testing.
- **Webhook and Integration Support:** Native support for automation tools and integrations, creating a seamless content workflow.

#### **Cons of Contentful CMS**
- **Expensive:** Costs can escalate with high traffic or enterprise-level needs.
- **Steep Learning Curve:** Requires significant time and effort to master the platform and its features.
- **No Native UI for Presentation:** Lacks templating, so separate frontend is necessary for UI presentation.

---

## **Why using Contentful over other CMS?**
- Contentful’s API-driven approach and headless model make it a robust backend solution, particularly for developers needing content management across diverse platforms. Here’s why Contentful is technically advantageous for application development:

- **Headless CMS Flexibility**
By separating content management from presentation, Contentful supports a microservices-based architecture. This design choice offers scalability, flexibility, and future-proofing, allowing you to update frontends independently of the backend.

- **Custom Content Models**
Contentful allows complete control over content structures, making it adaptable to applications with complex data requirements. Custom content types and fields ensure structured and well-organized content, essential for highly dynamic applications.

- **High Performance Through API Use**
With its GraphQL API, Contentful minimizes data transfer, ensuring efficient, performance-optimized content retrieval. REST and Management APIs enable complete control over data operations, which can be integrated into custom workflows or automation tools.

- **Automated Workflows and CI/CD Compatibility**
Contentful’s webhook capabilities allow it to integrate seamlessly with CI/CD pipelines, facilitating automated deployments. This is especially beneficial in agile development environments where rapid content iteration and deployment are required.

- **Multi-Platform Content Distribution**
Contentful’s content distribution model is ideal for multi-channel applications. Content can be managed centrally and delivered across web, mobile, and IoT platforms, making it highly suitable for applications with an omnichannel strategy.

- **Customizable and Scalable Infrastructure**
Built on a cloud-based infrastructure, Contentful is designed for scalability, handling both small and enterprise-level data demands. This is essential for applications expected to grow in terms of content volume and distribution needs.

---

## **Resources**

- [Contentful Official Documentation](https://www.contentful.com/developers/docs/)
- [Ghost Documentation](https://ghost.org/docs/)
- [Ghost on Github](https://github.com/TryGhost/Ghost)
- [Contentful API References](https://www.contentful.com/developers/docs/references/)
- [Contentful JavaScript SDK](https://www.contentful.com/developers/docs/javascript/)
- [Contentful API](https://contentful.github.io/contentful.js/contentful/4.2.1/)
- [Ghost Architecture](https://ghost.org/docs/architecture/)
- [How to install Ghost CMS](https://www.digitalocean.com/community/tutorials/how-to-install-ghost-cms-with-digitalocean-marketplace-1-click)
- [How to install Contentful](https://www.contentful.com/developers/docs/tutorials/installation)