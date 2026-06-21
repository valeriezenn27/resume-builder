export const templateIds = ["classic","modern","minimal","executive","compact","sidebar","centered","blue","mono","creative"] as const;
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
] as const;

export function getTemplate(id:string):ResumeTemplate{return resumeTemplates.find(template=>template.id===id)??resumeTemplates[0]}
