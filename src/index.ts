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
        return await response.json() as RUCinfo;
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
        return await response.json() as DNIinfo;
    } catch (error) {
        throw Error("Error getting DNI data.");
    }
}