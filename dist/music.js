const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: false,
    autoplay: true,
    volume: 0.4,
    preload: 'auto',
	order: 'random',
    listFolded: true,
    theme: '#ff0000',
    mutex: true,
    loop: 'none',
    audio: [
      {
        name: 'Brain Freeze',
        artist: 'Amree',
        url: 'https://offhzec02.bkt.clouddn.com/124ka40521.mp3',
        cover: 'https://i0.hdslb.com/bfs/face/a9f910a65b0ab8b2033431ca902d7ec47d3c2e52.jpg?param=130y130',
      },
      {
        name: 'Date',
        artist: 'Kotori',
        url: 'https://offhzec02.bkt.clouddn.com/lo213iszm.mp3',
        cover: 'https://p1.music.126.net/GmWtbwYH64Ai_65vYn6E3Q==/3438172871857105.jpg?param=130y130',
      },
      {
        name: 'Fast Car',
        artist: 'Jonas Blue',
        url: 'https://offhzec02.bkt.clouddn.com/202140946412.mp3',
        cover: 'https://p1.music.126.net/_GG6H1O5N2KUmt8kphXERw==/18291475439825379.jpg?param=130y130',
      },
      {
        name: 'Silence',
        artist: 'Khalid',
        url: 'https://offhzec02.bkt.clouddn.com/wPcOCcORY9GFRFy1P1Rc.mp3',
        cover: 'https://p1.music.126.net/aBE9Hc1G7S_Sp3ZcFG-tLA==/18421217812016775.jpg?param=130y130',
      },
    ]
});