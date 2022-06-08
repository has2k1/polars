initSidebarItems({"enum":[["State","State of [`MutStreamingIterator`]."]],"fn":[["decompress","Decompresses the page, using `buffer` for decompression. If `page.buffer.len() == 0`, there was no decompression and the buffer was moved. Else, decompression took place."],["filter_row_groups","Filters row group metadata to only those row groups, for which the predicate function returns true"],["get_column_iterator","Returns a [`ColumnIterator`] of column chunks corresponding to `field`. Contrarily to [`get_page_iterator`] that returns a single iterator of pages, this iterator returns multiple iterators, one per physical column of the `field`. For primitive fields (e.g. `i64`), [`ColumnIterator`] yields exactly one column. For complex fields, it yields multiple columns."],["get_field_columns","Returns an [`Iterator`] of [`ColumnChunkMetaData`] corresponding to the columns from `field` at `row_group`. For primitive fields (e.g. `i64`), the iterator has exactly one item."],["get_page_iterator","Returns a new [`PageReader`] by seeking `reader` to the begining of `column_chunk`."],["get_page_stream","Returns a stream of compressed data pages"],["read_columns_indexes","Reads the column indexes of all [`ColumnChunkMetaData`] and deserializes them into [`Index`]. Returns an empty vector if indexes are not available"],["read_metadata","Reads a file’s metadata."],["read_metadata_async","Asynchronously reads the files’ metadata"],["read_pages_locations","Read [`PageLocation`]s from the [`ColumnChunkMetaData`]s. Returns an empty vector if indexes are not available"]],"mod":[["levels",""]],"struct":[["BasicDecompressor","A [`FallibleStreamingIterator`] that decompresses [`CompressedDataPage`] into [`DataPage`]."],["ColumnIterator","A [`MutStreamingIterator`] that reads column chunks one by one, returning a [`PageReader`] per column."],["Decompressor","Decompressor that allows re-using the page buffer of [`PageIterator`]."],["IndexedPageReader","A fallible [`Iterator`] of [`CompressedDataPage`]. This iterator leverages page indexes to skip pages that are not needed. Consequently, the pages from this iterator always have [`Some`] [`CompressedDataPage::rows()`]"],["PageMetaData","This meta is a small part of [`ColumnChunkMetaData`]."],["PageReader","A fallible [`Iterator`] of [`CompressedDataPage`]. This iterator reads pages back to back until all pages have been consumed. The pages from this iterator always have [`None`] [`CompressedDataPage::rows()`] since filter pushdown is not supported without a pre-computed page index."],["ReadColumnIterator","A [`MutStreamingIterator`] of pre-read column chunks"]],"trait":[["ColumnChunkIter","Trait describing a [`MutStreamingIterator`] of column chunks."],["MutStreamingIterator","A special kind of fallible streaming iterator where `advance` consumes the iterator."],["PageIterator",""]],"type":[["PageFilter","Type declaration for a page filter"]]});