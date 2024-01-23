# kusogaki-web

This is the home of Kusogaki Crew. The second one. First concept is in [here](https://github.com/Plyrs1/kusogaki-web).

## Developing

Using Node.js v20.10.0 and pnpm 8.7.4

```bash
# install packages
pnpm i

# start dev server
pnpm dev

# check code formatting
pnpm lint

# before sending pull request, format your code using
pnpm format
# you'll not be able to commit your change if it's not
# formatted yet
```

## Building

To generate static files :

```bash
pnpm build
```

The motivation behind this is to learn frontend dev, also CI/CD in Github. If you want to help me fix my spaghetti code, please kindly send PR!

## Important Note

Due to the fact that SvelteKit works on root level, before building this project please define `BASE_PATH` first, if you plan to put generated files
inside any other path than root. Example :

- If the website path is `https://somesite.co/somepath`, then set `BASE_PATH='/somepath'`
- If the path is `https://somesite.co/somepath/anotherpath`, then set `BASE_PATH='/somepath/anotherpath'`
- Or if you use root path, `https://somesite.co`, you don't have to set any env
