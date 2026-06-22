export const templateIds = ["classic","modern","minimal","executive","compact","sidebar","centered","blue","mono","creative","crimson","sandstone","slate","teal","framed"] as const;
export type TemplateId = typeof templateIds[number];
export type TemplateCategory = "Simple"|"Modern"|"Professional"|"Creative";

export type ResumeTemplate = {
  id: TemplateId;
  name: string;
  description: string;
  category: TemplateCategory;
  layout: "single"|"split";
  accent: string;
  panel: string;
  header: "line"|"centered"|"band"|"plain";
  headings: "line"|"bar"|"caps";
  density: "comfortable"|"compact";
};

export const resumeTemplates: readonly ResumeTemplate[] = [
  {id:"classic",name:"Classic Clear",description:"Traditional, polished, and ATS-friendly.",category:"Simple",layout:"single",accent:"#24643c",panel:"#ffffff",header:"line",headings:"line",density:"comfortable"},
  {id:"modern",name:"Modern Split",description:"Balanced two-column editorial layout.",category:"Modern",layout:"split",accent:"#2f6049",panel:"#e4e8e4",header:"plain",headings:"bar",density:"comfortable"},
  {id:"minimal",name:"Minimal Air",description:"Generous whitespace with quiet typography.",category:"Simple",layout:"single",accent:"#3f4642",panel:"#ffffff",header:"plain",headings:"caps",density:"comfortable"},
  {id:"executive",name:"Executive Navy",description:"Strong navy header for senior profiles.",category:"Professional",layout:"single",accent:"#17384d",panel:"#ffffff",header:"band",headings:"bar",density:"comfortable"},
  {id:"compact",name:"Compact Pro",description:"Fits more experience without feeling crowded.",category:"Professional",layout:"single",accent:"#202521",panel:"#ffffff",header:"line",headings:"line",density:"compact"},
  {id:"sidebar",name:"Sage Sidebar",description:"Soft sage sidebar with focused details.",category:"Modern",layout:"split",accent:"#496656",panel:"#cbd8cf",header:"plain",headings:"line",density:"compact"},
  {id:"centered",name:"Centered Serif",description:"Elegant centered header and classic rules.",category:"Simple",layout:"single",accent:"#242424",panel:"#ffffff",header:"centered",headings:"line",density:"comfortable"},
  {id:"blue",name:"True Blue",description:"Crisp blue rules with a corporate finish.",category:"Professional",layout:"single",accent:"#315f7d",panel:"#ffffff",header:"plain",headings:"line",density:"compact"},
  {id:"mono",name:"Mono Line",description:"Sharp monochrome styling for technical roles.",category:"Simple",layout:"single",accent:"#111111",panel:"#ffffff",header:"plain",headings:"caps",density:"compact"},
  {id:"creative",name:"Cobalt Edge",description:"Bold blue sidebar for creative confidence.",category:"Creative",layout:"split",accent:"#174f70",panel:"#174f70",header:"plain",headings:"bar",density:"comfortable"},
  {id:"crimson",name:"Crimson Banner",description:"A confident banner with refined contrast.",category:"Creative",layout:"single",accent:"#7a2e3d",panel:"#ffffff",header:"band",headings:"caps",density:"comfortable"},
  {id:"sandstone",name:"Sandstone Dual",description:"Warm neutral split for thoughtful profiles.",category:"Modern",layout:"split",accent:"#746558",panel:"#ddd4c8",header:"plain",headings:"line",density:"comfortable"},
  {id:"slate",name:"Slate Column",description:"Cool gray sidebar and compact structure.",category:"Professional",layout:"split",accent:"#40545f",panel:"#dce2e5",header:"plain",headings:"caps",density:"compact"},
  {id:"teal",name:"Teal Focus",description:"Fresh teal hierarchy with an open layout.",category:"Modern",layout:"single",accent:"#176b68",panel:"#ffffff",header:"line",headings:"bar",density:"comfortable"},
  {id:"framed",name:"Framed Classic",description:"Elegant centered type with formal rules.",category:"Simple",layout:"single",accent:"#4c4038",panel:"#ffffff",header:"centered",headings:"caps",density:"compact"},
] as const;

export function getTemplate(id:string):ResumeTemplate{return resumeTemplates.find(template=>template.id===id)??resumeTemplates[0]}
