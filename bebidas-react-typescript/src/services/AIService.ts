import { streamText } from 'ai'
import { openRouter } from '../lib/ai'

export default {
    async generateRecipe(prompt: string){
        const result = streamText({
            model: openRouter('meta-llama/llama-3.3-70b-instruct:free'),
            prompt,
            system: 'Eres un bartender con 50 años de experiencia sirviendo cockteles a clientes refinados en españa',
            temperature: 1
        })

        return result.textStream
    }

}