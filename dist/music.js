const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: false,
    volume: 0.1,
    preload: 'auto',
	order: 'random',
    listFolded: true,
    theme: '#1E90FF',
    mutex: true,
    loop: 'none',
    audio: [
      {
        name: 'Brain Freeze',
        artist: 'Amree',
        url: 'http://offhzec02.bkt.clouddn.com/124ka40521.mp3',
        cover: 'https://p1.music.126.net/qXzx83WH-9TBtobqmZMDTQ==/109951163382096836.jpg?param=200y200',
      },
/*      {
        name: 'Date Remix',
        artist: 'Kotori',
        url: 'http://offhzec02.bkt.clouddn.com/lo213iszm.mp3',
        cover: 'https://p1.music.126.net/GmWtbwYH64Ai_65vYn6E3Q==/3438172871857105.jpg?param=130y130',
      },

      {
        name: 'Fast Car',
        artist: 'Jonas Blue',
        url: 'http://offhzec02.bkt.clouddn.com/202140946412.mp3',
        cover: 'https://p1.music.126.net/_GG6H1O5N2KUmt8kphXERw==/18291475439825379.jpg?param=130y130',
      },
      {
        name: 'Silence',
        artist: 'Khalid',
        url: 'http://offhzec02.bkt.clouddn.com/wPcOCcORY9GFRFy1P1Rc.mp3',
        cover: 'https://p1.music.126.net/aBE9Hc1G7S_Sp3ZcFG-tLA==/18421217812016775.jpg?param=130y130',
      },
      {
        name: 'Sing For You',
        artist: 'Dirty Palm',
        url: 'http://music.163.com/song/media/outer/url?id=491955358.mp3',
        cover: 'https://p1.music.126.net/CjmWJrJKlfFXXAI3F4k--g==/18701593278831158.jpg?param=200y200',
      },
*/
    ]
});