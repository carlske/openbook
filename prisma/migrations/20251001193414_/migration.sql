-- CreateTable
CREATE TABLE "SearchSuggestions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "search" TEXT NOT NULL,
    "suggestions" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
