/**
 *
 * WorkplaceLink
 *
 */
 import Link from "next/link";
 import { memo, ComponentPropsWithoutRef } from "react";
 
 import Button from "@mui/material/Button";
 import Tooltip from "@mui/material/Tooltip";
 
 import { FocusedText } from "components/FocusedText";
 import { Section, Workplace } from "types.d";
 
 interface Props extends ComponentPropsWithoutRef<typeof FocusedText> {
   currentWorkplace?: string | string[];
   workplace: Workplace;
 }
 
 export const WorkplaceLink = memo(
   ({ currentWorkplace, workplace, children, ...rest }: Props) => (
     <Tooltip
       followCursor
       disableTouchListener
       title={
         <>
           <h2>{TITLE[workplace]}</h2>
           <h3>{TECH[workplace]}</h3>
         </>
       }
     >
       <span>
         <Link href={`/${Section.work}/${workplace}/`} passHref shallow>
           <Button variant="text" type="button">
             <FocusedText active={currentWorkplace === workplace} {...rest}>
               {children}
             </FocusedText>
           </Button>
         </Link>
       </span>
     </Tooltip>
   )
 );
 
 WorkplaceLink.displayName = WorkplaceLink.name;
 
 const TITLE: Record<Workplace, string> = {
  [Workplace.siemens]: "Senior Technical Lead - AI.Systems",
  [Workplace.mentor]: "Senior Technical Lead - Machine Monitoring",
  [Workplace.sensys]: "Delivery & Compliance Manager - Plant Information Management",
  [Workplace.imperious]: "Applications Engineer - SCADA softwares suits, OPC Servers & Clients"
 };
 
 const TECH: Record<Workplace, string> = {
  [Workplace.siemens]: "TypeScript, Python, Go, Java, SQL, Azure, AWS, IIoT, AI, Data Analytics",
  [Workplace.mentor]:
    "TypeScript, Python, Go, Java, C#, MongoDB, SQL, AWS, Azure",
  [Workplace.sensys]: "Python, Cosmos DB, Azure",
  [Workplace.imperious]: "TypeScript, C#, SQL",
 };
 