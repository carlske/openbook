import { prisma } from '@/lib/prisma';

export default interface SearchSuggestion {
  id?: string;
  search: string;
  suggestions: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export const getSearchSuggestion = async (search: string): Promise<SearchSuggestion | null> => {
  return await prisma.searchSuggestions.findFirst({
    where: { search },
  });
};

export const saveSearchSuggestion = async ({
  search,
  suggestions,
}: SearchSuggestion): Promise<SearchSuggestion | null> => {
  return await prisma.searchSuggestions.create({
    data: {
      search: search === undefined ? '' : search,
      suggestions,
    },
  });
};

export const updateSearchSuggestion = async (id: string, suggestions: string): Promise<SearchSuggestion | null> => {
  return await prisma.searchSuggestions.update({
    where: { id },
    data: { suggestions },
  });
};
