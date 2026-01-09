# Portfolio Website

## About

This repository contains various versions of my portfolio site written with different tech stacks. I built them as experiment to calculate the bundle size when using specific technologies. **React + Astro** version of portfolio will contain the latest changes in my portfolio.

## Benchmarks

Here's list of bundle sizes across all portfolio sites:

| Tech Stack     | Size    | Sent\*  |
| -------------- | ------- | ------- |
| React          | ~410 kB | ~190 kB |
| React + Astro  | ~500 kB | ~210 kB |
| Svelte         | ~260 kB | ~100 kB |
| Svelte + Astro | ~350 kB | ~130 kB |
| Astro (HTML)   | ~130 kB | ~40 kB  |

_\*sent: actually sent to the client_

And the list of loading speeds with disabled cache and 2G/GPRS

| Tech Stack     | 2G    | GPRS   |
| -------------- | ----- | ------ |
| React          | ~6.3s | ~30.4s |
| React + Astro  | ~6.7s | ~32.9s |
| Svelte         | ~3.9s | ~16.7s |
| Svelte + Astro | ~3.9s | ~19.8s |
| Astro (HTML)   | ~1.4s | ~6.7s  |

## Website Links

### [React + Astro](https://portfolio-website-ten-pi-55.vercel.app/)

**React + Astro** will remain the only maintained and deployed portfolio.
