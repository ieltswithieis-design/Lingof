Lingofi standardized-tests split
=================================

The former 50+ MB standardized_tests.json has been replaced by:
- database/tests/standardized_tests_part1.json
- database/tests/standardized_tests_part2.json
- database/tests/standardized_tests_part3.json
and matching public/ files.

Each part is below 25 MB. The application automatically combines the three
parts into the same StandardizedDatabase shape, so the existing standardized
test menus, API, database import, and Supabase persistence continue to work
as one database.

Do not rename, omit, or merge the three part files.
