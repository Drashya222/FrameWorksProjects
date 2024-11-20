---
layout: layouts/default.ejs
---

### **_ReadMe before instructions to proceed on my blog_**

---

# **Lab-1: Blog using SSG | Assignment-1 Static Site Project**

---

## **_Project Overview_**

This project is built using **Eleventy (11ty)**, a flexible static site generator. The purpose of the assignment is to demonstrate an understanding of modern web development practices by building a fully functional static website that leverages templates, front matter, pagination, and dynamic content generation from JSON data.

The theme chosen for this project is a **Zoo Information Site**, showcasing various animals with their scientific names, unique attributes (like the number of legs and heads), and the sounds they make. Additionally, the project has several content pages, including **About Me**, **Terms and Conditions**, and more.

---

## **_Key Features of the Project_**

1. **Template Engine**: 
   - Used **EJS** (Embedded JavaScript templates) to create layouts, partials, and templates.
   
2. **Pagination**: 
   - The project includes a paginated animal list generated from a **JSON data file** (`animals.json`). Each page contains a set number of animals, and pagination is implemented with Bootstrap classes.
   
3. **Content Pages**: 
   - The project features several content pages, including:
     - **About Me** page that includes a form for contacting me.
     - **Terms and Conditions** page to define the website's user agreement.
     - **404 Error Page** for handling invalid routes.
   
4. **Bootstrap Integration**: 
   - The project uses **Bootstrap** for styling and layout.
   
5. **Dynamic Data**: 
   - Animal data is dynamically generated from a **JSON** file and displayed using EJS templates.

---

## **_Installation and Setup Instructions_**

To run the project on your local machine, follow the steps below:

1. **Extract the Files**:
   - Download and extract all the files from the compressed folder to your local device. Ensure that the folder path is correct, i.e., `Lab-1 > Files`.

2. **Install Node.js**:
   - Install **Node.js** from the official website: [Node.js](https://nodejs.org).

3. **Install Dependencies**:
   - Navigate to the project folder in your terminal or code editor (like Visual Studio Code) using the `cd` command. For example:
     ```bash
     cd path/to/project
     ```
   - Run the following command to install all the required dependencies:
     ```bash
     npm install
     ```

4. **Install Bootstrap**:
   - Ensure that Bootstrap is installed by running:
     ```bash
     npm install bootstrap
     ```

5. **Build and Run the Project**:
   - To run the project, execute the following command:
     ```bash
     npx @11ty/eleventy --serve
     ```

6. **Access the Project**:
   - The project should now be accessible on your local server at `http://localhost:8080`.

---

## **_Navigating the Website_**

- **Home Page**: 
  - The homepage provides an overview of the lab write-up, along with navigation links to other sections like Lab Instructions and the assignment's write-up.
  
- **Lab-1**: 
  - The **Lab-1** dropdown includes links to instructions and information regarding the lab.

- **Assignment-1**: 
  - The **Assignment-1** dropdown offers access to the **Zoo page**, which displays animal cards dynamically created from JSON data.

- **Lab-2**:
  - The **Lab-2** dropdown includes two pages, intructions and the Information on that instructions. Lab-2 is the writeup for Five different CMS, Ghost, Contentful, Strapi, Prismic, and Sanity in detail with the implementation on the two Ghost and Contentful respectively, pro and cons of using each, the chosen one for the Assignment-2 and why, and some useful resources where I learned both from which might help you too. 
     
- **About**: 
  - A page dedicated to information about the creator (Drashya Patel) with an option to contact me via email or social media links.

- **Terms and Conditions**: 
  - This page outlines the website's terms of use.
  
---

## **_Project File Structure_**

!["Project File Structure"](../img/tree.jpg "Project File Structure")

---

## **_JSON Data Structure (animals.json) (Until Assignment-1)_**

The animal data for the Zoo pages is stored in a `JSON` file. Here is the structure of each animal entry in the file:

```json
[
  {
    "animal": "Land iguana",
    "breed": "Conolophus subcristatus",
    "legs": 4,
    "head": 2,
    "sound": "Kling-Reilly"
  },
  ...
]
```
  -animal: The name of the animal.  
  -breed: The scientific name of the animal.  
  -legs: The number of legs the animal has.  
  -head: The number of heads the animal has.  
  -sound: The sound the animal makes.

---

## **_Contact Information_**

- ##### [LinkedIn](https://www.linkedin.com/in/drashyapatel)
- ##### **Email**: drashya.patel1@dcmail.ca
- ##### **MicrosoftTeams**: drashya.patel1@dcmail.ca
- ##### **Discord Username**: heyitz_dp 
- ##### [Instagram](https://www.instagram.com/callmedrashya/)
