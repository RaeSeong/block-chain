import { Injectable } from "@nestjs/common";
import axios from 'axios'
@Injectable()
export class SlackSupport {
    constructor() { }

    async sendNotificationToSlack(message: string){
        const url = process.env.SLACK_URL
        const body = {
            text: message
        }
        await axios.post(url, body)
    }
}