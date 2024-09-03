const API_KEY = '9a51f4f5547f4092a588b0ccae33473f';
const URL = 'https://newsapi.org/v2/everything?q=';


window.addEventListener('load', () => fetchNews("India"));

async function fetchNews(query) {
    const res = await fetch(`${URL}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    // bindData(data.articles.slice(0, 6));
    const stories = data.articles.slice(0,6);
    const latestStoriesListEl = document.getElementById('latest-stories-list');
    stories.forEach(story => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `<a href="${story.url}">${story.title}</a>`;
      latestStoriesListEl.appendChild(listItem);
    });
}

// function bindData(articles){
//     const listItem = document.getElementById('template-news-story')

//     // latestStoriesListEl.innerHTML = "";

//     articles.forEach(story => {
//                 const listClone = listItem.content.cloneNode(true);
//                 fillDataInList(listClone, story)
//                 latestStoriesListEl.appendChild(listClone)
//     });
// }

// function fillDataInList(listClone, story){
//     const source =listClone.queryselector('#news-url');
//     const date_posted =  listClone.queryselector('#date')

//     source.src = story.url;
//     source.innerText = story.title
//     date_posted.innerText = story.publishedAt
// }
// const stories = data.articles.slice(0, 6); // Get only the first 6 stories
      