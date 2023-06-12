import { InterviewStatus } from "../enum/interviewStatus";
import { Manager } from "./actors/manager";
import { Candidate } from "./candidate";


export interface Interview {
  id: number;
  interviewStatus: InterviewStatus;
  dateInterview: Date;
  result: number;
  comment: string;
  candidate: Candidate;
  manager: Manager;
}
