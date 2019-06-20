# D4i movies app

In this project-based React we will practice:

1. React lifecycle
2. ESLint
- Configuration
- Rules
3. React-Redux
- Configuration
- Lyfecicle
4. Typescript
- Configuration
- Transformation
  

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

We have to replicate the next layoute:

![Layout](https://github.com/maestre19/d4i-movies-app/blob/master/LayoutMoviesApp.jpg "Layout")
  
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

You can run the server in different mode with the next instruction:

```
> yarn run start
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
