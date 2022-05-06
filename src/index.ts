import fetch from 'node-fetch';
import { DNIinfo, RUCinfo } from './infoTypes';
const url: string = "https://api.apis.net.pe/v1/";
/**
 * Gets RUC data from RUC
 * @param ruc
 * @returns RUCinfo 
 */
export async function getRucData(ruc: string): Promise<RUCinfo> {

    try {
        let response = await fetch(url + 'ruc?numero=' + ruc);
        let json = await response.json();
        if (json.includes("error")) throw Error(json.error);
        return json as RUCinfo;
    } catch (error) {
        throw Error("Error getting RUC data.");
    }
}
/**
 * Gets Dni data from Dni
 * @param dni
 * @returns DNIinfo 
 */
export async function getDniData(dni: string): Promise<DNIinfo> {
    try {
        let response = await fetch(url + 'dni?numero=' + dni);
        let json = await response.json();
        if (json.includes("error")) throw Error(json.error);
        return await json as DNIinfo;
    } catch (error) {
        throw Error("Error getting DNI data.");
    }
}

getRucData("20607110303").then(console.log)