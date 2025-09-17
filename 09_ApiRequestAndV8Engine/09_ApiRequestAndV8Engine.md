# API Request and V8 Engine

## API

API (Application Programming Interface) is a set of rules and tools that allow two software programs to communicate with each other. This rules describe 1. What you can ask for (the inputs) 2. How you must ask (the rules/format) 3. What you’ll get back (the output/response)

An API lists available operations (like fetch data, save data, send messages) used to interact with software, databases, or devices without needing to know the internal details

T
Example:

- When you enter `https://api.github.com/users/meghsham-supersolid` in browser, you will get all the information releted with username `meghsham-supersolid` in JSON format

    ```json
    {
    "login": "meghsham-supersolid",
    "id": 218701007,
    "node_id": "U_kgDODQkczw",
    "avatar_url": "https://avatars.githubusercontent.com/u/218701007?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/meghsham-supersolid",
    "html_url": "https://github.com/meghsham-supersolid",
    "followers_url": "https://api.github.com/users/meghsham-supersolid/followers",
    "following_url": "https://api.github.com/users/meghsham-supersolid/following{/other_user}",
    "gists_url": "https://api.github.com/users/meghsham-supersolid/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/meghsham-supersolid/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/meghsham-supersolid/subscriptions",
    "organizations_url": "https://api.github.com/users/meghsham-supersolid/orgs",
    "repos_url": "https://api.github.com/users/meghsham-supersolid/repos",
    "events_url": "https://api.github.com/users/meghsham-supersolid/events{/privacy}",
    "received_events_url": "https://api.github.com/users/meghsham-supersolid/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Meghsham Kapure",
    "company": null,
    "blog": "https://www.linkedin.com/in/meghsham-kapure/",
    "location": "Pune, Maharashtra, India",
    "email": null,
    "hireable": true,
    "bio": "Full Stack Developer | Java & JavaScript\r\nBuilding scalable web applications with Spring Boot, the MERN stack, and modern frontend frameworks.",
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2025-07-01T02:09:50Z",
    "updated_at": "2025-09-13T04:56:09Z"
    }
    ```

    Note : JSON Strings are mostly not formatted so read the them you have to use tools like JSON FORMATE which will represent data in tree, graph like formats which make easier to read the data.

## Getting data from a API

### APPROACH 1 (Legacy Thing) Using XML HTML Request


