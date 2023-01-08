import { Tag, Tags } from "../Tags";
import {
    Content,
    GreyText,
    Image,
    ImageBackground,
    MovieLink,
    Rate,
    Rating,
    Star,
    Tile,
    Tiles,
    Title
} from "./styled";

const MovieTiles = ({ genres, movies }) => (
    <Tiles>
        {movies.map((movie) => (
            <MovieLink key={movie.original_title} to={`/movies/${movie.id}`}>
                <Tile>
                    <ImageBackground>
                        {movie.poster_path ? (
                            <Image
                                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                alt=""
                            />
                        ) : (
                            <Image />
                        )}
                    </ImageBackground>
                    <Content>
                        {movie.original_title && (
                            <Title>{movie.original_title}</Title>
                        )}
                        {movie.release_date && (
                            <GreyText>{movie.release_date.slice(0, 4)}</GreyText>
                        )}
                        {movie.genre_ids && genres ? (
                            <Tags>
                                {movie.genre_ids.map((genre_id) => (
                                    <Tag key={genre_id}>
                                        {genres.find((genre) => genre.id === genre_id).name}
                                    </Tag>
                                ))}
                            </Tags>
                        ) : (
                            ""
                        )}
                        {movie.vote_average && (
                            <Rating>
                                <Star />
                                <Rate>{movie.vote_average.toFixed(2)}</Rate>
                                {movie.vote_count && (
                                    <GreyText>{`${movie.vote_count} votes`}</GreyText>
                                )}
                            </Rating>
                        )}
                    </Content>
                </Tile>
            </MovieLink>
        ))}
    </Tiles>
);

export default MovieTiles;