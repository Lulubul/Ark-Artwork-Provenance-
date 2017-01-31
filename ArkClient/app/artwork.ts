import { Revision } from './revision';

export interface Artwork{
    id: number;
    title: string;
   	abstract: string;
   	imageUrl: string;
   	revisions: Revision[];
   	artist: string;
   	year: string;
    museum: string;
    country: string;
    city: string;
    medium: string;
    period: string;
}
