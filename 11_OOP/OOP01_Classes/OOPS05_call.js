function setUserName(userName) {
    this.userName = userName;
}

function createUser(username, email, password) {
    setUserName.call(this, username);
    this.email = email;
    this.password = password;
}

const user = new createUser("meghshamvk", "meghshamvinayakkapure@gmail.com", "Sham@09");
console.log(user);

