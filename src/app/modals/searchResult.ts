import { Candidate } from "./candidate";
import { Job } from "./job";


export interface SearchResult {
  id: number;
  job: Job;
  resultList: Candidate[];
}
