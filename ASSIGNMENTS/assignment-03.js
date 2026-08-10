//Problem-01: Student Introduction Generator
function studentIntroduction(student) {
    const keys = Object.keys(student);
    if (typeof student !== "object" || keys.length === 0 || !keys.includes("name") || !keys.includes("age") || !keys.includes("course")) {
        return "Invalid";
    }

    const { name, age, course } = student;
    return `My name is ${name}. I am ${age} years old. I am learning ${course}.`
}
//  console.log(studentIntroduction("student"))
//  console.log(studentIntroduction({}))
//  console.log(studentIntroduction({ name: "Rafi", age: 18, course: "JavaScript" }))

//Problem-02: Active User Filter
function filterActiveUsers(users) {
    // check the array or empty array
    if (Array.isArray(users) === false || users.length === 0) {
        return "Invalid";
    }

    // check the isActive property
    for (const user of users) {
        const keys = Object.keys(user);
        if (!keys.includes("isActive")) {
            return "Invalid";
        }
    }

    // return the filter value
    return users.filter((user) => user.isActive === true);
}
//console.log(filterActiveUsers([]))
//console.log(filterActiveUsers([{ name: "A", isActive:true}, { name: "B", isActive: false }]))

//Problem-03: Trending Hashtag Counter
function countHashtags(caption) {
    if (typeof caption !== "string") {
        return "Invalid";
    }
    // convert text to array
    const textArray = caption.split(" ").filter((word) => word.startsWith("#"));

    // find longest tag
    let longestTag = "";
    const tag = textArray.map((word) => word.slice(1));
    for (const element of tag) {
        if (element.length > longestTag.length) {
            longestTag = element;
        }
    }

    return {
        hashtagCount: textArray.length, longestTag: longestTag
    }
}
// console.log(countHashtags(["#fun"]))
// console.log(countHashtags("#ai #ml data science"))
// console.log(countHashtags("Loving this weather today #sunny #vibes #weekend"))

//Problem-04: Bonus Score Calculator
function bonusScore(scores) {
    // check  input is not an array or empty
    if (Array.isArray(scores) === false || scores.length === 0) {
        return "Invalid";
    }

    // array contains any data type other than numbers
    for (let score of scores) {
        if (typeof score !== "number") {
            return "Invalid";
        }
    }

    // add bonus & show total of array
    return scores.map((score) => score + 10)
        .reduce((total, score) => total + score);
}
// console.log(bonusScore([]))
// console.log(bonusScore("scores"))
// console.log(bonusScore([80, "90", 70]))
// console.log(bonusScore([80, 65, 90, 75]))
// console.log(bonusScore([100]))



//Problem-05: Debugging Challenge - AI Leaderboard Generator
/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
    if (!Array.isArray(students)) {
        return "Invalid";
    }

    if (students.length === 0) {
        return "Invalid";
    }

    for (let student of students) {
        if (typeof student.score !== "number") {
            return "Invalid";
        }
    }

    for (const student of students) {
        const keys = Object.keys(student);
        if (!keys.includes("name" || !keys.includes("score"))) {
            return "Invalid";
        }
    }

    const qualified = students.filter(student => student.score >= 70);

    const names = qualified.map((student) => student.name.toUpperCase())

    return names;
}
console.log(generateLeaderboard([{ name: "Rafi", score: 90 }, { name: "Sadia", score: 65 }, { name: "Karim", score: 85 }, { name: "Nafis", score: 75 }]))
console.log(generateLeaderboard([{ name: "A", score: 70 }, { name: "B", score: 71 }]))
console.log(generateLeaderboard([{ "name": "Rafi", "score": "90" }]))
console.log(generateLeaderboard([{ "name": "Rafi" }]))

