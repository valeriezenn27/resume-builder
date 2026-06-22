export const colorThemeIds=["template","forest","navy","cobalt","plum","burgundy","teal","charcoal","terracotta"] as const;
export type ColorThemeId=typeof colorThemeIds[number];
export type ColorTheme={id:ColorThemeId;name:string;accent:string;panel:string};

export const colorThemes:readonly ColorTheme[]=[
  {id:"template",name:"Template Default",accent:"",panel:""},
  {id:"forest",name:"Forest",accent:"#24643c",panel:"#dfe9e2"},
  {id:"navy",name:"Navy",accent:"#17384d",panel:"#dce5ea"},
  {id:"cobalt",name:"Cobalt",accent:"#285ea8",panel:"#dce7f5"},
  {id:"plum",name:"Plum",accent:"#6d315d",panel:"#eadfe7"},
  {id:"burgundy",name:"Burgundy",accent:"#762f3d",panel:"#eedfe2"},
  {id:"teal",name:"Teal",accent:"#176b68",panel:"#d9e9e8"},
  {id:"charcoal",name:"Charcoal",accent:"#303638",panel:"#e2e4e4"},
  {id:"terracotta",name:"Terracotta",accent:"#a14f38",panel:"#f1e2dc"},
] as const;

export function getColorTheme(id:string):ColorTheme{return colorThemes.find(theme=>theme.id===id)??colorThemes[0]}
