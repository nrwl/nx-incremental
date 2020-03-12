# Incremental Example

This project has one application and three libraries. If you run `nx dep-graph`, you will see the following:

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx-incremental/master/dep-graph.png"></p>

Run `nx serve ngapp`, and you will see the application built out of libraries and then served. Open `http://localhost:4200` to see the changes.

Make a change to, say, `lib2.module.ts`. You will see that lib2 will be recompiled and the app will be rebundled. But lib1 and lib3 won't be.

Run `nx test ngapp --with-deps` to run all the tests.

If you don't want to rerun everything but instead want to focus on one lib, run: `nx build lib2 --with-deps`

# Trade Offs

1. This repo uses ngpackagr, which isn't the most efficient way to compile libs. It bundles things in different formats. A much faster way to do it should land soon.
2. We aren't using webpack dev server here. It's possible to set it up, but it makes things more complex.
