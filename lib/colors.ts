export const colorThemeIds=["template","forest","emerald","sage","olive","navy","cobalt","sky","slate","indigo","violet","plum","burgundy","rose","coral","terracotta","rust","gold","teal","charcoal","chocolate"] as const;
export type ColorThemeId=typeof colorThemeIds[number];
export type ColorTheme={id:ColorThemeId;name:string;accent:string;panel:string};

export const colorThemes:readonly ColorTheme[]=[
  {id:"template",name:"Template Default",accent:"",panel:""},
  {id:"forest",name:"Forest",accent:"#24643c",panel:"#dfe9e2"},
  {id:"emerald",name:"Emerald",accent:"#087f5b",panel:"#d8eee6"},
  {id:"sage",name:"Sage",accent:"#58745c",panel:"#e2e9df"},
  {id:"olive",name:"Olive",accent:"#68712f",panel:"#e9ead9"},
  {id:"navy",name:"Navy",accent:"#17384d",panel:"#dce5ea"},
  {id:"cobalt",name:"Cobalt",accent:"#285ea8",panel:"#dce7f5"},
  {id:"sky",name:"Sky",accent:"#31789b",panel:"#dcecf3"},
  {id:"slate",name:"Slate",accent:"#48596a",panel:"#e0e5e9"},
  {id:"indigo",name:"Indigo",accent:"#3f4e92",panel:"#e0e3f0"},
  {id:"violet",name:"Violet",accent:"#6847a3",panel:"#e8e1f1"},
  {id:"plum",name:"Plum",accent:"#6d315d",panel:"#eadfe7"},
  {id:"burgundy",name:"Burgundy",accent:"#762f3d",panel:"#eedfe2"},
  {id:"rose",name:"Dusty Rose",accent:"#9a5064",panel:"#f1e1e5"},
  {id:"coral",name:"Coral",accent:"#b44f45",panel:"#f4e1de"},
  {id:"terracotta",name:"Terracotta",accent:"#a14f38",panel:"#f1e2dc"},
  {id:"rust",name:"Rust",accent:"#8c452a",panel:"#eee0d8"},
  {id:"gold",name:"Golden Ochre",accent:"#96701f",panel:"#f1ead5"},
  {id:"teal",name:"Teal",accent:"#176b68",panel:"#d9e9e8"},
  {id:"charcoal",name:"Charcoal",accent:"#303638",panel:"#e2e4e4"},
  {id:"chocolate",name:"Chocolate",accent:"#65473b",panel:"#e9e1dd"},
] as const;

export function getColorTheme(id:string):ColorTheme{return colorThemes.find(theme=>theme.id===id)??colorThemes[0]}
