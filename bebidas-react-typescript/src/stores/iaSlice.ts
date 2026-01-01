import { StateCreator } from "zustand";
import AIServices from "../services/AIService";
 
export type AISlice = {
  recipe: string;
  isGenerating: boolean
  generateRecipe: (prompt: string) => Promise<void>;
};
 
export const createAISlice: StateCreator<AISlice> = (set) => ({
  recipe: "",
  isGenerating: false,
  generateRecipe: async (prompt: string) => {
    try {
        set({recipe: '', isGenerating: true})
        const stream = await AIServices.generateRecipe(prompt);
        let fullText = "";
        for await (const textPart of stream) {
            fullText += textPart;
        }
        set({ recipe: fullText, isGenerating: false });
    } catch (error) {
      console.error("Error generando receta:", error);
    }
  },
});