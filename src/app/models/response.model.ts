import { ICaracter } from "./caracter.model";

export interface IResponse {
    info: IInfo;
    results: ICaracter[];
}

export interface IInfo { 
    count: number;
    pages: number;
    next: string;
    prev: string;
}