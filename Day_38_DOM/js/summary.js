console.log('Hello from external JS')

const blogs = document.getElementsByTagName('p');
// console.log(blogs);
for (const blog of blogs) {
    // console.log(blog);
    blog.style.backgroundColor = 'steelblue';
    blog.style.color = 'white';
}

const num = document.getElementById('special-tag');
num.innerText = 'New Num';

num.innerHTML = `
 <h4>Special inner HTML</h4>
 <div>
    <ul>
        <li>ami pari</li>
        <li>LOL inside</li>
    </ul>
 </div>
`
const friends = document.getElementById('friends');
// console.log(friends.children);
const fifth = friends.children[4];
console.log(fifth);
friends.removeChild(fifth);

// create element
const friend = document.createElement('li');
friend.innerText = 'Friend - 11';
friends.appendChild(friend);