export interface IMovieShort {
  Title: string
  Year: string
  imdbID: string
  Type: TType
  Poster: string
}

export interface ISearchReq {
  Search: IMovieShort[]
  totalResults: string
  Response: boolean
}

export interface IMovieFull {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: TRating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: TType
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}

type TRating = {
  Source: string
  Value: string
}

type TType = 'movie' | 'series' | 'episode'
