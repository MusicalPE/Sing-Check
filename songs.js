// 노래첵! 곡 목록
// Claude에서 연 노래첵!에서 악보를 읽은 뒤 "곡 목록용으로 복사"를 누르고,
// 아래 SONGS 목록의 맨 끝(마지막 ] 바로 위)에 붙여 넣으면 곡 고르기에 나와요.
//
// title     : 곡 이름
// bpm       : 빠르기 (4분음표 기준)
// transpose : 조옮김 (반음 수, 악보 그대로면 0)
// offset    : MR에서 노래가 시작되는 초 (MR 없으면 0)
// mr        : 저장소에 올린 MR 파일 경로, 예: "mr/twinkle.mp3" (없으면 "")
//             파일 이름은 영어·숫자로 하는 게 안전해요. 직접 만든 MR만 올리세요.
// notes     : 음 목록 (C4:1 = 가온 도 4분음표, G4:0.5 = 솔 8분음표, 쉼:1 = 4분쉼표)

window.SONGS = [
  {
    title: "작은 별",
    bpm: 90,
    transpose: 0,
    offset: 0,
    mr: "",
    notes: `
C4 C4 G4 G4 A4 A4 G4:2 F4 F4 E4 E4 D4 D4 C4:2
G4 G4 F4 F4 E4 E4 D4:2 G4 G4 F4 F4 E4 E4 D4:2
C4 C4 G4 G4 A4 A4 G4:2 F4 F4 E4 E4 D4 D4 C4:2
`
  },

];
