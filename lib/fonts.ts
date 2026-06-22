export const fontIds=["sans","serif","modern","editorial","mono","humanist","geometric","slab","condensed","typewriter"] as const;
export type FontId=typeof fontIds[number];
export type ResumeFont={id:FontId;name:string;description:string;css:string;pdf:string;pdfBold:string};

export const resumeFonts:readonly ResumeFont[]=[
  {id:"sans",name:"Clean Sans",description:"Neutral and highly readable.",css:'Inter, ui-sans-serif, system-ui, sans-serif',pdf:"Helvetica",pdfBold:"Helvetica-Bold"},
  {id:"serif",name:"Classic Serif",description:"Traditional and authoritative.",css:'Georgia, Cambria, "Times New Roman", serif',pdf:"Times-Roman",pdfBold:"Times-Bold"},
  {id:"modern",name:"Modern Sans",description:"Crisp, geometric, and contemporary.",css:'Avenir Next, Avenir, Montserrat, ui-sans-serif, sans-serif',pdf:"Helvetica",pdfBold:"Helvetica-Bold"},
  {id:"editorial",name:"Editorial",description:"Refined with a human touch.",css:'Palatino, "Palatino Linotype", Book Antiqua, serif',pdf:"Times-Roman",pdfBold:"Times-Bold"},
  {id:"mono",name:"Technical Mono",description:"Precise and distinctive.",css:'SFMono-Regular, Menlo, Monaco, Consolas, monospace',pdf:"Courier",pdfBold:"Courier-Bold"},
  {id:"humanist",name:"Humanist",description:"Friendly, open, and approachable.",css:'"Gill Sans", "Trebuchet MS", Calibri, sans-serif',pdf:"Helvetica",pdfBold:"Helvetica-Bold"},
  {id:"geometric",name:"Geometric",description:"Confident shapes for modern roles.",css:'Futura, "Century Gothic", Avenir, sans-serif',pdf:"Helvetica",pdfBold:"Helvetica-Bold"},
  {id:"slab",name:"Slab Serif",description:"Sturdy character with clear hierarchy.",css:'Rockwell, "Roboto Slab", Georgia, serif',pdf:"Times-Roman",pdfBold:"Times-Bold"},
  {id:"condensed",name:"Condensed",description:"Efficient typography for dense resumes.",css:'"Arial Narrow", "Helvetica Neue", Arial, sans-serif',pdf:"Helvetica",pdfBold:"Helvetica-Bold"},
  {id:"typewriter",name:"Typewriter",description:"Warm, crafted, and memorable.",css:'"American Typewriter", "Courier New", monospace',pdf:"Courier",pdfBold:"Courier-Bold"},
] as const;

export function getFont(id:string):ResumeFont{return resumeFonts.find(font=>font.id===id)??resumeFonts[0]}
