const myYoutubeVideos = require('./videos.json')

const parseVideos = myYoutubeVideos.map((video) => ({
    name: video.title,
    url: `https://www.youtube.com/watch?v=${video.videoId}`,
    thumbnail: `https://i.ytimg.com/vi/${video.videoId}/maxresdefault.jpg`,
    type: "video"
}))

let groups = [];
for (let i = 0; i < parseVideos.length; i += 6) {
  let group = {
    title: "#" + (i/6 + 1),
    items: [...parseVideos.slice(i, i + 6),  {type: "message"}]
  };
  groups.push(group);
}

console.log(JSON.stringify(groups))