export const markdownToJSON = (md: string) => {
  const text = md;
  try {
    const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
    if (jsonMatch && jsonMatch[1]) {
      return JSON.parse(jsonMatch[1].trim());
    } else {
      return JSON.parse(text);
    }
  } catch (parseError) {
    return new Error('Failed to parse AI response', { cause: `${parseError}` });
  }
};
