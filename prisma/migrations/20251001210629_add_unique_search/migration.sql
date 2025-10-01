/*
  Warnings:

  - A unique constraint covering the columns `[search]` on the table `SearchSuggestions` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "SearchSuggestions_search_key" ON "SearchSuggestions"("search");
