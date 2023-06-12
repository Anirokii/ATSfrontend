import { CandidateStatus } from "../enum/candidateStatus";
import { Job } from "./job";
import { Technology } from "./technology";

export interface Candidate {
    id: number;
    fullName:string;
    age:number;
    bio:string;
    phone:string;
    imgProfil:File| null;
    educationLevel:string;
    university:string;
    location:string;
    dateOfBirth:Date;
    experienceLevel:number;
    technologiesList:Technology[];
    score:number;
    cvScore:number;
    expScore:number;
    interviewScore:number;
    jobsList:Job[];
    status:CandidateStatus;
  }