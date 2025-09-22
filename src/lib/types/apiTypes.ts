// OpenLibrary API Types

// Main search response interface
export interface OpenLibrarySearchResponse {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  num_found: number;
  documentation_url: string;
  q: string;
  offset: number | null;
  docs: OpenLibraryDocument[];
}

// Base document interface for search results
export interface OpenLibraryDocument {
  key: string;
  title: string;
  author_key?: string[];
  author_name?: string[];
  cover_edition_key?: string;
  cover_i?: number;
  ebook_access: 'public' | 'no_ebook' | 'borrowable' | 'printdisabled';
  edition_count: number;
  first_publish_year?: number;
  has_fulltext: boolean;
  public_scan_b: boolean;
  language?: string[];
  subtitle?: string;

  // Internet Archive related fields
  ia?: string[];
  ia_collection_s?: string;
  lending_edition_s?: string;
  lending_identifier_s?: string;

  // Project Gutenberg IDs
  id_project_gutenberg?: string[];

  // LibriVox IDs
  id_librivox?: string[];

  // Standard Ebooks IDs
  id_standard_ebooks?: string[];

  // Additional fields that may appear
  [key: string]: unknown;
}

// Specific work/book interface
export interface Work extends OpenLibraryDocument {
  type: 'work';
  subject?: string[];
  ratings_average?: number;
  ratings_count?: number;
  want_to_read_count?: number;
  already_read_count?: number;
  currently_reading_count?: number;
  readinglog_count?: number;
  _version_?: number;
}

// Author interface
export interface Author {
  key: string;
  name: string;
  top_work?: string;
  type: 'author';
  work_count: number;
  ratings_average: number;
  ratings_sortable: number;
  ratings_count: number;
  ratings_count_1: number;
  ratings_count_2: number;
  ratings_count_3: number;
  ratings_count_4: number;
  ratings_count_5: number;
  want_to_read_count: number;
  already_read_count: number;
  currently_reading_count: number;
  readinglog_count: number;
  _version_: number;
  top_subjects?: string[];
}

// Edition interface
export interface Edition {
  key: string;
  title: string;
  type: 'edition';
  isbn?: string[];
  publish_date?: string;
  publisher?: string[];
  number_of_pages?: number;
  author_name?: string[];
  author_key?: string[];
  work?: string[];
  cover_i?: number;
  language?: string[];
  _version_?: number;
}

// Internet Archive collection types
export interface InternetArchiveInfo {
  identifier: string;
  collection: string;
  lending_edition?: string;
  lending_identifier?: string;
  has_fulltext: boolean;
  public_scan: boolean;
}

// External service IDs
export interface ExternalIds {
  project_gutenberg?: string[];
  librivox?: string[];
  standard_ebooks?: string[];
  goodreads?: string[];
  amazon?: string[];
  isbn?: string[];
}

// Search filters and parameters
export interface SearchFilters {
  query: string;
  type?: 'author' | 'work' | 'edition';
  limit?: number;
  offset?: number;
  sort?: 'relevance' | 'rating' | 'date' | 'title' | 'new' | 'old';
  language?: string;
  has_fulltext?: boolean;
  public_scan?: boolean;
  ebook_access?: 'public' | 'borrowable' | 'no_ebook';
}

// Pagination info
export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  start: number;
  numFound: number;
}

// Reading list types
export interface ReadingStats {
  want_to_read_count: number;
  already_read_count: number;
  currently_reading_count: number;
  readinglog_count: number;
}

export interface RatingStats {
  ratings_average: number;
  ratings_count: number;
  ratings_count_1: number;
  ratings_count_2: number;
  ratings_count_3: number;
  ratings_count_4: number;
  ratings_count_5: number;
  ratings_sortable: number;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}
