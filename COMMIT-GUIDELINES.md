# Commit Message Guidelines

## Commit Format

```
<header>
<BLANK LINE>
<body>
```

### Header

Mandatory, and should follow this rule :

```
<type>: <short summary>
```

Type can be one of these :

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- refactor: A code change that neither fixes a bug nor adds a feature

Summary should be written in present tense

### Body

Just like summary, write in present tense, and explain the change you did in the commit

## Example

```
feat: add new button to the home page
```

```
fix: join button not emitting event properly

somehow the event emmiter is registering incorrect element, this fix that
```

```
docs: update README.md
```

```
build: change static file build configuration

sveltekit now will build static .html files instead of dynamic routing
```
Or if your commit has multiple feature, put the most important detail at the header, then the other one in body
```
feat: add login button

fix: home page scroll
docs: add credits
```

> Taken from https://github.com/angular/angular/blob/main/CONTRIBUTING.md
