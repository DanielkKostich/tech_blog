# Tech Blog 

This is a Tech blog site that allows developers to publish articles, blog posts, and share their thoughts and opinions. Users can sign up, log in, create and manage blog posts, leave comments, and log out. The site provides a homepage with existing blog posts, a navigation menu for easy access, and authentication for secure access to user-specific functionalities.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- Homepage displaying existing blog posts
- Navigation links for the homepage and the dashboard
- User authentication (signup, login, logout)
- User dashboard to manage blog posts
- Add, update blog posts
- View blog post details, including comments
- Leave comments on blog posts


## Getting Started
To get a local copy up and running, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/DanielkKostich/tech_blog
   ```
2. Change to the project directory:
   ```
   cd tech_blog
   ```
3. Install the dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

## Usage
Once you have the application running locally, you can access it at `http://localhost:3000` in your web browser.

### Homepage
- The homepage displays existing blog posts if any have been posted.
- It also provides navigation links for the homepage, the dashboard, and the option to log in.

### Authentication
- Clicking on any link in the navigation will prompt you to sign up or sign in.
- To sign up, provide a username and password.
- After signing up, your user credentials will be saved, and you will be automatically logged into the site.
- If you revisit the site later, you can choose to sign in using your username and password.

### Dashboard
- When signed in, you will see navigation links for the homepage, the dashboard, and the option to log out.
- Clicking on the dashboard link will take you to a page displaying any blog posts you have already created.
- You can also add a new blog post from the dashboard.

### Blog Posts
- To create a new blog post, click on the "Add New Post" button in the dashboard.
- Enter a title and contents for your blog post.
- Click on the "Create Post" button to save your post.
- You will be redirected back to an updated dashboard with your new blog post.
- In the dashboard, you can click on one of your existing posts to delete or update it.

### Blog Post Details and Comments
- Clicking on an existing blog post from the homepage or the dashboard will take you to its details page.
- The details page displays the post title, contents, post creator's username, and date created.
- You can also leave a comment on the blog post by entering it and clicking on the "Submit" button.
- If you are signed in, your comment will be saved, and the post will be updated to display the comment, the comment creator's username, and the date created.

## Contributing
Contributions are welcome! If you have any suggestions or find any issues, please create an issue or submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).