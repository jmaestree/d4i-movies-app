# D4i movies app

In this project-based React we will practice:

1. React components lifecycle
2. ESLint (configuration and rules)
3. React-Redux (configuration and lifecycle)
4. Typescript (configuration and refator from js)

## Introduction

We have an initial structure of an app that should show the movies to the user. We have dependencies between the 3 lists. The dependencies are as follows:

1. Year
2. Genres
3. Movies

## Tasks

We should implement the next functionalities:

1. When user enter to the app, show the list of available Years to filter
2. When user selects a Year, show the Genres for this year
3. When user selects a Genre, show the movies for the selected Year and Genre
4. When user selects a Movie, show the detail for this movie

The user can click in "Clear button" and all the filters has to be cleared. 
When user changes a selection, the dependent options should be cleared, for example: *If user change the "year", the "genre" and "movie" selected should be cleared".  

We have to replicate the next layout:

![Layout](https://github.com/maestre19/d4i-movies-app/blob/master/LayoutMoviesApp.jpg "Layout")

### Endpoints

When you run the command "yarn run server" you publish a "typecode/json-server" API in your http://localhost:3000.
You can find documentation for this tool in the URL: https://github.com/typicode/json-server

To get all the needed data for this project, you can use this API tool.
For example, you can GET all the Genres in the next URL:
```
http://localhost:3000/genres
```
And get the genre with id 28 with the next URL:
```
http://localhost:3000/genres?id=28
```
*For more examples, see the json-server documentation.*

**NOTES:**

In this app, we only have to recover the initial lists (movies, genres and years) and filter this in each component with lodash plugin (https://lodash.com).

In "movie" model, we have a field named "poster_path" to show poster image to user. To load image correctly, you've to concatenate this field with the next "base url":

```https://image.tmdb.org/t/p/POSTER_PATH_FIELD```

## Initialize the project

### Environment

The project needs an environment file. Create a `.env` file in the root folder of the project.

```
// .env
ANALYZER=false
BUILD_PATH=./dist
```

The `BUILD_PATH` variable it's necessary to work correctly.
This variable indicates the directory of build files.

The `ANALYZER` variable indicates if is necessary observe the bundle for analyze the size of plugins and code.
This variable is optional.

### Install the project dependencies
```
> yarn install
```

### Run server

You can run the app (front + back) with the next instruction:

```
> yarn run start
```

You can run the backend API with the next instruction:
```
> yarn run server
```

Optionaly, you can build the project and output files with the above instructions, having the option to add the watch instruction.

```
> yarn run dev:watch
> yarn run pro:watch
> yarn run test:watch
```
### Build files

Optionaly, you can build the project and output files with the above instructions, having the option to add the watch instruction.

```
> yarn run dev:watch
> yarn run pro:watch
> yarn run test:watch
```

You can also execute a very special instruction 💥😆 

```
> yarn run build-gates
```

### Unit testing
For pass the unit testing.

```
> yarn run test
```

If you need the coverage for the unit testing.
```
> yarn run test:coverage
```
