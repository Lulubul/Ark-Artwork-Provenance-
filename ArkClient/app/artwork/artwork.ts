

import { Revision } from '../revision/revision';
export interface Artwork{
    id: number;
    title: string;
   	abstract: string;
   	imageUrl: string;
   	revisions: Revision[];
   	artist: string;
   	year: string;
    museum: string;
    country: String;
    city: String;
    medium: String;
    period: String;
}
