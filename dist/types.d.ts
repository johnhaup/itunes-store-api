export declare type PlainObject<T = unknown> = Record<string, T>;
export interface Options {
    /**
     * A two-letter country code where the queried store catalog will be from.
     */
    country: Country;
}
export interface SearchOptions<M extends Media, E extends Entities[M] = never> extends Options {
    /**
     * Which attribute to search for, relative to the specified media type.
     */
    attribute: Attributes[M];
    /**
     * The type of results returned, relative to the specified media type.
     */
    entity: E;
    /**
     * Whether to include explicit content.
     */
    explicit: boolean;
    /**
     * Limit the number of results.
     */
    limit: number;
    /**
     * The media type to search for.
     */
    media: M;
    /**
     * Whether to sort results by popularity or recentness.
     */
    sort: Sort;
}
export interface SearchResponse<M extends Media, E extends Entities[M] = never> {
    /**
     * The number of results.
     */
    resultCount: number;
    /**
     * An array of results.
     */
    results: (E extends undefined ? Results[Entities[M]] : Results[E])[];
}
export interface LookupResponse {
    /**
     * The number of results.
     */
    resultCount: 0 | 1;
    /**
     * An array of results.
     */
    results: [] | [Results[keyof Results]];
}
export interface ParseOptions {
    /**
     * The parsed catalog's country code.
     */
    country: Country;
    /**
     * The parsed ID.
     */
    id: number;
}
export interface UrlMatch {
    /**
     * The matched catalog's country code.
     */
    country: Country;
    /**
     * The matched result type.
     */
    entity: "album" | "app" | "artist" | "audiobook" | "author" | "book" | "music-video" | "podcast";
    /**
     * The matched media type.
     */
    media: "apps" | "books" | "music" | "podcasts";
}
export interface Match {
    /**
     * The matched ID.
     */
    id: string;
}
export interface AlbumMatch {
    /**
     * The matched album ID.
     */
    id: string;
    /**
     * A specific track ID from the matched album.
     */
    trackId?: string;
}
export declare type Sort = "popular" | "recent";
export declare type Lookup = "amgAlbumId" | "amgArtistId" | "amgVideoId" | "id" | "isbn" | "upc";
export declare type Media = "all" | "audiobook" | "ebook" | "movie" | "music" | "musicVideo" | "podcast" | "shortFilm" | "software" | "tvShow";
declare type Explicitness = "cleaned" | "explicit" | "notExplicit";
declare type Country = "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "an" | "ao" | "aq" | "ar" | "as" | "at" | "au" | "aw" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bm" | "bn" | "bn" | "bo" | "bo" | "br" | "bs" | "bt" | "bv" | "bw" | "by" | "bz" | "ca" | "cc" | "cd" | "cf" | "cg" | "ch" | "ci" | "ci" | "ck" | "cl" | "cm" | "cn" | "co" | "cr" | "cu" | "cv" | "cx" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "eh" | "er" | "es" | "et" | "fi" | "fj" | "fk" | "fm" | "fo" | "fr" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gi" | "gl" | "gm" | "gn" | "gp" | "gq" | "gr" | "gs" | "gt" | "gu" | "gw" | "gy" | "hk" | "hm" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "io" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "ki" | "km" | "kn" | "kp" | "kr" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "li" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ly" | "ma" | "mc" | "md" | "me" | "mg" | "mh" | "mk" | "ml" | "mm" | "mm" | "mn" | "mo" | "mp" | "mq" | "mr" | "ms" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "nf" | "ng" | "ni" | "nl" | "no" | "np" | "nr" | "nu" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pm" | "pn" | "pr" | "ps" | "pt" | "pw" | "py" | "qa" | "re" | "ro" | "rs" | "ru" | "ru" | "rw" | "sa" | "sb" | "sc" | "sd" | "se" | "sg" | "sh" | "si" | "sj" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sy" | "sz" | "tc" | "td" | "tf" | "tg" | "th" | "tj" | "tk" | "tl" | "tm" | "tn" | "to" | "tr" | "tt" | "tv" | "tw" | "tw" | "tz" | "ua" | "ug" | "um" | "us" | "uy" | "uz" | "va" | "vc" | "vc" | "vc" | "ve" | "ve" | "vg" | "vi" | "vn" | "vn" | "vu" | "wf" | "ws" | "ye" | "yt" | "za" | "zm" | "zw";
export interface Entities {
    all: EntityAll;
    audiobook: EntityAudiobook;
    ebook: EntityEbook;
    movie: EntityMovie;
    music: EntityMusic;
    musicVideo: EntityMusicVideo;
    podcast: EntityPodcast;
    shortFilm: EntityShortFilm;
    software: EntitySoftware;
    tvShow: EntityTvShow;
}
export interface Attributes {
    all: AttributeAll;
    audiobook: AttributeAudiobook;
    ebook: never;
    movie: AttributeMovie;
    music: AttributeMusic;
    musicVideo: AttributeMusicVideo;
    podcast: AttributePodcast;
    shortFilm: AttributeShortFilm;
    software: AttributeSoftware;
    tvShow: AttributeTvShow;
}
export interface Results {
    album: ResultAlbum;
    allArtist: ResultMovieArtist | ResultMusicArtist | ResultPodcastArtist;
    allTrack: ResultMovie | ResultMusicTrack | ResultMusicVideo | ResultPodcast | ResultTvEpisode;
    audiobook: ResultAudiobook;
    audiobookAuthor: never;
    ebook: ResultEbook;
    iPadSoftware: ResultUniversalSoftware;
    macSoftware: ResultMacSoftware | ResultUniversalSoftware;
    mix: never;
    movie: ResultMovie;
    movieArtist: ResultMovieArtist;
    musicArtist: ResultMusicArtist;
    musicTrack: ResultMusicTrack;
    musicVideo: ResultMusicVideo;
    podcast: ResultPodcast;
    podcastAuthor: ResultPodcastArtist;
    shortFilm: never;
    shortFilmArtist: never;
    software: ResultUniversalSoftware;
    song: ResultMusicTrack;
    tvEpisode: ResultTvEpisode;
    tvSeason: ResultTvSeason;
    tvSoftware: ResultUniversalSoftware;
}
export declare type EntityAll = EntityAudiobook | EntityEbook | EntityMovie | EntityMusic | EntityMusicVideo | EntityPodcast | EntityShortFilm | EntitySoftware | EntityTvShow | "allArtist" | "allTrack";
export declare type EntityAudiobook = "audiobook" | "audiobookAuthor";
export declare type EntityEbook = "ebook";
export declare type EntityMovie = "movie" | "movieArtist";
export declare type EntityMusic = "album" | "mix" | "musicArtist" | "musicTrack" | "musicVideo" | "song";
export declare type EntityMusicVideo = "musicArtist" | "musicVideo";
export declare type EntityPodcast = "podcast" | "podcastAuthor";
export declare type EntityShortFilm = "shortFilm" | "shortFilmArtist";
export declare type EntitySoftware = "iPadSoftware" | "macSoftware" | "software" | "tvSoftware";
export declare type EntityTvShow = "tvEpisode" | "tvSeason";
export declare type AttributeAll = "actorTerm" | "albumTerm" | "allArtistTerm" | "allTrackTerm" | "artistTerm" | "authorTerm" | "composerTerm" | "descriptionTerm" | "directorTerm" | "featureFilmTerm" | "genreIndex" | "keywordsTerm" | "languageTerm" | "mixTerm" | "movieArtistTerm" | "movieTerm" | "producerTerm" | "ratingIndex" | "ratingTerm" | "releaseYearTerm" | "shortFilmTerm" | "showTerm" | "songTerm" | "titleTerm" | "tvEpisodeTerm" | "tvSeasonTerm";
export declare type AttributeAudiobook = "authorTerm" | "genreIndex" | "ratingIndex" | "titleTerm";
export declare type AttributeMovie = "actorTerm" | "artistTerm" | "descriptionTerm" | "directorTerm" | "featureFilmTerm" | "genreIndex" | "movieArtistTerm" | "movieTerm" | "producerTerm" | "ratingIndex" | "ratingTerm" | "releaseYearTerm" | "shortFilmTerm";
export declare type AttributeMusic = "albumTerm" | "artistTerm" | "composerTerm" | "genreIndex" | "mixTerm" | "ratingIndex" | "songTerm";
export declare type AttributeMusicVideo = "albumTerm" | "artistTerm" | "genreIndex" | "ratingIndex" | "songTerm";
export declare type AttributePodcast = "artistTerm" | "authorTerm" | "descriptionTerm" | "genreIndex" | "keywordsTerm" | "languageTerm" | "ratingIndex" | "titleTerm";
export declare type AttributeShortFilm = "artistTerm" | "descriptionTerm" | "genreIndex" | "ratingIndex" | "shortFilmTerm";
export declare type AttributeSoftware = "softwareDeveloper";
export declare type AttributeTvShow = "descriptionTerm" | "genreIndex" | "ratingIndex" | "showTerm" | "tvEpisodeTerm" | "tvSeasonTerm";
export interface Result {
    artistId: number;
    artistName: string;
}
export interface ResultArtist extends Result {
    artistLinkUrl: string;
    primaryGenreId?: number;
    primaryGenreName?: string;
    wrapperType: "artist";
}
export interface ResultMovieArtist extends ResultArtist {
    artistType: "Artist" | "Author";
}
export interface ResultMusicArtist extends ResultArtist {
    amgArtistId: number;
    artistType: "Artist" | "Author";
}
export interface ResultPodcastArtist extends ResultArtist {
    artistType: "Podcast Artist";
}
export interface ResultAudiobook extends Result {
    artistViewUrl: string;
    artworkUrl100: string;
    artworkUrl60: string;
    collectionCensoredName: string;
    collectionExplicitness: Explicitness;
    collectionId: number;
    collectionName: string;
    collectionPrice: number;
    collectionViewUrl: string;
    copyright?: string;
    country: string;
    currency: string;
    description: string;
    previewUrl: string;
    primaryGenreName: string;
    releaseDate: string;
    trackCount: number;
    wrapperType: string;
}
export interface ResultSoftware extends Result {
    artistViewUrl: string;
    artworkUrl100: string;
    artworkUrl512: string;
    artworkUrl60: string;
    averageUserRating: number;
    averageUserRatingForCurrentVersion: number;
    bundleId: string;
    contentAdvisoryRating: string;
    currency: string;
    currentVersionReleaseDate: string;
    description: string;
    fileSizeBytes: string;
    formattedPrice: string;
    genreIds: string[];
    genres: string[];
    isVppDeviceBasedLicensingEnabled: boolean;
    languageCodesISO2A: string[];
    minimumOsVersion: string;
    price: number;
    primaryGenreId: number;
    primaryGenreName: string;
    releaseDate: string;
    releaseNotes: string;
    screenshotUrls: string[];
    sellerName: string;
    sellerUrl?: string;
    trackCensoredName: string;
    trackContentRating: string;
    trackId: number;
    trackName: string;
    trackViewUrl: string;
    userRatingCount: number;
    userRatingCountForCurrentVersion: number;
    version: string;
    wrapperType: "software";
}
export interface ResultUniversalSoftware extends ResultSoftware {
    advisories: string[];
    appletvScreenshotUrls: string[];
    features: string[];
    ipadScreenshotUrls: string[];
    isGameCenterEnabled: boolean;
    kind: "software";
    supportedDevices: string[];
}
export interface ResultMacSoftware extends ResultSoftware {
    kind: "mac-software";
}
export interface ResultEbook extends Result {
    artistIds: number[];
    artistViewUrl: string;
    artworkUrl100: string;
    artworkUrl60: string;
    averageUserRating: number;
    currency: string;
    description: string;
    fileSizeBytes: number;
    formattedPrice: string;
    genreIds: string[];
    genres: string[];
    kind: "ebook";
    price: number;
    releaseDate: string;
    trackCensoredName: string;
    trackId: number;
    trackName: string;
    trackViewUrl: string;
    userRatingCount: number;
}
export interface ResultCollection extends Result {
    artistViewUrl: string;
    artworkUrl100: string;
    artworkUrl60: string;
    collectionCensoredName: string;
    collectionExplicitness: Explicitness;
    collectionId: number;
    collectionName: string;
    collectionPrice: number;
    collectionViewUrl: string;
    copyright?: string;
    country: string;
    currency: string;
    primaryGenreName: string;
    releaseDate: string;
    trackCount: number;
    wrapperType: "collection";
}
export interface ResultAlbum extends ResultCollection {
    amgArtistId: number;
    collectionType: "Album";
}
export interface ResultTvSeason extends ResultCollection {
    collectionHdPrice?: number;
    collectionType: "TV Season";
    contentAdvisoryRating: string;
    longDescription: string;
}
export interface ResultTrack extends Result {
    artistViewUrl: string;
    artworkUrl100: string;
    artworkUrl30: string;
    artworkUrl60: string;
    collectionCensoredName: string;
    collectionExplicitness: Explicitness;
    collectionId: number;
    collectionName: string;
    collectionPrice: number;
    collectionViewUrl: string;
    country: string;
    currency: string;
    primaryGenreName: string;
    releaseDate: string;
    trackCensoredName: string;
    trackCount: number;
    trackExplicitness: Explicitness;
    trackId: number;
    trackName: string;
    trackPrice: number;
    trackViewUrl: string;
    wrapperType: "track";
}
export interface ResultMusicVideo extends ResultTrack {
    discCount: number;
    discNumber: number;
    kind: "music-video";
    previewUrl: string;
    trackNumber: number;
    trackTimeMillis: number;
}
export interface ResultPodcast extends ResultTrack {
    artworkUrl600: string;
    collectionHdPrice?: number;
    contentAdvisoryRating: string;
    feedUrl: string;
    genreIds: string[];
    genres: string[];
    kind: "podcast";
    trackHdPrice?: number;
    trackHdRentalPrice?: number;
    trackRentalPrice: number;
}
export interface ResultMusicTrack extends ResultTrack {
    discCount: number;
    discNumber: number;
    isStreamable: boolean;
    kind: "song";
    previewUrl: string;
    trackNumber: number;
    trackTimeMillis: number;
}
export interface ResultTvEpisode extends ResultTrack {
    collectionHdPrice?: number;
    contentAdvisoryRating: string;
    discCount: number;
    discNumber: number;
    kind: "tv-episode";
    longDescription: string;
    previewUrl: string;
    shortDescription: string;
    trackHdPrice?: number;
    trackNumber: number;
    trackTimeMillis: number;
}
export interface ResultMovie extends Omit<ResultTrack, "artistId" | "collectionCensoredName" | "collectionId" | "collectionName" | "collectionViewUrl" | "trackCensoredName" | "trackCount"> {
    collectionHdPrice: number;
    contentAdvisoryRating: string;
    hasITunesExtras: boolean;
    kind: "feature-movie";
    longDescription: string;
    previewUrl: string;
    shortDescription: string;
    trackCensoredName: string;
    trackHdPrice?: number;
    trackHdRentalPrice?: number;
    trackRentalPrice: number;
    trackTimeMillis: number;
}
export {};
