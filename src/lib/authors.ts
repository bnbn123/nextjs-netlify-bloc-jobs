import authors from "../../meta/authors.yaml";
console.log("🚀 ~ file: authors.ts ~ line 2 ~ authors", authors);

export type AuthorContent = {
  readonly slug: string;
  readonly name: string;
  readonly introduction: string;
};

const authorMap: { [key: string]: AuthorContent } = generateAuthorMap();

function generateAuthorMap(): { [key: string]: AuthorContent } {
  let result: { [key: string]: AuthorContent } = {};
  for (const author of authors.authors) {
    result[author.slug] = author;
  }
  return result;
}

export function getAuthor(slug: string) {
  return authorMap[slug];
}
