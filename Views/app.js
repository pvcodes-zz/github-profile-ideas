
const ProfileContainer = document.querySelector('.profiles-container');


fetch('https://raw.githubusercontent.com/DesignSystemsOSS/github-profile-ideas/master/Data/profile_data.json')
  .then((res) => res.json())
  .then((res) => {
  for (let profile_data in res) {
    console.log(res[profile_data]);

    let profileCard = document.createElement("div");
    profileCard.classList.add("profile-card");

    let profile_username = document.createElement("a");
    profile_username.classList.add('profile-username');

    let profile_fullname = document.createElement("p");
    profile_fullname.classList.add('profile-fullname');

    let profile_photo = document.createElement("img");
    profile_photo.classList.add("profile-photo");

    let profile_screenshot = document.createElement("img");
    profile_screenshot.classList.add("profile-screenshot");
    
    profile_username.textContent = `@${res[profile_data].github_username}`;
    profile_username.href = `https://www.github.com/${res[profile_data].github_username}`;
    profile_username.target = "_blank";
    profile_fullname.textContent = res[profile_data].fullname;
    profile_photo.src = res[profile_data].profile_photo;
    profile_screenshot.src = res[profile_data].profile_screenshot;

    profileCard.append(profile_screenshot);

    let profileCardBody = document.createElement("div");
    profileCardBody.classList.add("profile-card-body");

    profileCardBody.append(profile_photo);
    profileCardBody.append(profile_username);
    
    profileCard.append(profileCardBody);
    
    profileCard.append(profile_fullname);
    
    ProfileContainer.append(profileCard);
  }
});

