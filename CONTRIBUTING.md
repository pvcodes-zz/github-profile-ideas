# How to contribute to this project

This is a basic profile sharing repository which is also used to teach beginners the basics of Git and GitHub and let them do their first contributions. In this project, people can share a screenshot of there profile and showcase it on the [website](https://designsystemsoss.github.io/github-profile-ideas/index.html).

## Steps to get started with the contribution

Follow these steps in order to contribute to this project, create your first PR and get those green squares on your profile.

### Step 01: Fork this project

I order to make changes to this project you first need to fork this project and create a copy of the same in your github profile. This is where you'll make the changes.

### Step 02: Clone the repository on your system

Copy the git URL from your forked repository.

Now, you need to clone the project on your local system to get started with making changes.
Write the command given below in the terminal. Before that, switch to the directory/folder where you want to clone your project.

```CMD
git clone https://github.com/<username>/github-profile-ideas.git
```

### Step 03: Adding your profile data

Now you need to make those code changes, follow the steps explained below:

1. Create an issue with the feature-request template and give the proper details asked in the issue description.
2. The screenshot that you'll take of your profile, when you'll paste that in the description, it will generate a "raw.github" URL and that's what we need. 
3. After that, Copy that screenshot URL from GitHub and paste it somewhere as we will be using this.
4. Go to the code base, `Data/profile_data.json`, This JSON data is what the website is using to fetch and display profiles. Add the code snippet by modifying it according to your profile.

```JSON
{
    "github_username": "<GITHUB_USERNAME>",
    "fullname": "<YOUR_FULL_NAME>",
    "profile_screenshot": "<SCREENSHOT_URL_FROM_GITHUB>",
    "profile_photo": "<GITHUB_PROFILE_PHOTO_URL>"
}
```

And add this block at the very last of the JSON file to create a new data entry.