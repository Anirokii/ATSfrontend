import { JobTypeEnum } from "../enum/jobTypeEnum";
import { Technology } from "./technology";

export interface Job {
  id: number;
  jobTitle: string;
  postedDate:Date;
  jobType:JobTypeEnum;
  experienceRequired: number;
  salary:number;
  location: string;
  department: string;
  jobImage : String;
  description:String;
  technologiesList: Technology[];
}
