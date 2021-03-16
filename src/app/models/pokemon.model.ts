import { Abilities } from './abilities.model';
import { Image } from './image.model';
import { Moves } from './moves.model';
import { Stats } from './stats.model';
import { Types } from './types.model';

export interface Pokemon {
    id:number;
    name?: string;
    height?: number;
    url:string;
    weight?: number;
    base_experience?: number;
    stats?: Stats[];
    moves?: Moves[];
    types?: Types[];
    sprites?: Image;
    abilities?:Abilities[];
    image?:string

}