export const markdownToJSON = (md: string): Record<string, any> => {
  const text = md;
  try {
    const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
    if (jsonMatch && jsonMatch[1]) {
      return JSON.parse(jsonMatch[1].trim());
    } else {
      return JSON.parse(text);
    }
  } catch (parseError) {
    console.error('Error parsing markdown to JSON:', parseError);
    return {};
  }
};
